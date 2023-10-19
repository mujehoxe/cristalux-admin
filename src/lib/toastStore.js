import { writable } from 'svelte/store';

const toasts = writable([]);

const addToast = (message, type = 'info') => {
	const toast = {
		title: message,
		description: '',
		duration: 3000,
		placement: 'bottom-right',
		type: type,
		theme: 'dark',
		onClick: () => {},
		onRemove: () => {}
	};
	toasts.update((allToasts) => [...allToasts, toast]);

	setTimeout(() => {
		removeToast(toast);
	}, 3000);
};

const removeToast = (toast) => {
	toasts.update((allToasts) => allToasts.filter((t) => t !== toast));
};

export const toastStore = {
	subscribe: toasts.subscribe,
	addToast,
	removeToast
};
