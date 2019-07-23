"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
var mailRoutes_1 = __importDefault(require("./routes/mailRoutes"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
        // this.app.use(express.static(__dirname+'/dist'));
        // this.app.get('/*', (req, res) => {
        //     console.log('mtav *** -ov rout@', );
        //     res.sendFile(path.join(__dirname))
        //
        // });
    }
    Server.prototype.loggerMiddleware = function (request, response, next) {
        console.log(request.method + " " + request.path);
        next();
    };
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    };
    Server.prototype.routes = function () {
        this.app.use('/mail', mailRoutes_1.default);
        this.app.use('/api/ff', indexRoutes_1.default);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log('run in server', _this.app.get('port'));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
