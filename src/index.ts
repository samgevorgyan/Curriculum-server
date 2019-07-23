import express, {Application} from 'express';
import indexRoutes from "./routes/indexRoutes";
import mailRoutes from "./routes/mailRoutes";
import morgan from "morgan";
import cors from "cors";
import os from "os";
import * as path from "path";

class Server {
    public app: Application

    constructor() {
        this.app = express();
        this.config();
        this.routes();

        // this.app.use(express.static(__dirname+'/dist'));
        // this.app.get('/*', (req, res) => {
        //     console.log('mtav *** -ov rout@', );
        //     res.sendFile(path.join(__dirname))
        //
        // });
    }
      loggerMiddleware(request: express.Request, response: express.Response, next:any ) {
        console.log(`${request.method} ${request.path}`);
        next();
    }

    config(): void {


        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));

    }

    routes(): void {

this.app.use('/mail', mailRoutes);
        this.app.use('/api/ff', indexRoutes);



    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {

            console.log('run in server', this.app.get('port'));

        })
    }
}

const server = new Server();

server.start();
