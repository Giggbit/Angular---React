const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { webpack } = require("webpack");

module.exports = (env) => {
    return {
        entry: path.resolve(__dirname, "src", "index.ts"),
        mode: env.mode ?? "development",
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "bundle_[contenthash].js",
            clean: true,
        },
        plugins: [
            new htmlWebpackPlugin({
                template: path.resolve(__dirname, "public", "index.html")
            }),
            
        ],
        module: {
            rules: [
              {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devServer: {
            port: 5000,
            open: true,
        }
    }
}
