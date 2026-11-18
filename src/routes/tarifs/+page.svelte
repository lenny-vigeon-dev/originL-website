<script lang="ts">
  import BasicContainer from '$lib/components/BasicContainer.svelte';
  import PricingIntro from '$lib/components/PricingIntro.svelte';
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
    class="box-border w-full bg-[var(--color1)] px-6 py-12 min-[801px]:px-12 min-[801px]:py-16"
  >
    <div class="mx-auto w-full max-w-[1400px]">
      <PricingIntro>
        <PersonalizedBooking compact />
      </PricingIntro>

      <section
        class="mt-14 min-[801px]:mt-16"
        aria-labelledby="pricing-offers-title"
      >
        <header class="mx-auto mb-8 max-w-[850px] text-center">
          <h2
            id="pricing-offers-title"
            class="m-0 font-[family-name:var(--font-title)] text-[clamp(1.75rem,3vw,2.5rem)] leading-tight font-bold text-[var(--color4)]"
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
        aria-labelledby="pricing-contact-title"
        class="mt-14 scroll-mt-6 border-t border-[var(--color2)] pt-12 min-[801px]:mt-16 min-[801px]:pt-16"
      >
        <div
          class="grid grid-cols-1 items-start gap-8 min-[1001px]:grid-cols-[0.85fr_1.15fr] min-[1001px]:gap-12"
        >
          <div class="min-w-0">
            <img
              src="/laetitia.jpg"
              alt="Laetitia Rizzello, réflexologue à Bussy-Saint-Georges"
              loading="lazy"
              class="mb-8 hidden aspect-[4/3] w-full rounded-[24px] border border-[var(--color2)] object-cover object-[center_30%] min-[1001px]:block"
            />

            <header class="text-center min-[1001px]:text-left">
              <h2
                id="pricing-contact-title"
                class="m-0 font-[family-name:var(--font-title)] text-[clamp(1.75rem,3vw,2.5rem)] leading-tight font-semibold text-[var(--color4)]"
              >
                Parlons de votre accompagnement
              </h2>

              <p class="mt-5 text-xl leading-relaxed text-[var(--color4)]">
                Vous souhaitez connaître les modalités d’un forfait
                ou de la formule mensuelle ?
                Indiquez la formule qui vous intéresse dans votre message.
              </p>

              <p class="mt-4 text-xl leading-relaxed text-[var(--color4)]">
                Si vous hésitez, vous pouvez simplement me faire part
                de vos attentes. Nous prendrons le temps d’en discuter.
              </p>
            </header>
          </div>

          <div
            class="min-w-0 [&>section]:bg-transparent [&>section]:p-0 [&_form]:rounded-[16px] [&_form]:border [&_form]:border-[var(--color2)] [&_form]:bg-white"
          >
            <SendMail />
          </div>
        </div>
      </section>
    </div>
  </section>
</BasicContainer>