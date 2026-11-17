export interface PricingOffer {
  id: string;
  title: string;
  description: string;
  price: number | null;
  priceUnit: string;
  format: string;
  features: readonly string[];
  ctaLabel: string;
  ctaHref: string;
  note?: string;
}

export const pricingOffers: readonly PricingOffer[] = [
  {
    id: 'single',
    title: 'Séance personnalisée',
    description:
      'Un premier rendez-vous ou un moment pour vous, adapté à vos attentes du jour.',
    price: 60,
    priceUnit: '/ séance',
    format: 'Une séance de 60 minutes',
    features: [
      'Un échange pour comprendre vos attentes',
      'Des techniques choisies ensemble',
      'Des gestes adaptés à votre confort'
    ],
    ctaLabel: 'Prendre rendez-vous',
    ctaHref: '/reservation',
    note:
      'Lors de la première visite, un bilan personnalisé permet de préparer votre accompagnement.'
  },
  {
    id: 'three-sessions',
    title: 'Parcours de 3 séances',
    description:
      'Plusieurs rendez-vous pour prendre le temps de découvrir un accompagnement personnalisé.',
    price: null,
    priceUnit: '/ forfait',
    format: '3 séances de 60 minutes',
    features: [
      'Des séances adaptées au fil des échanges',
      'Un rythme défini ensemble',
      'Un point sur votre ressenti à chaque rendez-vous'
    ],
    ctaLabel: 'Discuter de ce forfait',
    ctaHref: '#contact-tarifs',
    note:
      'Le tarif, les modalités de règlement et la période de validité sont précisés avant tout achat.'
  },
  {
    id: 'five-sessions',
    title: 'Parcours de 5 séances',
    description:
      'Un ensemble de rendez-vous pour inscrire vos moments de bien-être dans la durée.',
    price: null,
    priceUnit: '/ forfait',
    format: '5 séances de 60 minutes',
    features: [
      'Un accompagnement ajusté à vos attentes',
      'Des rendez-vous espacés selon vos disponibilités',
      'Une continuité dans les échanges'
    ],
    ctaLabel: 'Discuter de ce forfait',
    ctaHref: '#contact-tarifs',
    note:
      'Le tarif, les modalités de règlement et la période de validité sont précisés avant tout achat.'
  },
  {
    id: 'monthly',
    title: 'Votre rendez-vous mensuel',
    description:
      'Une formule régulière pour vous réserver un moment de détente chaque mois.',
    price: null,
    priceUnit: '/ mois',
    format: 'Une séance de 60 minutes par mois',
    features: [
      'Un rendez-vous régulier',
      'Un contenu adapté à votre ressenti du moment',
      'Un rythme mensuel convenu ensemble'
    ],
    ctaLabel: 'Échanger sur cette formule',
    ctaHref: '#contact-tarifs',
    note:
      'Le tarif, l’engagement éventuel, le renouvellement et les modalités de résiliation sont précisés avant toute souscription.'
  }
];