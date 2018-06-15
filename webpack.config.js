module.exports = {
    entry: "./public/Index.js",
    output: {
        path: __dirname + "/public/bundle",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    watch: true
}