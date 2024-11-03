<div class="tiles">
    <slot/>
</div>

<style>
    .tiles {
        width: 100%;
        height: 100%;
        display: grid;
        grid-auto-columns: minmax(30em, 80em);
        /* grid-auto-rows: minmax(30em, 30em); */
        gap: 1em;
        grid-template-columns: repeat(auto-fill, minmax(28em, 1fr));
        margin: 1em 0;
    }
    @media (max-width: 800px) {
        .tiles {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 1em;
        }
    }
</style>
