import consoleStamp from "console-stamp";

// Initialisation du format des logs dans la console.
consoleStamp(console, { format: ":date(yyyy-mm-dd'T'HH:MM:ss.l'Z')" });

console.log("Hello World !");