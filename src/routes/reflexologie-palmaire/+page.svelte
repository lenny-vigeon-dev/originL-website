<script lang="ts">
    import PracticeTemplate from '$lib/components/PracticeTemplate.svelte';
    import Tile from '$lib/components/Tile.svelte';
    import PicText from '$lib/components/PicText.svelte';
    import TextTile from '$lib/components/TextTile.svelte';
    import BasicContainer from '$lib/components/BasicContainer.svelte';

</script>

<BasicContainer>
    <PracticeTemplate title="Réflexologie palmaire">
        <Tile>
            <PicText img_path="reflexo_palmaire.png"
            img_alt="Réflexologie palmaire" img_width="30%">
                Comme pour le pied, les différentes parties du corps se
                retrouvent également en correspondance sur l’ensemble de
                la main. La réflexologie palmaire consiste en la stimulation
                de points et zones réflexes situés sur la main.
                <br><br>
                La réflexologie palmaire s’intègre parfaitement dans
                l’accompagnement de personnes âgées ou d’enfants.
            </PicText>
        </Tile>
    </PracticeTemplate>
</BasicContainer>

