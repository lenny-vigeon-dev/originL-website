import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { practiceInformation } from '$lib/data/practice-information';

export const load = (({ params }) => {
  if (!params.slug) {
    return {
      practice: null
    };
  }

  const practice = practiceInformation.find(
    (item) => item.id === params.slug
  );

  if (!practice) {
    error(404, 'Cette pratique est introuvable.');
  }

  return {
    practice
  };
}) satisfies PageLoad;