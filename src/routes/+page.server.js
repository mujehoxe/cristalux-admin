/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const res = await fetch(`/api/v1/products/count`);
	const productCount = await res.json();
	return { productCount };
}
