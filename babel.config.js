module.exports = function (api) {
    api.cache(false);
    return {
        "sourceMaps": true,
        "retainLines": true,
         "presets": [
            [
                "@babel/preset-env",
                {
                    "targets": {
                        "node": "current"
                    },
                     "modules": "commonjs"
                }
            ]
        ],
        "ignore": [
          "./node_modules/"
        ],
        "plugins": [
            [
                "@babel/plugin-transform-async-to-generator"
            ],
            [
                "@babel/plugin-proposal-export-namespace-from"
            ]
        ]
    };
};
