import env from "react-dotenv";

const HOST = env ? env.BACKEND_HOST : 'localhost';
const PORT = env ? env.BACKEND_PORT : 8000; 

const baseUrl = 'http://' + HOST + ':' + PORT;

export default baseUrl
