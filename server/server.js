import server from "./index.js";
const port = process.env.PORT || 8362;
import mongoose from './src/config/mongoose.js';

server.listen(port, function (error) {

    if (error) {
        console.log(`Error in running the server:${error}`);
    }
    console.log(`Server is running on port: ${port}`);
});