<script lang="ts">
  interface Props {
    title: string;
    description: string;
    price: number;
    duration: number;
    reservationHref?: string;
  }

  let {
    title,
    description,
    price,
    duration,
    reservationHref = '/reservation'
  }: Props = $props();

  const priceFormatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });

  let formattedPrice = $derived(priceFormatter.format(price));
</script>

<section class="w-full box-border bg-[var(--color1)] px-6 py-12">
  <article
    class="mx-auto w-full max-w-[800px] box-border rounded-[20px] border border-[var(--color2)] bg-[var(--color5)] p-6 min-[801px]:p-12"
  >
    <h2
      class="m-0 font-[family-name:var(--font-title)] text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.2] font-normal text-[var(--color4)]"
    >
      {title}
    </h2>

    <p class="mt-5 text-xl leading-relaxed text-[var(--color4)]">
      {description}
    </p>

    <dl
      class="m-0 mt-8 grid grid-cols-1 gap-6 border-y border-[var(--color2)] py-6 min-[481px]:grid-cols-2"
    >
      <div>
        <dt class="text-lg font-semibold text-[var(--color4)]">
          Durée
        </dt>

        <dd class="m-0 mt-2 text-[1.75rem] leading-tight text-[var(--color4)]">
          {duration} minutes
        </dd>
      </div>

      <div>
        <dt class="text-lg font-semibold text-[var(--color4)]">
          Tarif de la séance
        </dt>

        <dd class="m-0 mt-2 text-[2.5rem] leading-tight text-[var(--color4)]">
          {formattedPrice}
        </dd>
      </div>
    </dl>

    <a
      href={reservationHref}
      class="mt-8 inline-flex min-h-12 w-full box-border items-center justify-center gap-3 rounded-full bg-[var(--color4)] px-6 py-4 text-center text-xl leading-snug text-[var(--color1)] no-underline transition-colors hover:bg-[var(--color3)] hover:text-[var(--color1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color4)]"
    >
      <span>Prendre rendez-vous</span>
      <span aria-hidden="true">→</span>
    </a>
  </article>
</section>