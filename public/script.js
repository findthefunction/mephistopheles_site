document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    const terminalInput = document.getElementById("terminal-input");
    const output = document.querySelector(".output");
    const intro = document.querySelector(".intro");

    const asciiArt = `
     _______  __   __  _______  __    _  _______  _______ 
    |       ||  | |  ||       ||  |  | ||       ||       |
    |   _   ||  |_|  ||    ___||   |_| ||    ___||_     _|
    |  | |  ||       ||   |___ |       ||   |___   |   |  
    |  |_|  ||       ||    ___||  _    ||    ___|  |   |  
    |       ||   _   ||   |___ | | |   ||   |___   |   |  
    |_______||__| |__||_______||_|  |__||_______|  |___|  
                                                         
    `;
    
    const introMessage = `
Welcome to my Linux terminal style portfolio site!
    `;

    const typeMessage = (message, container, delay = 50) => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < message.length) {
                container.innerHTML += message[index++];
            } else {
                clearInterval(interval);
            }
        }, delay);
    };

    // Display ASCII art and intro message with typing animation
    typeMessage(asciiArt, intro, 20);
    setTimeout(() => {
        typeMessage(introMessage, intro, 50);
    }, asciiArt.length * 20);

    terminalInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const command = terminalInput.value;
            terminalInput.value = "";

            // Display the command
            appendOutput(`user@portfolio:~$ ${command}`, 'command');

            // Handle commands
            handleCommand(command);
        }
    });

    const appendOutput = (text, type, value) => {
        const newLine = document.createElement("div");
        newLine.className = type;
        if (type === 'boolean') {
            newLine.textContent = `${text}: ${value ? 'true' : 'false'}`;
            newLine.style.color = value ? 'limegreen' : 'red';
        } else {
            newLine.textContent = text;
        }
        output.appendChild(newLine);
        output.scrollTop = output.scrollHeight;
    };

    const handleCommand = (command) => {
        switch (command.toLowerCase()) {
            case "help":
                appendOutput("Available commands: help, about, contact, clear, userdata, run-python", 'response');
                break;
            case "about":
                appendOutput("This is a Linux terminal style portfolio website.", 'response');
                break;
            case "contact":
                appendOutput("Contact me at: example@example.com", 'response');
                break;
            case "clear":
                output.innerHTML = "";
                break;
            case "userdata":
                fetchUserData();
                break;
            case "run-python":
                runPythonScript();
                break;
            default:
                appendOutput(`Command not found: ${command}`, 'error');
        }
    };

    const fetchUserData = () => {
        fetch("/api/userdata")
            .then(response => response.json())
            .then(data => {
                appendOutput(`IP Address: ${data.ip}`, 'response');
                appendOutput(`Browser: ${data.browser}`, 'response');
                appendOutput(`Version: ${data.version}`, 'response');
                appendOutput(`OS: ${data.os}`, 'response');
                appendOutput(`Platform: ${data.platform}`, 'response');
                appendOutput('Mobile', 'boolean', data.isMobile);
                appendOutput('iPhone', 'boolean', data.isiPhone);
                appendOutput('Android', 'boolean', data.isAndroid);
                appendOutput('Desktop', 'boolean', data.isDesktop);
                appendOutput('Windows', 'boolean', data.isWindows);
                appendOutput('Mac', 'boolean', data.isMac);
                appendOutput('Linux', 'boolean', data.isLinux);
                appendOutput(`Source: ${data.source}`, 'response');
                appendOutput(`Country: ${data.geo.country}`, 'response');
                appendOutput(`Region: ${data.geo.region}`, 'response');
                appendOutput(`City: ${data.geo.city}`, 'response');
                appendOutput(`Latitude: ${data.geo.latitude}`, 'response');
                appendOutput(`Longitude: ${data.geo.longitude}`, 'response');
            })
            .catch(error => appendOutput("Error fetching user data", 'error'));
    };

    const runPythonScript = () => {
        fetch("/api/run-python")
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    appendOutput(`Error: ${data.error}`, 'error');
                    if (data.details) {
                        appendOutput(`Details: ${data.details}`, 'error');
                    }
                } else {
                    appendOutput(`Python Output: ${data.output}`, 'response');
                }
            })
            .catch(error => appendOutput("Error running Python script", 'error'));
    };

    // Three.js animated model
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threejs-logo').appendChild(renderer.domElement);

    const gltfLoader = new THREE.GLTFLoader();

    gltfLoader.load('/models/scene.gltf', (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        // Scale the model
        model.scale.set(2, 2, 2);

        // Initial rotation for better visibility
        model.rotation.x = Math.PI / 5;
        model.rotation.y = Math.PI / 5;
        animate();
    }, undefined, (error) => {
        console.error(error);
    });

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffaa00, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xffaa00, 1);
    directionalLight.position.set(-5, -5, -5);
    scene.add(directionalLight);

    camera.position.z = 5; // Move the camera closer to make the model appear larger

    // Animation function
    const animate = () => {
        requestAnimationFrame(animate);

        // Slow down the rotation
        scene.rotation.y += 0.005;

        // Add a pulsing effect to the point light
        const time = Date.now() * 0.005;
        pointLight.intensity = Math.sin(time) * 0.5 + 1.5;

        renderer.render(scene, camera);
    };

    animate();
});
