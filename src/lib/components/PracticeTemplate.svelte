<script lang="ts">
    export let title: string;

</script>


<h1>{title}</h1>
<slot/>

<style>
    h1 {
        /* position: sticky; */
        text-align: center;
        color: var(--color4);
        font-size: 5em;
    }

    @media (max-width: 800px) {
        h1 {
            font-size: 3em;
        }
    }

</style>
