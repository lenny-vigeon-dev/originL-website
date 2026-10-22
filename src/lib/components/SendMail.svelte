<script lang="ts">
  let isSubmitting = $state(false);
  let status = $state<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    const form = event.currentTarget;

    if (!(form instanceof HTMLFormElement) || isSubmitting) {
      return;
    }

    const formData = new FormData(form);

    isSubmitting = true;
    status = 'idle';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to send the message.');
      }

      form.reset();
      status = 'success';
    } catch {
      status = 'error';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<section class="w-full box-border bg-[var(--color1)] px-6 py-12">
  <form
    method="POST"
    action="/api/contact"
    onsubmit={handleSubmit}
    aria-label="Formulaire de contact"
    aria-busy={isSubmitting}
    class="mx-auto flex w-full max-w-[760px] box-border flex-col bg-white p-6 min-[801px]:p-12"
  >
    <label class="block">
      <span class="sr-only">Votre nom</span>

      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        autocomplete="name"
        required
        maxlength="100"
        class="m-0 block w-full box-border rounded-none border-0 border-b border-[var(--color2)] bg-transparent px-4 py-5 font-[family-name:var(--font-body)] text-lg font-normal text-[var(--color4)] placeholder:text-[var(--color4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color3)]"
      />
    </label>

    <label class="mt-3 block">
      <span class="sr-only">Votre adresse email</span>

      <input
        type="email"
        name="email"
        placeholder="Votre mail"
        autocomplete="email"
        required
        maxlength="254"
        class="m-0 block w-full box-border rounded-none border-0 border-b border-[var(--color2)] bg-transparent px-4 py-5 font-[family-name:var(--font-body)] text-lg font-normal text-[var(--color4)] placeholder:text-[var(--color4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color3)]"
      />
    </label>

    <label class="mt-4 block">
      <span class="sr-only">Votre message</span>

      <textarea
        name="message"
        placeholder="Message"
        required
        minlength="10"
        maxlength="5000"
        rows="6"
        class="m-0 block min-h-[180px] w-full box-border resize-y rounded-none border-0 bg-transparent px-4 py-5 font-[family-name:var(--font-body)] text-lg leading-relaxed font-normal text-[var(--color4)] placeholder:text-[var(--color4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color3)]"
      ></textarea>
    </label>

    <div class="hidden" aria-hidden="true">
      <label>
        Website
        <input
          type="text"
          name="website"
          tabindex="-1"
          autocomplete="off"
        />
      </label>
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
      class="mt-4 min-h-12 self-end rounded-full border-0 bg-[var(--color3)] px-7 py-3 text-xl font-normal text-white transition-colors hover:bg-[var(--color4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color4)] disabled:cursor-wait disabled:opacity-60"
    >
      {isSubmitting ? 'Envoi…' : 'Envoyer'}
    </button>

    {#if status === 'success'}
      <p
        role="status"
        class="mt-6 text-base leading-relaxed text-[var(--color4)]"
      >
        Votre message a été envoyé. Merci pour votre prise de contact !
      </p>
    {:else if status === 'error'}
      <p
        role="alert"
        class="mt-6 text-base leading-relaxed text-[var(--color4)]"
      >
        Le message n’a pas pu être envoyé. Veuillez réessayer ou écrire à
        <a
          href="mailto:reflexo.lr@gmail.com"
          class="text-base underline underline-offset-4"
        >
          reflexo.lr@gmail.com
        </a>.
      </p>
    {/if}
  </form>
</section>