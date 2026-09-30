<script lang="ts">
  import { onMount } from 'svelte';
  import Practices from '$lib/components/Practices.svelte';
  import Title from '$lib/components/Title.svelte';
  import PicText2 from '$lib/components/PicText2.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ReviewBloc from '$lib/components/ReviewBloc.svelte';
  import StylisedA from '$lib/components/StylisedA.svelte';
  import SmartImg from '$lib/components/SmartImg.svelte';
  import { addOnScreenTrigger } from '$lib/fadein';
  import { jsScrollControl } from '$lib/scrollControl';

  let scrollableContainer: HTMLDivElement;

  const reviews = [
    {
      content:
        'Laetitia est une personne extraordinaire et humaine. Les séances se déroulent toujours selon mes besoins. C’est une personne très à l’écoute et ne vous jugera jamais. Elle a pour objectif de vous faire sentir mieux dans votre corps et votre esprit. C’est la meilleure dans le secteur. Je recommande +++',
      author: 'Léa Bouthors'
    },
    {
      content:
        "TOP ! je recommande. On m'a conseillé les services de Laëtitia et je ne regrette pas. Très douce, a l'écoute, Laëtitia a su instauré un climat de confiance.",
      author: 'Sandrine Ferreira'
    }
  ];

  onMount(() => {
    addOnScreenTrigger('[data-fade-in]');

    function handleResize(): void {
      const scrollY = scrollableContainer.scrollTop;
      const maxScrollY =
        scrollableContainer.scrollHeight - scrollableContainer.clientHeight;

      if (scrollY >= maxScrollY) {
        scrollableContainer.scrollTo({ top: 0 });
        scrollableContainer.scrollTo({ top: scrollY });
      }
    }

    window.addEventListener('resize', handleResize);
    jsScrollControl('.parallax-container');

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<div
  bind:this={scrollableContainer}
  class="parallax-container relative h-screen overflow-y-auto"
>
  <div class="parallax-layer relative -z-10">
    <SmartImg
      srcset={['bg1_512.jpg', 'bg1.jpg']}
      alt=""
      aria-hidden="true"
      class="h-screen w-full object-cover"
    />
  </div>

  <div
    data-fade-in
    class="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-[2rem] text-white"
  >
    <h1 class="text-[3rem] text-[var(--color1)] min-[801px]:text-[5rem]">
      Laetitia Rizzello
    </h1>

    <h2 class="text-[2rem] text-[var(--color1)] min-[801px]:text-[4rem]">
      Réflexologue
    </h2>
  </div>

  <Practices />

  <PicText2
    left={true}
    img_path="laetitia.jpg"
    img_alt="Laetitia Rizzello"
    background_color_img="var(--color5)"
  >
    <div data-fade-in>
      <Title title="Qui suis-je ?" position="center">
        <p class="pb-[1em]">
          Depuis aussi loin que je me souvienne,
          j’ai toujours ressenti beaucoup d’empathie envers les personnes
          et les êtres vivants en général.
          <br /><br />
          Plus je me suis intéressée à la psychologie puis aux méthodes naturelles
          car j’ai toujours eu plaisir à prendre soin de mon entourage.
          J’accorde beaucoup d’importance à l’équilibre en général;
          aussi bien sur le plan physique,
          physiologique que psychologique : manger équilibré,
          pratiquer une activité physique régulière ou encore prendre un temps pour soi.
          <br /><br />
          L’importance que j’attache au bienêtre en général,
          mêlé à mon expérience personnelle, m’ont amené à m’intéresser
          à différentes techniques naturelles dont la réflexologie fait partie.
          <br /><br />
          A l’aube de mes 50 ans, après plus de 30 ans en tant que salariée,
          j'ai donc décidé de concrétiser ma passion pour le bien-être.
          <br /><br />
          Je souhaite désormais accompagner mes futurs clients pour les aider
          à retrouver un mieux-être au quotidien.
        </p>

        <StylisedA href="/about">Lire plus</StylisedA>
      </Title>
    </div>
  </PicText2>

  <ReviewBloc {reviews} />
  <Footer />
</div>

<style>
  .parallax-container {
    perspective: 1px;
  }

  .parallax-layer {
    transform: translateZ(-3px) scale(4);
  }

  [data-fade-in] {
    opacity: 0;
    transition: 1s;
  }
</style>