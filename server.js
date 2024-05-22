const express = require('express');
const path = require('path');
const requestIp = require('request-ip');
const useragent = require('express-useragent');
const geoip = require('geoip-lite');
const { exec } = require('child_process');
const axios = require('axios');
const nmap = require('node-nmap');
require('dotenv').config();

const app = express();

app.use(requestIp.mw());
app.use(useragent.express());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the models directory
app.use('/models', express.static(path.join(__dirname, 'models')));

// Serve the game directory
app.use('/game', express.static(path.join(__dirname, 'public/game')));

app.get('/api/userdata', (req, res) => {
    const ip = req.clientIp;
    const geo = geoip.lookup(ip);
    const userData = {
        ip: ip,
        browser: req.useragent.browser,
        version: req.useragent.version,
        os: req.useragent.os,
        platform: req.useragent.platform,
        source: req.useragent.source,
        isMobile: req.useragent.isMobile,
        isiPhone: req.useragent.isiPhone,
        isAndroid: req.useragent.isAndroid,
        isDesktop: req.useragent.isDesktop,
        isWindows: req.useragent.isWindows,
        isMac: req.useragent.isMac,
        isLinux: req.useragent.isLinux,
        geo: geo ? {
            country: geo.country,
            region: geo.region,
            city: geo.city,
            latitude: geo.ll[0],
            longitude: geo.ll[1]
        } : null
    };
    res.json(userData);
});

app.get('/api/run-python', (req, res) => {
    exec('python3 scripts/script.py', (error, stdout, stderr) => {
        if (error) {
            res.json({ error: error.message, details: stderr });
            return;
        }
        res.json({ output: stdout });
    });
});

app.get('/api/list-repos', async (req, res) => {
    const token = process.env.GITHUB_TOKEN;
    const username = process.env.GITHUB_USERNAME;
    let page = 1;
    const perPage = 100; // Fetch up to 100 repositories per page
    let repos = [];

    try {
        while (true) {
            const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
                headers: {
                    Authorization: `token ${token}`
                },
                params: {
                    per_page: perPage,
                    page: page
                }
            });
            const data = response.data;
            repos = repos.concat(data);
            if (data.length < perPage) {
                break;
            }
            page++;
        }
        res.json(repos);
    } catch (err) {
        res.json({ error: 'Error fetching repositories' });
    }
});

app.get('/api/headers', (req, res) => {
    res.json(req.headers);
});

app.get('/api/fingerprint', (req, res) => {
    const fingerprint = {
        screen: {
            width: req.query.screenWidth,
            height: req.query.screenHeight,
            colorDepth: req.query.colorDepth
        },
        navigator: {
            userAgent: req.headers['user-agent'],
            language: req.headers['accept-language'],
            platform: req.headers['sec-ch-ua-platform'],
            doNotTrack: req.headers['dnt']
        },
        timezone: req.query.timezone
    };
    res.json(fingerprint);
});

app.get('/api/vulnerability-scan', (req, res) => {
    const ip = req.clientIp;
    let responseSent = false; // Flag to check if response is already sent

    console.log(`Starting vulnerability scan for IP: ${ip}`);
    const scan = new nmap.NmapScan(ip);

    scan.on('complete', (data) => {
        if (!responseSent) {
            console.log(`Scan complete for IP ${ip}: ${JSON.stringify(data)}`);
            res.json(data);
            responseSent = true; // Set the flag as response is sent
        }
    });

    scan.on('error', (error) => {
        if (!responseSent) {
            console.error(`Scan error for IP ${ip}: ${error.message}`);
            res.json({ error: error.message });
            responseSent = true; // Set the flag as response is sent
        }
    });

    scan.on('progress', (data) => {
        console.log(`Scan progress for IP ${ip}: ${data.percent}% complete`);
    });

    scan.startScan();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
