import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/main.tsx"],
            refresh: true,
        }),
        react(),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "@styles/variables";
                    @import "@styles/mixins";
                `,
            },
        },
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "resources/js"),
            "@assets": resolve(__dirname, "resources/js/assets"),
            "@components": resolve(__dirname, "resources/js/components"),
            "@constants": resolve(__dirname, "resources/js/constants"),
            "@hooks": resolve(__dirname, "resources/js/hooks"),
            "@layouts": resolve(__dirname, "resources/js/layouts"),
            "@pages": resolve(__dirname, "resources/js/pages"),
            "@routes": resolve(__dirname, "resources/js/services/routes"),
            "@services": resolve(__dirname, "resources/js/services"),
            "@styles": resolve(__dirname, "resources/js/styles"),
            "@types": resolve(__dirname, "resources/js/types"),
            "@utils": resolve(__dirname, "resources/js/utils"),
        },
    },
});
