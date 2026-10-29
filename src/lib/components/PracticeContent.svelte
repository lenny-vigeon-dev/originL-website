<script lang="ts">
  import type { PracticeInformation } from '$lib/data/practice-information';
  import InfoPageSection from '$lib/components/InfoPageSection.svelte';
  import PricePicText from '$lib/components/PricePicText.svelte';
  import InfoPageQA from '$lib/components/InfoPageQA.svelte';
  import QAQuestion from '$lib/components/QAQuestion.svelte';
  import Tile from '$lib/components/Tile.svelte';
  import Title from '$lib/components/Title.svelte';

  interface Props {
    practice: PracticeInformation;
  }

  let { practice }: Props = $props();
</script>

<InfoPageSection
  title={practice.title}
  imageSrc={practice.image}
  imageAlt={practice.imageAlt}
  ctaHref={null}
>
  {#each practice.introduction as paragraph}
    <p>{paragraph}</p>
  {/each}
</InfoPageSection>

<Tile bg_color="var(--color5)">
  <PricePicText
    left={true}
    img_path="/salle_reflexo.jpg"
    img_alt="Salle de consultation"
    title={practice.pricingTitle}
    description={practice.description}
    price={practice.price}
    duration={practice.duration}
    note={practice.note}
  >
    <Title title="Déroulé d’une séance :" position="center">
      <div
        class="w-full [&_p]:m-0 [&_p]:text-[1.5rem] [&_p]:leading-relaxed [&_p+p]:mt-6"
      >
        {#each practice.session as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    </Title>
  </PricePicText>
</Tile>

<InfoPageQA title="Questions fréquentes">
  {#each practice.questions as item (item.question)}
    <QAQuestion question={item.question}>
      <p>{item.answer}</p>
    </QAQuestion>
  {/each}
</InfoPageQA>