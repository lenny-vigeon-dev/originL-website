<script lang="ts">
    import "$lib/styles.css";
    import PracticeCard from "./PracticeCard.svelte";
    import { onMount } from 'svelte';
    import { addOnScreenTrigger } from "$lib/fadein";
    import Title from "./Title.svelte";

    onMount(() => {
        addOnScreenTrigger("[fade-in]");
    });

</script>

<section class="parent">
   <div fade-in class="description">
        <Title title="Mes pratiques" position="center">
          <p>Grâce à mes différentes pratiques, je vous propose un accompagnement personnalisé, pensé pour répondre à vos besoins.</p>
        </Title>
   </div>
   <div class="practice">
        <PracticeCard title="Réflexologie plantaire" background="reflexo_plantaire.png" url="/reflexologie-plantaire"/>
        <PracticeCard title="Réflexologie palmaire" background="reflexo_palmaire.png" url="/reflexologie-palmaire"/>
        <PracticeCard title="Réfléxologie auriculaire" background="reflexo_auriculaire.png" url="/reflexologie-auriculaire"/>
        <PracticeCard title="Réfléxologie faciale" background="reflexo_faciale.png" url="/reflexologie-faciale"/>
        <PracticeCard title="Massage plantaire ou palmaire" background="massage_plantaire_ou_palmaire.png" url="/massage-plantaire-ou-palmaire"/>
   </div>
</section>

<style>
  .parent {
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap; /* Allow items to wrap */
    align-items: center;
    justify-content: center;
    /* width: 100%; */
    background-color: var(--color1);
  }

    .description {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* width: 100%; */
    }
    .practice {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: calc(100vw / 3.5);
    }

    [fade-in] {
      opacity: 0;
      transition: 1s;
    }


    @media (max-width: 1000px) {
        .practice {
            flex-direction: column;
            height: auto;
        }
    }

</style>
