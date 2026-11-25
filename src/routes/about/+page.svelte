<script lang="ts">
  import PicText2 from '$lib/components/PicText2.svelte';
  import Title from '$lib/components/Title.svelte';
  import BasicContainer from '$lib/components/BasicContainer.svelte';
  import ContactMail from '$lib/components/ContactMail.svelte';
  import AboutValues from '$lib/components/AboutValues.svelte';
</script>

<svelte:head>
  <title>À propos — Laetitia Rizzello</title>

  <meta
    name="description"
    content="Découvrez le parcours de Laetitia Rizzello, son approche personnalisée de la réflexologie et son cabinet à Bussy-Saint-Georges."
  />
</svelte:head>

<BasicContainer>
  <section
    class="w-full box-border bg-[var(--color1)] px-6 py-12 min-[801px]:px-12 min-[801px]:py-16"
  >
    <header class="mx-auto max-w-[1000px] text-center">
      <p
        class="mb-4 text-base tracking-[0.12em] text-[var(--color4)] uppercase"
      >
        Faisons connaissance
      </p>

      <h1
        class="m-0 font-[family-name:var(--font-title)] text-[clamp(2rem,4vw,3.5rem)] leading-[1.15] font-bold text-[var(--color4)]"
      >
        Laetitia Rizzello, votre réflexologue
      </h1>

      <p
        class="mx-auto mt-6 max-w-[800px] text-2xl leading-relaxed text-[var(--color4)]"
      >
        Vous offrir un temps pour souffler, être écouté(e)
        et prendre soin de vous.
      </p>

      <p class="mt-5 text-lg leading-relaxed text-[var(--color4)]">
        Réflexologue certifiée RNCP en 2024
        — École À Fleur de Peau, Paris.
      </p>
    </header>
  </section>

  <PicText2
    left={true}
    img_path="/laetitia.jpg"
    img_alt="Laetitia Rizzello, réflexologue à Bussy-Saint-Georges"
    background_color_img="var(--color5)"
  >
    <Title title="Mon parcours" position="center">
      <div
        class="w-full [&_p]:m-0 [&_p]:text-[1.5rem] [&_p]:leading-relaxed [&_p+p]:mt-6"
      >
        <p>
          Depuis aussi loin que je me souvienne, j’ai toujours ressenti
          beaucoup d’empathie envers les personnes et les êtres vivants
          en général.
        </p>

        <p>
          Plus tard, je me suis intéressée aux méthodes naturelles,
          car j’ai toujours eu plaisir à prendre soin de mon entourage.
          L’équilibre et le bien-être ont progressivement pris
          une place importante dans ma vie.
        </p>

        <p>
          Cette sensibilité, mêlée à mon expérience personnelle,
          m’a amenée à découvrir différentes techniques naturelles,
          dont la réflexologie.
        </p>

        <p>
          Après plus de trente ans en tant que salariée,
          j’ai décidé de concrétiser cette passion et de m’engager
          dans une nouvelle voie professionnelle.
        </p>

        <p>
          Formée à l’École À Fleur de Peau à Paris et certifiée en 2024,
          je souhaite aujourd’hui vous accompagner dans une démarche
          de détente et de mieux-être au quotidien.
        </p>
      </div>
    </Title>
  </PicText2>

  <AboutValues />

  <section
    class="w-full box-border bg-[var(--color5)] px-6 py-12 min-[801px]:px-12 min-[801px]:py-16"
  >
    <div
      class="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-8 min-[1001px]:grid-cols-2 min-[1001px]:gap-12"
    >
      <div class="min-w-0">
        <h2
          class="m-0 font-[family-name:var(--font-title)] text-[clamp(1.75rem,3vw,2.75rem)] leading-tight font-bold text-[var(--color4)]"
        >
          Un espace pour vous accueillir
        </h2>

        <p class="mt-6 text-xl leading-relaxed text-[var(--color4)]">
          Je vous accueille à Bussy-Saint-Georges, dans un espace
          pensé pour vous installer confortablement et prendre
          un moment pour vous.
        </p>

        <p class="mt-5 text-xl leading-relaxed text-[var(--color4)]">
          La table de massage, les coussins et la couverture
          permettent d’adapter votre installation à vos besoins.
          Nous prenons le temps de vérifier votre confort
          avant de commencer.
        </p>

        <p class="mt-5 text-xl leading-relaxed text-[var(--color4)]">
          Vous n’avez pas besoin de connaître les différentes pratiques
          pour venir. Notre échange nous permettra de choisir ensemble
          le déroulement de votre séance.
        </p>

        <a
          href="/practices"
          class="mt-7 inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color4)] px-6 py-3 text-lg text-[var(--color5)] bg-[var(--color4)] no-underline transition-colors hover:bg-[var(--color3)] hover:text-[var(--color1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color4)]"
        >
          Découvrir mes pratiques
        </a>
      </div>

      <img
        src="/salle_reflexo.jpg"
        alt="La salle de consultation avec la table de massage"
        loading="lazy"
        class="block aspect-[4/3] w-full min-w-0 rounded-[20px] object-cover"
      />
    </div>
  </section>

  <div
    class="w-full border-t border-[var(--color2)] [&_form]:rounded-[16px] [&_form]:border [&_form]:border-[var(--color2)] [&_form]:bg-[var(--color1)]"
  >
    <ContactMail
      title="Mes coordonnées"
      phoneNumber="+33 6 11 26 62 58"
      email="reflexo.lr@gmail.com"
      address="44 Bis Avenue du Clos saint Georges, Bussy-Saint-Georges 77600"
      openingHours="Le samedi de 9 heures à 17 heures"
    />
  </div>
</BasicContainer>