<script>
	import { faPlus } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let id;

	let imageFile = 'Aucun fichier choisi';

	function handleImageChange(event) {
		const fileInput = event.target;

		if (fileInput.files && fileInput.files[0]) {
			imageFile = fileInput.files[0].name;
		} else {
			imageFile = 'Aucun fichier choisi';
		}
	}
</script>

<div {id} class="rounded-md h-[5rem] min-w-[5rem] overflow-hidden">
	<div
		class="max-w-lg flex justify-center p-4 border-2 border-gray-300 border-dashed rounded-md"
	>
		<div class="space-y-1 text-center">
			<Fa class="m-auto text-slate-500" icon={faPlus} />
			<div class="flex text-sm text-gray-600">
				<label
					for={'images-' + id}
					class="relative m-auto w-24 line-clamp-2 truncate cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
				>
					<span class="overflow-hidden">{imageFile}</span>
					<input
						id={'images-' + id}
						name="images"
						type="file"
						accept=".jpg, .jpeg, .png"
						class="sr-only"
						on:change={handleImageChange}
					/>
				</label>
			</div>
		</div>
	</div>
</div>
