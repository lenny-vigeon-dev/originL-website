<script lang="ts">
  import PicText2 from '$lib/components/PicText2.svelte';
  import Title from '$lib/components/Title.svelte';
  import Tile from '$lib/components/Tile.svelte';
  import BasicContainer from '$lib/components/BasicContainer.svelte';
  import InfoPageSection from '$lib/components/InfoPageSection.svelte';
  import InfoPageQA from '$lib/components/InfoPageQA.svelte';
  import QAQuestion from '$lib/components/QAQuestion.svelte';
  import PricePicText from '$lib/components/PricePicText.svelte';
</script>

<BasicContainer>
  <InfoPageSection
    title="Réflexologie auriculaire"
    imageSrc="/reflexo_auriculaire.jpg"
    imageAlt="Stimulation des zones réflexes de l’oreille avec un stylet"
  >
    <p>
      La réflexologie auriculaire consiste en la stimulation de points et
      zones réflexes situés sur l’oreille, réalisée à l’aide d’un stylet.
    </p>

    <p>
      Elle se pratique à l’aide d’un stylet à bout rond
      et sans aiguille : il ne s’agit pas d’acupuncture.
    </p>

    <p>
      Cette pratique s’inscrit dans une démarche de détente
      et de bien-être. L’oreille étant facilement accessible,
      des gestes d’autostimulation peuvent être expliqués
      lors de la séance.
    </p>
  </InfoPageSection>

  <Tile bg_color="var(--color5)">
    <PricePicText
      left={true}
      img_path="/salle_reflexo.jpg"
      img_alt="Salle de consultation"
      title="Séance de réflexologie auriculaire"
      description="Une séance consacrée à la stimulation des points et zones réflexes de l’oreille."
      price={60}
      duration={60}
      note="Un bilan personnalisé sera établi lors de la première séance."
    >
      <Title title="Déroulé d’une séance :" position="center">
        <p>
          La séance commence par un échange autour de vos attentes
          et de votre ressenti. Vous serez ensuite installé(e)
          confortablement, les oreilles accessibles.
          <br /><br />
          À l’aide d’un stylet à bout rond, je procéderai à la stimulation
          des points et zones réflexes de l’oreille.
          La pression sera adaptée à votre sensibilité.
          <br /><br />
          Nous terminerons par un échange sur vos sensations.
          Si cela est adapté, je pourrai vous expliquer des gestes
          simples d’autostimulation à reproduire chez vous.
        </p>
      </Title>
    </PricePicText>
  </Tile>

  <InfoPageQA title="Questions fréquentes">
    <QAQuestion question="Utilisez-vous des aiguilles pendant la séance ?">
      Non. La séance se pratique avec un stylet à bout rond,
      sans aiguille et sans percer la peau.
      La réflexologie auriculaire proposée ici n’est pas de l’acupuncture.
    </QAQuestion>

    <QAQuestion question="La stimulation des oreilles est-elle douloureuse ?">
      Certains points peuvent être sensibles.
      La pression est ajustée à votre ressenti et ne doit pas
      être inconfortable. N’hésitez pas à me signaler toute gêne
      pendant la séance.
    </QAQuestion>

    <QAQuestion question="Puis-je pratiquer des autostimulations après la séance ?">
      Si cela est adapté à votre situation, je pourrai vous montrer
      des gestes simples pendant la séance.
      Reproduisez uniquement les gestes expliqués,
      sans pression excessive et en respectant votre confort.
    </QAQuestion>
  </InfoPageQA>
</BasicContainer>