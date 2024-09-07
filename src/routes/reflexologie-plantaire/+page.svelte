<script lang="ts">
    import Tile from '$lib/components/Tile.svelte';

</script>

<h1>Réflexologie plantaire</h1>
<Tile>
    <div class="img-content">
        <img src="reflexo_plantaire.png" alt="Réflexologie plantaire" />
        <p>
            La réflexologie plantaire consiste en la stimulation de
            points et zones réflexes situés sur l’ensemble du pied.
            <br><br>
            Elle induit une relaxation profonde et permettrait ainsi de
            réduire l’anxiété.
        </p>
    </div>
</Tile>
<Tile bg_color="transparent">
    <p>
        Elle s’intègre aussi parfaitement dans le cadre de soins de support pour les
        personnes qui ressentent d’importantes tensions. Elle est pratiquée à la fois dans les
        centres de bien-être tels que les centres de Thalasso, SPA ou centres de remise en
        forme, mais également en milieu hospitalier.
    </p>
</Tile>


<style>
    img {
        width: 50%;
    }

    p {
        text-align: justify;
        font-size: 1.5em;
        margin-right: 2em;
    }

    h1 {
        /* position: sticky; */
        text-align: center;
        color: var(--color4);
        font-size: 6em;
    }

    .img-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 5em;
    }

</style>
