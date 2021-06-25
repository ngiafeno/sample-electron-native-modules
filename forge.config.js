

module.exports = {
    packagerConfig: {

    },
    makers: [
        {
            name: "@electron-forge/maker-squirrel",
            config: {
                name: "sampleapp",
                version: "1.0.0",
                publisher: "test",
            },
        },
        {
            name: "@electron-forge/maker-zip",
            platforms: ["darwin"],
        },
        {
            name: "@electron-forge/maker-deb",
            config: {},
        },
        {
            name: "@electron-forge/maker-rpm",
            config: {},
        },
    ],
    plugins: [
        [
            "@electron-forge/plugin-webpack",
            {
                mainConfig: "./webpack.main.config.js",
                renderer: {
                    config: "./webpack.renderer.config.js",
                    entryPoints: [
                        {
                            html: "./src/renderer/index.html",
                            js: "./src/renderer/renderer.tsx",
                            name: "main_window",
                            preload: {
                                js: "./src/rendererPreload.ts",
                            },
                        },
                    ],
                },
            },
        ],
        ["@timfish/forge-externals-plugin", {
            externals: ["ref-napi", "ffi-napi"],
            includeDeps: true
        }]
    ],

}
