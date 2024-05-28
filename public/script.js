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
    TYPE 'HELP' FOR A LIST OF COMMANDS
    TYPE 'RUN-PYTHON' TO LEARN MANDARIN                                                       
                                                         
    `;

    const introMessage = `
You are now active on findthefunction.io, type help for a list of commands.    `;

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
    const asciiArtContainer = document.createElement('div');
    asciiArtContainer.className = 'ascii-art';
    asciiArtContainer.textContent = asciiArt;
    intro.appendChild(asciiArtContainer);

    // Adjust font size for ASCII art
    const adjustFontSize = () => {
        const containerWidth = asciiArtContainer.clientWidth;
        const charactersPerLine = asciiArt.split('\n')[0].length;
        const fontSize = Math.min(containerWidth / charactersPerLine, 24); // Max font size of 24px
        asciiArtContainer.style.fontSize = `${fontSize}px`;
        asciiArtContainer.style.lineHeight = `${fontSize * 1.2}px`; // Adjust line height
    };

    window.addEventListener('resize', adjustFontSize);
    adjustFontSize();

    typeMessage(introMessage, intro, 50);

    let awaitingConsent = false;

    terminalInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const command = terminalInput.value.trim();
            terminalInput.value = "";

            appendOutput(`user@portfolio:~$ ${command}`, 'command');

            if (awaitingConsent) {
                if (command.toLowerCase() === "yes") {
                    runVulnerabilityScan();
                    awaitingConsent = false;
                } else if (command.toLowerCase() === "no") {
                    appendOutput("Scan cancelled by user.", 'info');
                    awaitingConsent = false;
                } else {
                    appendOutput("Invalid response. Please type 'yes' to consent or 'no' to cancel.", 'info');
                }
            } else {
                setTimeout(() => handleCommand(command), 100);
            }
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
                appendOutput("Available commands: help, about, contact, clear, userdata, run-python, list-repos, cookies, headers, geo, fingerprint, scan", 'response');
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
            case "list-repos":
                listRepos();
                break;
            case "cookies":
                displayCookies();
                break;
            case "headers":
                displayHeaders();
                break;
            case "geo":
                displayGeolocation();
                break;
            case "fingerprint":
                displayFingerprint();
                break;
            case "scan":
                requestScanConsent();
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
            .catch(err => appendOutput("Error fetching user data", 'error'));
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
            .catch(err => appendOutput("Error running Python script", 'error'));
    };

    const listRepos = () => {
        fetch("/api/list-repos")
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    appendOutput(`Error: ${data.error}`, 'error');
                } else {
                    data.forEach(repo => {
                        appendOutput(repo.name, 'response');
                    });
                    appendOutput(`Total repositories: ${data.length}`, 'response');
                }
            })
            .catch(err => appendOutput("Error fetching repositories", 'error'));
    };

    const displayCookies = () => {
        const cookies = document.cookie.split(';').map(cookie => cookie.trim());

        if (cookies.length === 0 || cookies[0] === '') {
            appendOutput("No cookies found.", 'response');
        } else {
            cookies.forEach(cookie => {
                appendOutput(cookie, 'response');
            });
        }
    };

    const displayHeaders = () => {
        fetch("/api/headers")
            .then(response => response.json())
            .then(data => {
                Object.entries(data).forEach(([key, value]) => {
                    appendOutput(`${key}: ${value}`, 'response');
                });
            })
            .catch(err => appendOutput("Error fetching headers", 'error'));
    };

    const displayGeolocation = () => {
        fetch("/api/userdata")
            .then(response => response.json())
            .then(data => {
                if (data.geo) {
                    appendOutput(`Country: ${data.geo.country}`, 'response');
                    appendOutput(`Region: ${data.geo.region}`, 'response');
                    appendOutput(`City: ${data.geo.city}`, 'response');
                    appendOutput(`Latitude: ${data.geo.latitude}`, 'response');
                    appendOutput(`Longitude: ${data.geo.longitude}`, 'response');
                } else {
                    appendOutput("Geolocation data not available.", 'response');
                }
            })
            .catch(err => appendOutput("Error fetching geolocation", 'error'));
    };

    const displayFingerprint = () => {
        const fingerprint = {
            screen: {
                width: window.screen.width,
                height: window.screen.height,
                colorDepth: window.screen.colorDepth
            },
            navigator: {
                userAgent: navigator.userAgent,
                language: navigator.language,
                platform: navigator.platform,
                doNotTrack: navigator.doNotTrack
            },
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        appendOutput(JSON.stringify(fingerprint, null, 2), 'response');
    };

    const requestScanConsent = () => {
        appendOutput("Do you consent to perform a network vulnerability scan? This will check for open ports and potential vulnerabilities. Type 'yes' to consent or 'no' to cancel.", 'info');
        awaitingConsent = true;
    };

    
    const runVulnerabilityScan = () => {
    // Inform the user that the vulnerability scan is starting
    appendOutput("Initiating vulnerability scan... Please wait.", 'command');

    // Inform the user about the scan process
    appendOutput("Scanning network interfaces and open ports.", 'info');

    // Fetch the vulnerability scan results from the server endpoint
    fetch("/api/vulnerability-scan")
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            // Check if there's an error in the response
            if (data.error) {
                // Display the error message if there is an error
                appendOutput(`Scan error: ${data.error}`, 'error');
            } else {
                // Display the scan results
                appendOutput("Scan results:", 'info');
                // Loop through each result entry and display it
                Object.entries(data).forEach(([key, value]) => {
                    appendOutput(`${key}: ${JSON.stringify(value, null, 2)}`, 'response');
                });
                // Inform the user that the scan is complete
                appendOutput("Vulnerability scan complete.", 'info');
            }
        })
        .catch(err => {
            // Handle and display any errors that occur during the fetch operation
            appendOutput(`Error running vulnerability scan: ${err.message}`, 'error');
        });
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
    }, undefined, (err) => {
        console.error(err);
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

    camera.position.z = 4; // Move the camera closer to make the model appear larger

    // Animation function
    const animate = () => {
        requestAnimationFrame(animate);

        // Slow down the rotation
        scene.rotation.y += 0.001;

        // Add a pulsing effect to the point light
        const time = Date.now() * 0.005;
        pointLight.intensity = Math.sin(time) * 0.5 + 1.5;

        renderer.render(scene, camera);
    };

    animate();
});
