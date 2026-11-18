<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    imageSrc?: string;
    imageAlt?: string;
    children?: Snippet;
  }

  let {
    imageSrc = '/salle_reflexo.jpg',
    imageAlt = 'La salle de consultation de Laetitia Rizzello',
    children
  }: Props = $props();
</script>

<div
  class="grid grid-cols-1 items-start gap-8 min-[1001px]:grid-cols-2 min-[1001px]:gap-12"
>
  <div class="min-w-0">
    <header class="text-center min-[1001px]:text-left">
      <p
        class="m-0 mb-4 text-base tracking-[0.12em] text-[var(--color4)] uppercase"
      >
        Séances et accompagnements
      </p>

      <h1
        class="m-0 font-[family-name:var(--font-title)] text-[clamp(2rem,4vw,3.25rem)] leading-[1.2] font-bold text-[var(--color4)]"
      >
        Un accompagnement à votre rythme
      </h1>

      <p class="mt-6 text-xl leading-relaxed text-[var(--color4)]">
        Chaque séance commence par un échange.
        Nous choisissons ensemble les pratiques et les gestes
        qui correspondent à vos attentes du moment.
      </p>

      <p class="mt-4 text-xl leading-relaxed text-[var(--color4)]">
        Que vous veniez pour une pause ou pour un accompagnement régulier,
        nous prenons le temps de trouver ce qui vous convient.
      </p>
    </header>

    {#if children}
      <div class="mt-8">
        {@render children()}
      </div>
    {/if}
  </div>

  <figure
    class="m-0 min-w-0 overflow-hidden rounded-[24px] border border-[var(--color2)] bg-[var(--color5)]"
  >
    <img
      src={imageSrc}
      alt={imageAlt}
      class="block aspect-[4/3] w-full object-cover min-[1001px]:aspect-[3/4]"
    />
  </figure>
</div>