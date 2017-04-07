<<<<<<< HEAD
const webpack=require('webpack');
const path = require('path');

module.exports = {

    entry:[
        'react-hot-loader/patch',
        './src/app.js',

    ],
    output:{
        path: path.resolve(__dirname,'./build'),
        filename:"app.bundle.js",
    },
    module:{
        loaders:[
            {
                test:/\.html$/,
                loader:'file-loader?name=[name].[ext]',
            },
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',

            },

        ],
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
    ],
=======
const webpack=require('webpack');
const path = require('path');

module.exports = {

    entry:[
        'react-hot-loader/patch',
        './src/app.js',

    ],
    output:{
        path: path.resolve(__dirname,'./build'),
        filename:"app.bundle.js",
    },
    module:{
        loaders:[
            {
                test:/\.html$/,
                loader:'file-loader?name=[name].[ext]',
            },
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',

            },

        ],
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
    ],
>>>>>>> 85b28df956ef8202f16ee523f0cfef93383af4f6
};