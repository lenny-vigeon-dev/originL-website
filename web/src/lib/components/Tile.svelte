<script lang="ts">
    import "$lib/styles.css";

</script>

<div class="outer">
    <div class="inner">
        <slot />
    </div>
</div>

<style>
    .outer {
        display: flex;
        width: 100%;
        height: 100%;
        background-color: var(--color2);
        border-radius: 0.4em;
        box-shadow: 0px 0px 1em 0.1em black;
    }
    .inner {
        flex: 1 1;
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
