<script lang="ts">
    import { onMount } from "svelte";
    import Title from "./Title.svelte";

    type ReviewInfo = {
        content: string;
        author: string;
    };

    export let reviews: Array<ReviewInfo>;
    export let review_delay_ms: number = 3000;

    onMount(() => {
        const reviewsContainer = document.querySelector('.reviews');
        const reviews = document.querySelectorAll('.review');
        let currentIndex = 0;

        // Function to update the carousel's position
        function showNextReview() {
          // Calculate the new transform value
          currentIndex = (currentIndex + 1) % reviews.length;
          const offset = -currentIndex * 100; // Slide by 100% of the container width
          reviewsContainer.style.transform = `translateX(${offset}%)`;
        }

        // Set interval to switch reviews every 3 seconds
        setInterval(showNextReview, review_delay_ms); // Adjust the time (3000ms = 3 seconds) as desired
    })


</script>

<section class="review-carousel">
    <Title title="Avis" position="center" />
    <div class="reviews">
        {#each reviews as review}
            <div class="review">
                <p>{review.content}</p>
                <div class="seperation"></div>
                <p>{review.author}</p>
            </div>
        {/each}
    </div>
</section>

<style>
    .review-carousel {
      width: 100%; /* Adjust width to fit your design */
      /* height: 20em; */
      overflow: hidden; /* Hide overflow to create sliding effect */
      position: relative;
      background-color: var(--color1);
    }

    .reviews {
      display: flex;
      width: 100%;
      padding-bottom: 2em;
      transition: transform 0.5s ease; /* Smooth transition for sliding */
    }

    .review {
        min-width: 100%; /* Each review takes full width of the container */
        padding: 20px;
        box-sizing: border-box;
        text-align: center;
        justify-content: center;
    }

    .seperation {
        background-color: var(--color4);
        height: 2px;
        width: 5%;

    }

    p {
        font-size: 1.5rem;
    }
</style>
