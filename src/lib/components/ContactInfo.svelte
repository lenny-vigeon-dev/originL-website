<script lang="ts">
    import "$lib/styles.css";

    export let title: string;
    export let content: string;
    export let href: string = "/";

</script>

<div class="contact-info">
    <p>{title}</p>
    <a class="link" {href}>{content}</a>
</div>

<style>
    .contact-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    a {
        color: var(--color3);
    }
    a:hover {
        color: var(--color4);
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
