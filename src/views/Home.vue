<template>
	<div class="home">
		<hero></hero>
		<partners></partners>
		<short-about></short-about>
		<short-path></short-path>
		<testimonial></testimonial>
		<call-to-action></call-to-action>
		<contact></contact>
	</div>
</template>

<script>
	import CallToAction from '../components/home/CallToAction.vue';
	import Contact from '../components/home/Contact.vue';
	// @ is an alias to /src
	import Hero from '../components/home/Hero.vue';
	import Partners from '../components/home/Partners.vue';
	import ShortAbout from '../components/home/ShortAbout.vue';
	import Testimonial from '../components/home/Testimonial.vue';
	import ShortPath from '../components/home/ShortPath.vue';

	export default {
		name: 'Home',
		components: {
			Hero,
			Partners,
			ShortAbout,
			Testimonial,
			CallToAction,
			Contact,
			ShortPath,
		},
	};
</script>
