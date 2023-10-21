import { PUBLIC_BASE_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const res = await fetch(`https://cristalux.store/api/v1/products/count`);
	const productCount = await res.json();
	return { productCount };
}
