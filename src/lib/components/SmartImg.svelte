<script lang="ts">
  import { onMount } from 'svelte';
  import type { HTMLImgAttributes } from 'svelte/elements';

  interface Props extends Omit<HTMLImgAttributes, 'src' | 'srcset'> {
    srcset: string[] | string;
    alt: string;
  }

  let { srcset, alt, ...rest }: Props = $props();
  let currentSrc = $state('');

  let sources = $derived(typeof srcset === 'string' ? [srcset] : srcset);

  onMount(() => {
    let cancelled = false;

    async function load(): Promise<void> {
      for (const source of sources.slice(1)) {
        const preload = new Image();
        preload.src = source;

        try {
          await preload.decode();
          if (cancelled) return;
          currentSrc = source;
        } catch {
          // Keep the last successfully loaded source.
        }
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  });
</script>

<img class="smart-img" src={currentSrc || sources[0] || ''} {alt} {...rest} />