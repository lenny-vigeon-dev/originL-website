<script lang="ts">
    export let title: string;
    export let background: string | null = null;

    let extra_style: string = "";
    if (background !== null) {
        extra_style = `background-image: url(${background})`;
    }


</script>

<div class="parent">
    <div class="title" style={extra_style}>
        <h1>{title}</h1>
    </div>
    <slot/>
</div>

<style>
    .parent {
        width: 100%;
        background-color: var(--color1);
        display: flex;
        flex-direction: column;
    }

    .title {
        width: 100%;
        height: 20vh;

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    h1 {
        text-align: center;
        color: var(--color4);
        font-size: clamp(1em, 8vw, 5em);
    }

</style>
