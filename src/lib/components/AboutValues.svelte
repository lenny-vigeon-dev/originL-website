<script lang="ts">
  interface Value {
    id: string;
    number: string;
    title: string;
    description: string;
  }

  const values: readonly Value[] = [
    {
      id: 'listening',
      number: '01',
      title: 'L’écoute',
      description:
        'Prendre le temps de comprendre vos attentes, vos sensations et ce qui vous amène à consulter, dans un échange attentif et bienveillant.'
    },
    {
      id: 'personalization',
      number: '02',
      title: 'La personnalisation',
      description:
        'Construire ensemble votre séance, choisir les techniques et ajuster l’accompagnement à vos attentes du moment.'
    },
    {
      id: 'comfort',
      number: '03',
      title: 'Le confort',
      description:
        'Adapter les gestes et les pressions à votre sensibilité, respecter vos limites et vous permettre de vous exprimer à tout moment.'
    }
  ];
</script>

<section
  class="w-full box-border bg-[var(--color1)] px-6 py-12 min-[801px]:px-12 min-[801px]:py-16"
>
  <div class="mx-auto w-full max-w-[1280px]">
    <header class="mx-auto max-w-[800px] text-center">
      <h2
        class="m-0 font-[family-name:var(--font-title)] text-[clamp(1.75rem,3vw,2.75rem)] leading-tight font-bold text-[var(--color4)]"
      >
        Ce qui guide mon accompagnement
      </h2>

      <p class="mt-5 text-xl leading-relaxed text-[var(--color4)]">
        Chaque personne arrive avec une histoire et des attentes différentes.
        Ces trois repères sont au cœur de ma façon de vous accueillir.
      </p>
    </header>

    <div
      class="mt-10 grid grid-cols-1 items-stretch gap-6 min-[901px]:grid-cols-3"
    >
      {#each values as value (value.id)}
        <article
          class="min-w-0 rounded-[20px] border border-[var(--color2)] bg-[var(--color5)] p-7 min-[901px]:p-8"
        >
          <span
            aria-hidden="true"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color3)] text-lg text-[var(--color4)]"
          >
            {value.number}
          </span>

          <h3
            class="mt-6 font-[family-name:var(--font-title)] text-[1.75rem] leading-tight font-bold text-[var(--color4)]"
          >
            {value.title}
          </h3>

          <p class="mt-4 text-xl leading-relaxed text-[var(--color4)]">
            {value.description}
          </p>
        </article>
      {/each}
    </div>
  </div>
</section>