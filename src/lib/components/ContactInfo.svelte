<script lang="ts">
    import "$lib/styles.css";

    export let title: string;
    export let content: string;
    export let href: string = "/";

</script>

<div class="contact-info">
    <p>{title}</p>
    {#if title[title.length - 1] === " "}
        <div style="width: 0.3em;" />
    {/if}

    <a {href}>{content}</a>
</div>

<style>
    .contact-info {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    p, a {
        font-size: 1.5em;
    }
</style>
