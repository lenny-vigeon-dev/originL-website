export type PracticeId =
  | 'plantaire'
  | 'palmaire'
  | 'auriculaire'
  | 'faciale'
  | 'massage';

export interface PracticeQuestion {
  question: string;
  answer: string;
}

export interface PracticeInformation {
  id: PracticeId;
  label: string;
  title: string;
  image: string;
  imageAlt: string;
  introduction: readonly string[];
  session: readonly string[];
  pricingTitle: string;
  description: string;
  price: number;
  duration: number;
  note?: string;
  questions: readonly PracticeQuestion[];
}

const firstVisitNote =
  'Un bilan personnalisé sera établi lors de la première séance.';

export const practiceInformation: readonly [
  PracticeInformation,
  ...PracticeInformation[]
] = [
  {
    id: 'plantaire',
    label: 'Réflexologie plantaire',
    title: 'Réflexologie plantaire',
    image: '/reflexo_plantaire.jpg',
    imageAlt: 'Stimulation des zones réflexes du pied',
    introduction: [
      'La réflexologie plantaire consiste en la stimulation de points et zones réflexes situés sur l’ensemble du pied.',
      'Elle induit une relaxation profonde et permettrait ainsi de réduire les effets de l’anxiété.',
      'Elle s’intègre également très bien dans les approches visant à aider les personnes qui éprouvent des tensions importantes.'
    ],
    session: [
      'Vous serez installé(e) confortablement sur ma table de massage, avec un coussin sous la tête et les genoux. Une couverture sera à votre disposition pour vous assurer un confort optimal.',
      'Pendant la séance, j’appliquerai la méthode de réflexologie en identifiant avec vous les zones les plus sensibles, en lien avec les échanges que nous aurons eus au préalable.',
      'Les gestes et les pressions seront adaptés à votre ressenti tout au long de la séance.'
    ],
    pricingTitle: 'Séance de réflexologie plantaire',
    description:
      'Un accompagnement personnalisé par la stimulation des points et zones réflexes du pied.',
    price: 60,
    duration: 60,
    note: firstVisitNote,
    questions: [
      {
        question: 'Quelle est la durée d’une séance ?',
        answer:
          'La séance de réflexologie plantaire est proposée sur une durée de 60 minutes. Pour votre première visite, prévoyez un temps supplémentaire pour le bilan personnalisé.'
      },
      {
        question: 'À quelle fréquence prendre rendez-vous ?',
        answer:
          'La fréquence dépend de vos attentes et de votre ressenti. Nous pourrons en discuter ensemble afin de déterminer un rythme adapté à votre situation.'
      },
      {
        question: 'Comment m’habiller pour la séance ?',
        answer:
          'Privilégiez une tenue confortable et un pantalon facile à relever pour dégager les pieds et les chevilles.'
      }
    ]
  },
  {
    id: 'palmaire',
    label: 'Réflexologie palmaire',
    title: 'Réflexologie palmaire',
    image: '/reflexo_palmaire.jpg',
    imageAlt: 'Stimulation des zones réflexes de la main',
    introduction: [
      'Comme pour le pied, les différentes parties du corps se retrouvent également en correspondance sur l’ensemble de la main. La réflexologie palmaire consiste en la stimulation de points et zones réflexes situés sur la main.',
      'La réflexologie palmaire s’intègre parfaitement dans l’accompagnement de personnes âgées ou d’enfants.'
    ],
    session: [
      'La séance débute par un échange afin de comprendre vos attentes et de vous proposer un accompagnement adapté. Vous serez ensuite installé(e) confortablement, les mains accessibles et les bras soutenus.',
      'Je procéderai à la stimulation des points et zones réflexes des mains. Les pressions seront adaptées à votre sensibilité et à votre confort.',
      'Vous pourrez me faire part de vos sensations tout au long de la séance. Un temps d’échange permettra ensuite de recueillir votre ressenti.'
    ],
    pricingTitle: 'Séance de réflexologie palmaire',
    description:
      'Un accompagnement personnalisé par la stimulation des points et zones réflexes des mains.',
    price: 60,
    duration: 60,
    note: firstVisitNote,
    questions: [
      {
        question: 'Quelles zones sont travaillées ?',
        answer:
          'La séance se concentre sur les mains. Je stimule les points et zones réflexes situés sur leur ensemble, en adaptant les pressions à votre sensibilité.'
      },
      {
        question: 'Dois-je prévoir une tenue particulière ?',
        answer:
          'Privilégiez une tenue permettant de dégager facilement vos mains et vos poignets. Vous pourrez retirer vos bagues, bracelets ou votre montre si cela facilite votre confort.'
      },
      {
        question: 'Les pressions sont-elles douloureuses ?',
        answer:
          'Certaines zones peuvent être plus sensibles que d’autres. Signalez-moi toute gêne afin que je puisse ajuster mon geste. Vous pouvez demander une pause à tout moment.'
      }
    ]
  },
  {
    id: 'auriculaire',
    label: 'Réflexologie auriculaire',
    title: 'Réflexologie auriculaire',
    image: '/reflexo_auriculaire.jpg',
    imageAlt: 'Stimulation des zones réflexes de l’oreille',
    introduction: [
      'La réflexologie auriculaire consiste en la stimulation de points et zones réflexes situés sur l’oreille, réalisée à l’aide d’un stylet.',
      'Elle se pratique à l’aide d’un stylet à bout rond et sans aiguille : il ne s’agit pas d’acupuncture.',
      'Cette pratique s’inscrit dans une démarche de détente et de bien-être. Des gestes d’autostimulation peuvent être expliqués lors de la séance.'
    ],
    session: [
      'La séance commence par un échange autour de vos attentes et de votre ressenti. Vous serez ensuite installé(e) confortablement, les oreilles accessibles.',
      'À l’aide d’un stylet à bout rond, je procéderai à la stimulation des points et zones réflexes de l’oreille. La pression sera adaptée à votre sensibilité.',
      'Nous terminerons par un échange sur vos sensations. Si cela est adapté, je pourrai vous expliquer des gestes simples d’autostimulation à reproduire chez vous.'
    ],
    pricingTitle: 'Séance de réflexologie auriculaire',
    description:
      'Une séance consacrée à la stimulation des points et zones réflexes de l’oreille.',
    price: 60,
    duration: 60,
    note: firstVisitNote,
    questions: [
      {
        question: 'Utilisez-vous des aiguilles ?',
        answer:
          'Non. La séance se pratique avec un stylet à bout rond, sans aiguille et sans percer la peau. Il ne s’agit pas d’acupuncture.'
      },
      {
        question: 'La stimulation est-elle douloureuse ?',
        answer:
          'Certains points peuvent être sensibles. La pression est ajustée à votre ressenti : n’hésitez pas à me signaler toute gêne pendant la séance.'
      },
      {
        question: 'Puis-je pratiquer des autostimulations ?',
        answer:
          'Si cela est adapté à votre situation, je pourrai vous montrer des gestes simples pendant la séance. Reproduisez uniquement les gestes expliqués, sans pression excessive.'
      }
    ]
  },
  {
    id: 'faciale',
    label: 'Réflexologie faciale',
    title: 'Réflexologie faciale',
    image: '/reflexo_faciale.jpg',
    imageAlt: 'Séance de réflexologie faciale',
    introduction: [
      'La réflexologie faciale est une méthode développée dans les années 1980 par le professeur Bui Quoc Chau.',
      'Elle se pratique généralement à l’aide d’un stylet, un instrument à bout rond, mais il est possible d’alterner avec des techniques manuelles.',
      'Cette pratique repose sur une stimulation sensorielle du visage et s’inscrit dans une démarche de détente et de bien-être.'
    ],
    session: [
      'Nous commencerons par un échange afin de connaître vos attentes et les éventuelles sensibilités de votre visage. Vous serez installé(e) confortablement sur ma table de massage, avec un coussin sous la tête et les genoux.',
      'Je procéderai à la stimulation des zones du visage à l’aide d’un stylet à bout rond et, selon la séance, de techniques manuelles. Les gestes seront adaptés à votre sensibilité.',
      'Un temps de repos et d’échange vous permettra ensuite de partager votre ressenti avant de terminer la séance.'
    ],
    pricingTitle: 'Séance de réflexologie faciale',
    description:
      'Un accompagnement personnalisé par la stimulation des zones réflexes du visage.',
    price: 60,
    duration: 60,
    note: firstVisitNote,
    questions: [
      {
        question: 'Quel matériel est utilisé ?',
        answer:
          'J’utilise un stylet à bout rond pour stimuler les zones du visage. Selon la séance, je peux également employer des techniques manuelles.'
      },
      {
        question: 'Dois-je signaler une sensibilité du visage ?',
        answer:
          'Oui. Indiquez-moi toute irritation, blessure, sensibilité ou intervention récente avant la séance afin que nous puissions déterminer si elle peut être réalisée et adapter les zones travaillées.'
      },
      {
        question: 'Puis-je demander une pression plus douce ?',
        answer:
          'Bien sûr. Vous pouvez me faire part de votre ressenti à tout moment. Les gestes sont ajustés à votre confort, et vous pouvez demander une pause.'
      }
    ]
  },
  {
    id: 'massage',
    label: 'Massage pieds ou mains',
    title: 'Massage plantaire ou palmaire',
    image: '/massage_plantaire_ou_palmaire.jpg',
    imageAlt: 'Massage de détente des pieds ou des mains',
    introduction: [
      'Cette prestation a pour vocation d’offrir un véritable moment de détente aux pieds ou aux mains, sollicités tout au long de la journée.',
      'Ces massages s’adressent notamment aux personnes qui ne souhaitent pas recevoir un massage corporel.',
      'Les gestes sont adaptés à votre confort pour vous proposer une parenthèse de relaxation, centrée sur les zones massées.'
    ],
    session: [
      'Nous prendrons d’abord un temps d’échange pour définir vos attentes et choisir la zone à masser : les pieds ou les mains.',
      'Vous serez installé(e) confortablement sur ma table de massage, avec des coussins pour soutenir votre position. Une couverture sera à votre disposition. Seules les zones massées devront être découvertes.',
      'Je réaliserai ensuite des gestes adaptés à votre sensibilité. Vous pourrez m’indiquer à tout moment si vous préférez une pression plus douce. La séance se terminera par un temps de repos et d’échange.'
    ],
    pricingTitle: 'Massage plantaire ou palmaire « Bien-être »',
    description:
      'Une pause détente consacrée aux pieds ou aux mains, selon votre préférence.',
    price: 50,
    duration: 45,
    questions: [
      {
        question: 'Quelle différence avec la réflexologie ?',
        answer:
          'Ce massage est centré sur des gestes de détente des pieds ou des mains. La réflexologie repose plus spécifiquement sur la stimulation de points et de zones réflexes.'
      },
      {
        question: 'Puis-je choisir la zone massée ?',
        answer:
          'Oui. Vous pouvez choisir un massage des pieds ou des mains et préciser votre préférence au moment de la réservation.'
      },
      {
        question: 'Dois-je me déshabiller ?',
        answer:
          'Non. Seules les zones massées doivent être accessibles. Prévoyez un pantalon facile à relever pour les pieds ou des manches permettant de dégager les poignets pour les mains.'
      }
    ]
  }
];