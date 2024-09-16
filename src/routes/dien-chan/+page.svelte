<script lang="ts">
    import PracticeTemplate from '$lib/components/PracticeTemplate.svelte';
    import Tile from '$lib/components/Tile.svelte';
    import PicText from '$lib/components/PicText.svelte';
    import TextTile from '$lib/components/TextTile.svelte';
</script>

<PracticeTemplate title="Dien Chan">
    <Tile>
        <PicText img_path="dien_chan.png"
        img_alt="Dien Chan" img_width="35vw" img_max_width="35%">
            Dien Chan est une méthode développée dans les années 1980
            par le professeur Bui Quoc Chau.
            <br><br>
            Elle se pratique généralement à l’aide d’un stylet
            (instrument à bout rond) ; mais il est possible d’alterner
            avec des techniques manuelles. Cette technicité induit une stimulation
            sensorielle sur le visage et est tout à fait
            adaptée pour tonifier le visage.
        </PicText>
    </Tile>
</PracticeTemplate>
