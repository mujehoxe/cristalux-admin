<script>
	import { faArchive, faBan, faCheck } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	import { toasts } from 'svelte-toasts';

	const showToast = (message) => {
		toasts.add({
			title: message,
			description: '',
			duration: 3000,
			placement: 'bottom-right',
			type: 'info',
			theme: 'dark',
			placement: 'bottom-right',
			type: 'error',
			onClick: () => {},
			onRemove: () => {}
		});
	};

	/** @type {import('./$types').PageData} */
	export let order;

	const statusColors = {
		pending: 'orange',
		accepted: 'green',
		declined: 'red',
		archived: 'gray'
	};

	const statusFr = {
		pending: 'En Attente',
		accepted: 'Accepté',
		declined: 'Rejeté',
		archived: 'Archivé'
	};

	async function handleAccept() {
		try {
			const res = await fetch(`/api/v1/orders/accept/${order.id}`, {
				method: 'PATCH'
			});
			const data = await res.json();

			if (data.affected > 0) order.status = 'accepted';
			else showToast('Deja accepter');
		} catch {
			showToast('Requete échoué');
		}
	}

	async function handleAction(action) {
		const actionState = {
			archive: 'archived',
			decline: 'declined'
		};

		try {
			const res = await fetch(`/api/v1/orders/${action}/${order.id}`, {
				method: 'PATCH'
			});

			order.status = actionState[action];
		} catch (e) {
			showToast('Requete échoué');
		}
	}
</script>

<tr class={`${order.status === 'archived' ? 'opacity-30' : ''}`}>
	<td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
		<div class="flex items-center">
			<div class="ml-4">
				<div class="font-medium text-gray-900">
					{order.firstName}
					{order.lastName}
				</div>
				<div class="text-gray-500" />
				<div class="text-gray-500">{order.phoneNumber}</div>
				<div class="text-gray-500">{order.state}</div>
				<div class="text-gray-500">{order.address}</div>
			</div>
		</div>
	</td>
	<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
		{#each order.orderedProducts as { product, quantity }}
			<div class="text-gray-900">{product.name}</div>
		{/each}
	</td>
	<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
		{#each order.orderedProducts as { product, quantity }}
			<div class="text-gray-500 text-center">
				{order.status === 'pending' ? quantity : '-'}/{product.quantity}
			</div>
		{/each}
	</td>

	<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
		{order.totalPrice && order.totalPrice}
	</td>
	{#key order.status}
		<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
			<span
				class={`inline-flex rounded-full bg-${
					statusColors[order.status]
				}-100 px-2 text-xs font-semibold leading-5 text-${
					statusColors[order.status]
				}-800`}
			>
				{statusFr[order.status]}
			</span>
		</td>
	{/key}
	<td
		class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6"
	>
		<div class="flex flex-row items-center gap-2 justify-center">
			{#if order.status === 'accepted' || order.status === 'declined'}
				<button
					class="rounded-full w-6 h-6 bg-gray-200 flex justify-center items-center"
					on:click={() => handleAction('archive')}
				>
					<Fa icon={faArchive} class="text-gray-800 cursor-pointer" />
				</button>
			{/if}
			{#if order.status === 'pending'}
				<button
					class="rounded-full w-6 h-6 bg-green-200 flex justify-center items-center"
					on:click={() => handleAccept()}
				>
					<Fa icon={faCheck} class="text-green-800 cursor-pointer" />
				</button>
				<button
					class="rounded-full w-6 h-6 bg-red-200 flex justify-center items-center"
					on:click={() => handleAction('decline')}
				>
					<Fa icon={faBan} class="text-red-800 cursor-pointer" />
				</button>
			{/if}
		</div>
	</td>
</tr>
