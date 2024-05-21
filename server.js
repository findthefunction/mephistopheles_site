const express = require('express');
const path = require('path');
const requestIp = require('request-ip');
const useragent = require('express-useragent');
const geoip = require('geoip-lite');
const { exec } = require('child_process');

const app = express();

app.use(requestIp.mw());
app.use(useragent.express());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the models directory
app.use('/models', express.static(path.join(__dirname, 'models')));

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

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
