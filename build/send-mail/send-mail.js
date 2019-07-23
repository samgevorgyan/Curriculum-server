"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = __importDefault(require("nodemailer"));
var SendMail = /** @class */ (function () {
    function SendMail() {
        this.mailSmtpConfig();
    }
    SendMail.prototype.mailSendConfig = function (obj) {
        return {
            from: 'samvelgevorgyan@samcv.net',
            to: 'gesamvel@mail.ru',
            subject: "NICE JOB OFFER ",
            html: "<div  >\n<h1>Hello Dear Samvel</h1>\n<div>YOU HAVE GREAT EMAIL </div>\n<ul style=\"list-style: none\">\n<li>Sender name - " + obj.name + "</li>\n<li>Sender email -  " + obj.email + " </li>\n<li style=\"font-size: 25px; color: #2b1df2\"> Message -\n" + obj.msg + "\n</li>\n</ul>\n </div> ",
        };
    };
    SendMail.prototype.mailSmtpConfig = function () {
        return nodemailer_1.default.createTransport({
            host: "az1-ss21.a2hosting.com",
            port: 465,
            auth: {
                user: 'samvelgevorgyan@samcv.net',
                pass: 'Gorisigort2'
            },
        });
    };
    return SendMail;
}());
var sendMail = new SendMail();
exports.default = sendMail;
