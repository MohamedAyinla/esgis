<template>
	<div class="min-h-screen flex justify-center items-center">
		<div class="max-w-7xl mx-auto bg-secondary-400 grid grid-cols-1 p-5 sm:p-10 md:p-20 lg:grid-cols-2 lg:p-10 xl:p-20 gap-10">
			<div class="flex flex-col gap-y-9">
				<h2 class="">
					Un cursus au sein d'une <span class="underline underline-offset-8 decoration-pink-500">université de renom</span>
				</h2>

				<p class="leading-7 text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ut
					laudantium, non illum aperiam vel debitis deserunt. Consequuntur saepe
					provident, maxime molestias ducimus eos impedit accusantium vitae
					autem exercitationem aut? Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Hic harum maiores necessitatibus et ut voluptates
					consequatur earum laboriosam reiciendis, aut quisquam tempora animi
					omnis atque itaque, saepe rerum natus quae.
				</p>

				<div class="grid grid-cols-2 gap-6">
					<button
						class="white_btn"
					>
						+20 ans d'excellence
					</button>
					<button
						class="white_btn"
					>
						Une plateforme e-learning
					</button>
					<button
						class="white_btn"
					>
						+200 diplômés par an
					</button>
					<button
						class="white_btn"
					>
						Présent sur 3 pays
					</button>
				</div>

				<div>
					<button
						class="primary_btn"
					>
						<box-icon name="plus" color="white"></box-icon>
						En savoir plus
					</button>
				</div>
			</div>

			<div>
                <img class="h-full" src="../assets/university.jpg" alt="">
            </div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style>
	.white_btn {
		@apply bg-blanc text-black transition-all hover:bg-gray-100 
		text-sm py-2 px-3 
		sm:text-base sm:py-3 sm:px-4 
		md:text-lg md:py-4 md:px-5 
		rounded-md flex items-center gap-2;
	}
</style>
