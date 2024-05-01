import { defineConfig } from "@solidjs/start/config";
import devtools from "solid-devtools/vite";

export default defineConfig({
    ssr: true,
    server: {
        baseURL: process.env.BASE_PATH,
        preset: "static",
    },
    vite: {
        plugins: [
            devtools({
                /* features options - all disabled by default */
                autoname: true, // e.g. enable autoname
            }),
        ],
    },
});
