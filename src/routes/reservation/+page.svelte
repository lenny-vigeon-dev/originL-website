<script lang="ts">
  import BasicContainer from '$lib/components/BasicContainer.svelte';
  import Calendly from '$lib/components/Calendly.svelte';
  import Tile from '$lib/components/Tile.svelte';
  import Title from '$lib/components/Title.svelte';
  import ContactInfo from '$lib/components/ContactInfo.svelte';

  const calendlyUrl =
    'https://calendly.com/jpj220603/30min?background_color=f0e4c6&text_color=756436&primary_color=a6935f';

  const address =
    '44 Bis Avenue du Clos saint Georges, Bussy-Saint-Georges 77600';
  const phoneNumber = '+33 6 11 26 62 58';
  const email = 'reflexo.lr@gmail.com';
  const openingHours = 'Le samedi de 9 heures à 17 heures';

  const phoneHref = `tel:${phoneNumber.replace(/\s/g, '')}`;

  const mapsHref =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const mapsEmbedSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42027.80112133329!2d2.6676070417730133!3d48.82506841788993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x800f49a2c705615d%3A0x83891d781e24f1da!2sLaetitia%20RIZZELLO!5e0!3m2!1sfr!2sfr!4v1723067000812!5m2!1sfr!2sfr';
</script>

<svelte:head>
  <title>Prendre rendez-vous — Laetitia Rizzello</title>
  <meta
    name="description"
    content="Réservez votre rendez-vous avec Laetitia Rizzello et retrouvez les coordonnées et l’adresse du cabinet."
  />
</svelte:head>

<BasicContainer>
  <section class="w-full bg-[var(--color1)] py-10">
    <div class="mx-auto w-full max-w-[1200px]">
      <header class="mb-8 px-6 text-center">
        <h1
          class="m-0 font-[family-name:var(--font-title)] text-[clamp(2rem,4vw,3.25rem)] leading-[1.2] font-normal text-[var(--color4)]"
        >
          Prendre rendez-vous
        </h1>

        <p class="mt-4 text-xl leading-relaxed text-[var(--color4)]">
          Choisissez le créneau qui vous convient dans le calendrier ci-dessous.
        </p>
      </header>

      <Calendly url={calendlyUrl} />
    </div>
  </section>

  <Tile bg_color="var(--color5)">
    <div
      class="mx-auto flex w-full max-w-[1200px] flex-col gap-8 min-[801px]:flex-row min-[801px]:items-stretch"
    >
      <div class="min-w-0 flex-1">
        <Title title="Contact et accès" position="center">
          <div class="flex w-full flex-col items-center gap-6 text-center break-words">
            <ContactInfo
              title="Téléphone :"
              content={phoneNumber}
              href={phoneHref}
            />

            <ContactInfo
              title="Email :"
              content={email}
              href={`mailto:${email}`}
            />

            <ContactInfo
              title="Adresse :"
              content={address}
              href={mapsHref}
            />
            
            <ContactInfo
              title="Horaires :"
              content={openingHours}
              href={mapsHref}
            />
            
          </div>
        </Title>
      </div>

      <div class="min-w-0 flex-1">
        <iframe
          title="Emplacement du cabinet de Laetitia Rizzello"
          src={mapsEmbedSrc}
          class="block h-[350px] w-full border-0 min-[801px]:h-full min-[801px]:min-h-[400px]"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </Tile>
</BasicContainer>