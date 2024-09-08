<script lang="ts">
    import PracticeTemplate from '$lib/components/PracticeTemplate.svelte';
    import Tile from '$lib/components/Tile.svelte';
    import PicText from '$lib/components/PicText.svelte';
    import TextTile from '$lib/components/TextTile.svelte';

</script>

<PracticeTemplate title="Réflexologie plantaire">
    <Tile>
        <PicText img_path="reflexo_plantaire.png"
        img_alt="Réflexologie plantaire" img_width="60%">
            La réflexologie plantaire consiste en la stimulation de
            points et zones réflexes situés sur l’ensemble du pied.
            <br><br>
            Elle induit une relaxation profonde et permettrait ainsi de
            réduire l’anxiété.
        </PicText>
    </Tile>
    <TextTile bg_color="transparent">
        Elle s’intègre aussi parfaitement dans le cadre de soins de support pour les
        personnes qui ressentent d’importantes tensions. Elle est pratiquée à la fois dans les
        centres de bien-être tels que les centres de Thalasso, SPA ou centres de remise en
        forme, mais également en milieu hospitalier.
    </TextTile>
</PracticeTemplate>
