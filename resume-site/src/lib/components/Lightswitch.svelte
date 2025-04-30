<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import IconMoon from '@lucide/svelte/icons/moon';
	import IconSun from '@lucide/svelte/icons/sun';

	let mode = $state(false);

	$effect(() => {
		const storedMode = localStorage.getItem('mode') || 'light';
		mode = storedMode === 'dark';
	});

	function handleModeChange(checked: boolean) {
		const newMode = checked ? 'dark' : 'light';
		document.documentElement.setAttribute('data-mode', newMode);
		localStorage.setItem('mode', newMode);
		mode = checked;
	}
</script>

<svelte:head>
	<script>
		const storedMode = localStorage.getItem('mode') || 'light';
		document.documentElement.setAttribute('data-mode', storedMode);
	</script>
</svelte:head>

<Switch
	name="mode"
	controlActive="bg-surface-200"
	checked={mode}
	onCheckedChange={(e) => handleModeChange(e.checked)}
>
	{#snippet inactiveChild()}<IconMoon size="14" />{/snippet}
	{#snippet activeChild()}<IconSun size="14" />{/snippet}
</Switch>
