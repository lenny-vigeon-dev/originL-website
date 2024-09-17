<script lang="ts">
    export let title: string;

</script>


<h1>{title}</h1>
<slot/>

<style>
    h1 {
        text-align: center;
        color: var(--color4);
        font-size: clamp(1em, 8vw, 5em);
    }

</style>
