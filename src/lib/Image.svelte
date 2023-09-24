<script>
	import Fa from 'svelte-fa';
	import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
	export let image;
</script>

{#key image}
	{#if image}
		<img
			class="w-full h-full object-cover bg-slate-400"
			src={image}
			alt="not found"
			on:error={() => (image = null)}
		/>
	{:else}
		<div
			class="flex text-yellow-400 h-full bg-slate-500 flex-col items-center justify-center rounded-t-xl"
		>
			<Fa icon={faTriangleExclamation} />
			<p>Image non trouvée</p>
		</div>
	{/if}
{/key}
