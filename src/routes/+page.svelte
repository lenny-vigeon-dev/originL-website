<script lang="ts">
    import Tile from '$lib/components/Tile.svelte';
    import TileContainer from '$lib/components/TileContainer.svelte';
    import Paragraph from '$lib/components/Paragraph.svelte';
</script>

<Tile>
    <Paragraph title="Qu’est-ce que la Réflexologie ?">
        La réflexologie, issue de méthodes traditionnelles chinoises ancestrales,
        est une technique de massage par légères pressions manuelles
        sur des zones précises de notre corps.<br><br>

        Chaque partie de notre corps relie une « zone réflexe »
        que l’on retrouve notamment au niveau des pieds, des mains, des oreilles
        ou encore du visage.<br><br>

        La Réflexologie permet d’harmoniser le corps et le mental,
        de libérer les tensions dans notre organisme, pour nous aider à retrouver
        un mieux-être au quotidien, tant sur le plan physique qu’émotionnel.
    </Paragraph>
</Tile>
<Tile bg_color="transparent">
    <Paragraph title="Les bienfaits de la Réflexologie">
        Relaxer, Apaiser, Équilibrer…<br><br>
        Bien au-delà des bienfaits relaxant du massage, la réflexologie
        apaise les tensions et contribue à rétablir l’équilibre dont le corps
        a besoin pour réguler les fonctions de l’organisme telles que la respiration,
        les fonctions digestives, le sommeil ou encore la pensée.
    </Paragraph>
</Tile>
<Tile>
    <Paragraph title="Pour quoi ? Pour qui ?">
        La réflexologie permet de prévenir certains déséquilibres
        que peut engendrer le stress sur notre organisme.
        Elle s’adresse à toute personne qui ressent le besoin de
        relâcher des tensions tant sur le plan physique que psychique.<br><br>
        A noter cependant que la réflexologie est déconseillée aux personnes souffrant de
        certaines pathologies telles que le diabète, phlébite …<br><br>
        <strong>En cas de doute, il convient de demander un avis médical avant toute séance.</strong>
    </Paragraph>
</Tile>

<div style="width: 100%;">
    <iframe title="Cabinet location" width="100%" height="800px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42027.80112133329!2d2.6676070417730133!3d48.82506841788993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x800f49a2c705615d%3A0x83891d781e24f1da!2sLaetitia%20RIZZELLO!5e0!3m2!1sfr!2sfr!4v1723067000812!5m2!1sfr!2sfr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<Tile>
    <a class="reservation" href="/reservation">Prendre rendez-vous</a>
</Tile>

<!-- <TileContainer>
    <Tile>
        <iframe title="Intriduction video" width="100%" height="100%" src="https://www.youtube.com/embed/uFM3QT7Q620?si=nCTlTYzH3VVrttPg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Tile>
    <Tile>
        <iframe title="Cabinet location" width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42027.80112133329!2d2.6676070417730133!3d48.82506841788993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x800f49a2c705615d%3A0x83891d781e24f1da!2sLaetitia%20RIZZELLO!5e0!3m2!1sfr!2sfr!4v1723067000812!5m2!1sfr!2sfr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Tile>
</TileContainer> -->

<style>
    .reservation {
        width: 100%;
        color: var(--color4);
        background-color: var(--color5);
        padding: 0.3em;
        /* box-shadow: 0px 0px 0px 0.02em black; */
	    transition: color 0.2s ease; /* Add a smooth color transition on hover */
        text-align: center;
        font-size: 1.5em;
        font-weight: bold   ;
    }
    .reservation:hover {
        color: var(--color3);
    }


</style>
