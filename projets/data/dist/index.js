"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_stamp_1 = __importDefault(require("console-stamp"));
// Initialisation du format des logs dans la console.
(0, console_stamp_1.default)(console, { format: ":date(yyyy-mm-dd'T'HH:MM:ss.l'Z')" });
console.log("Hello World !");
