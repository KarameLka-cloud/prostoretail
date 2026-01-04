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
                    @use "@styles/_variables" as *;
                    @use "@styles/_mixins" as *;
                `,
            },
        },
    },
    resolve: {
        alias: {
            "@": "/resources/js",
            "@assets": "/resources/js/assets",
            "@components": "/resources/js/components",
            "@constants": "/resources/js/constants",
            "@interfaces": "/resources/js/interfaces",
            "@layouts": "/resources/js/layouts",
            "@pages": "/resources/js/pages",
            "@routes": "/resources/js/routes",
            "@styles": "/resources/js/styles",
        },
    },
});
