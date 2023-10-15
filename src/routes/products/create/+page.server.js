/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const res = await fetch(`http://localhost:3000/api/v1/categories`);
	const categories = await res.json();

	return { categories };
}

/** @type {import('./$types').Actions} */
export const actions = {
	create: async ({ fetch, request }) => {
		try {
			const formData = await request.formData();
			const data = new FormData();

			formData.forEach((value, key) => {
				if (value !== '' && value.size !== 0) data.append(key, value);
			});

			const res = await fetch('http://localhost:3000/api/v1/products/', {
				method: 'POST',
				body: data
			});

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
