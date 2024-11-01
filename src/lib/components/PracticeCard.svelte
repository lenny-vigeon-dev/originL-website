<script lang="ts">
    export let title: string;
    export let background: string;
    export let url: string;

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
        <a href={url}>En savoir plus</a>
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

    a {
        background-color: var(--color3);
        color: white;
        border: none;
        padding: 0.5em 1em;
        border-radius: 0.5em;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    a:hover {
        background-color: var(--color4);
    }

    @media (max-width: 1000px) {
        h2 {
            font-size: min(3em, calc(100vw / 15));
        }

        .practice-card {
            height: 130vw;
        }

    }
</style>
