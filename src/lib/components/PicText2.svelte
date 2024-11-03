<script lang="ts">
    import Tile from '$lib/components/Tile.svelte';

    export let left: boolean = true;
    export let img_path: string;
    export let img_alt: string;
    export let background_color_img: string = "transparent";
    export let background_color_content: string = "transparent";

</script>


<div class="parent">
    <div class="img-side" style="background-color: {background_color_img};">
        <img src={img_path} alt={img_alt} class={left ? "float-left" : "float-right"} />
    </div>
    <div class="content-side" style="background-color: {background_color_content};">
        <slot/>
    </div>
</div>

<style>
    .parent {
        width: 100%;
        background-color: var(--color1);
        display: flex;
        flex-direction: row;
    }

    .img-side {
        flex: 1;
        padding: 5em;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .content-side {
        flex: 2;
        padding: 5em;
    }

    @media (max-width: 1000px) {
        .parent {
            flex-direction: column;
        }

        .img-side {
            padding: 2em;
        }

        .content-side {
            padding: 2em;
        }
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
