import { BACKEND_API_URL } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function DELETE({ params, fetch }) {
	try {
		const response = await fetch(`${BACKEND_API_URL}/products/${params.id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			return new Response(null, { status: 200 });
		} else {
			return json(
				{ error: 'Failed to delete product' },
				{ status: response.status }
			);
		}
	} catch (error) {
		console.error('Error deleting product:', error);
		return json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}
