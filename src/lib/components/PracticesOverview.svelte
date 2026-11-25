<script lang="ts">
  import type { PracticeInformation } from '$lib/data/practice-information';

  interface Props {
    practices: readonly PracticeInformation[];
  }

  let { practices }: Props = $props();
</script>

<section
  class="box-border w-full bg-[var(--color1)] px-6 py-12 min-[901px]:px-12 min-[901px]:py-16"
>
  <div class="mx-auto w-full max-w-[1280px]">
    <header class="mx-auto max-w-[850px] text-center">
      <p
        class="m-0 mb-4 text-base tracking-[0.12em] text-[var(--color4)] uppercase"
      >
        Découvrir mon accompagnement
      </p>

      <h1
        class="m-0 font-[family-name:var(--font-title)] text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.15] font-bold text-[var(--color4)]"
      >
        Mes pratiques
      </h1>

      <p class="mt-6 text-xl leading-relaxed text-[var(--color4)]">
        Les pieds, les mains, le visage ou les oreilles :
        chaque pratique propose une approche différente.
        Retrouvez ici une première présentation pour mieux
        comprendre ce que je vous propose.
      </p>
    </header>

    <aside
      class="mt-10 rounded-[20px] border border-[var(--color2)] bg-[var(--color5)] p-6 min-[901px]:p-8"
    >
      <h2
        class="m-0 font-[family-name:var(--font-title)] text-[1.75rem] leading-tight font-bold text-[var(--color4)]"
      >
        Vous ne savez pas quelle pratique choisir ?
      </h2>

      <p class="mt-4 text-xl leading-relaxed text-[var(--color4)]">
        Vous n’avez pas besoin de le décider avant de venir.
        Nous prenons le temps d’échanger sur vos attentes,
        puis nous choisissons ensemble le déroulement de la séance.
      </p>
    </aside>

    <div
      class="mt-10 grid grid-cols-1 items-stretch gap-6 min-[801px]:grid-cols-2 min-[1401px]:grid-cols-3"
    >
      {#each practices as practice (practice.id)}
        <a
          href={`/practices/${practice.id}`}
          class="group flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-[var(--color2)] bg-[var(--color5)] text-base text-[var(--color4)] no-underline transition-colors hover:border-[var(--color3)] hover:text-[var(--color4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color4)]"
        >
          <div class="w-full overflow-hidden bg-[var(--color5)]">
            <img
              src={practice.image}
              alt={practice.imageAlt}
              loading="lazy"
              class="block aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
            />
          </div>

          <div class="flex w-full flex-1 flex-col box-border p-6">
            <h2
              class="m-0 font-[family-name:var(--font-title)] text-[1.75rem] leading-tight font-bold text-[var(--color4)]"
            >
              {practice.title}
            </h2>

            <p class="mt-4 text-lg leading-relaxed text-[var(--color4)]">
              {practice.description}
            </p>

            <div class="mt-auto pt-6">
              <span
                class="inline-flex items-center gap-3 text-lg font-semibold text-[var(--color4)]"
              >
                Découvrir cette pratique
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </a>
      {/each}
    </div>

    <footer
      class="mt-12 border-t border-[var(--color2)] pt-8 text-center"
    >
      <p class="m-0 text-xl leading-relaxed text-[var(--color4)]">
        Vous souhaitez prendre un moment pour vous ?
      </p>

      <a
        href="/reservation"
        class="mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color4)] bg-[var(--color4)] px-7 py-3 text-lg font-semibold text-[var(--color1)] no-underline transition-colors hover:bg-[var(--color3)] hover:text-[var(--color1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color4)]"
      >
        Prendre rendez-vous
      </a>
    </footer>
  </div>
</section>