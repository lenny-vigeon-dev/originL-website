<script lang="ts">
    export let title: string;
    export let background: string;
    export let url: string;

    import StylisedA from "./StylisedA.svelte";

</script>

<div class="practice-card" style="background-image: url({background})">
    <div class="split">
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <h2>{title}</h2>
    </div>
    <div class="split">
        <StylisedA href={url}>En savoir plus</StylisedA>
        <!-- <a href={url}>En savoir plus</a> -->
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
    </div>
</div>

<style>
    .practice-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: space-around; */
        width: 100%;
        height: 100%;

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        text-align: center;
    }

    .split {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        text-align: center;
        justify-content: space-around;
        /* gap: 4em; */
    }

    h2 {
        font-size: calc(100vw / 50);
        font-weight: bold;
        color: var(--color5);
        text-shadow: 1em;
    }

    @media (max-width: 1000px) {
        h2 {
            font-size: min(3em, calc(100vw / 15));
        }

        .practice-card {
            height: 50vw;
        }

    }
</style>
