<template>
	<div class="sticky top-0 z-50">
		<div class="bg-white shadow-sm absolute w-full">
			<nav class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
				<div class="flex items-center justify-between h-20">
					<div>
						<img class="w-32" src="../assets/esgis-logo.png" alt="" />
					</div>

					<div
						class="bg-white rounded-b-2xl shadow-md absolute left-0 top-20 py-5 w-full flex flex-wrap justify-center gap-3 lg:flex-nowrap lg:py-0 lg:relative lg:bg-transparent lg:shadow-none lg:gap-4 lg:top-0 lg:rounded-none lg:w-auto"
						:class="{'hidden lg:flex': isHidden}"
					>
						<div
							class="w-2/5 sm:w-full text-center lg:w-auto lg:text-left"
							v-for="item in menu"
							:key="item.id"
						>
							<router-link class="font-medium" :id="item.id" :to="item.path">{{
								item.name
							}}</router-link>
						</div>

						<div class="flex justify-center gap-2 w-full sm:hidden">
							<button
								class="bg-primary-600 transition-all hover:bg-primary-700 text-white py-2 px-3 rounded-md"
							>
								Candidater
							</button>
							<button
								class="border-primary-600 text-black transition-all hover:bg-primary-600 hover:text-white border-2 py-2 px-3 rounded-md"
							>
								Espace étudiant
							</button>
						</div>
					</div>

					<div class="hidden sm:flex sm:gap-4">
						<button
							class="bg-primary-600 transition-all hover:bg-primary-700 text-white py-2 px-3 rounded-md"
						>
							Candidater
						</button>
						<button
							class="border-primary-600 text-black transition-all hover:bg-primary-600 hover:text-white border-2 py-2 px-3 rounded-md"
						>
							Espace étudiant
						</button>
					</div>

					<button
						type="button"
						@click="showMenu"
						class="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-200 lg:hidden"
						aria-controls="mobile-menu"
						aria-expanded="false"
					>
						<box-icon name="menu"></box-icon>
					</button>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				isHidden: true,
				menu: [
					{
						id: "Home",
						name: 'Accueil',
						path: '/',
					},
					{
						id: "Formations",
						name: 'Formations',
						path: '/formations',
					},
					{
						id: "Admission",
						name: 'Admission',
						path: '/admission',
					},
					{
						id: "About",
						name: 'A Propos',
						path: '/about',
					},
					{
						id: "Contact",
						name: 'Contact',
						path: '/contact',
					},
				],
			};
		},
		methods: {
			showMenu: function () {
				this.isHidden = !this.isHidden;
				// some code to filter users
			},
		},
	};
</script>

<style></style>
