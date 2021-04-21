/*

##########-Logger-##########
- A simple logger for you all kind of logs
- You can either write logs in any color (foreground & background) of your choice
- Or you can either write success, error, warning, info logs
- Set name of your file if you like
- You can also attach the date to the logs if you want
- If you want you can download your logs to the external file
- Copyright protected by Ahmad Habib™

*/
let logs = ``;
let loggerName = "Logger";
let logColor = "blue";
let bgColor = "white";
let isIE = false;

function checkBrowser() {
    let browser = window.navigator.userAgent.indexOf("MSIE ");
    (browser >= 0) ? isIE = true : isIE = false;
}

checkBrowser();

try {
    function log(message, addDate = false) {
        if (!isIE)
            console.log(`%c ${message}     ${addDate ? generateCurrentTime() : ''}`, `color: ${logColor}; background-color: ${bgColor}`);
        else
            console.log(`${message}     ${addDate ? generateCurrentTime() : ''}`);
        logs += `${message}     ${addDate ? generateCurrentTime() : ''}\n`;
    }

    function success(message, addDate = false) {
        if (!isIE)
            console.log(`%c ${message}     ${addDate ? generateCurrentTime() : ''}`, `color: green`);
        else
            console.log(`${message}     ${addDate ? generateCurrentTime() : ''}`);

        logs += `${message}     ${addDate ? generateCurrentTime() : ''}\n`;
    }

    function warning(message, addDate = false) {
        if (!isIE)
            console.log(`%c ${message}     ${addDate ? generateCurrentTime() : ''}`, `color: orange`);
        else
            console.log(`${message}     ${addDate ? generateCurrentTime() : ''}`);
        logs += `${message}     ${addDate ? generateCurrentTime() : ''}\n`;
    }

    function error(message, addDate = false) {
        if (!isIE)
            console.log(`%c ${message}     ${addDate ? generateCurrentTime() : ''}`, `color: red`);
        else
            console.log(`${message}     ${addDate ? generateCurrentTime() : ''}`);
        logs += `${message}     ${addDate ? generateCurrentTime() : ''}\n`;
    }

    function info(message, addDate = false) {
        if (!isIE)
            console.log(`%c ${message}     ${addDate ? generateCurrentTime() : ''}`, `color: blue`);
        else
            console.log(`${message}     ${addDate ? generateCurrentTime() : ''}`);
        logs += `${message}     ${addDate ? generateCurrentTime() : ''}\n`;
    }

    function setName(name) {
        loggerName = name;
    }

    function setForground(color) {
        logColor = color;
    }

    function setBackground(color) {
        bgColor = color;
    }

    function generateCurrentTime() {
        let date = new Date();
        let d = date.toDateString();
        let h = date.getHours();
        (h < 10) ? h = "0" + h : h = h;

        let m = date.getMinutes();
        (m < 10) ? m = "0" + m : m = m;

        let s = date.getSeconds();
        (s < 10) ? s = "0" + s : s = s;

        let ms = date.getMilliseconds();
        (ms < 10) ? ms = "0" + ms : ms = ms;

        return d + " - " + h + ":" + m + ":" + s + ":" + ms;
    }

    function downloadLogs(addDate = false) {
        let fileName = `${loggerName} ${addDate ? ' - ' + generateCurrentTime() : ''}.logs`;
        let file = new Blob([logs], { type: 'text/plain' });
        let anchor = document.createElement("a");
        anchor.href = URL.createObjectURL(file);
        anchor.download = fileName;
        anchor.click();
    }

} catch (error) {
    console.log("Stop messing with the code, just use the methods already")
}