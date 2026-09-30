<script lang="ts">
  import PracticeTemplate from '$lib/components/PracticeTemplate.svelte';
  import TextTile from '$lib/components/TextTile.svelte';
  import BasicContainer from '$lib/components/BasicContainer.svelte';
</script>

<BasicContainer>
  <PracticeTemplate
    title="Réflexologie faciale"
    background="reflexo_faciale.jpg"
  >
    <TextTile bg_color="var(--color5)">
      La réflexologie faciale est une méthode développée dans les années 1980
      par le professeur Bui Quoc Chau.
      <br /><br />
      Elle se pratique généralement à l’aide d’un stylet
      (instrument à bout rond) ; mais il est possible d’alterner
      avec des techniques manuelles. Cette technicité induit une stimulation
      sensorielle sur le visage et est tout à fait
      adaptée pour tonifier le visage.
    </TextTile>
  </PracticeTemplate>
</BasicContainer>