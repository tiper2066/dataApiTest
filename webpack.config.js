import path from "path";
import nodeExternals from "webpack-node-externals";
const __dirname = path.resolve();

export default {
    mode: "production",
    entry: {
        bundle: path.resolve(__dirname, "index.js"), // 빌드할 소스 파일
    },
    output: {
        path: path.resolve(__dirname, "build"), // 빌드시 생성될 폴더 경로
        filename: "bundle.js", // 빌드 후 생성할 파일
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
                exclude: /node_modules/,
            },
        ],
    },
    target: "node",
    externalsPresets: {
        node: true,
    },
    externals: [nodeExternals()], // 빌드시 node_module 폴더를 강제로 제외하기 위함
};
