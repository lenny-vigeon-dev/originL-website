<script lang="ts">
  import type { PricingOffer } from '$lib/data/pricing-offers';

  interface Props {
    offer: PricingOffer;
  }

  let { offer }: Props = $props();

  const priceFormatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });

  let priceLabel = $derived(
    offer.price === null
      ? 'Sur demande'
      : priceFormatter.format(offer.price)
  );
</script>

<article
  class="flex h-full min-w-0 box-border flex-col rounded-[20px] border border-[var(--color2)] bg-[var(--color5)] p-6 min-[801px]:p-8"
>
  <h3
    class="m-0 font-[family-name:var(--font-title)] text-[1.875rem] leading-tight font-semibold text-[var(--color4)]"
  >
    {offer.title}
  </h3>

  <p class="mt-4 text-lg leading-relaxed text-[var(--color4)]">
    {offer.description}
  </p>

  <div class="mt-6 border-y border-[var(--color2)] py-5">
    <p
      class="text-[2.25rem] leading-tight font-semibold text-[var(--color4)]"
    >
      {priceLabel}

      {#if offer.price !== null}
        <span class="text-base font-normal">
          {offer.priceUnit}
        </span>
      {/if}
    </p>

    <p class="mt-3 text-lg leading-relaxed text-[var(--color4)]">
      {offer.format}
    </p>
  </div>

  <ul
    class="m-0 mt-6 list-disc space-y-3 pl-5 text-lg leading-relaxed text-[var(--color4)]"
  >
    {#each offer.features as feature (feature)}
      <li>{feature}</li>
    {/each}
  </ul>

  {#if offer.note}
    <p class="mt-5 text-base leading-relaxed text-[var(--color4)]">
      {offer.note}
    </p>
  {/if}

  <div class="mt-auto pt-7">
    <a
      href={offer.ctaHref}
      class="inline-flex min-h-12 w-full box-border items-center justify-center rounded-full bg-[var(--color4)] px-5 py-3 text-center text-lg leading-snug text-[var(--color1)] no-underline transition-colors hover:bg-[var(--color3)] hover:text-[var(--color1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color4)]"
    >
      {offer.ctaLabel}
    </a>
  </div>
</article>