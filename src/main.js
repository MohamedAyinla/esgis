import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './styles/index.css';
import 'boxicons';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

Vue.use(VueAwesomeSwiper /* { default options with global component } */);

import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyC0vxpWWxARwNX8WlVJ6rM55NMgWgpd_9w',
		// libraries: 'places',
	},
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
