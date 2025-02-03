const os = require("os");
const fs = require("fs");
const path = require("path");


function getSystemInfo() {
    return {
        OS: os.type(),
        TotalMemory: `${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`,
        FreeMemory: `${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`,
        CPU: os.cpus()[0].model,
        CPU_Cores: os.cpus().length
    };
}

function saveSystemInfo() {
    const info = getSystemInfo();
    const filePath = path.join(__dirname, "logs", "system-info.txt");

    fs.appendFile(filePath, JSON.stringify(info, null, 2) + "\n", (err) => {
        if (err) console.log("Error saving log:", err);
        else console.log("System info saved successfully.");
    });
}


console.log("System Information:");
console.log(getSystemInfo());

saveSystemInfo();
