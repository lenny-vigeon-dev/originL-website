<script lang="ts">
    import Tile from '$lib/components/Tile.svelte';

    export let left: boolean = true;
    export let img_path: string;
    export let img_alt: string;
    export let img_width: string = "50%";
    export let img_max_width: string = "100%";

</script>


<div class="img-content" style="--pic-text-img-width: {img_width}; --pic-text-img-max-width: {img_max_width}">
    <img src={img_path} alt={img_alt} class={left ? "float-left" : "float-right"} />
    <p><slot/></p>
</div>

<style>
    img {
        width: var(--pic-text-img-width);
        max-width: var(--pic-text-img-max-width);
    }

    .img-content {
        width: 100%;
    }

    .float-left {
        float: left;
        margin: 0 2em 1em 0;
    }

    .float-right {
        float: right;
        margin: 0 0 1em 2em;
    }

    p {
        text-align: justify;
        font-size: 1.5em;
        margin-right: 2em;
    }


    @media (max-width: 800px) {
        p {
            font-size: 1em;
            margin-inline: 1em;
        }
        /* img {
            width: 80%;
        } */
    }

</style>


<!-- <div class="container">
    <img src={img_path} alt={img_alt} class="float-left">
    <p><slot/></p>
  </div>

  <style>
    .container {
  width: 100%;
}

.float-left {
  float: left;
  margin: 0 15px 15px 0; /* Adds some space around the image */
  width: 200px; /* Adjust the width of the image */
}

p {
  font-size: 16px;
  line-height: 1.5;
}
  </style> -->
