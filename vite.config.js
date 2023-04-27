import checker from "vite-plugin-checker";
import {defineConfig} from "vite";
import fs from 'fs'
import basicSsl from '@vitejs/plugin-basic-ssl'
export default defineConfig({
    plugins:[
        checker({
            typescript: false
        }),
    ],
    server:{
        host: '0.0.0.0',
        https: {
            key: fs.readFileSync('keys/agent2-key.pem'),
            cert: fs.readFileSync('keys/agent2-cert.pem')
        },
    },
})
