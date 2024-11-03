<script lang="ts">
    import Practices from "$lib/components/Practices.svelte";
    import Title from "$lib/components/Title.svelte";
    import PicText from "$lib/components/PicText.svelte";
    import PicText2 from "$lib/components/PicText2.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import ReviewBloc from "$lib/components/ReviewBloc.svelte";
    import { onMount } from 'svelte';
    import { addOnScreenTrigger } from "$lib/fadein";

    onMount(() => {
        addOnScreenTrigger("[fade-in]");

        const scrollableContainer: Element | null = document.querySelector('.parallax-container');

        if (!scrollableContainer) {
            console.warn('Scrollable container not found');
            return;
        }
        window.addEventListener("resize", () => {
            const scrollY: number = scrollableContainer.scrollTop;
            const maxScrollY: number = scrollableContainer.scrollHeight - scrollableContainer.clientHeight;
            // console.log('Scroll Y:', scrollY, "/", maxScrollY, scrollableContainer.clientHeight, scrollableContainer.scrollHeight);
            if (scrollY >= maxScrollY) {
                scrollableContainer.scrollTo({
                  top: 0,       // The Y position to scroll to
                });
                scrollableContainer.scrollTo({
                  top: scrollY,       // The Y position to scroll to
                });
            }
        });
    });
</script>

<div class="parallax-container">
    <div class="parallax-layer" style="--depth: -3;">
        <img src="bg1.jpg" aria-hidden="true" alt="Page Background">
    </div>
    <div fade-in class="fade-in-title">
        <h1>Laetitia Rizzello</h1>
        <h2>Réflexologue</h2>
    </div>
    <Practices />
    <PicText2 left={true} img_path="laetitia.jpg" img_alt="Laetitia Rizzello" background_color_img="var(--color5)">
        <div fade-in>
            <Title title="Qui suis-je ?" position="center">
                <p>
                    Depuis aussi loin que je me souvienne,
                    j’ai toujours ressenti beaucoup d’empathie envers les personnes
                    et les êtres vivants en général.
                    <br><br>
                    Plus je me suis intéressée à la psychologie puis aux méthodes naturelles
                    car j’ai toujours eu plaisir à prendre soin de mon entourage.
                    J’accorde beaucoup d’importance à l’équilibre en général;
                    aussi bien sur le plan physique,
                    physiologique que psychologique : manger équilibré,
                    pratiquer une activité physique régulière ou encore prendre un temps pour soi.
                    <br><br>
                    L’importance que j’attache au bienêtre en général,
                    mêlé à mon expérience personnelle, m’ont amené à m’intéresser
                    à différentes techniques naturelles dont la réflexologie fait partie.
                    <br><br>
                    A l’aube de mes 50 ans, après plus de 30 ans en tant que salariée,
                    j'ai donc décidé de concrétiser ma passion pour le bien-être.
                    <br><br>
                    Je souhaite désormais accompagner mes futurs clients pour les aider
                    à retrouver un mieux-être au quotidien.
                </p>
            </Title>
        </div>
    </PicText2>
    <ReviewBloc reviews={[
        {"content": "Laetitia est une personne extraordinaire et humaine. Les séances se déroulent toujours selon mes besoins. C’est une personne très à l’écoute et ne vous jugera jamais. Elle a pour objectif de vous faire sentir mieux dans votre corps et votre esprit. C’est la meilleure dans le secteur. Je recommande +++", "author": "Léa Bouthors"},
        {"content": "TOP ! je recommande. On m'a conseillé les services de Laëtitia et je ne regrette pas. Très douce, a l'écoute, Laëtitia a su instauré un climat de confiance.", "author": "Sandrine Ferreira"},
    ]} />
   <Footer/>
</div>

<style>
    [fade-in] {
        opacity: 0;
        transition: 1s;
    }

    .parallax-container {
        perspective: 1px;
        overflow-y: auto; /* Contains the parallax layers fully */
        position: relative;
        height: 100vh;
    }

    .parallax-layer {
        /* Full width and height for the parallax layer */
        position: relative;
        /* height: 100vh;
        width: 100%; */
        z-index: -1;

        transform: translateZ(calc(var(--depth) * 1px)) scale(calc(1 + abs(var(--depth)))); /* Creates the depth illusion */
    }

    .fade-in-title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: white;
        font-size: 2rem;
        z-index: 10;
    }
    .fade-in-title h1 {
        font-size: 5rem;
        color: var(--color1);
    }
    .fade-in-title h2 {
        font-size: 4rem;
        color: var(--color1);
    }


    p {
        font-size: 1.5em;
    }



  .parallax-container img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
  }
</style>
