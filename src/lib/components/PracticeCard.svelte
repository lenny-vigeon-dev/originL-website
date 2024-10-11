<script lang="ts">
    export let title: string;
    export let background: string;
    export let url: string;

</script>

<div class="practice-card" style="background-image: url({background})">
    <h2>{title}</h2>
    <a href={url}>En savoir plus</a>
</div>

<style>
    .practice-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 30em;

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 1em;
        color: white;
        text-align: center;
    }

    h2 {
        font-size: 2em;
        color: var(--color4);
    }

    a {
        background-color: var(--color4);
        color: white;
        border: none;
        padding: 0.5em 1em;
        border-radius: 0.5em;
        cursor: pointer;
    }
</style>
