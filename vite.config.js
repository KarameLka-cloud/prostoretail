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
                    @import "@/styles/variables";
                    @import "@/styles/mixins";
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
            "@hooks": "/resources/js/hooks",
            "@layouts": "/resources/js/layouts",
            "@pages": "/resources/js/pages",
            "@routes": "/resources/js/services/routes",
            "@services": "/resources/js/services",
            "@styles": "/resources/js/styles",
            "@types": "/resources/js/types",
            "@utils": "/resources/js/utils",
        },
    },
});
