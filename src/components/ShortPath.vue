<template>
	<div class="p-20 container mx-auto bg-secondary-100">
		<div class="grid grid-cols-3">
			<div class="col-span-1 flex flex-col gap-y-9">
				<h3>Une vue sur nos parcours</h3>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime in
					ullam facilis repudiandae mollitia error enim id laboriosam aspernatur
					reiciendis. Enim facere cupiditate sunt beatae ea temporibus
					laboriosam labore laudantium!
				</p>

				<div>
					<button
						class="bg-primary-600 transition-all hover:bg-primary-700 text-white py-2 px-3 rounded-md flex flex-row items-center gap-x-2"
					>
						Voir plus
						<box-icon name="plus" color="currentColor"></box-icon>
					</button>
				</div>
			</div>

			<div class="col-span-2">
				<div class="relative">
					<div class="flex justify-end flex-wrap gap-5 absolute top-14">
						<div
							class="rounded-lg bg-gray-50 w-52 h-52"
							v-for="course in courses"
							:key="course.name"
						>
							{{ course.name }}
						</div>
					</div>
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
