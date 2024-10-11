<script lang="ts">
    import PracticeTemplate from '$lib/components/PracticeTemplate.svelte';
    import Tile from '$lib/components/Tile.svelte';
    import PicText from '$lib/components/PicText.svelte';
    import TextTile from '$lib/components/TextTile.svelte';
</script>

<PracticeTemplate title="Refléxologie auriculaire">
    <Tile>
        <PicText img_path="reflexo_auriculaire.png"
        img_alt="Refléxologie auriculaire" img_width="30%">
            La réflexologie auriculaire consiste en la stimulation de points et
            zones réflexes situés sur l’oreille réalisée à l’aide d’un stylet.
            <br><br>
            La réflexologie auriculaire se pratique à l’aide d’un stylet à bout rond
            et se pratique sans aiguille (il ne s’agit pas d’acupuncture).
        </PicText>
    </Tile>
    <TextTile bg_color="transparent">
        Elle apporte une réponse efficace pour atténuer les inconforts physiques
        et les perturbations émotionnelles. Après les séances, l'oreille étant
        facilement accessible, il est possible de pratiquer des autostimulations
        avec simplicité et discrétion.
    </TextTile>
</PracticeTemplate>
