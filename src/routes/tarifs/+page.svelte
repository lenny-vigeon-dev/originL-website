<script lang="ts">
  import BasicContainer from '$lib/components/BasicContainer.svelte';
  import PersonalizedBooking from '$lib/components/PersonalizedBooking.svelte';
  import PricingOfferCard from '$lib/components/PricingOfferCard.svelte';
  import SendMail from '$lib/components/SendMail.svelte';
  import { pricingOffers } from '$lib/data/pricing-offers';
</script>

<svelte:head>
  <title>Accompagnements et tarifs — Laetitia Rizzello</title>

  <meta
    name="description"
    content="Découvrez les séances personnalisées, les forfaits et la formule mensuelle proposés par Laetitia Rizzello."
  />
</svelte:head>

<BasicContainer>
  <section
    class="w-full box-border bg-[var(--color1)] px-6 py-12 min-[801px]:px-12 min-[801px]:py-16"
  >
    <div class="mx-auto w-full max-w-[1400px]">
      <header class="mx-auto mb-12 max-w-[900px] text-center">
        <h1
          class="m-0 font-[family-name:var(--font-title)] text-[clamp(2rem,4vw,3.25rem)] leading-[1.2] font-normal text-[var(--color4)]"
        >
          Un accompagnement à votre rythme
        </h1>

        <p class="mt-5 text-xl leading-relaxed text-[var(--color4)]">
          Chaque séance commence par un échange.
          Nous choisissons ensemble les pratiques et les gestes
          qui correspondent à vos attentes du moment.
        </p>
      </header>

      <PersonalizedBooking />

      <section class="mt-14 min-[801px]:mt-16">
        <header class="mx-auto mb-8 max-w-[850px] text-center">
          <h2
            class="m-0 font-[family-name:var(--font-title)] text-[clamp(1.75rem,3vw,2.5rem)] leading-tight font-normal text-[var(--color4)]"
          >
            Choisissez votre rythme
          </h2>

          <p class="mt-4 text-xl leading-relaxed text-[var(--color4)]">
            Une séance ponctuelle, un parcours de plusieurs rendez-vous
            ou un moment régulier : nous pouvons en discuter ensemble.
          </p>
        </header>

        <div
          class="grid grid-cols-1 items-stretch gap-6 min-[801px]:grid-cols-2"
        >
          {#each pricingOffers as offer (offer.id)}
            <PricingOfferCard {offer} />
          {/each}
        </div>
      </section>

      <section
        id="contact-tarifs"
        class="mt-14 scroll-mt-6 border-t border-[var(--color2)] pt-12 min-[801px]:mt-16"
      >
        <header class="mx-auto max-w-[800px] text-center">
          <h2
            class="m-0 font-[family-name:var(--font-title)] text-[clamp(1.75rem,3vw,2.5rem)] leading-tight font-normal text-[var(--color4)]"
          >
            Parlons de votre accompagnement
          </h2>

          <p class="mt-4 text-xl leading-relaxed text-[var(--color4)]">
            Vous souhaitez connaître les modalités d’un forfait
            ou de la formule mensuelle ?
            Indiquez la formule qui vous intéresse dans votre message.
          </p>
        </header>

        <div
          class="mt-8 [&>section]:bg-transparent [&>section]:p-0 [&_form]:bg-transparent"
        >
          <SendMail />
        </div>
      </section>
    </div>
  </section>
</BasicContainer>