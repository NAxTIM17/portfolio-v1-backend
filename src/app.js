import express from 'express';
import routes from './routes/index.js';
import cors from 'cors';

export class App{
    constructor(){
        this.app = express();        
        this.app.disable('x-powered-by');
        this.loadRoutes();
        this.middlewares();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(cors());
    }

    loadRoutes(){
        this.app.use('/api/v1', routes);
    }

    create(){
        return this.app;
    }
}