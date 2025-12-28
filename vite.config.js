import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/main.tsx"],
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use "@/styles/_variables" as *;
                    @use "@/styles/_mixins" as *;
                `,
            },
        },
    },
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
});
