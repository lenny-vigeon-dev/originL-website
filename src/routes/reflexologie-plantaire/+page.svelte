<script lang="ts">
    import PracticeTemplate from '$lib/components/PracticeTemplate.svelte';
    import Tile from '$lib/components/Tile.svelte';
    import PicText from '$lib/components/PicText.svelte';
    import TextTile from '$lib/components/TextTile.svelte';
    import BasicContainer from '$lib/components/BasicContainer.svelte';

</script>

<BasicContainer>
    <PracticeTemplate title="Réflexologie plantaire" background="reflexo_plantaire.jpg">
        <TextTile bg_color="var(--color5)">
            La réflexologie plantaire consiste en la stimulation de
            points et zones réflexes situés sur l’ensemble du pied.
            <br><br>
            Elle induit une relaxation profonde et permettrait ainsi de
            réduire les effets de l’anxiété.
            <br><br>
            Elle s'intègre également très bien dans les approches visant à aider
            les personnes qui éprouvent des tensions importantes.
        </TextTile>
    </PracticeTemplate>
</BasicContainer>
