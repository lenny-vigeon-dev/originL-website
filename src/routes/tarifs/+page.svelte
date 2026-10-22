<script lang="ts">
  import PricingTile from '$lib/components/PricingTile.svelte';
  import BasicContainer from '$lib/components/BasicContainer.svelte';
</script>

<BasicContainer>
  <section
    class="w-full box-border bg-[var(--color1)] px-6 py-12 min-[801px]:px-12"
  >
    <div class="mx-auto w-full max-w-[1400px]">
      <h1
        class="m-0 text-center font-[family-name:var(--font-title)] text-[clamp(2rem,4vw,3.25rem)] leading-[1.2] font-normal text-[var(--color4)]"
      >
        Les prestations et tarifs
      </h1>

      <div
        class="mt-10 grid grid-cols-1 items-stretch gap-6 min-[801px]:grid-cols-2 min-[1201px]:grid-cols-3"
      >
        <PricingTile
          title="Massage plantaire « Bien-être »"
          description="Une pause détente consacrée à vos pieds, sollicités tout au long de la journée."
          price={50}
          duration={45}
        />

        <PricingTile
          title="Massage palmaire « Bien-être »"
          description="Un moment de détente pour vos mains, avec des gestes adaptés à votre confort."
          price={50}
          duration={45}
        />

        <PricingTile
          title="Massage des mains et tonification du visage"
          description="Une séance associant le massage bien-être des mains à un travail de tonification du visage."
          price={60}
          duration={60}
        />

        <PricingTile
          title="Massage des pieds et tonification du visage"
          description="Une séance associant le massage bien-être des pieds à un travail de tonification du visage."
          price={60}
          duration={60}
        />

        <PricingTile
          title="Tonification du visage"
          description="Une séance consacrée au visage, associant stimulation sensorielle et gestes adaptés."
          price={40}
          duration={30}
        />

        <PricingTile
          title="Séance de réflexologie"
          description="Un accompagnement personnalisé par la stimulation des points et zones réflexes."
          price={60}
          duration={60}
          note="Un bilan personnalisé sera établi lors de la première séance."
        />
      </div>
    </div>
  </section>
</BasicContainer>