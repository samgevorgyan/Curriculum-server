"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var send_mail_1 = __importDefault(require("../send-mail/send-mail"));
var EmailValidator = __importStar(require("email-validator"));
var MailRoutes = /** @class */ (function () {
    function MailRoutes() {
        this.router = express_1.Router();
        this.sendEmail();
    }
    MailRoutes.prototype.sendEmail = function () {
        this.router.post('/', function (req, res) {
            console.log('mtav mail postov');
            if (req.body) {
                if (req.body.name && req.body.email && req.body.msg) {
                    // emailRegexp.test(req.body.email)
                    console.log(' emailRegexp.test(req.body.email)', EmailValidator.validate(req.body.email));
                    if (EmailValidator.validate(req.body.email)) {
                        send_mail_1.default.mailSmtpConfig().sendMail(send_mail_1.default.mailSendConfig(req.body)).then(function (result) {
                            res.status(200).send({ status: 'success', message: "we send it" });
                        }, function (error) {
                            console.log('send error', error);
                            if (error.responseCode && error.responseCode === 535) {
                                res.status(500).send({ status: null, message: "error Authrntication" });
                            }
                            else if (error.errno && error.errno === 'ETIMEDOUT') {
                                res.status(500).send({
                                    status: null,
                                    message: "error invalid port or ip address timeout"
                                });
                            }
                            else {
                                res.status(500).send({ status: null, message: error });
                            }
                        });
                    }
                    else {
                        res.status(400).send({ status: null, message: 'wrong email' });
                    }
                }
                else {
                    res.status(401).send({ status: null, message: 'Bad credentials' });
                }
            }
        });
    };
    return MailRoutes;
}());
var gamesRoutes = new MailRoutes();
exports.default = gamesRoutes.router;
