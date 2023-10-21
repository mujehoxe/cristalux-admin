import { PUBLIC_BASE_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const res = await fetch(`https://cristalux.store/api/v1/orders`);
	const orders = await res.json();
	return { orders };
}
