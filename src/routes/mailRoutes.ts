import {Router} from 'express'
import mailConfig from '../send-mail/send-mail'
import * as EmailValidator from 'email-validator'

class MailRoutes {
    public router: Router = Router();


    constructor() {
        this.sendEmail();
    }

    sendEmail(): void {

        this.router.post('/', (req, res) => {
            console.log('mtav mail postov',);
            if (req.body) {
                if (req.body.name && req.body.email && req.body.msg) {

                    // emailRegexp.test(req.body.email)
                    console.log(' emailRegexp.test(req.body.email)', EmailValidator.validate(req.body.email));
                    if (EmailValidator.validate(req.body.email)) {
                        mailConfig.mailSmtpConfig().sendMail(mailConfig.mailSendConfig(req.body)).then(
                            (result) => {
                                res.status(200).send({status: 'success', message: "we send it"},)
                            },
                            (error) => {
                                console.log('send error', error);
                                if (error.responseCode && error.responseCode === 535) {
                                    res.status(500).send({status: null, message: "error Authrntication"})
                                } else if (error.errno && error.errno === 'ETIMEDOUT') {
                                    res.status(500).send({
                                        status: null,
                                        message: "error invalid port or ip address timeout"
                                    })
                                } else {
                                    res.status(500).send({status: null, message: error})
                                }
                            });
                    }else{
                        res.status(400).send({status: null, message: 'wrong email'});
                    }
                } else {
                    res.status(401).send({status: null, message: 'Bad credentials'},)
                }
            }

        })
    }
}

const gamesRoutes = new MailRoutes();
export default gamesRoutes.router;
