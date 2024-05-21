const express = require('express');
const app = express();
const path = require('path');
const requestIp = require('request-ip');
const useragent = require('express-useragent');
const geoip = require('geoip-lite');
const { exec } = require('child_process');

app.use(requestIp.mw());
app.use(useragent.express());

app.use(express.static(path.join(__dirname, 'public')));

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
        geo: {
            country: geo ? geo.country : 'N/A',
            region: geo ? geo.region : 'N/A',
            city: geo ? geo.city : 'N/A',
            latitude: geo ? geo.ll[0] : 'N/A',
            longitude: geo ? geo.ll[1] : 'N/A'
        }
    };

    res.json(userData);
});

app.get('/api/run-python', (req, res) => {
    const scriptPath = path.join(__dirname, 'scripts', 'script.py');
    const dataPath = path.join(__dirname, 'data', 'datafile.csv');
    
    exec(`python3 ${scriptPath} ${dataPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing script: ${error}`);
            return res.status(500).json({ error: 'Error executing script' });
        }
        if (stderr) {
            console.error(`Script error: ${stderr}`);
            return res.status(500).json({ error: 'Script error', details: stderr });
        }
        res.json({ output: stdout });
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
