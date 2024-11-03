<script lang="ts">
    import PracticeTemplate from '$lib/components/PracticeTemplate.svelte';
    import Tile from '$lib/components/Tile.svelte';
    import PicText from '$lib/components/PicText.svelte';
    import TextTile from '$lib/components/TextTile.svelte';
  import BasicContainer from '$lib/components/BasicContainer.svelte';
</script>

<BasicContainer>
    <PracticeTemplate title="Refléxologie auriculaire" background="reflexo_auriculaire.png">
        <TextTile bg_color="var(--color5)">
            La réflexologie auriculaire consiste en la stimulation de points et
            zones réflexes situés sur l’oreille réalisée à l’aide d’un stylet.
            <br><br>
            La réflexologie auriculaire se pratique à l’aide d’un stylet à bout rond
            et se pratique sans aiguille (il ne s’agit pas d’acupuncture).
        </TextTile>
        <TextTile bg_color="transparent">
            Elle apporte une réponse efficace pour atténuer les inconforts physiques
            et les perturbations émotionnelles. Après les séances, l'oreille étant
            facilement accessible, il est possible de pratiquer des autostimulations
            avec simplicité et discrétion.
        </TextTile>
    </PracticeTemplate>
</BasicContainer>
