import {config} from 'dotenv';
import path from "path";

// First, load the root .env to get the ENV variable
config({ path: path.join(process.cwd(), ".env") });

// Then load the environment-specific env file
const envPath = path.join(process.cwd(), "env", `${process.env.ENV}.env`);
config({ path: envPath });


const manager = {
    baseUrl: process.env.baseUrl
};

export default manager;