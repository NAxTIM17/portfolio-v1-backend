import http from 'http';
import { App } from './src/app.js';


export class Server {
    constructor() {
        this.port = process.env.PORT || 3000;
        this.app = new App();

        this.server = http.createServer(this.app.create());
    }

    start() {
        try {
            this.server.listen(this.port, () => {
                console.log(`Server running on port http://localhost:${this.port}`);
            });
        } catch (error) {
            console.error('Error starting server:', error);
        }
    }

}