<script lang="ts">
  import BasicContainer from '$lib/components/BasicContainer.svelte';
  import InfoPageSection from '$lib/components/InfoPageSection.svelte';
  import FAQQuestion from '$lib/components/QAQuestion.svelte';
</script>

<BasicContainer>
  <InfoPageSection
    title="Réflexologie auriculaire"
    imageSrc="/reflexo_auriculaire.jpg"
    imageAlt="Stimulation des zones réflexes de l’oreille avec un stylet"
  >
    <p>
      La réflexologie auriculaire consiste en la stimulation de points et
      zones réflexes situés sur l’oreille réalisée à l’aide d’un stylet.
    </p>

    <p>
      La réflexologie auriculaire se pratique à l’aide d’un stylet à bout rond
      et se pratique sans aiguille (il ne s’agit pas d’acupuncture).
    </p>

    <p>
      Elle apporte une réponse efficace pour atténuer les inconforts physiques
      et les perturbations émotionnelles. Après les séances, l’oreille étant
      facilement accessible, il est possible de pratiquer des autostimulations
      avec simplicité et discrétion.
    </p>
  </InfoPageSection>

  <div class="mx-auto w-full max-w-[1400px] box-border px-6 pb-10 min-[901px]:px-12">
    <FAQQuestion
      question="Comment se déroule une séance de réflexologie auriculaire ?"
    >
      test hihihi
    </FAQQuestion>
  </div>
</BasicContainer>