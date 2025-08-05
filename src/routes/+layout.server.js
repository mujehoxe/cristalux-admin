import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url, cookies }) {
	// Check if user is on login page
	const isLoginPage = url.pathname === `${base}/login` || url.pathname === '/login';
	
	// Check for auth token (you might want to implement proper token validation)
	const authToken = cookies.get('authToken') || cookies.get('admin_token');
	
	// If not authenticated and not on login page, redirect to login
	if (!authToken && !isLoginPage) {
		throw redirect(302, `${base}/login`);
	}
	
	// If authenticated and on login page, redirect to dashboard
	if (authToken && isLoginPage) {
		throw redirect(302, `${base}/`);
	}
	
	return {
		isAuthenticated: !!authToken
	};
}
