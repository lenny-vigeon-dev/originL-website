import { error } from '@sveltejs/kit';
import { practiceInformation } from '$lib/data/practice-information';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const slug = params.slug ?? 'plantaire';

  const practice = practiceInformation.find(
    (item) => item.id === slug
  );

  if (!practice) {
    error(404, 'Cette pratique n’existe pas.');
  }

  return { practice };
};