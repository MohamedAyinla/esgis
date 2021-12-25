<template>
	<div class="w-full bg-hero-pattern">
		<div
			class="grid grid-cols-1 xl:grid-cols-2 justify-center items-center gap-5 min-h-screen max-w-7xl mx-auto"
		>
			<div
				class="w-full px-4 sm:w-10/12 sm:px-7 md:w-3/4 lg:w-3/5 xl:w-full xl:px-9"
			>
				<div class="flex flex-col gap-y-9">
					<h1 class="">
						Commencez votre parcours vers votre
						<span class="underline underline-offset-8 decoration-pink-500"
							>vie professionnelle</span
						>
					</h1>

					<p class="text-md md:text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem velit, cum quo pariatur minus similique soluta
						facilis voluptatibus hic doloribus nobis eius placeat minima sint
						repudiandae iste rerum nihil sit!
					</p>

					<div>
						<button class="primary_btn">
							<box-icon
								name="edit-alt"
								color="currentColor"
								type="solid"
							></box-icon>
							Candidater
						</button>
					</div>

					<div class="flex gap-x-6">
						<button class="primary_btn-outline">
							<box-icon
								type="solid"
								color="currentColor"
								name="graduation"
							></box-icon>
							A propos de l'école
						</button>
						<button class="primary_btn-outline">
							<box-icon color="currentColor" name="list-minus"></box-icon>
							Nos formations
						</button>
					</div>
				</div>
			</div>

			<div class="hidden xl:block"></div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style>
	.bg-hero-pattern {
		background: url('../assets/Groupe 3.png') no-repeat;
		background-size: cover;
	}

	.primary_btn {
		@apply bg-primary-600 transition-all hover:bg-primary-700 text-white 
		text-sm py-2 px-3 
		sm:text-base sm:py-3 sm:px-4 
		md:text-lg md:py-4 md:px-5 
		rounded-md flex flex-row items-center 
		gap-x-2;
	}

	.primary_btn-outline {
		@apply border-primary-600 text-black transition-all hover:bg-primary-600 hover:text-white 
		text-sm py-2 px-3 
		sm:text-base sm:py-3 sm:px-4 
		md:text-lg md:py-4 md:px-5 
		border-2 rounded-md flex flex-row items-center gap-x-2;
	}
</style>
