import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/main.jsx"],
            refresh: true,
        }),
        react(),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "@/styles/variables.scss";
                    @import "@/styles/mixins";
                `,
            },
        },
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "resources/js"),
        },
    },
});
