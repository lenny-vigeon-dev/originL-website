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
    title="Massage plantaire ou palmaire"
    imageSrc="/massage_plantaire_ou_palmaire.jpg"
    imageAlt="Massage de détente des pieds ou des mains"
  >
    <p>
      Cette prestation a pour vocation d’offrir un véritable
      moment de détente aux pieds ou aux mains,
      sollicités tout au long de la journée.
    </p>

    <p>
      Ces massages s’adressent notamment aux personnes
      qui ne souhaitent pas recevoir un massage corporel.
    </p>

    <p>
      Les gestes sont adaptés à votre confort pour vous proposer
      une parenthèse de relaxation, centrée sur les zones massées.
    </p>
  </InfoPageSection>

  <Tile bg_color="var(--color5)">
    <Tile bg_color="var(--color5)">
      <PricePicText
        left={true}
        img_path="/salle_reflexo.jpg"
        img_alt="Salle de consultation"
        title="Massage plantaire ou palmaire « Bien-être »"
        description="Une pause détente consacrée aux pieds ou aux mains, selon votre préférence."
        price={50}
        duration={45}
      >
        <Title title="Déroulé d’une séance :" position="center">
          <p>
            Nous prendrons d’abord un temps d’échange pour définir vos attentes
            et choisir la zone à masser : les pieds ou les mains.
            <br /><br />
            Vous serez installé(e) confortablement sur ma table de massage,
            avec des coussins pour soutenir votre position.
            Une couverture sera à votre disposition.
            Seules les zones massées devront être découvertes.
            <br /><br />
            Je réaliserai ensuite des gestes de massage adaptés
            à votre sensibilité. Vous pourrez m’indiquer à tout moment
            si vous préférez une pression plus douce.
            La séance se terminera par un temps de repos et d’échange.
          </p>
        </Title>
      </PricePicText>
    </Tile>
  </Tile>

  <InfoPageQA title="Questions fréquentes">
    <QAQuestion question="Quelle est la différence avec une séance de réflexologie ?">
      Le massage plantaire ou palmaire est centré sur des gestes
      de détente des pieds ou des mains.
      La réflexologie repose plus spécifiquement sur la stimulation
      de points et de zones réflexes.
      Nous pouvons échanger avant votre réservation pour choisir
      la prestation correspondant à vos attentes.
    </QAQuestion>

    <QAQuestion question="Puis-je choisir entre un massage des pieds et des mains ?">
      Oui. Vous pouvez indiquer votre préférence au moment de la réservation.
      Si vous souhaitez un massage des pieds et des mains,
      précisez-le afin que nous puissions convenir ensemble
      d’une prestation adaptée.
    </QAQuestion>

    <QAQuestion question="Dois-je me déshabiller pour recevoir ce massage ?">
      Non. Seules les zones massées doivent être accessibles.
      Pour un massage des pieds, prévoyez une tenue qui permet
      de dégager facilement les pieds et les chevilles.
      Pour les mains, privilégiez des manches faciles à relever.
    </QAQuestion>
  </InfoPageQA>
</BasicContainer>