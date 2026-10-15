<script lang="ts">
  import PicText2 from '$lib/components/PicText2.svelte';
  import Title from '$lib/components/Title.svelte';
  import Tile from '$lib/components/Tile.svelte';
  import BasicContainer from '$lib/components/BasicContainer.svelte';
  import InfoPageSection from '$lib/components/InfoPageSection.svelte';
  import InfoPageQA from '$lib/components/InfoPageQA.svelte';
  import QAQuestion from '$lib/components/QAQuestion.svelte';
</script>

<BasicContainer>
  <InfoPageSection
    title="Réflexologie faciale"
    imageSrc="/reflexo_faciale.jpg"
    imageAlt="Séance de réflexologie faciale"
  >
    <p>
      La réflexologie faciale est une méthode développée dans les années 1980
      par le professeur Bui Quoc Chau.
    </p>

    <p>
      Elle se pratique généralement à l’aide d’un stylet,
      un instrument à bout rond, mais il est possible d’alterner
      avec des techniques manuelles.
    </p>

    <p>
      Cette pratique repose sur une stimulation sensorielle du visage
      et s’inscrit dans une démarche de détente et de bien-être.
    </p>
  </InfoPageSection>

  <Tile bg_color="var(--color5)">
    <PicText2
      left={false}
      img_path="/salle_reflexo.jpg"
      img_alt="Salle de consultation"
    >
      <Title title="Déroulé d’une séance :" position="center">
        <p>
          Nous commencerons par un échange afin de connaître vos attentes
          et les éventuelles sensibilités de votre visage.
          Vous serez installé(e) confortablement sur ma table de massage,
          avec un coussin sous la tête et les genoux.
          <br /><br />
          Je procéderai à la stimulation des zones du visage
          à l’aide d’un stylet à bout rond et, selon la séance,
          de techniques manuelles.
          Les gestes seront adaptés à votre sensibilité.
          <br /><br />
          Un temps de repos et d’échange vous permettra ensuite
          de partager votre ressenti avant de terminer la séance.
        </p>
      </Title>
    </PicText2>
  </Tile>

  <InfoPageQA title="Questions fréquentes">
    <QAQuestion question="Quel matériel est utilisé pendant la séance ?">
      J’utilise un stylet à bout rond pour stimuler les zones du visage.
      Selon le déroulement de la séance, je peux également
      employer des techniques manuelles.
      Aucun geste ne consiste à percer la peau.
    </QAQuestion>

    <QAQuestion question="Dois-je signaler une sensibilité particulière du visage ?">
      Oui. Avant la séance, indiquez-moi toute irritation,
      blessure, sensibilité ou intervention récente sur le visage.
      Cela permettra de déterminer si la séance peut être réalisée
      et d’adapter les zones travaillées.
    </QAQuestion>

    <QAQuestion question="Puis-je demander une pression plus douce pendant la séance ?">
      Bien sûr. Vous pouvez me faire part de votre ressenti
      à tout moment. Les pressions et les gestes sont ajustés
      à votre confort, et vous pouvez demander une pause
      ou l’arrêt de la séance.
    </QAQuestion>
  </InfoPageQA>
</BasicContainer>