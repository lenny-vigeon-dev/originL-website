<script lang="ts">
    import PracticeTemplate from '$lib/components/PracticeTemplate.svelte';
    import Tile from '$lib/components/Tile.svelte';
    import PicText from '$lib/components/PicText.svelte';
    import TextTile from '$lib/components/TextTile.svelte';

</script>

<PracticeTemplate title="Massage plantaire ou palmaire">
    <Tile>
        <PicText img_path="massage_plantaire_ou_palmaire.png"
        img_alt="Massage plantaire ou palmaire" img_width="40vw">
            Cette prestation a pour vocation d’offrir un véritable
            moment de détente à l’une ou l’autres de ces parties du corps
            que sont les pieds ou les mains, sollicitées tout au long de la journée.
            <br>
            Ces massages présentent également un intérêt pour les personnes alitées
            ou qui ne souhaitent pas recevoir un massage corporel.
            <br><br>
            Ce type de massage a pour effet d’induire une profonde relaxation
            et un net assouplissement des zones massées.
            <br><br>
            Les massages plantaires et/ou palmaires peuvent
            également aider à améliorer la qualité du sommeil.
        </PicText>
    </Tile>
</PracticeTemplate>
