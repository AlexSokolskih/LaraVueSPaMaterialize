const mix = require('laravel-mix');

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

mix.js(
    [
        'resources/js/app.js',
        'node_modules/materialize-css/dist/js/materialize.js',
    ],
    'public/js')
   .sass('resources/sass/app.scss', 'public/css');
mix.styles(
    [
        'node_modules/materialize-css/dist/css/materialize.min.css',
    'node_modules/material-design-icons/iconfont/material-icons.css',
    ],
    'public/css/all.css');
