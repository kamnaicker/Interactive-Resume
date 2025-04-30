<script lang="ts">
	import { onMount } from 'svelte';
	import { Activity, Award, Code, Package } from '@lucide/svelte/icons';
	import type { Stat } from '$lib/models/stat';

	let ref: HTMLElement;
	let isVisible = false;
	let loading = true;
	let counts: Record<string, number> = {};
	let animated = false; // ← guard flag

	const stats: Stat[] = [
		{
			id: 'years',
			label: 'Years Experience',
			value: 3,
			icon: Activity,
			description: 'Professional software development',
			color: 'bg-blue-100 text-blue-700'
		},
		{
			id: 'projects',
			label: 'Projects Shipped',
			value: 4,
			icon: Package,
			description: 'From concept to production',
			color: 'bg-purple-100 text-purple-700'
		},
		{
			id: 'code',
			label: 'Lines of Code',
			value: 100000,
			suffix: '+',
			icon: Code,
			description: 'Written and reviewed',
			color: 'bg-emerald-100 text-emerald-700'
		},
		{
			id: 'awards',
			label: 'Awards & Recognition',
			value: 3,
			icon: Award,
			description: 'Industry acknowledgments',
			color: 'bg-amber-100 text-amber-700'
		}
	];

	onMount(() => {
		// initialize counts
		stats.forEach((s) => (counts[s.id] = 0));

		// simulate loading
		const timer = setTimeout(() => (loading = false), 1500);

		// observe when stats scroll into view
		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					isVisible = true;
					obs.disconnect();
				}
			},
			{ threshold: 0.1 }
		);
		if (ref) obs.observe(ref);

		return () => {
			clearTimeout(timer);
			obs.disconnect();
		};
	});

	function animateStats() {
		// Set guard flag immediately to avoid re-run
		animated = true;
		stats.forEach((stat) => {
			const duration = 2000;
			const steps = 60;
			const increment = stat.value / steps;
			let current = 0;
			let step = 0;

			const iv = setInterval(() => {
				step++;
				current = Math.min(step * increment, stat.value);
				// Updating counts (creates a new object to trigger re-render)
				counts = { ...counts, [stat.id]: Math.floor(current) };
				if (step >= steps) clearInterval(iv);
			}, duration / steps);
		});
	}

	// Reactive statement triggers animation only once when visible and loaded.
	$: if (isVisible && !loading && !animated) {
		animateStats();
	}
</script>

<article bind:this={ref} class="space-y-6">
	<h2 class="mb-8 text-center text-3xl font-bold">Key Statistics</h2>

	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each stats as stat (stat.id)}
			<div class="card card-hover group relative overflow-hidden text-center">
				<!-- hover overlay -->
				<div
					class="to-muted/30 absolute inset-0 bg-gradient-to-br from-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				></div>

				<!-- header -->
				<div class="card-header flex flex-col items-center pb-2">
					<div class={`mb-2 rounded-full p-3 ${stat.color}`}>
						<svelte:component this={stat.icon} class="h-5 w-5 text-current" />
					</div>
					<h3 class="card-title">{stat.label}</h3>
				</div>

				<!-- content -->
				<div class="card-content">
					{#if loading}
						<!-- skeleton placeholder -->
						<div class="placeholder mx-auto mb-2 h-12 w-24 animate-pulse"></div>
						<!-- :contentReference[oaicite:0]{index=0} -->
					{:else}
						<div class="mb-2 flex items-baseline justify-center text-4xl font-bold">
							<span class="tabular-nums">{counts[stat.id].toLocaleString()}</span>
							{#if stat.suffix}
								<span class="text-muted-foreground ml-1">{stat.suffix}</span>
							{/if}
						</div>
					{/if}
					<p class="card-description">{stat.description}</p>
				</div>
			</div>
			<!-- :contentReference[oaicite:1]{index=1} -->
		{/each}
	</div>
</article>
