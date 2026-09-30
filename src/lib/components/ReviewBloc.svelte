<script lang="ts">
  import { onMount } from 'svelte';
  import Title from './Title.svelte';

  interface ReviewInfo {
    content: string;
    author: string;
  }

  interface Props {
    reviews: ReviewInfo[];
    review_delay_ms?: number;
  }

  let { reviews, review_delay_ms = 3000 }: Props = $props();
  let currentIndex = $state(0);

  onMount(() => {
    if (reviews.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const timer = window.setInterval(() => {
      currentIndex = (currentIndex + 1) % reviews.length;
    }, Math.max(1000, review_delay_ms));

    return () => window.clearInterval(timer);
  });
</script>

<section class="relative w-full overflow-hidden bg-[var(--color1)]" aria-label="Avis">
  <div class="h-[10px] w-full bg-[var(--color5)]"></div>
  <Title title="Avis" position="center" />

  {#if reviews.length > 0}
    <div
      class="flex w-full pb-8 transition-transform duration-500 motion-reduce:transition-none"
      style:transform={`translateX(-${currentIndex * 100}%)`}
    >
      {#each reviews as review, index}
        <div
          class="box-border flex min-w-full flex-col items-center justify-center p-5 text-center"
          aria-hidden={reviews.length > 1 && currentIndex !== index}
        >
          <p class="text-2xl">{review.content}</p>
          <div class="my-4 h-[2px] w-[5%] bg-[var(--color4)]"></div>
          <p class="text-2xl">{review.author}</p>
        </div>
      {/each}
    </div>
  {/if}
</section>