import { Activity } from '@lucide/svelte';

export interface Stat {
	id: string;
	label: string;
	value: number;
	icon: typeof Activity; // component reference
	suffix?: string;
	description: string;
	color: string;
}
