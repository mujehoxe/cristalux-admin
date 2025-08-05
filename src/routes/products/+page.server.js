import { BACKEND_API_URL } from '$env/static/private'

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const res = await fetch(`${BACKEND_API_URL}/products?pageSize=9`);
	const products = await res.json();
	return { products };
}
