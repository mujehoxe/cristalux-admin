/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const res = await fetch(`cristalux.store/api/v1/products?pageSize=9`);
	const products = await res.json();
	return { products };
}
