<script lang="ts">
  import { onMount } from 'svelte';
  import { addOnScreenTrigger } from '$lib/fadein';
  import PracticeCard from './PracticeCard.svelte';
  import Title from './Title.svelte';

  onMount(() => {
    addOnScreenTrigger('[data-fade-in]');
  });
</script>

<section class="flex flex-wrap items-center justify-center bg-[var(--color1)]">
  <div data-fade-in class="flex flex-col items-center justify-center">
    <Title title="Mes pratiques" position="center">
      <p>
        Grâce à mes différentes pratiques, je vous propose un accompagnement
        personnalisé, pensé pour répondre à vos besoins.
      </p>
    </Title>
  </div>

  <div
    class="flex h-auto w-full flex-col items-center justify-center min-[1001px]:h-[calc(100vw/3.5)] min-[1001px]:flex-row"
  >
    <PracticeCard title="Réflexologie plantaire" background="reflexo_plantaire.jpg" url="/reflexologie-plantaire" />
    <PracticeCard title="Réflexologie palmaire" background="reflexo_palmaire.jpg" url="/reflexologie-palmaire" />
    <PracticeCard title="Réflexologie auriculaire" background="reflexo_auriculaire.jpg" url="/reflexologie-auriculaire" />
    <PracticeCard title="Réflexologie faciale" background="reflexo_faciale.jpg" url="/reflexologie-faciale" />
    <PracticeCard title="Massage plantaire ou palmaire" background="massage_plantaire_ou_palmaire.jpg" url="/massage-plantaire-ou-palmaire" />
  </div>
</section>

<style>
  [data-fade-in] {
    opacity: 0;
    transition: opacity 1s;
  }
</style>