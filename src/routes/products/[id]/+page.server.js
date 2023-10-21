import { PUBLIC_BASE_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	let res = await fetch(`https://cristalux.store/api/v1/products/${params.id}`);
	const product = await res.json();

	res = await fetch(`https://cristalux.store/api/v1/categories`);
	const categories = await res.json();

	return { product, categories };
}

/** @type {import('./$types').Actions} */
export const actions = {
	update: async ({ fetch, request, params }) => {
		try {
			const formData = await request.formData();
			const data = new FormData();
			console.log(data);
			formData.forEach((value, key) => {
				if (value !== '') {
					if (value.size === undefined) data.append(key, value);
					else if (value.size !== 0) data.append(key, value);
				}
			});
			const res = await fetch(
				'https://cristalux.storehttps://cristalux.store/api/v1/products/' +
					params.id,
				{
					method: 'PATCH',
					body: data
				}
			);
			if (!res.ok) {
				console.log(await res.json());
				throw new Error('Request failed');
			}
			return await res.json();
		} catch (error) {
			console.error('Error:', error);

			return {
				status: 500,
				body: JSON.stringify({ message: 'Internal server error' })
			};
		}
	}
};
