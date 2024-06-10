document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingDialogue = document.getElementById('loading-dialogue');

    const loadingMessages = [
        "Initializing system...\n",
        "Checking memory...\n",
        "Loading resources...\n",
        "Performing system checks...\n",
        "Verifying integrity...\n",
        "Always let a wookie win...\n",
        "Fetching user data...\n"
    ];

    const userDataMessages = [
        "Fetching geolocation...\n",
        "Fetching fingerprint...\n",
        "Fetching headers...\n"
    ];

    const typeLoadingMessage = (messages, index = 0, callback) => {
        if (index < messages.length) {
            loadingDialogue.innerHTML += messages[index];
            loadingDialogue.scrollTop = loadingDialogue.scrollHeight; // Auto-scroll
            setTimeout(() => typeLoadingMessage(messages, index + 1, callback), 1000);
        } else if (callback) {
            callback();
        }
    };

    const typeUserData = (data, delay = 500) => {
        const keys = Object.keys(data);
        let index = 0;

        const interval = setInterval(() => {
            if (index < keys.length) {
                const key = keys[index];
                loadingDialogue.innerHTML += `${key}: ${JSON.stringify(data[key], null, 2)}\n`;
                loadingDialogue.scrollTop = loadingDialogue.scrollHeight; // Auto-scroll
                index++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    typeLoadingMessage(userDataMessages, 0, () => {
                        setTimeout(() => {
                            loadingScreen.style.display = 'none';
                        }, 1000); // Increased wait time
                    });
                }, 1000); // Increased wait time
            }
        }, delay);
    };

    // Start loading messages
    typeLoadingMessage(loadingMessages, 0, () => {
        fetchUserData().then(data => {
            typeUserData(data);
        }).catch(err => {
            loadingDialogue.innerHTML += `Error fetching user data: ${err.message}\n`;
            loadingDialogue.scrollTop = loadingDialogue.scrollHeight; // Auto-scroll
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 1000); // Proceed even if there's an error
        });
    });

    

    const fetchUserData = async () => {
        try {
            const response = await fetch("/api/userdata");
            const data = await response.json();
            loadingDialogue.innerHTML += `IP Address: ${data.ip}\n`;
            loadingDialogue.innerHTML += `Browser: ${data.browser}\n`;
            loadingDialogue.innerHTML += `Version: ${data.version}\n`;
            loadingDialogue.innerHTML += `OS: ${data.os}\n`;
            loadingDialogue.innerHTML += `Platform: ${data.platform}\n`;
            loadingDialogue.innerHTML += `Source: ${data.source}\n`;
            if (data.geo) {
                loadingDialogue.innerHTML += `Geolocation: ${data.geo.city}, ${data.geo.region}, ${data.geo.country}\n`;
                loadingDialogue.innerHTML += `Latitude: ${data.geo.latitude}\n`;
                loadingDialogue.innerHTML += `Longitude: ${data.geo.longitude}\n`;
            }
            const response_1 = await fetch("/api/headers");
            const data_1 = await response_1.json();
            Object.entries(data_1).forEach(([key, value_1]) => {
                loadingDialogue.innerHTML += `${key}: ${value_1}\n`;
            });
            const response_2 = await fetch("/api/fingerprint");
            const data_2 = await response_2.json();
            loadingDialogue.innerHTML += `Screen Width: ${data_2.screen.width}\n`;
            loadingDialogue.innerHTML += `Screen Height: ${data_2.screen.height}\n`;
            loadingDialogue.innerHTML += `Color Depth: ${data_2.screen.colorDepth}\n`;
            loadingDialogue.innerHTML += `User Agent: ${data_2.navigator.userAgent}\n`;
            loadingDialogue.innerHTML += `Language: ${data_2.navigator.language}\n`;
            loadingDialogue.innerHTML += `Platform: ${data_2.navigator.platform}\n`;
            loadingDialogue.innerHTML += `Do Not Track: ${data_2.navigator.doNotTrack}\n`;
            loadingDialogue.innerHTML += `Timezone: ${data_2.timezone}\n`;
    
            // Fetch and display weather data
            const weatherResponse = await fetch("/api/weather");
            const weatherData = await weatherResponse.json();
            if (weatherData.error) {
                loadingDialogue.innerHTML += `Error fetching weather data: ${weatherData.error}\n`;
            } else {
                loadingDialogue.innerHTML += `Weather in ${weatherData.city}, ${weatherData.region}, ${weatherData.country}:\n`;
                loadingDialogue.innerHTML += `Temperature: ${weatherData.main.temp}°C\n`;
                loadingDialogue.innerHTML += `Weather: ${weatherData.weather[0].description}\n`;
            }
    
            loadingDialogue.innerHTML += `Welcome\n`;
    
            return data;
        } catch (err) {
            throw new Error("Error fetching user data");
        }
    };    

    // Matrix effect
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const matrixContainer = document.querySelector('.matrix');
    if (matrixContainer) {
        matrixContainer.appendChild(canvas);
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = canvas.width / 20;
    const drops = Array.from({ length: columns }, () => Math.floor(Math.random() * canvas.height));

    const drawMatrix = () => {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = '#0f0';
        context.font = '20px monospace';

        drops.forEach((y, x) => {
            const text = String.fromCharCode(0x30A0 + Math.random() * 96);
            context.fillText(text, x * 20, y);

            if (y > canvas.height && Math.random() > 0.975) {
                drops[x] = 0;
            } else {
                drops[x] = y + 20;
            }
        });
    };

    setInterval(drawMatrix, 50);

    
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

    const asciiArt = ``;

    const introMessage = `
    Glad to see you.

    >   TYPE 'HELP' FOR A LIST OF COMMANDS 

    Behind every great web-application is scalable, secure infrastructure.
    Also, there are Mandarin flash cards via the 'run-python' command.
    
    Learn something new today. `;


    const typeMessage = (message, container, delay = 20) => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < message.length) {
                container.innerHTML += message[index++];
                container.scrollTop = container.scrollHeight; // Auto-scroll
            } else {
                clearInterval(interval);
            }
        }, delay);
    };

    const typeMessageArray = (messages, container, delay = 20, callback) => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < messages.length) {
                const message = messages[index];
                const newLine = document.createElement("div");
                newLine.innerHTML = message.replace(/\n/g, '<br>');  // Handle new lines
                container.appendChild(newLine);
                container.scrollTop = container.scrollHeight;
                index++;
            } else {
                clearInterval(interval);
                if (callback) callback();
            }
        }, delay);
    };

    // Display ASCII art and intro message with typing animation
    const asciiArtContainer = document.createElement('div');
    asciiArtContainer.className = 'ascii-art';
    asciiArtContainer.innerText = asciiArt;  // Ensure ASCII art uses text content
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
            newLine.innerHTML = `${text}: ${value ? 'true' : 'false'}`;
            newLine.style.color = value ? 'limegreen' : 'red';
        } else {
            newLine.innerHTML = text;
        }
        output.appendChild(newLine);
        output.scrollTop = output.scrollHeight;
    };

    const aboutMessage = [
        "I'm a versatile software developer with a strong focus on security-centric projects and a deep passion for technology. Over the years, I've honed my skills across a variety of languages and platforms, enabling me to tackle a wide range of challenges and deliver robust, scalable solutions.",
        "Technologies and Languages",
        "- Programming Languages: I have extensive experience in multiple programming languages, including JavaScript, Python, and Java. My proficiency in these languages allows me to develop complex applications and automate tasks efficiently.",
        "- Web Development: From front-end technologies like HTML, CSS, and modern JavaScript frameworks to back-end development with Node.js, Express.js, and Django, I create seamless, dynamic web applications that provide exceptional user experiences.",
        "- Database Management: I work with both SQL and NoSQL databases, including MongoDB, PostgreSQL, and MySQL. My expertise includes designing database schemas, optimizing queries, and ensuring data integrity and security.",
        "- API Development and Integration: I develop and integrate RESTful APIs, enabling seamless communication between different software components and third-party services. My projects often involve complex API interactions and data exchange.",
        "- Cloud Services: With experience in deploying applications on cloud platforms such as AWS and DigitalOcean, I ensure that my solutions are scalable, resilient, and cost-effective.",
        "- Security: Security is at the core of my work. I implement best practices in application security, conduct vulnerability assessments, and develop secure authentication and authorization mechanisms to protect sensitive data.",
        "- Tools and Frameworks: My toolkit includes a wide array of tools and frameworks, such as Git for version control, Docker for containerization, and various CI/CD pipelines for automated testing and deployment.",
        "Projects and Experience",
        "- Web Applications: I have built numerous web applications, from e-commerce platforms to social networks, all designed with user experience and security in mind.",
        "- Data Analysis and Visualization: Utilizing Python and related libraries, I develop data analysis pipelines and visualization tools that provide insights and drive decision-making processes.",
        "- Network Security: My projects often involve securing network communications, implementing encryption protocols, and ensuring compliance with industry standards.",
        "- System Automation: I create automation scripts and tools to streamline workflows, increase efficiency, and reduce manual intervention.",
        "Approach and Philosophy",
        "My approach to software development is rooted in the belief that a strong backend, coupled with sleek design, is crucial to building successful applications. I strive to deliver high-quality, maintainable code that meets the specific needs of my clients, while always keeping security and performance as top priorities.",
        "Whether it's developing a new application from scratch, enhancing an existing system, or integrating various technologies to create a cohesive solution, I bring a get-stuff-done attitude to every project. Let's work together to turn your vision into reality with professional, reliable, and secure solutions."
    ];
    

    const handleCommand = (command) => {
        switch (command.toLowerCase()) {
            case "help":
                appendOutput("Available commands: help, about, contact, clear, userdata, run-python, list-repos, cookies, headers, geo, fingerprint, scan, weather", 'response');
                break;
            case "about":
                output.innerHTML = "";  // Clear the output before typing the message
                typeMessageArray(aboutMessage, output, 500);
                break;
            case "contact":
                appendOutput("Contact me at: findthefunction+blockchaindegen@gmail.com", 'response');
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
            case "weather":
                getWeather();
                break;
            default:
                appendOutput(`Command not found: ${command}`, 'error');
        }
    };

    const getWeather = () => {
        fetch("/api/weather")
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    appendOutput(`Error: ${data.error}`, 'error');
                } else {
                    appendOutput(`Weather in ${data.city}, ${data.region}, ${data.country}:`, 'response');
                    appendOutput(`Temperature: ${data.main.temp}°C`, 'response');
                    appendOutput(`Weather: ${data.weather[0].description}`, 'response');
                }
            })
            .catch(err => appendOutput("Error fetching weather data", 'error'));
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
