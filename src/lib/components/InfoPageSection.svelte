<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    imageSrc: string;
    imageAlt: string;
    children: Snippet;
    ctaHref?: string | null;
    ctaLabel?: string;
  }

  let {
    title,
    imageSrc,
    imageAlt,
    children,
    ctaHref = '/reservation',
    ctaLabel = 'Prendre rendez-vous'
  }: Props = $props();
</script>

<section class="box-border w-full bg-[var(--color1)]">
  <div
    class="mx-auto grid w-full max-w-[1400px] box-border grid-cols-1 items-center gap-8 px-6 py-10 min-[901px]:grid-cols-[1.1fr_1fr] min-[901px]:gap-[clamp(2rem,7vw,6rem)] min-[901px]:px-12"
  >
    <div class="min-w-0">
      <h1
        class="m-0 font-[family-name:var(--font-title)] text-[clamp(2rem,4vw,3.75rem)] leading-[1.15] font-normal text-[var(--color4)]"
      >
        {title}
      </h1>

      <div
        class="mt-6 font-[family-name:var(--font-body)] text-[var(--color4)] [&_p]:m-0 [&_p]:text-[1.5rem] [&_p]:leading-[1.6] [&_p+p]:mt-4"
      >
        {@render children()}
      </div>

      {#if ctaHref}
        <a
          href={ctaHref}
          class="mt-4 inline-flex items-center justify-center gap-3 rounded-[2px] bg-[var(--color4)] px-12 py-6 font-[family-name:var(--font-body)] text-[1.2rem] leading-none tracking-[0.08em] text-[var(--color1)] uppercase no-underline transition-colors hover:bg-[var(--color3)] hover:text-[var(--color1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color4)]"
        >
          <span>{ctaLabel}</span>
          <span aria-hidden="true">→</span>
        </a>
      {/if}
    </div>

    <img
      src={imageSrc}
      alt={imageAlt}
      class="block aspect-[28/17] w-full min-w-0 object-cover object-center"
    />
  </div>
</section>