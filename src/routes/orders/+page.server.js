/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const res = await fetch(`cristalux.store/api/v1/orders`);
	const orders = await res.json();
	return { orders };
}
