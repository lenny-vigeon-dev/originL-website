<script lang="ts">
  interface Step {
    number: string;
    title: string;
    description: string;
  }

  const steps: readonly Step[] = [
    {
      number: '01',
      title: 'Nous échangeons',
      description:
        'Nous prenons le temps de parler de vos attentes, de votre ressenti et de votre confort.'
    },
    {
      number: '02',
      title: 'Nous définissons la séance',
      description:
        'Je vous propose les techniques adaptées à cet échange. Nous convenons ensemble du déroulement.'
    },
    {
      number: '03',
      title: 'Nous ajustons',
      description:
        'Les gestes sont adaptés à vos sensations pendant la séance, puis nous faisons le point ensemble.'
    }
  ];
</script>

<section
  class="rounded-[24px] border border-[var(--color2)] bg-[var(--color5)] p-6 min-[801px]:p-10"
>
  <div class="mx-auto max-w-[850px] text-center">
    <h2
      class="m-0 font-[family-name:var(--font-title)] text-[clamp(1.75rem,3vw,2.5rem)] leading-tight font-normal text-[var(--color4)]"
    >
      Une séance construite avec vous
    </h2>

    <p class="mt-4 text-xl leading-relaxed text-[var(--color4)]">
      Vous n’avez pas besoin de savoir quelle pratique choisir.
      Nous prenons cette décision ensemble, à partir de notre échange.
    </p>
  </div>

  <ol
    class="m-0 mt-10 grid list-none grid-cols-1 gap-8 p-0 min-[901px]:grid-cols-3"
  >
    {#each steps as step (step.number)}
      <li class="min-w-0">
        <span
          aria-hidden="true"
          class="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color3)] text-lg text-[var(--color4)]"
        >
          {step.number}
        </span>

        <h3
          class="mt-4 text-xl leading-snug font-semibold text-[var(--color4)]"
        >
          {step.title}
        </h3>

        <p class="mt-3 text-lg leading-relaxed text-[var(--color4)]">
          {step.description}
        </p>
      </li>
    {/each}
  </ol>
</section>