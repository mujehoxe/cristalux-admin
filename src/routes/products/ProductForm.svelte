<script>
	import AddImage from './AddImage.svelte';
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';

	import Combo from './Combo.svelte';
	import Image from '$lib/Image.svelte';
	let creating = false;

	function navigateBack() {
		if (browser) window.history.back();
	}

	export let product;
	export let categories;
	export let action;

	let thumbnailFile = 'Aucun fichier choisi';

	function handleThumnailChange(event) {
		const fileInput = event.target;

		if (fileInput.files && fileInput.files[0]) {
			thumbnailFile = fileInput.files[0].name;
		}
	}

	function removeImage(imageToRemove) {
		product.images = product.images.filter((image) => image !== imageToRemove);
	}
</script>

<h3 class="text-lg leading-6 font-medium text-gray-900">Produit</h3>
{#key creating}
	<form
		class="space-y-8 divide-y divide-gray-200"
		method="post"
		action={`?/${action}`}
		enctype="multipart/form-data"
		use:enhance={() => {
			creating = true;

			return async ({ update, result }) => {
				await update();
				creating = false;
				product = result.data;
			};
		}}
	>
		<div
			class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
		>
			<label
				class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
				for="name">Nom de produit</label
			>
			<div class="mt-1 sm:mt-0 sm:col-span-2">
				<input
					type="text"
					name="name"
					class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
					value={product.name}
				/>
			</div>
		</div>

		<div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
			<div
				class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
			>
				<label
					for="description"
					class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
				>
					Description
				</label>
				<div class="mt-1 sm:mt-0 sm:col-span-2">
					<textarea
						rows="3"
						name="description"
						class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
						value={product.description}
						placeholder="Quelques phrases sur le produit..."
					/>
				</div>
			</div>

			<div
				class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
			>
				<label
					for="category"
					class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
					>Category</label
				>
				<Combo selectedItem={product.category} items={categories} />
			</div>

			<div
				class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
			>
				<label
					for="price"
					class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
				>
					Prix
				</label>
				<div class="mt-1 sm:mt-0 sm:col-span-2">
					<input
						type="number"
						name="price"
						class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
						bind:value={product.price}
						min="0"
						step="0.01"
					/>
				</div>
			</div>

			<div
				class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
			>
				<label
					class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
					for="percentage">Promotion</label
				>
				<div class="mt-1 sm:mt-0 sm:col-span-2">
					<input
						type="number"
						name="percentage"
						class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
						bind:value={product.percentage}
						step="1"
						min="0"
						max="100"
					/>
				</div>
			</div>

			<div
				class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
			>
				<label
					for="quantity"
					class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
					>Quantity</label
				>
				<div class="mt-1 sm:mt-0 sm:col-span-2">
					<input
						type="number"
						name="quantity"
						class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
						bind:value={product.quantity}
						step="1"
						min="0"
					/>
				</div>
			</div>

			<div
				class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5"
			>
				<label for="thumbnail" class="block text-sm font-medium text-gray-700">
					Image principale
				</label>
				<div class="mt-1 sm:mt-0 sm:col-span-2">
					<div class="flex gap-2 items-center">
						<span class="h-52 w-52 rounded-xl overflow-hidden bg-gray-100">
							<Image image={'http://localhost:3000/' + product.thumbnail} />
						</span>
						<input
							type="file"
							class="ml-5"
							accept=".jpg, .jpeg, .png"
							style="display: none;"
							on:change={handleThumnailChange}
							name="thumbnail"
							id="thumbnail"
						/>
						<div class="flex flex-col w-56 p-4 overflow-hidden items-start">
							<label
								class="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
								for="thumbnail"
							>
								Changer
							</label>
							<p
								class="truncate w-full text-ellipsis overflow-hidden text-left"
							>
								{thumbnailFile}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div
				class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
			>
				<label
					for="other-images"
					class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
					>Autres Images</label
				>
				<div class="flex flex-row gap-2">
					{#key product.images}
						{#if product.images}
							{#each product.images as image, index}
								{#if image}
									<div
										class="rounded-md h-[5rem] min-w-[5rem] overflow-hidden"
										on:dblclick={() => removeImage(image)}
									>
										<Image image={'http://localhost:3000/' + image} />
									</div>
								{:else}
									<AddImage id={index} />
								{/if}
							{/each}
						{/if}
					{/key}
				</div>
			</div>
		</div>

		<div class="pt-5">
			<div class="flex justify-end">
				<button
					type="button"
					class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					on:click={navigateBack}>Cancel</button
				>
				<button
					type="submit"
					class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					{#if !creating}
						Metre a jour
					{:else}
						Enregistrement...
					{/if}
				</button>
			</div>
		</div>
	</form>
{/key}
