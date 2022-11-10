global.$ = global.jQuery = require('jquery');

import '../css/app.css';
import MobileMenu from './mobileMenu';
import TestimonialsSlider from './testimonialsSlider';

// import(/* webpackChunkName: "myModule", webpackPrefetch: true */ './dynamic_import').then(module => module.default());

MobileMenu();
TestimonialsSlider();