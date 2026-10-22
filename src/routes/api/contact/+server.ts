import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { Resend } from 'resend';
import type { RequestHandler } from './$types';

export const prerender = false;

export const POST: RequestHandler = async ({ request, url }) => {
  if (request.headers.get('origin') !== url.origin) {
    return json(
      { message: 'Requête non autorisée.' },
      { status: 403 }
    );
  }

  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return json(
      { message: 'Formulaire invalide.' },
      { status: 400 }
    );
  }

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  const website = formData.get('website');

  // Ignore submissions that fill the hidden honeypot field.
  if (typeof website === 'string' && website.trim() !== '') {
    return json({ success: true });
  }

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string'
  ) {
    return json(
      { message: 'Veuillez remplir tous les champs.' },
      { status: 400 }
    );
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanMessage = message.trim();

  const isValid =
    cleanName.length >= 1 &&
    cleanName.length <= 100 &&
    cleanEmail.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) &&
    cleanMessage.length >= 10 &&
    cleanMessage.length <= 5000;

  if (!isValid) {
    return json(
      { message: 'Les informations saisies sont invalides.' },
      { status: 400 }
    );
  }

  const apiKey = env.RESEND_API_KEY;
  const from = env.CONTACT_FROM;
  const to = env.CONTACT_TO;

  if (!apiKey || !from || !to) {
    console.error('Contact email configuration is incomplete.');

    return json(
      { message: 'Le service de contact est indisponible.' },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: cleanEmail,
      subject: 'Nouveau message depuis le site de réflexologie',
      text: [
        `Nom : ${cleanName}`,
        `Email : ${cleanEmail}`,
        '',
        'Message :',
        cleanMessage
      ].join('\n')
    });

    if (error) {
      console.error('Contact email rejected:', error.message);

      return json(
        { message: 'Impossible d’envoyer le message.' },
        { status: 502 }
      );
    }

    return json({ success: true });
  } catch {
    console.error('Contact email delivery request failed.');

    return json(
      { message: 'Impossible d’envoyer le message.' },
      { status: 502 }
    );
  }
};