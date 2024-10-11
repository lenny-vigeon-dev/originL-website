<script lang="ts">
    import "$lib/styles.css";
    import PracticeCard from "./PracticeCard.svelte";
</script>

<section class="parent">
   <div class="description">
        <h1>Mes pratiques</h1>
        <p>Hello world</p>
   </div>
   <div class="practice">
        <PracticeCard title="Réflexologie plantaire" background="reflexo_plantaire.png" url="/reflexologie-plantaire"/>
        <PracticeCard title="Réflexologie palmaire" background="reflexo_palmaire.png" url="/reflexologie-palmaire"/>
        <PracticeCard title="Auriculotherapie" background="auriculotherapie.png" url="/auriculotherapie"/>
        <PracticeCard title="Dien Chan" background="dien_chan.png" url="/dien-chan"/>
        <PracticeCard title="Massage plantaire ou palmaire" background="massage_plantaire_ou_palmaire.png" url="/massage-plantaire-ou-palmaire"/>
   </div>
</section>

<style>
    .parent {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: var(--color1);
    }

    .practice {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
</style>
