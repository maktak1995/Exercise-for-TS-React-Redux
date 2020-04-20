module.exports = {
  // modeをproductionにすると最適化状態で
  // developmentにするとソースマップ有効で出力される
  mode: "development",

  // エントリーポイント
  entry: "./src/main.tsx",

  // ファイルの出力設定
  output: {
    // 出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "main.js",
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        // .ts .tsx の場合
        test: /\.tsx?$/,
        // TypeScriptをコンパイルする
        use: "ts-loader",
      },
    ],
  },
  // import文で .ts や .tsx ファイルを解決する
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};
