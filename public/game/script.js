const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('game-container').appendChild(renderer.domElement);

// Load the star fighter model
const loader = new THREE.GLTFLoader();
let starFighter;

loader.load('../models/spaceship/scene.gltf', (gltf) => {
    starFighter = gltf.scene;
    starFighter.scale.set(0.5, 0.5, 0.5);
    starFighter.position.z = -5;
    scene.add(starFighter);
    animate();
});

camera.position.z = 5;

// Load the Chinese font JSON
const fontLoader = new THREE.FontLoader();
fontLoader.load('/game/chinese-font.json', (font) => {
    let flashcard;
    let flyingChars = [];
    let highlightedChars = new Set();
    let flashcardElement;
    let tryAgainPopup;

    // Select a random flashcard and display it at the bottom
    const selectFlashcard = () => {
        if (flashcardElement) {
            document.body.removeChild(flashcardElement);
        }
        flashcard = flashcards[Math.floor(Math.random() * flashcards.length)];
        const key = Object.keys(flashcard)[0];
        const details = flashcard[key];
        const flashcardText = `${key} (${details.pinyin}): ${details.translation}`;
        
        flashcardElement = document.createElement('div');
        flashcardElement.style.position = 'absolute';
        flashcardElement.style.bottom = '20px';
        flashcardElement.style.width = '100%';
        flashcardElement.style.textAlign = 'center';
        flashcardElement.style.color = '#ffaa00';
        flashcardElement.style.fontFamily = 'Noto Serif SC, sans-serif';
        flashcardElement.style.fontSize = '24px';
        flashcardElement.innerText = flashcardText;

        document.body.appendChild(flashcardElement);

        // Spawn characters
        spawnCharacters(key);
    };

    // Spawn characters from the flashcard sentence
    const spawnCharacters = (key) => {
        const sentenceChars = key.split('');
        sentenceChars.forEach((char) => {
            const charGeometry = new THREE.TextGeometry(char, {
                font: font,
                size: 0.5,
                height: 0.1
            });
            const charMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const charMesh = new THREE.Mesh(charGeometry, charMaterial);
            charMesh.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, -20); // Start from the vanishing point
            scene.add(charMesh);
            flyingChars.push({ mesh: charMesh, char: char });
        });
    };

    const resetGame = () => {
        flyingChars.forEach(fc => {
            scene.remove(fc.mesh);
        });
        flyingChars = [];
        highlightedChars.clear();
        if (tryAgainPopup) {
            document.body.removeChild(tryAgainPopup);
            tryAgainPopup = null;
        }
        selectFlashcard();
    };

    const showTryAgainPopup = () => {
        if (tryAgainPopup) return;

        tryAgainPopup = document.createElement('div');
        tryAgainPopup.style.position = 'absolute';
        tryAgainPopup.style.top = '50%';
        tryAgainPopup.style.left = '50%';
        tryAgainPopup.style.transform = 'translate(-50%, -50%)';
        tryAgainPopup.style.backgroundColor = '#000';
        tryAgainPopup.style.color = '#fff';
        tryAgainPopup.style.padding = '20px';
        tryAgainPopup.style.border = '2px solid #ffaa00';
        tryAgainPopup.style.fontFamily = 'Noto Serif SC, sans-serif';
        tryAgainPopup.innerHTML = '<p>Try again!</p><button id="retry-btn">Retry</button>';
        document.body.appendChild(tryAgainPopup);

        document.getElementById('retry-btn').addEventListener('click', resetGame);
    };

    selectFlashcard(); // Select and display a random flashcard

    let score = 0;
    const shipSpeed = 0.2; // Speed for the ship
    const wordSpeed = 0.005; // Slower speed for words
    const keys = {};

    document.addEventListener('keydown', (event) => {
        keys[event.code] = true;
        if (event.code === 'Space') {
            shoot();
        }
    });

    document.addEventListener('keyup', (event) => {
        keys[event.code] = false;
    });

    // Add crosshairs
    const crosshair = document.createElement('div');
    crosshair.style.position = 'absolute';
    crosshair.style.width = '20px';
    crosshair.style.height = '20px';
    crosshair.style.border = '1px solid #00ff00';
    document.body.appendChild(crosshair);

    const updateCrosshairPosition = () => {
        const vector = new THREE.Vector3(starFighter.position.x, starFighter.position.y, starFighter.position.z).project(camera);
        crosshair.style.left = `${(vector.x * 0.5 + 0.5) * window.innerWidth - 10}px`;
        crosshair.style.top = `${(-vector.y * 0.5 + 0.5) * window.innerHeight - 10}px`;
    };

    const shoot = () => {
        const laserGeometry = new THREE.BoxGeometry(0.1, 0.1, 5);
        const laserMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const laser = new THREE.Mesh(laserGeometry, laserMaterial);
        laser.position.set(starFighter.position.x, starFighter.position.y, starFighter.position.z);
        scene.add(laser);

        const laserSpeed = 1;
        const laserInterval = setInterval(() => {
            laser.position.z -= laserSpeed;
            if (laser.position.z < -10) {
                scene.remove(laser);
                clearInterval(laserInterval);
            } else {
                const raycaster = new THREE.Raycaster(new THREE.Vector3(starFighter.position.x, starFighter.position.y, starFighter.position.z), new THREE.Vector3(0, 0, -1));
                const intersects = raycaster.intersectObjects(flyingChars.map(fc => fc.mesh));
                if (intersects.length > 0) {
                    const intersected = intersects[0].object;
                    scene.remove(intersected);
                    flyingChars = flyingChars.filter(fc => fc.mesh !== intersected);
                    score++;
                    console.log('Score:', score);

                    // Highlight the character in the flashcard
                    highlightedChars.add(intersected.char);
                    intersected.material.color.set(0x00ff00); // Set color to green

                    // Check if all characters from the flashcard are highlighted
                    const key = Object.keys(flashcard)[0];
                    const chineseChars = new Set(key.split(''));
                    if ([...chineseChars].every(char => highlightedChars.has(char))) {
                        console.log('All characters highlighted! Points awarded.');
                        resetGame();
                    }
                }
            }
        }, 50);
    };

    const animate = () => {
        requestAnimationFrame(animate);

        if (keys['ArrowUp']) starFighter.position.y += shipSpeed;
        if (keys['ArrowDown']) starFighter.position.y -= shipSpeed;
        if (keys['ArrowLeft']) starFighter.position.x -= shipSpeed;
        if (keys['ArrowRight']) starFighter.position.x += shipSpeed;

        starFighter.position.clamp(
            new THREE.Vector3(-10, -10, -5),
            new THREE.Vector3(10, 10, -5)
        );

        updateCrosshairPosition();

        flyingChars.forEach(fc => {
            fc.mesh.position.z += wordSpeed; // Move towards the camera slowly
            fc.mesh.scale.setScalar((fc.mesh.position.z + 20) / 10); // Scale characters based on their z position
            if (fc.mesh.position.z > 5) {
                scene.remove(fc.mesh);
                flyingChars = flyingChars.filter(f => f !== fc);
                // If character is missed, show "try again" popup
                showTryAgainPopup();
            }
        });

        renderer.render(scene, camera);
    };

    animate();
});
