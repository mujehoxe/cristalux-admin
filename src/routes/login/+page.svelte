<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	let username = '';
	let password = '';
	
	const adminCredentialsNote = 'Use Username: admin, Password: password for login.';

	function handleLogin() {
		// Dummy login, replace with real authentication
		if (username === 'admin' && password === 'password') {
			document.cookie = 'authToken=valid_token; path=/';
			goto(`${base}/`);
		} else {
			alert('Invalid credentials!');
		}
	}
</script>

<form class="max-w-sm mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
	<h2 class="text-2xl mb-4 text-center font-bold text-gray-900">Admin Login</h2>
	<div class="mb-4">
		<label class="block text-sm font-medium text-gray-700" for="username">Username</label>
		<input bind:value={username} type="text" id="username" class="w-full mt-1 px-3 py-2 border rounded" placeholder="Enter your username">
	</div>
	<div class="mb-4">
		<label class="block text-sm font-medium text-gray-700" for="password">Password</label>
		<input bind:value={password} type="password" id="password" class="w-full mt-1 px-3 py-2 border rounded" placeholder="Enter your password">
	</div>
	<button type="button" on:click={handleLogin} class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Login</button>
	
	<!-- Credentials Note -->
	<div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
		<p class="text-sm text-blue-800 text-center">
			<strong>Demo Credentials:</strong><br>
			Username: <code class="bg-blue-100 px-1 rounded">admin</code><br>
			Password: <code class="bg-blue-100 px-1 rounded">password</code>
		</p>
	</div>
</form>
