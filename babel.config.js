export default {
    "presets": [
        ["@babel/preset-env"],
        ["@babel/preset-react",
            {
                "pragma": "jsx",
                "pragmaFrag": "jsxFrag",
                "throwIfNamespace": false
            }]
    ],
    "plugins": [
        ["module-resolver",
            {
                "alias": {
                    "@src": "./src",
                    "@fn": "./src/functions",
                    "@assets": "./src/assets",
                    "@navigation": "./src/navigation",
                    "@modules": "./src/modules"
                }
            }
        ]
    ]

}