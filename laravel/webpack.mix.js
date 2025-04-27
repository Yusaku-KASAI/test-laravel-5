let mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
  devServer: {
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    // バージョン違うけどdocument
    // https://webpack.js.org/configuration/dev-server/#devserverhost
    host: "0.0.0.0", // viteのhostと同じ、アクセスを許可するhostの指定
    port: 8080, // listenするポート
    //  public: "localhost:8080", // ソケット通信のためのhost？
    hot: true,
    //  liveReload: false, バージョンアップしないと使えないオプションだった
    watchOptions: {
      poll: true,
    },
  },
});

// https://github.com/laravel-mix/laravel-mix/issues/1222
// まだリロードする必要があってhmrが効いていない

//  バージョンが古いのを使ってるのかscssが死んでいるのでデフォルトのは使わない
// mix
//   .js("resources/assets/js/app.js", "public/js")
//   .sass("resources/assets/sass/app.scss", "public/css");

mix
  .js("resources/assets/js/app.js", "public/js")
  .styles("resources/assets/css/test.css", "public/css/test.css");

// そもそもこのオプションあるか怪しいが、、jsなのでlaravel側で関係ないのでは？
// mix.options({
//   hmrOptions: {
//     host: "localhost",
//     port: 38080,
//   },
// });
