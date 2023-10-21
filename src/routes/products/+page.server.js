/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const res = await fetch(`/api/v1/products?pageSize=9`);
	const products = await res.json();
	return { products };
}
