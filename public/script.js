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
                appendOutput("Available commands: help, about, contact, clear, userdata", 'response');
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
});
