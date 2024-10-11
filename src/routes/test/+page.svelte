<script lang="ts">
    import Practices from "$lib/components/Practices.svelte";
    import Title from "$lib/components/Title.svelte";
    import PicText from "$lib/components/PicText.svelte";
</script>

<div class="parallax-container">
    <div class="parallax-layer s1" style="--depth: -3;">
        <img src="bg1.jpg">
    </div>
    <Practices />
    <Title title="Qui suis-je ?" background_color="var(--color1)">
        <PicText left={true} img_path="laetitia.jpg" img_alt="Laetitia Rizzello" img_max_width="30em">
            Depuis aussi loin que je me souvienne,
            j’ai toujours ressenti beaucoup d’empathie envers les personnes
            et les êtres vivants en général.
            <br><br>
            Plus je me suis intéressée à la psychologie puis aux méthodes naturelles
            car j’ai toujours eu plaisir à prendre soin de mon entourage.
            J’accorde beaucoup d’importance à l’équilibre en général;
            aussi bien sur le plan physique,
            physiologique que psychologique : manger équilibré,
            pratiquer une activité physique régulière ou encore prendre un temps pour soi.
            <br><br>
            L’importance que j’attache au bienêtre en général,
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

</div>

<style>
    .s1 {
        z-index: -20;
    }

  .parallax-container {
      perspective: 1px; /* Create a 3D perspective */
      overflow-x: hidden;
      overflow-y: auto;
      height: 100vh;
      position: relative;
  }

  .parallax-layer {
      /* Full width and height for the parallax layer */
      position: relative;
      height: 100vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      color: white;
      background-size: cover;
      background-position: center;
      transform: translateZ(calc(var(--depth) * 1px)) scale(calc(1 + abs(var(--depth)))); /* Creates the depth illusion */
  }
</style>
