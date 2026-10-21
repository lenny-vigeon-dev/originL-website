<script module lang="ts">
  interface CalendlyOptions {
    url: string;
    parentElement: HTMLElement;
    resize: boolean;
  }

  interface CalendlyAPI {
    initInlineWidget: (options: CalendlyOptions) => void;
  }

  type CalendlyWindow = Window & {
    Calendly?: CalendlyAPI;
  };

  let scriptPromise: Promise<CalendlyAPI> | undefined;

  function loadCalendly(): Promise<CalendlyAPI> {
    const calendlyWindow = window as CalendlyWindow;

    if (calendlyWindow.Calendly) {
      return Promise.resolve(calendlyWindow.Calendly);
    }

    if (scriptPromise) {
      return scriptPromise;
    }

    scriptPromise = new Promise<CalendlyAPI>((resolve, reject) => {
      const script = document.createElement('script');

      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;

      script.onload = () => {
        if (calendlyWindow.Calendly) {
          resolve(calendlyWindow.Calendly);
        } else {
          script.remove();
          reject(new Error('Calendly API is unavailable.'));
        }
      };

      script.onerror = () => {
        script.remove();
        reject(new Error('Failed to load the Calendly script.'));
      };

      document.head.appendChild(script);
    }).catch((error: unknown) => {
      scriptPromise = undefined;
      throw error;
    });

    return scriptPromise;
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    url: string;
  }

  let { url }: Props = $props();

  let container: HTMLDivElement;
  let hasError = $state(false);

  onMount(() => {
    let cancelled = false;
    const parentElement = container;

    void loadCalendly()
      .then((calendly) => {
        if (cancelled) return;

        calendly.initInlineWidget({
          url,
          parentElement,
          resize: true
        });
      })
      .catch(() => {
        if (!cancelled) {
          hasError = true;
        }
      });

    return () => {
      cancelled = true;
      parentElement.replaceChildren();
    };
  });
</script>

<div class="w-full min-w-0">
  <div
    bind:this={container}
    class="w-full min-w-0"
    class:hidden={hasError}
    style="height: 700px;"
  ></div>

  {#if hasError}
    <p
      role="alert"
      class="px-4 py-6 text-center text-lg text-[var(--color4)]"
    >
      Le calendrier n’a pas pu être chargé.
      Vous pouvez réserver directement sur Calendly avec le lien ci-dessous.
    </p>
  {/if}

  <div class="px-4 py-4 text-center">
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      class="text-base text-[var(--color4)] underline underline-offset-4 hover:text-[var(--color3)]"
    >
      Ouvrir le calendrier dans un nouvel onglet
    </a>
  </div>
</div>