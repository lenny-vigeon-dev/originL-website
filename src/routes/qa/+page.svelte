<script lang="ts">
  import FAQQuestion from '$lib/components/QAQuestion.svelte';
</script>

<svelte:head>
  <title>FAQ</title>
  <meta
    name="description"
    content="Retrouvez les réponses aux questions fréquentes concernant les réservations."
  />
</svelte:head>

<main class="h-full overflow-y-auto bg-[var(--color1)] px-6 py-16">
  <section class="mx-auto max-w-4xl">
    <header class="mb-12 text-center">
      <h1
        class="font-[var(--font-title)] text-4xl text-[var(--color4)] md:text-5xl"
      >
        Questions fréquentes
      </h1>

      <p class="mt-4 text-[var(--color4)]">
        Retrouvez ici toutes les informations utiles concernant votre réservation.
      </p>
    </header>

    <div>
      <FAQQuestion question="Comment se déroule une réservation ?">
        <p>
          Vous serez installé(e) confortablement sur ma table de massage, 
          avec un coussin sous la tête et les genoux. 
          Une couverture sera à votre disposition pour vous assurer un confort optimal.
          <br /><br />
          Pendant la séance, j’appliquerai la méthode de réflexologie en identifiant avec vous les zones 
          les plus sensibles, en lien avec les échanges que nous aurons eu au préalable. 
          Nous travaillerons ensemble sur ces zones afin de favoriser votre bien-être.
        </p>
      </FAQQuestion>

      <FAQQuestion question="Quelle est la durée d'une séance ?">
        <p>
          Une séance dure environ 1h dont 30 à 40 minutes de massage.
          <br /><br />
          La durée annoncée pour chaque prestation est estimative et ne prend pas en compte le temps d’installation
          et d’échange préalable. Les personnes devront prévoir environ 20 minutes supplémentaires
          pour les temps d’installation et fin de séance.
          <br /><br />
          <strong>Première séance:</strong>
          <br />
          Lors de notre première séance, qui durera un peu plus longtemps (environ 1h30), 
          je vous inviterai à partager les raisons de votre visite.
        </p>
      </FAQQuestion>
    </div>
  </section>
</main>