import { PUBLIC_BASE_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const res = await fetch(`${PUBLIC_BASE_URL}api/v1/orders`);
	const orders = await res.json();
	return { orders };
}
