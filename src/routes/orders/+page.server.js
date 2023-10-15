/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const res = await fetch(`http://localhost:3000/api/v1/orders`);
	const orders = await res.json();
	return { orders };
}
