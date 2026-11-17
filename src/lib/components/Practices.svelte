<script lang="ts">
  import { onMount } from 'svelte';
  import { addOnScreenTrigger } from '$lib/fadein';
  import PracticeCard from './PracticeCard.svelte';
  import Title from './Title.svelte';

  interface Practice {
    title: string;
    background: string;
    url: string;
  }

  const practices: readonly Practice[] = [
    {
      title: 'Réflexologie plantaire',
      background: '/reflexo_plantaire.jpg',
      url: '/practices/plantaire'
    },
    {
      title: 'Réflexologie palmaire',
      background: '/reflexo_palmaire.jpg',
      url: '/practices/palmaire'
    },
    {
      title: 'Réflexologie auriculaire',
      background: '/reflexo_auriculaire.jpg',
      url: '/practices/auriculaire'
    },
    {
      title: 'Réflexologie faciale',
      background: '/reflexo_faciale.jpg',
      url: '/practices/faciale'
    },
    {
      title: 'Massage plantaire ou palmaire',
      background: '/massage_plantaire_ou_palmaire.jpg',
      url: '/practices/massage'
    },
    {
      title: 'Tonification du visage',
      background: '/tonification_visage.jpg',
      url: '/practices/tonification-visage'
    }
  ];

  onMount(() => {
    return addOnScreenTrigger('[data-fade-in]');
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
    {#each practices as practice (practice.url)}
      <PracticeCard
        title={practice.title}
        background={practice.background}
        url={practice.url}
      />
    {/each}
  </div>
</section>

<style>
  [data-fade-in] {
    opacity: 0;
    transition: opacity 1s;
  }
</style>