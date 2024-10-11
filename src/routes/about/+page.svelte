<script lang="ts">
    import Tile from '$lib/components/Tile.svelte';
    import Paragraph from '$lib/components/Paragraph.svelte';
    import PicText from '$lib/components/PicText.svelte';
    import Title from '$lib/components/Title.svelte';
</script>

<Tile>
    <Paragraph title="Présentation">
        Laetitia Rizzello Réflexologue certifié RNCP en 2024
        (Ecole A Fleur de Peau à Paris)
    </Paragraph>
</Tile>
<Tile>
    <Title title="Mon parcours">
        <PicText left={true} img_path="laetitia.jpg" img_alt="Laetitia Rizzello" img_max_width="30em">
            Depuis aussi loin que je me souvienne,
            j’ai toujours ressenti beaucoup d’empathie envers les personnes
            et les êtres vivants en général.
            <br><br>
            Plus tard, je me suis intéressée aux méthodes naturelles
            car j’ai toujours eu plaisir à prendre soin de mon entourage.
            <br><br>
            L’importance que j’attache au bien-être en général,
            mêlé à mon expérience personnelle, m’ont amené à m’intéresser
            à différentes techniques naturelles dont la réflexologie fait partie.
            <br><br>
            A l’aube de mes 50 ans, après plus de 30 ans en tant que salariée,
            j'ai donc décidé de concrétiser ma passion pour le bien-être.
            <br><br>
            Je souhaite désormais accompagner mes futurs clients pour les aider
            à retrouver un mieux-être au quotidien.
        </PicText>
    </Title>
</Tile>
