import  {Router} from 'express'
import * as path from "path";



class IndexRoutes {
   public  router: Router = Router();
   constructor(){
this.config();
   }

   config(): void{
       console.log('mtav index ', );

       this.router.get('/', (req, res)=>{
           console.log('hostname',req.hostname );
           console.log('path',req.path );
           console.log('method',req.method );
           console.log('__dirname', path.dirname('s') );
           // res.sendFile(path.join('../'+__dirname+'/dist'))
           // this.app.use(express.static(__dirname+'/dist'));
           // this.app.get('/*', (rew, res) =>res.sendFile(path.join(__dirname)));
           // res.sendFile(path.join('../'+__dirname+'/dist/index.html'));
           res.send('hello ff   ooo  kkk'  )
       })
   }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
