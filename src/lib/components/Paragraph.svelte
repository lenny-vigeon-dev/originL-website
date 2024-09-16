<script lang="ts">
    import "$lib/styles.css";
    import Title from '$lib/components/Title.svelte';

    export let title: string;
    // export let content: string;

</script>

<Title {title}>
    <div class="content">
        <p><slot/></p>
    </div>
</Title>

<style>
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

        p {
            font-size: 1em;
            margin-inline: 1em;
        }
    }
</style>
