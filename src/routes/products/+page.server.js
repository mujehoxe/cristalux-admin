/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const res = await fetch(`http://localhost:3000/api/v1/products?pageSize=6`);
	const products = await res.json();
	return { products };
}
