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
    title="Réflexologie plantaire"
    imageSrc="/reflexo_plantaire.jpg"
    imageAlt="Stimulation des zones réflexes du pied"
  >
    <p>
      La réflexologie plantaire consiste en la stimulation de
      points et zones réflexes situés sur l’ensemble du pied.
    </p>

    <p>
      Elle induit une relaxation profonde et permettrait ainsi de
      réduire les effets de l’anxiété.
    </p>

    <p>
      Elle s’intègre également très bien dans les approches visant à aider
      les personnes qui éprouvent des tensions importantes.
    </p>
  </InfoPageSection>
  <Tile bg_color="var(--color5)">
    <PricePicText
      left={true}
      img_path="salle_reflexo.jpg"
      img_alt="Salle de consultation"
      title="Séance de réflexologie"
      description="Un accompagnement personnalisé par la stimulation des points et zones réflexes."
      price={60}
      duration={60}
      note="Un bilan personnalisé sera établi lors de la première séance."
    >
      <Title title="Déroulé d'une séance:" position="center">
        <p>
            Vous serez installé(e) confortablement sur ma table de massage,
            avec un coussin sous la tête et les genoux. Une couverture sera à votre disposition
            pour vous assurer un confort optimal.
            <br /><br />
            Pendant la séance, j’appliquerai la méthode de réflexologie en identifiant avec vous les zones
            les plus sensibles, en lien avec les échanges que nous aurons eu au préalable.
            Nous travaillerons ensemble sur ces zones afin de favoriser votre bien-être.
          </p>
      </Title>
    </PricePicText>
  </Tile>
  <InfoPageQA title="Questions fréquentes">
    <QAQuestion
      question="Quelle est la durée d'une séance de réflexologie plantaire ?"
    >
      Une séance de réflexologie plantaire dure généralement entre 45 minutes et 1 heure. Cela inclut le temps nécessaire pour discuter de vos besoins et de vos préoccupations avant la séance, ainsi que le temps de relaxation après la stimulation des zones réflexes.
    </QAQuestion>
    <QAQuestion
      question="À quelle fréquence devrais-je recevoir des séances de réflexologie plantaire ?"
    >
      La fréquence des séances de réflexologie plantaire dépend de vos besoins individuels et de vos objectifs de bien-être. Certaines personnes peuvent bénéficier d'une séance hebdomadaire, tandis que d'autres
  peuvent préférer des séances toutes les deux semaines ou mensuelles. Il est recommandé de discuter de votre situation avec le praticien pour déterminer la fréquence la plus appropriée.
    </QAQuestion>
    <QAQuestion
      question="La réflexologie plantaire est-elle adaptée à tout le monde ?"
    >
      La réflexologie plantaire est généralement considérée comme sûre pour la plupart des personnes. Cependant, il est important de consulter un professionnel de santé avant de commencer toute nouvelle thérapie, surtout si vous avez des conditions médicales préexistantes ou si vous êtes enceinte.
    </QAQuestion>
  </InfoPageQA>
</BasicContainer>