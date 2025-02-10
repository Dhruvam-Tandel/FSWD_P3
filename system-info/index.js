const os = require('os');
const fs = require('fs');
const path = require('path');


function getSystemInfo() {
    return {
        osType: os.type(),
        totalMemory: `${(os.totalmem() / (1024 * 1024 *1024)).toFixed(2)} GB`,
        freeMemory: `${(os.freemem() / (1024 * 1024 *1024)).toFixed(2)} GB-`,
        cpus: os.cpus(),
    };
}

function saveSystemInfoToFile(info) {
    const logsDir = path.join(__dirname, 'logs');
    const filePath = path.join(logsDir, 'system-info.txt');

    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }

   
    const infoString = JSON.stringify(info, null, 2);

 
    fs.writeFileSync(filePath, infoString, 'utf8');

    console.log(`System information saved to ${filePath}`);
}

function main() {
    const systemInfo = getSystemInfo();
    console.log('System Information:', systemInfo);
    saveSystemInfoToFile(systemInfo);
}


main();