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
  
  <div class="max-w-4xl mx-auto mb-16 relative">
    <!-- Background gradient glow -->
    <div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-lg -z-10 h-48"></div>
  
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 px-6">
      <div class="space-y-4">
        <!-- Name with gradient text -->
        <h1 class="text-4xl md:text-5xl font-bold bg-clip-text bg-gradient-to-r from-primary to-primary/70">
          {name}
        </h1>
  
        <div class="space-y-3">
          <!-- Position -->
          <p class="text-xl md:text-2xl text-muted-foreground">{position}</p>
  
          <!-- Tech stack badges -->
          <div class="flex flex-wrap gap-2">
            {#each techStack as tech (tech)}
              <span class="badge preset-filled-secondary-500 text-sm px-3 py-1">
                {tech}
              </span>  <!-- :contentReference[oaicite:0]{index=0} -->
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
          </div> <!-- :contentReference[oaicite:1]{index=1} -->
        </div>
      </div>
      <!-- Right side: avatar + glow -->
    <div class="relative">
        <!-- Glow ring -->
        <div class="absolute bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-70"></div>
  
        <!-- Solid border + clipping -->
        <div class="relative h-28 w-28 rounded-full overflow-hidden border-4 border-background">
          <!-- Avatar fills 100% of wrapper -->
          <Avatar
            src={avatarUrl}
            name={name}
            size="h-full w-full"
            rounded="rounded-full"
            imageClasses="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  </div>
  