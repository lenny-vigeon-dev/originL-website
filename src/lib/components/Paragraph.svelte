<script lang="ts">
    import "$lib/styles.css";

    export let title: string;
    // export let content: string;

</script>

<div class="paragraph">
    <div class="inner">
        <h2>{title}</h2>
        <div class="content">
            <p><slot/></p>
        </div>
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

    .content {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }

    p {
        font-size: 1.5em;
        width: 100%;
        margin-inline: 3em;
    }

    @media (max-width: 800px) {
        h2 {
            font-size: 2em;
        }

        p {
            font-size: 1em;
            margin-inline: 1em;
        }
    }
</style>
