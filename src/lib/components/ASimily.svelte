<button class="styled-button" aria-label="Do something">
    <slot/>
</button>

<style>
    .styled-button {
      text-decoration: none;
	    color: var(--color4);
	    /* margin-inline: 1rem; */
	    transition: color 0.2s ease; /* Add a smooth color transition on hover */
	    align-items: center;
	    justify-content: center;
	    /* font-weight: bold; */
      background-color: transparent;
      padding: 0px;
      border: none;
      margin: 0px;
      font-size: 1em;
      font-weight: 100;
    }

    /* Mimic the <a> element's hover effect */
    .styled-button:hover,
    .styled-button:focus {  
      color: var(--color2);
    }

  </style>
