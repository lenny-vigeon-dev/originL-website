<script lang="ts">
  import BasicContainer from '$lib/components/BasicContainer.svelte';
  import FAQAccordion from '$lib/components/FAQAccordion.svelte';
  import SendMail from '$lib/components/SendMail.svelte';
</script>

<svelte:head>
  <title>Questions fréquentes — Laetitia Rizzello</title>

  <meta
    name="description"
    content="Préparez votre visite : réservation, déroulement, durée des séances et accès au cabinet de Laetitia Rizzello."
  />
</svelte:head>

<BasicContainer>
  <section
    class="w-full box-border bg-[var(--color1)] px-6 py-12 min-[901px]:px-12 min-[901px]:py-16"
  >
    <div class="mx-auto w-full max-w-[1280px]">
      <header class="mx-auto mb-12 max-w-[850px] text-center">
        <h1
          class="m-0 font-[family-name:var(--font-title)] text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.15] font-normal text-[var(--color4)]"
        >
          Questions fréquentes
        </h1>

        <p
          class="mt-5 text-xl leading-relaxed text-[var(--color4)]"
        >
          Première visite, réservation ou préparation de votre séance :
          retrouvez ici les réponses à vos questions.
        </p>
      </header>

      <div
        class="grid grid-cols-1 items-start gap-10 min-[1001px]:grid-cols-[0.85fr_1.35fr] min-[1001px]:gap-12"
      >
        <aside
          class="overflow-hidden rounded-[20px] border border-[var(--color2)] bg-[var(--color5)]"
        >
          <img
            src="/salle_reflexo.jpg"
            alt="La salle de consultation de Laetitia Rizzello"
            class="block aspect-[4/3] w-full object-cover"
          />

          <div class="p-6 min-[901px]:p-8">
            <h2
              class="m-0 font-[family-name:var(--font-title)] text-[2rem] leading-tight font-normal text-[var(--color4)]"
            >
              Votre première séance
            </h2>

            <p
              class="mt-4 text-lg leading-relaxed text-[var(--color4)]"
            >
              Je vous accueille dans un espace calme, où nous prenons
              le temps d’échanger sur vos attentes et votre confort.
            </p>

            <p
              class="mt-4 text-lg leading-relaxed text-[var(--color4)]"
            >
              Vous hésitez entre plusieurs prestations ?
              Vous pouvez me contacter avant de réserver.
            </p>
          </div>
        </aside>

        <div class="min-w-0">
          <h2
            class="m-0 mb-6 font-[family-name:var(--font-title)] text-[2rem] leading-tight font-normal text-[var(--color4)]"
          >
            Avant votre visite
          </h2>

          <div class="flex flex-col gap-4">
            <FAQAccordion question="Comment prendre rendez-vous ?">
              <p>
                Vous pouvez réserver directement depuis la page
                « Prendre rendez-vous ». Sélectionnez un créneau
                disponible dans le calendrier, puis complétez
                les informations demandées.
              </p>

              <p>
                Si vous avez une question avant de réserver,
                vous pouvez également me contacter par téléphone
                ou par email.
              </p>
            </FAQAccordion>

            <FAQAccordion question="Comment se déroule une séance ?">
              <p>
                La séance commence par un échange pour connaître
                vos attentes et adapter mon accompagnement.
              </p>

              <p>
                Vous serez installé(e) confortablement sur ma table
                de massage, avec des coussins et une couverture
                à votre disposition.
              </p>

              <p>
                Pendant la séance, les gestes et les pressions sont
                adaptés à votre ressenti. Vous pouvez me signaler
                une sensibilité ou demander une pause à tout moment.
              </p>
            </FAQAccordion>

            <FAQAccordion question="Combien de temps faut-il prévoir ?">
              <p>
                La durée dépend de la prestation choisie :
                elle est indiquée sur la page des tarifs.
                Prévoyez environ 20 minutes supplémentaires
                pour l’installation et les échanges.
              </p>

              <p>
                Pour une première séance de réflexologie,
                prévoyez environ 1 h 30 afin de laisser le temps
                nécessaire au bilan personnalisé.
              </p>

              <p>
                <a
                  href="/tarifs"
                  class="text-[1.125rem] underline underline-offset-4 hover:text-[var(--color3)]"
                >
                  Consulter les prestations et tarifs
                </a>
              </p>
            </FAQAccordion>

            <FAQAccordion question="Comment m’habiller pour la séance ?">
              <p>
                Privilégiez une tenue confortable qui permet
                de dégager facilement la zone concernée.
              </p>

              <p>
                Pour les pieds, choisissez un pantalon facile
                à relever. Pour les mains, prévoyez des manches
                qui laissent les poignets accessibles.
              </p>

              <p>
                Les coussins et la couverture sont disponibles
                sur place pour votre confort.
              </p>
            </FAQAccordion>

            <FAQAccordion question="Comment modifier ou annuler mon rendez-vous ?">
              <p>
                Contactez-moi dès que possible par téléphone
                ou par email en précisant votre nom ainsi que
                la date et l’heure du rendez-vous concerné.
              </p>

              <p>
                Nous pourrons convenir ensemble d’un autre créneau
                selon les disponibilités.
              </p>
            </FAQAccordion>

            <FAQAccordion question="Où se trouve le cabinet ?">
              <p>
                Le cabinet se situe au 44 Bis Avenue du Clos
                saint Georges, à Bussy-Saint-Georges, 77600.
              </p>

              <p>
                Vous retrouverez la carte et les coordonnées
                complètes sur la page de prise de rendez-vous.
              </p>

              <p>
                <a
                  href="/reservation"
                  class="text-[1.125rem] underline underline-offset-4 hover:text-[var(--color3)]"
                >
                  Voir les informations d’accès
                </a>
              </p>
            </FAQAccordion>
          </div>
        </div>
      </div>

      <section class="mt-12 min-[901px]:mt-16">
        <h2
          class="m-0 text-center font-[family-name:var(--font-title)] text-[clamp(1.75rem,3vw,2.5rem)] leading-tight font-normal text-[var(--color4)]"
        >
          Vous avez une autre question ?
        </h2>

        <p class="mt-4 text-center text-xl leading-relaxed text-[var(--color4)]">
          Envoyez-moi un message, je serai ravie de vous renseigner.
        </p>

        <div class="mt-8 [&>section]:bg-transparent [&>section]:p-0">
          <SendMail />
        </div>
      </section>
    </div>
  </section>
</BasicContainer>