import { addItem, getItem } from "./utils";
import { writable } from 'svelte/store';
import data from 'assets/data.json'
import type { Chat } from "models";

type StoreOptionsType<T> = {
	key?: string;
	subscriber?: (initialValue: T) => (value: T) => void;
};

export const createStore = <T>(
	initialValue: T,
	{ key, subscriber }: StoreOptionsType<T>
) => {
	const storage = getItem<T>(key);
	const store = writable(storage ?? initialValue);
	const { subscribe, set, update } = store;

	if (subscriber) {
		subscribe(subscriber(initialValue));
	}

	if (key) {
		subscribe((value: T) => addItem<T>(key, value));
	}

	return {
		set,
		subscribe,
		update,
		reset: () => {
            set(initialValue);
		},
		initialValue
	};
};

export const chat = createStore<Chat>(data, { key: 'chat' });