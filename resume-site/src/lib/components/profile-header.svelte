<script lang="ts">
	import type { ProfileHeaderProps } from '$lib/models/profileHeader';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import { Github, Linkedin, Mail } from '@lucide/svelte/icons';

	export let name: string;
	export let position: string;
	export let techStack: string[];
	export let avatarUrl: string = '/favicon.png';
	export let email: string = 'johndoe@example.com';
	export let github: string = 'https://github.com/johndoe';
	export let linkedin: string = 'https://linkedin.com/in/johndoe';
</script>

<div class="relative mx-auto mb-16 max-w-4xl">
	<!-- Background gradient glow -->
	<div
		class="from-primary/10 absolute inset-0 -z-10 h-48 rounded-lg bg-gradient-to-r to-transparent"
	></div>

	<div
		class="flex flex-col items-start justify-between gap-6 px-6 pt-8 md:flex-row md:items-center"
	>
		<div class="space-y-4">
			<!-- Name with gradient text -->
			<h1
				class="from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-4xl font-bold md:text-5xl"
			>
				{name}
			</h1>

			<div class="space-y-3">
				<!-- Position -->
				<p class="text-muted-foreground text-xl md:text-2xl">{position}</p>

				<!-- Tech stack badges -->
				<div class="flex flex-wrap gap-2">
					{#each techStack as tech (tech)}
						<span class="badge preset-filled-secondary-500 px-3 py-1 text-sm">
							{tech}
						</span>
						<!-- :contentReference[oaicite:0]{index=0} -->
					{/each}
				</div>

				<!-- Social / contact icons -->
				<div class="flex gap-3 pt-2">
					<a
						href={`mailto:${email}`}
						aria-label="Email"
						class="btn-icon preset-outlined-primary-500"
					>
						<Mail size={18} />
					</a>
					<a
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						class="btn-icon preset-outlined-primary-500"
					>
						<Github size={18} />
					</a>
					<a
						href={linkedin}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						class="btn-icon preset-outlined-primary-500"
					>
						<Linkedin size={18} />
					</a>
				</div>
				<!-- :contentReference[oaicite:1]{index=1} -->
			</div>
		</div>
		<!-- Right side: avatar + glow -->
		<div class="relative">
			<!-- Glow ring -->
			<div
				class="from-primary to-primary/50 absolute rounded-full bg-gradient-to-r opacity-70 blur"
			></div>

			<!-- Solid border + clipping -->
			<div class="border-background relative h-28 w-28 overflow-hidden rounded-full border-4">
				<!-- Avatar fills 100% of wrapper -->
				<Avatar
					src={avatarUrl}
					{name}
					size="h-full w-full"
					rounded="rounded-full"
					imageClasses="object-cover h-full w-full"
				/>
			</div>
		</div>
	</div>
</div>
