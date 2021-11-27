import env from "react-dotenv";

const HOST = env.BACKEND_HOST;
const PORT = env.BACKEND_PORT;

const baseUrl = 'http://' + HOST + ':' + PORT;

export default baseUrl
