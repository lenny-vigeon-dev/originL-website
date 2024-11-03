<script lang="ts">
    import "$lib/styles.css";

    export let title: string;
    export let background_color: string = "transparent";
    export let position: string = "left";
    // export let content: string;

</script>

<div class="paragraph" style="background-color: {background_color}">
    <div class="inner" style="text-align: {position}; align-items: {position};">
        <h2>{title}</h2>
        <slot/>
    </div>
</div>

<style>
    .paragraph {
        width: 100%;
    }

    .inner {
        padding: 1em;
        display: flex;
        flex-direction: column;
    }

    h2 {
        font-size: 3em;
        margin-bottom: 0.5em;
    }

    @media (max-width: 800px) {
        h2 {
            font-size: 2em;
            text-align: center;
        }
    }
</style>
