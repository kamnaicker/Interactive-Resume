<script lang="ts">
	import Lightswitch from '$lib/components/Lightswitch.svelte';
	import Card from '$lib/components/Card.svelte';
	import ProfileHeader from '$lib/components/profile-header.svelte';
	import KeyStats from '$lib/components/key-stats.svelte';

	// Example data — pull from stores, props, or an API as needed
	const profile = {
		name: 'Kamrin Naicker',
		position: 'Full-Stack Engineer',
		techStack: ['Svelte', 'TypeScript', 'TailwindCSS', 'Skeleton UI'],
		avatarUrl: '/jane-doe.jpg',
		email: 'kamrinnaicker@gmail.com',
		github: 'https://github.com/kamnaicker',
		linkedin: 'https://www.linkedin.com/in/kamrin-naicker-4177765a/'
	};
</script>

<main class="space-y-10 p-6">
	<!-- light/dark theme toggle -->
	<Lightswitch />
	<ProfileHeader
		name={profile.name}
		position={profile.position}
		techStack={profile.techStack}
		avatarUrl={profile.avatarUrl}
		email={profile.email}
		github={profile.github}
		linkedin={profile.linkedin}
	/>
	<KeyStats />
</main>
