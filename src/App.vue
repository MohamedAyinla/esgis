<template>
	<div id="app">
		<!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

		<navbar></navbar>

		<router-view />

		<app-footer></app-footer>
	</div>
</template>

<script>
	import AppFooter from './components/AppFooter.vue';
	import Navbar from './components/Navbar.vue';
	export default {
		components: {
			Navbar,
			AppFooter
		},
	};
</script>

<style>
	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	
	a.router-link-exact-active {
		@apply text-primary-900
	}
</style>
