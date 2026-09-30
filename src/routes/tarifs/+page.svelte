<script lang="ts">
  import TileContainer from '$lib/components/TileContainer.svelte';
  import PricingTile from '$lib/components/PricingTile.svelte';
  import BasicContainer from '$lib/components/BasicContainer.svelte';
</script>

<BasicContainer>
  <TileContainer>
    <PricingTile title="Massage Plantaire « Bien-être »" price={50}>
      Durée: 45 minutes
    </PricingTile>

    <PricingTile title="Massage Palmaire « Bien-être »" price={50}>
      Durée: 45 minutes
    </PricingTile>

    <PricingTile
      title="Massage bien-être des mains + tonification du visage"
      price={60}
    >
      Durée: 60 minutes
    </PricingTile>

    <PricingTile
      title="Massage bien-être des pieds + tonification du visage"
      price={60}
    >
      Durée: 60 minutes
    </PricingTile>

    <PricingTile title="Séance de « Tonification du visage »" price={40}>
      Durée: 30 minutes
    </PricingTile>

    <PricingTile title="Séance de Réflexologie*" price={60}>
      Durée: 60 minutes
      <br />
      * un bilan personnalisé sera établi lors de la première séance.
    </PricingTile>
  </TileContainer>
</BasicContainer>