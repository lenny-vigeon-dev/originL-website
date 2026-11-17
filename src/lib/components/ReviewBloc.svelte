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

  function previousReview(): void {
    if (reviews.length < 2) return;

    currentIndex =
      (currentIndex - 1 + reviews.length) % reviews.length;
  }

  function nextReview(): void {
    if (reviews.length < 2) return;

    currentIndex = (currentIndex + 1) % reviews.length;
  }

  onMount(() => {
    if (
      reviews.length < 2 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const timer = window.setInterval(
      nextReview,
      Math.max(1000, review_delay_ms)
    );

    return () => window.clearInterval(timer);
  });
</script>

<section
  class="relative w-full overflow-hidden bg-[var(--color1)]"
  aria-label="Avis"
>
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

          <div
            class="my-4 h-[2px] w-[5%] bg-[var(--color4)]"
          ></div>

          <p class="text-2xl">{review.author}</p>
        </div>
      {/each}
    </div>

    {#if reviews.length > 1}
      <div class="flex items-center justify-center gap-6 pb-8">
        <button
          type="button"
          class="review-arrow"
          aria-label="Afficher l’avis précédent"
          onclick={previousReview}
        >
          <span aria-hidden="true">←</span>
        </button>

        <button
          type="button"
          class="review-arrow"
          aria-label="Afficher l’avis suivant"
          onclick={nextReview}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    {/if}
  {/if}
</section>

<style>
  .review-arrow {
    display: inline-flex;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 1px solid var(--color3);
    border-radius: 50%;
    background-color: transparent;
    color: var(--color4);
    font-size: 1.5rem;
    font-weight: normal;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .review-arrow:hover {
    background-color: var(--color5);
  }

  .review-arrow:focus-visible {
    outline: 2px solid var(--color4);
    outline-offset: 3px;
  }
</style>