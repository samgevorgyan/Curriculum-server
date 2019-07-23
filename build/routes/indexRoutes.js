"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path = __importStar(require("path"));
var IndexRoutes = /** @class */ (function () {
    function IndexRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    IndexRoutes.prototype.config = function () {
        console.log('mtav index ');
        this.router.get('/', function (req, res) {
            console.log('hostname', req.hostname);
            console.log('path', req.path);
            console.log('method', req.method);
            console.log('__dirname', path.dirname('s'));
            // res.sendFile(path.join('../'+__dirname+'/dist'))
            // this.app.use(express.static(__dirname+'/dist'));
            // this.app.get('/*', (rew, res) =>res.sendFile(path.join(__dirname)));
            // res.sendFile(path.join('../'+__dirname+'/dist/index.html'));
            res.send('hello ff   ooo  kkk');
        });
    };
    return IndexRoutes;
}());
var indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
