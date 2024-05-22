const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('game-container').appendChild(renderer.domElement);

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

const characters = Object.keys(flashcards);
let flyingChars = [];

const createFlyingChar = () => {
    const char = characters[Math.floor(Math.random() * characters.length)];
    const charGeometry = new THREE.TextGeometry(char, { 
        font: new THREE.FontLoader().parse(yourFontJson), // Replace with your font JSON data
        size: 1, 
        height: 0.1 
    });
    const charMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const charMesh = new THREE.Mesh(charGeometry, charMaterial);
    charMesh.position.set((Math.random() - 0.5) * 10, 5, (Math.random() - 0.5) * 10);
    scene.add(charMesh);
    flyingChars.push({ mesh: charMesh, char: char });
};

for (let i = 0; i < 10; i++) {
    createFlyingChar();
}

let score = 0;
const speed = 0.1;
const keys = {};

document.addEventListener('keydown', (event) => {
    keys[event.code] = true;
});

document.addEventListener('keyup', (event) => {
    keys[event.code] = false;
});

const shoot = () => {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
    const intersects = raycaster.intersectObjects(flyingChars.map(fc => fc.mesh));
    if (intersects.length > 0) {
        const intersected = intersects[0].object;
        scene.remove(intersected);
        flyingChars = flyingChars.filter(fc => fc.mesh !== intersected);
        score++;
        console.log('Score:', score);
        createFlyingChar();
    }
};

document.addEventListener('click', shoot);

const animate = () => {
    requestAnimationFrame(animate);

    if (keys['ArrowUp']) starFighter.position.y += speed;
    if (keys['ArrowDown']) starFighter.position.y -= speed;
    if (keys['ArrowLeft']) starFighter.position.x -= speed;
    if (keys['ArrowRight']) starFighter.position.x += speed;

    flyingChars.forEach(fc => {
        fc.mesh.position.y -= 0.05;
        if (fc.mesh.position.y < -5) {
            scene.remove(fc.mesh);
            flyingChars = flyingChars.filter(f => f !== fc);
            createFlyingChar();
        }
    });

    renderer.render(scene, camera);
};