<script lang="ts">
    import "$lib/styles.css";

    export let title: string;
    export let content: string;
    export let href: string = "/";

</script>

<div class="contact-info">
    <p>{title}<a class="link" {href}>{content}</a></p>
</div>

<style>
    .contact-info {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    a {
        color: var(--color3);
        font-size: 1em;
    }
    a:hover {
        color: var(--color4);
    }

    p {
        font-size: 1.5em;
    }

    @media (max-width: 800px) {
        p, a {
            font-size: 1em;
            text-align: center;
        }

        .contact-info {
            flex-direction: column;
        }
    }
</style>
