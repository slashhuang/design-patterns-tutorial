/**
 * Created by slashhuang on 16/3/8.
 */

var path =require('path');
module.exports = {
    context:path.resolve(process.cwd(),'example'),
    watch:true,
    entry: {
        decorator:"./decorator.js",
        observer:"./observer.js",
        'pub-sub':'./pub-sub.js',
         singleton:'./singleton.js',
         mixin:'./mixin.js'
    },
    output: {
        publicPath:"./dist",
        path: './dist',
        filename: "[name].js"
    },
    module: {
        loaders: [
            {   test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['react','es2015','stage-0']
                }

            },
        ],
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    }
};