<template>
	<div class="py-20 px-5 sm:px-9 max-w-7xl mx-auto">
		<div class="mb-10">
			<h2 class="mb-5">
				Choisissez un parcours <span class="underline underline-offset-8 decoration-pink-500">qui vous correspond</span> le mieux
			</h2>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime in
				ullam facilis repudiandae mollitia error enim id laboriosam aspernatur
				reiciendis.
			</p>
		</div>

		<div class="flex flex-wrap">
			<div class="prose w-full lg:w-1/2 pr-0 lg:pr-6 mb-10">
				<h4 class="mb-5 border-l-4 border-primary-900 pl-5">
					Devenez Gestionnaire
				</h4>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
					veniam non voluptatibus laborum aperiam excepturi, sed maxime a
					laudantium nemo.
				</p>

				<ul>
					<li>Marketing</li>
					<li>Comptabilité</li>
					<li>Communication digitale</li>
				</ul>

				<div>
					<button class="primary_btn">
						Tout voir
						<box-icon name="detail" color="currentColor"></box-icon>
					</button>
				</div>
			</div>
			<div class="prose  w-full lg:w-1/2 pr-0 lg:pr-6">
				<h4 class="mb-5 border-l-4 border-primary-900 pl-5">
					Devenez Informaticien
				</h4>

				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum sequi
					neque veniam odio culpa tempore, ipsum alias, exercitationem omnis
					laboriosam asperiores enim aperiam repellat veritatis at dolor
					incidunt dicta deleniti.
				</p>

				<ul>
					<li>Architecture logiciel</li>
					<li>Technicien Réseau</li>
					<li>DevOp</li>
				</ul>

				<div>
					<button class="primary_btn">
						Tout voir
						<box-icon name="detail" color="currentColor"></box-icon>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				courses: [
					{
						name: 'Architecture Logiciel',
						path: '/',
					},
					{
						name: 'Comptabilité et Audit',
						path: '/',
					},
					{
						name: 'Admission',
						path: '/',
					},
					{
						name: 'A Propos',
						path: '/',
					},
					{
						name: 'Contact',
						path: '/',
					},
					{
						name: 'Contact',
						path: '/',
					},
				],
			};
		},
	};
</script>

<style></style>
