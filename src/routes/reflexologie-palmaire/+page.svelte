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
    title="Réflexologie palmaire"
    imageSrc="/reflexo_palmaire.jpg"
    imageAlt="Stimulation des zones réflexes de la main"
  >
    <p>
      Comme pour le pied, les différentes parties du corps se
      retrouvent également en correspondance sur l’ensemble de
      la main. La réflexologie palmaire consiste en la stimulation
      de points et zones réflexes situés sur la main.
    </p>

    <p>
      La réflexologie palmaire s’intègre parfaitement dans
      l’accompagnement de personnes âgées ou d’enfants.
    </p>
  </InfoPageSection>

  <Tile bg_color="var(--color5)">
    <PricePicText
      left={true}
      img_path="/salle_reflexo.jpg"
      img_alt="Salle de consultation"
      title="Séance de réflexologie palmaire"
      description="Un accompagnement personnalisé par la stimulation des points et zones réflexes des mains."
      price={60}
      duration={60}
      note="Un bilan personnalisé sera établi lors de la première séance."
    >
      <Title title="Déroulé d’une séance :" position="center">
        <p>
          La séance débute par un échange afin de comprendre vos attentes
          et de vous proposer un accompagnement adapté.
          Vous serez ensuite installé(e) confortablement,
          les mains accessibles et les bras soutenus.
          <br /><br />
          Je procéderai à la stimulation des points et zones réflexes
          des mains. Les pressions seront adaptées à votre sensibilité
          et à votre confort.
          <br /><br />
          Vous pourrez me faire part de vos sensations tout au long
          de la séance. Un temps d’échange permettra ensuite
          de recueillir votre ressenti.
        </p>
      </Title>
    </PricePicText>
  </Tile>

  <InfoPageQA title="Questions fréquentes">
    <QAQuestion question="Quelles parties du corps sont travaillées pendant la séance ?">
      La séance de réflexologie palmaire se concentre sur les mains.
      Je stimule les points et zones réflexes situés sur leur ensemble,
      en adaptant les pressions à votre sensibilité.
    </QAQuestion>

    <QAQuestion question="Dois-je prévoir une tenue particulière ?">
      Privilégiez une tenue confortable qui permet de dégager facilement
      vos mains et vos poignets. Vous pourrez retirer vos bagues,
      bracelets ou votre montre si cela facilite votre confort.
    </QAQuestion>

    <QAQuestion question="Les pressions exercées sur les mains sont-elles douloureuses ?">
      Certaines zones peuvent être plus sensibles que d’autres.
      Les pressions sont adaptées à votre ressenti : signalez-moi
      toute gêne afin que je puisse ajuster mon geste.
      Vous pouvez demander une pause à tout moment.
    </QAQuestion>
  </InfoPageQA>
</BasicContainer>