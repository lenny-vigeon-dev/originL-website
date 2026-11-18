<script lang="ts">
  interface Props {
    compact?: boolean;
  }

  interface BookingStep {
    number: string;
    title: string;
    description: string;
  }

  let { compact = false }: Props = $props();

  const steps: readonly BookingStep[] = [
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
        'Je vous propose les techniques adaptées. Nous convenons ensemble du déroulement.'
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
  class="box-border w-full rounded-[24px] border border-[var(--color2)] bg-[var(--color5)]"
  class:p-6={compact}
  class:min-[801px]:p-8={compact}
  class:p-8={!compact}
  class:min-[801px]:p-10={!compact}
>
  <header
    class="mx-auto max-w-[850px]"
    class:text-left={compact}
    class:text-center={!compact}
  >
    <h2
      class="m-0 font-[family-name:var(--font-title)] leading-tight font-bold text-[var(--color4)]"
      class:text-[1.75rem]={compact}
      class:text-[clamp(1.75rem,3vw,2.5rem)]={!compact}
    >
      Une séance construite avec vous
    </h2>

    <p class="mt-4 text-lg leading-relaxed text-[var(--color4)]">
      Vous n’avez pas besoin de savoir quelle pratique choisir.
      Nous prenons cette décision ensemble, à partir de notre échange.
    </p>
  </header>

  <ol
    class="m-0 grid list-none grid-cols-1 p-0"
    class:mt-6={compact}
    class:gap-5={compact}
    class:mt-10={!compact}
    class:gap-8={!compact}
    class:min-[901px]:grid-cols-3={!compact}
  >
    {#each steps as step (step.number)}
      <li class="flex min-w-0 items-start gap-4">
        <span
          aria-hidden="true"
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color3)] text-base text-[var(--color4)]"
        >
          {step.number}
        </span>

        <div class="min-w-0">
          <h3
            class="m-0 text-lg leading-snug font-semibold text-[var(--color4)]"
          >
            {step.title}
          </h3>

          <p class="mt-2 text-lg leading-relaxed text-[var(--color4)]">
            {step.description}
          </p>
        </div>
      </li>
    {/each}
  </ol>
</section>