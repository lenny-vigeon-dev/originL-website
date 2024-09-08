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
            Ces massages présentent également un intérêt pour les personnes alités
            ou qui ne souhaitent pas recevoir un massage corporel.
            <br><br>
            Ce type de massage a pour effet d’induire une profonde relaxation
            mais également d’harmoniser le corps et l’esprit tout en
            procurant une profonde sensation de détente, et un net assouplissement
            des articulations des zones massées.
            <br><br>
            Les massages plantaires et/ ou palmaire peuvent aider à
            réguler l’organisme et à améliorer la qualité du sommeil.
            Il détend la masse musculaire des mains,
            extrêmement sollicité dans la vie quotidienne.
        </PicText>
    </Tile>
</PracticeTemplate>
