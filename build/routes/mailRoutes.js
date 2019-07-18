"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var send_mail_1 = __importDefault(require("../send-mail/send-mail"));
var MailRoutes = /** @class */ (function () {
    function MailRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    MailRoutes.prototype.config = function () {
        console.log('mtav games');
        this.router.post('/', function (req, res) {
            console.log('mtrav mail-i hamar', req.body.name);
            if (req.body) {
                if (req.body.name && req.body.email && req.body.msg) {
                    send_mail_1.default.mailSmtpConfig().sendMail(send_mail_1.default.mailSendConfig(req.body)).then(function (result) {
                        console.log('result', result);
                        res.status(200).send({ status: 'OK' });
                    }, function (error) {
                        console.log('send error', error);
                        if (error.responseCode && error.responseCode === 535) {
                            res.status(500).send({ status: "error Authrntication" });
                        }
                        else if (error.errno && error.errno === 'ETIMEDOUT') {
                            res.status(500).send({ status: "error invalid port or ip address timeout" });
                        }
                        else {
                            res.status(500).send({ status: "error" });
                        }
                    });
                }
                else {
                    res.send('kisat prat zapros');
                }
            }
        });
    };
    return MailRoutes;
}());
var gamesRoutes = new MailRoutes();
exports.default = gamesRoutes.router;
