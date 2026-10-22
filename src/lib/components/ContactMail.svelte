<script lang="ts">
  import Tile from '$lib/components/Tile.svelte';
  import Title from '$lib/components/Title.svelte';
  import ContactInfo from '$lib/components/ContactInfo.svelte';
  import SendMail from '$lib/components/SendMail.svelte';

  interface Props {
    title?: string;
    address?: string;
    phoneNumber?: string;
    email?: string;
    openingHours?: string;
  }

  let {
    title = 'Contact et accès',
    address = '44 Bis Avenue du Clos saint Georges, Bussy-Saint-Georges 77600',
    phoneNumber = '+33 6 11 26 62 58',
    email = 'reflexo.lr@gmail.com',
    openingHours = 'Le samedi de 9 heures à 17 heures'
  }: Props = $props();

  let phoneHref = $derived(
    `tel:${phoneNumber.replace(/\s/g, '')}`
  );

  let mapsHref = $derived(
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  );
</script>

<Tile bg_color="var(--color5)">
  <div
    class="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-start gap-10 min-[1001px]:grid-cols-2 min-[1001px]:gap-12"
  >
    <div class="min-w-0">
      <Title title={title} position="center">
        <div
          class="flex w-full flex-col items-center gap-7 text-center break-words"
        >
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

          <div class="flex w-full flex-col items-center gap-2">
            <p class="text-[1.5rem] leading-relaxed text-[var(--color4)]">
              Horaires :
            </p>

            <p class="text-[1.5rem] leading-relaxed text-[var(--color3)]">
              {openingHours}
            </p>
          </div>
        </div>
      </Title>
    </div>

    <div class="min-w-0">
      <Title title="Envoyez-moi un message" position="center">
        <div
          class="w-full [&>section]:bg-transparent [&>section]:p-0"
        >
          <SendMail />
        </div>
      </Title>
    </div>
  </div>
</Tile>