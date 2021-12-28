<template>
	<div class="bg-noir w-full mx-auto">
		<div class="py-10 md:py-16 lg:py-32 px-5 md:px-9 max-w-7xl mx-auto">
			<h2 class="lg:pl-10 xl:pl-0 text-white">
				Ce qu'en disent
				<span class="underline underline-offset-8 decoration-pink-500">nos lauréats</span>
			</h2>

			<div class="mt-10">
				<swiper class="swiper" :options="swiperOption">
					<swiper-slide v-for="person in persons" :key="person.fullName">
						<div
							class="shadow-lg h-80 w-full mx-auto sm:w-96 md:w-80 lg:w-96 rounded-xl bg-gray-100 flex flex-col justify-between p-5 relative my-10"
						>
							<div class="absolute -top-5 right-0">
								<box-icon
									type="solid"
									size="lg"
									color="#BF1E2D"
									name="quote-right"
								></box-icon>
							</div>
							<div class="rounded-full w-16 h-16 bg-secondary-900"></div>

							<p>
								{{ person.saying }}
							</p>

							<div>
								<p>{{ person.fullName }}</p>
								<p>{{ person.topic }}</p>
							</div>
						</div>
					</swiper-slide>

					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				swiperOption: {
					autoHeight: true,
					slidesPerView: 1,
					spaceBetween: 30,
                    // centeredSlides: true,
					grabCursor: true,
					loop: true,
					// mousewheel: true,
					keyboard: {
						enabled: true,
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
						dynamicBullets: true,
					},
					autoplay: {
						delay: 4000,
						disableOnInteraction: false,
					},
					breakpoints: {
						1280: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
					},
				},
				persons: [
					{
						fullName: 'Jack Berret',
						saying:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia, iure debitis quo illum sit obcaecati ex blanditiis ad suscipit possimus, doloribus sunt reprehenderit',
						topic: 'Developpeur web',
					},
					{
						fullName: 'Justin Berret',
						saying:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia, iure debitis quo illum sit obcaecati ex blanditiis ad suscipit possimus, doloribus sunt reprehenderit',
						topic: 'Developpeur mobile',
					},
					{
						fullName: 'Jacki Berret',
						saying:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia, iure debitis quo illum sit obcaecati ex blanditiis ad suscipit possimus, doloribus sunt reprehenderit',
						topic: 'Developpeur web',
					},
					{
						fullName: 'Jackie Berret',
						saying:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia, iure debitis quo illum sit obcaecati ex blanditiis ad suscipit possimus, doloribus sunt reprehenderit',
						topic: 'Developpeur web',
					},
				],
			};
		},
	};
</script>

<style></style>
