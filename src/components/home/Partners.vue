<template>
	<div class="w-full bg-gray-50">
		<div class="max-w-7xl mx-auto py-10 px-5 sm:px-7 md:px-20 flex flex-wrap items-center gap-20 justify-center">
			<div v-for="partner in partners" :key="partner.name">
				<img class="w-24 sm:w-28 md:w-32 lg:w-36" :src="require(`../../assets/${partner.logo}`)" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				partners: [
					{
						name: 'Accueil',
						logo: 'iscid.png',
					},
					{
						name: "Programme d'étude",
						logo: 'ua.png',
					},
					{
						name: 'Admission',
						logo: 'esg.png',
					},
					{
						name: 'A Propos',
						logo: 'esgi.png',
					},
					{
						name: 'Contact',
						logo: 'ppa.png',
					},
				],
			};
		},
	};
</script>

<style></style>
