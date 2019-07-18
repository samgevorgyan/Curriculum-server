import {Router} from 'express'
import mailConfig from '../send-mail/send-mail'


class MailRoutes {
    public router: Router = Router();


    constructor() {
        this.config();
    }

    config(): void {
        console.log('mtav games',);
        this.router.post('/', (req, res) => {

            console.log('mtrav mail-i hamar', req.body.name);

            if (req.body) {
                if (req.body.name && req.body.email && req.body.msg) {

                    mailConfig.mailSmtpConfig().sendMail(mailConfig.mailSendConfig(req.body)).then((result)=>{
                        console.log('result', result);
                            res.status(200).send({status:'OK'},)
                    },
                        (error)=>{
                        console.log('send error', error );
                        if(error.responseCode && error.responseCode === 535){
                            res.status(500).send({status : "error Authrntication"})
                        } else if(error.errno && error.errno === 'ETIMEDOUT'){
                            res.status(500).send({status : "error invalid port or ip address timeout"})
                        }
                        else {
                            res.status(500).send({status: "error"})
                        }
                    });
                }
             else {
                res.send('kisat prat zapros',)
            }
        }

    } )
}
}

const gamesRoutes = new MailRoutes();
export default gamesRoutes.router;
