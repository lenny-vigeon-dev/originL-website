<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    href: string;
    children?: Snippet;
  }

  let { href, children }: Props = $props();
</script>

<a
  {href}
  class="inline-block cursor-pointer rounded-[0.3em] bg-[var(--color3)] px-[1.5em] py-[0.7em] text-white transition-colors hover:bg-[var(--color4)]"
>
  {@render children?.()}
</a>