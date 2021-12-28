<template>
	<div class="max-w-6xl mx-auto py-10 px-5 sm:px-9">
		<h2 class="mb-5 lg:mb-7">Nous contacter</h2>
		<p class="mb-5 lg:mb-10">
			Nous restons à l'écoute de toute vos appréciations et différentes
			préoccupations
		</p>
		<div class="w-full mx-auto flex flex-wrap justify-between">
			<div class="w-full md:w-1/2 mb-10">
				<form>
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full lg:w-1/2 px-3 mb-6 sm:mb-0">
							<label
								class="block uppercase tracking-wide text-primary-600 text-xs font-bold mb-2"
								for="fullName"
							>
								Nom et prénoms
							</label>
							<input
								class="appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
								id="fullName"
								type="text"
								placeholder="John Doe"
							/>
						</div>
						<div class="w-full lg:w-1/2 px-3">
							<label
								class="block uppercase tracking-wide text-primary-600 text-xs font-bold mb-2"
								for="email"
							>
								Adresse mail
							</label>
							<input
								class="appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="email"
								type="email"
								placeholder="exemple@gmail.com"
							/>
						</div>
					</div>
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full px-3">
							<label
								class="block uppercase tracking-wide text-primary-600 text-xs font-bold mb-2"
								for="message"
							>
								Message
							</label>
							<textarea
								class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500bg-gray-200"
								id="message"
								placeholder="Ecrivez votre message ici"
								rows="10"
							></textarea>
						</div>
					</div>

					<button class="primary_btn" type="submit">
						Envoyer
						<box-icon
							name="send"
							animation="fade-right-hover"
							color="currentColor"
						></box-icon>
					</button>
				</form>
			</div>
			<div class="w-full md:w-1/2">
				<div class="flex flex-wrap justify-center sm:justify-around">
					<div
						class="py-5 px-3 w-80 sm:w-72 h-auto bg-gray-100 rounded-md shadow-inner mb-8 flex items-center"
					>
						<div class="pr-4">
							<box-icon
								size="lg"
								color="currentColor"
								name="globe-alt"
							></box-icon>
						</div>
						<div>
							<h6 class="font-bold text-primary-600 mb-3">Localisation :</h6>

							<ul>
								<li>Cotonou Bénin,</li>
								<li>Quartier Nom de rue</li>
							</ul>
						</div>
					</div>

					<div
						class="py-5 px-3 w-80 sm:w-72 h-auto bg-gray-100 rounded-md shadow-inner mb-8 flex items-center"
					>
						<div class="pr-4">
							<box-icon
								size="lg"
								color="currentColor"
								name="chat"
							></box-icon>
						</div>
						<div>
							<h6 class="font-bold text-primary-600 mb-3">Contact :</h6>

							<ul>
								<li>+229 12345678</li>
								<li>esgisbenin@gmail.com</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!-- 
			<div id="myMap w-full">
				<GmapMap
					:center="{ lat: 6.373906, lng: 2.424923 }"
					:zoom="30"
					map-type-id="terrain"
					class="contact_card"
				>
					<GmapMarker
						:key="index"
						v-for="(m, index) in markers"
						:position="m.position"
						:clickable="true"
						:draggable="true"
						@click="center = m.position"
					/> -->
			<!-- </GmapMap> -->
			<!-- </div> -->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				coordinates: {
					lat: 0,
					lng: 0,
				},
			};
		},
	};
</script>

<style>
	.contact_card {
		width: 425px;
		height: 425px;
	}

	@media screen and (min-width: 425px) {
		.contact_card {
			width: 425px;
		}
	}
</style>
