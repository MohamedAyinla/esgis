<template>
	<div class="home">
		<hero></hero>
		<partners></partners>
		<short-about></short-about>
		<!-- <short-path></short-path> -->
		<testimonial></testimonial>
		<call-to-action></call-to-action>
	</div>
</template>

<script>
	import CallToAction from '../components/CallToAction.vue';
	// @ is an alias to /src
	import Hero from '../components/Hero.vue';
	import Partners from '../components/Partners.vue';
	import ShortAbout from '../components/ShortAbout.vue';
	import Testimonial from '../components/Testimonial.vue';
	// import ShortPath from '../components/ShortPath.vue'

	export default {
		name: 'Home',
		components: {
			Hero,
			Partners,
			ShortAbout,
			Testimonial,
			CallToAction,
			// ShortPath
		},
	};
</script>
