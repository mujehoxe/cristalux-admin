<script>
	import Fa from 'svelte-fa';
	import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

	export let totalRows = 0;
	export let perPage = 0;
	export let currentPage = 1;

	/** @type {() => Promise<{ products: any; }>} */
	export let loadPage;

	$: totalPages = Math.ceil(totalRows / perPage);
	$: currentPage;

	function isPageSelected(page) {
		return page === currentPage;
	}
</script>

{#key currentPage}
	{#if totalRows && totalRows > perPage}
		<nav class="flex justify-center items-center gap-2">
			<button
				on:click={() => {
					currentPage -= 1;
					loadPage();
				}}
				disabled={currentPage === 0 ? true : false}
				aria-label="left arrow icon"
				aria-describedby="prev"
			>
				<Fa icon={faCaretLeft} />
			</button>
			<span id="prev" class="sr-only">Load previous {perPage} rows</span>
			<div
				class="overflow-x-auto whitespace-nowrap max-w-full flex justify-center items-center gap-2"
			>
				{#each Array(totalPages) as _, index (index)}
					<button
						class={`px-2 rounded-full ${
							isPageSelected(index) && 'bg-indigo-700'
						}`}
						on:click={() => {
							currentPage = index;
							loadPage();
						}}
						disabled={isPageSelected(index) ? true : false}
						aria-label={`page number ${index}`}
						aria-describedby="next"
					>
						<p>{index + 1}</p>
					</button>
				{/each}
			</div>
			<button
				on:click={() => {
					currentPage += 1;
					loadPage();
				}}
				disabled={currentPage === totalPages - 1 ? true : false}
				aria-label="right arrow icon"
				aria-describedby="next"
			>
				<Fa icon={faCaretRight} />
			</button>
			<span id="next" class="sr-only">Load next {perPage} rows</span>
		</nav>
	{/if}
{/key}
