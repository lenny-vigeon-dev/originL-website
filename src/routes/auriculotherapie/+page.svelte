<script lang="ts">
    import PracticeTemplate from '$lib/components/PracticeTemplate.svelte';
    import Tile from '$lib/components/Tile.svelte';
    import PicText from '$lib/components/PicText.svelte';
    import TextTile from '$lib/components/TextTile.svelte';
</script>

<PracticeTemplate title="L’auriculothérapie">
    <Tile>
        <PicText img_path="auriculotherapie.png"
        img_alt="L’auriculothérapie" img_width="35vw">
            La réflexologie auriculaire consiste en la stimulation de points et
            zones réflexes situés sur l’oreille réalisée à l’aide d’un stylet.
            <br><br>
            Elle fut découverte en 1951 par un médecin français,
            le Dr  Paul Nogier qui mit en évidence une correspondance
            de tous les points du corps au niveau de l’oreille,
            représentant ainsi le schéma d’un fœtus inversé.
            <br><br>
            La réflexologie auriculaire se pratique à l’aide d’un stylet à bout rond
            et se pratique sans aiguille (il ne s’agit pas d’acupuncture).
        </PicText>
    </Tile>
    <TextTile bg_color="transparent">
        Elle permet une prise en charge très efficace des douleurs et
        troubles émotionnels. En suivi de séance, la facilité d’accessibilité
        de l’oreille permet de pratiquer des autostimulations avec aisance et discrétion.
    </TextTile>
</PracticeTemplate>
