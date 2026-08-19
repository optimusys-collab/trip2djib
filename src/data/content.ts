import type { Lang, LocalizedExcursion, LocalizedExperienceType, LocalizedService, LocalizedGalleryItem } from '@/i18n/types';

export const CONTACT = {
  name: 'Trip2Djib',
  address: { fr: 'Boulevard de Gaulle, Djibouti', en: 'Boulevard de Gaulle, Djibouti' } as Record<Lang, string>,
  phones: ['+253 21 34 86 59', '+253 77 84 06 12'],
  email: 'trip2djib@gmail.com',
  whatsapp: '+25377840612',
  facebook: 'https://www.facebook.com/trip2djib',
  tripadvisor: 'https://www.tripadvisor.com',
  tripadvisorRating: '4,5/5',
};

export type Category = 'Aventure' | 'Mer' | 'Nature' | 'Culture' | 'Îles' | 'day';

export const categoryKeys: Category[] = ['Aventure', 'Mer', 'Nature', 'Culture', 'Îles', 'day'];

export const excursions: LocalizedExcursion[] = [
  {
    slug: 'lac-assal',
    name: { fr: 'Lac Assal', en: 'Lake Assal' },
    tagline: { fr: 'Le royaume du sel', en: 'The kingdom of salt' },
    categories: ['Aventure', 'day'],
    duration: { fr: 'Journée complète', en: 'Full day' },
    type: { fr: 'Désert & paysages volcaniques', en: 'Desert & volcanic landscapes' },
    summary: {
      fr: "Descendez vers le point le plus bas d'Afrique, un lac de sel éblouissant cerné de coulées de lave noire et de banquises de sel cristallin. Un contraste saisissant entre le blanc du sel, le turquoise de l'eau et le noir volcanique.",
      en: "Descend to the lowest point in Africa, a dazzling salt lake surrounded by black lava flows and crystalline salt formations. A striking contrast between the white of salt, the turquoise of water and the volcanic black.",
    },
    image: 'https://images.pexels.com/photos/14065506/pexels-photo-14065506.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    gallery: [
      'https://images.pexels.com/photos/14065506/pexels-photo-14065506.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/9868411/pexels-photo-9868411.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/29273388/pexels-photo-29273388.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/4154219/pexels-photo-4154219.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    ],
    highlights: [
      { fr: "Le point le plus bas d'Afrique", en: 'The lowest point in Africa' },
      { fr: 'Banquises de sel et cristaux naturels', en: 'Salt formations and natural crystals' },
      { fr: 'Coulées de lave et reliefs volcaniques', en: 'Lava flows and volcanic terrain' },
      { fr: 'Baignade dans une eau extrêmement salée', en: 'Swimming in extremely salty water' },
    ],
    itinerary: [
      { title: { fr: 'Départ de Djibouti City', en: 'Departure from Djibouti City' }, detail: { fr: 'Route panoramique à travers les paysages volcaniques du Grand Bara et du rift.', en: 'Scenic route through the volcanic landscapes of the Grand Bara and the rift.' } },
      { title: { fr: 'Points de vue sur le lac', en: 'Lake viewpoints' }, detail: { fr: "Arrêts photo sur les hauteurs dominant le bassin salé.", en: 'Photo stops on the heights overlooking the salt basin.' } },
      { title: { fr: 'Découverte du rivage', en: 'Shore exploration' }, detail: { fr: 'Marche sur les formations de sel et temps libre au bord de l\u2019eau.', en: 'Walk on the salt formations and free time by the water.' } },
      { title: { fr: 'Retour', en: 'Return' }, detail: { fr: 'Retour vers Djibouti en fin de journée.', en: 'Return to Djibouti at the end of the day.' } },
    ],
    included: [
      { fr: 'Transport aller-retour', en: 'Round-trip transport' },
      { fr: 'Accompagnement local', en: 'Local guide' },
    ],
    notIncluded: [
      { fr: 'Repas et boissons', en: 'Meals and drinks' },
      { fr: 'Dépenses personnelles', en: 'Personal expenses' },
    ],
    practical: [
      { label: { fr: 'Durée', en: 'Duration' }, value: { fr: 'Journée complète', en: 'Full day' } },
      { label: { fr: 'Lieu de départ', en: 'Departure' }, value: { fr: 'Djibouti City', en: 'Djibouti City' } },
      { label: { fr: 'Type', en: 'Type' }, value: { fr: 'Désert & volcans', en: 'Desert & volcanoes' } },
    ],
  },
  {
    slug: 'lac-abbe',
    name: { fr: 'Lac Abbé', en: 'Lake Abbé' },
    tagline: { fr: "Un paysage venu d'un autre monde", en: 'A landscape from another world' },
    categories: ['Aventure'],
    duration: { fr: '2 jours / 1 nuit', en: '2 days / 1 night' },
    type: { fr: 'Désert & bivouac', en: 'Desert & camping' },
    summary: {
      fr: "Un décor presque lunaire hérissé de hautes cheminées calcaires fumant au lever du soleil. Le Lac Abbé est l'un des paysages les plus spectaculaires de la corne de l'Afrique, idéal pour une nuit sous les étoiles.",
      en: "An almost lunar landscape bristling with tall limestone chimneys smoking at sunrise. Lake Abbé is one of the most spectacular landscapes in the Horn of Africa, ideal for a night under the stars.",
    },
    image: 'https://images.pexels.com/photos/37268331/pexels-photo-37268331.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    gallery: [
      'https://images.pexels.com/photos/37268331/pexels-photo-37268331.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/6068222/pexels-photo-6068222.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/12594236/pexels-photo-12594236.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/12291575/pexels-photo-12291575.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    ],
    highlights: [
      { fr: 'Cheminées calcaires monumentales', en: 'Monumental limestone chimneys' },
      { fr: 'Lever et coucher de soleil spectaculaires', en: 'Spectacular sunrise and sunset' },
      { fr: 'Nuit sous les étoiles', en: 'Night under the stars' },
      { fr: 'Sources chaudes et faune du désert', en: 'Hot springs and desert wildlife' },
    ],
    itinerary: [
      { title: { fr: 'Traversée du désert', en: 'Crossing the desert' }, detail: { fr: 'Route à travers les grands espaces vers le sud-ouest du pays.', en: 'Route through the wide-open spaces towards the southwest of the country.' } },
      { title: { fr: 'Arrivée au Lac Abbé', en: 'Arrival at Lake Abbé' }, detail: { fr: 'Découverte des cheminées calcaires en fin de journée.', en: 'Discovery of the limestone chimneys in the late afternoon.' } },
      { title: { fr: 'Nuit en bivouac', en: 'Overnight camp' }, detail: { fr: 'Coucher de soleil, dîner et nuit près du site.', en: 'Sunset, dinner and night near the site.' } },
      { title: { fr: 'Lever de soleil', en: 'Sunrise' }, detail: { fr: 'Le moment le plus magique, puis retour vers Djibouti.', en: 'The most magical moment, then return to Djibouti.' } },
    ],
    included: [
      { fr: 'Transport 4x4', en: '4x4 transport' },
      { fr: 'Nuit en bivouac', en: 'Overnight camp' },
      { fr: 'Accompagnement local', en: 'Local guide' },
    ],
    notIncluded: [
      { fr: 'Dépenses personnelles', en: 'Personal expenses' },
      { fr: 'Équipement personnel', en: 'Personal equipment' },
    ],
    practical: [
      { label: { fr: 'Durée', en: 'Duration' }, value: { fr: '2 jours / 1 nuit', en: '2 days / 1 night' } },
      { label: { fr: 'Lieu de départ', en: 'Departure' }, value: { fr: 'Djibouti City', en: 'Djibouti City' } },
      { label: { fr: 'Type', en: 'Type' }, value: { fr: 'Désert & bivouac', en: 'Desert & camping' } },
    ],
  },
  {
    slug: 'requins-baleines',
    name: { fr: 'Requins-baleines', en: 'Whale sharks' },
    tagline: { fr: 'Rencontrer les géants de la mer', en: 'Meet the giants of the sea' },
    categories: ['Mer', 'Nature'],
    duration: { fr: 'Demi-journée / journée', en: 'Half day / full day' },
    type: { fr: 'Sortie en mer', en: 'Sea trip' },
    summary: {
      fr: "Nagez aux côtés du plus grand poisson du monde dans les eaux du golfe de Tadjourah. Une rencontre inoubliable avec ces géants paisibles, au rythme des saisons de la mer Rouge.",
      en: "Swim alongside the world's largest fish in the waters of the Gulf of Tadjourah. An unforgettable encounter with these gentle giants, in rhythm with the Red Sea seasons.",
    },
    image: 'https://images.pexels.com/photos/6530412/pexels-photo-6530412.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    gallery: [
      'https://images.pexels.com/photos/6530412/pexels-photo-6530412.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/10154784/pexels-photo-10154784.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/5967796/pexels-photo-5967796.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/7905794/pexels-photo-7905794.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    ],
    highlights: [
      { fr: 'Nager avec les requins-baleines', en: 'Swim with whale sharks' },
      { fr: 'Golfe de Tadjourah', en: 'Gulf of Tadjourah' },
      { fr: 'Fonds marins riches en vie', en: 'Marine life-rich seabeds' },
      { fr: 'Encadrement en mer', en: 'Sea supervision' },
    ],
    itinerary: [
      { title: { fr: 'Départ en bateau', en: 'Boat departure' }, detail: { fr: 'Embarquement et navigation vers les zones d\u2019observation.', en: 'Boarding and navigation to the observation areas.' } },
      { title: { fr: 'Observation & plongée en apnée', en: 'Observation & snorkeling' }, detail: { fr: 'Mise à l\u2019eau pour nager auprès des requins-baleines.', en: 'Entering the water to swim near the whale sharks.' } },
      { title: { fr: 'Retour', en: 'Return' }, detail: { fr: 'Retour vers le port en fin de sortie.', en: 'Return to the port at the end of the trip.' } },
    ],
    included: [
      { fr: 'Sortie en bateau', en: 'Boat trip' },
      { fr: 'Encadrement', en: 'Supervision' },
    ],
    notIncluded: [
      { fr: 'Équipement de plongée en apnée personnel', en: 'Personal snorkeling equipment' },
      { fr: 'Repas selon la formule', en: 'Meals depending on the package' },
    ],
    practical: [
      { label: { fr: 'Durée', en: 'Duration' }, value: { fr: 'Demi-journée / journée', en: 'Half day / full day' } },
      { label: { fr: 'Type', en: 'Type' }, value: { fr: 'Sortie en mer', en: 'Sea trip' } },
      { label: { fr: 'Saison', en: 'Season' }, value: { fr: 'Selon la présence des requins-baleines', en: 'Depending on whale shark presence' } },
    ],
  },
  {
    slug: 'sables-blancs',
    name: { fr: 'Sables Blancs', en: 'Sables Blancs' },
    tagline: { fr: 'Entre mer turquoise et sable blanc', en: 'Between turquoise sea and white sand' },
    categories: ['Mer', 'day'],
    duration: { fr: 'Journée', en: 'Full day' },
    type: { fr: 'Plage & détente', en: 'Beach & relaxation' },
    summary: {
      fr: "Une plage de sable blanc bordée d'une mer turquoise, parfaite pour la baignade, la plongée en apnée et la détente. L'évasion balnéaire de Djibouti, entre farniente et fonds marins.",
      en: "A white sand beach bordered by turquoise sea, perfect for swimming, snorkeling and relaxation. Djibouti's beach getaway, between lounging and marine life.",
    },
    image: 'https://images.pexels.com/photos/921724/pexels-photo-921724.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    gallery: [
      'https://images.pexels.com/photos/921724/pexels-photo-921724.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/12858459/pexels-photo-12858459.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/946685/pexels-photo-946685.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/33831392/pexels-photo-33831392.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    ],
    highlights: [
      { fr: 'Plage de sable blanc', en: 'White sand beach' },
      { fr: 'Eaux turquoise', en: 'Turquoise waters' },
      { fr: 'Plongée en apnée', en: 'Snorkeling' },
      { fr: 'Détente et baignade', en: 'Relaxation and swimming' },
    ],
    itinerary: [
      { title: { fr: 'Route vers Tadjourah', en: 'Route to Tadjourah' }, detail: { fr: 'Trajet panoramique le long du golfe.', en: 'Scenic drive along the gulf.' } },
      { title: { fr: 'Temps libre à la plage', en: 'Free time at the beach' }, detail: { fr: 'Baignade, plongée en apnée et détente.', en: 'Swimming, snorkeling and relaxation.' } },
      { title: { fr: 'Retour', en: 'Return' }, detail: { fr: 'Retour en fin de journée.', en: 'Return at the end of the day.' } },
    ],
    included: [
      { fr: 'Transport aller-retour', en: 'Round-trip transport' },
      { fr: 'Accompagnement local', en: 'Local guide' },
    ],
    notIncluded: [
      { fr: 'Repas et boissons', en: 'Meals and drinks' },
      { fr: 'Location de matériel', en: 'Equipment rental' },
    ],
    practical: [
      { label: { fr: 'Durée', en: 'Duration' }, value: { fr: 'Journée', en: 'Full day' } },
      { label: { fr: 'Lieu de départ', en: 'Departure' }, value: { fr: 'Djibouti City', en: 'Djibouti City' } },
      { label: { fr: 'Type', en: 'Type' }, value: { fr: 'Plage & mer', en: 'Beach & sea' } },
    ],
  },
  {
    slug: 'moucha-maskali',
    name: { fr: 'Moucha & Maskali', en: 'Moucha & Maskali' },
    tagline: { fr: 'Les îles du golfe de Tadjourah', en: 'The islands of the Gulf of Tadjourah' },
    categories: ['Îles', 'Mer'],
    duration: { fr: 'Journée', en: 'Full day' },
    type: { fr: 'Îles & mer', en: 'Islands & sea' },
    summary: {
      fr: "Cap sur les îles de Moucha et Maskali, un archipel préservé aux eaux cristallines. Plongée en apnée, plages désertes et sensation de bout du monde à quelques milles de la ville.",
      en: "Head to the islands of Moucha and Maskali, a preserved archipelago with crystal-clear waters. Snorkeling, deserted beaches and the feeling of the end of the world just a few miles from the city.",
    },
    image: 'https://images.pexels.com/photos/3426864/pexels-photo-3426864.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    gallery: [
      'https://images.pexels.com/photos/3426864/pexels-photo-3426864.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/12858459/pexels-photo-12858459.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/7928070/pexels-photo-7928070.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/946685/pexels-photo-946685.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    ],
    highlights: [
      { fr: 'Archipel préservé', en: 'Preserved archipelago' },
      { fr: 'Eaux cristallines', en: 'Crystal-clear waters' },
      { fr: 'Plongée en apnée & plages', en: 'Snorkeling & beaches' },
      { fr: 'Sortie en bateau', en: 'Boat trip' },
    ],
    itinerary: [
      { title: { fr: 'Embarquement', en: 'Boarding' }, detail: { fr: 'Départ en bateau depuis Djibouti.', en: 'Boat departure from Djibouti.' } },
      { title: { fr: 'Escale sur les îles', en: 'Island stopover' }, detail: { fr: 'Plongée en apnée, baignade et temps libre.', en: 'Snorkeling, swimming and free time.' } },
      { title: { fr: 'Retour', en: 'Return' }, detail: { fr: 'Navigation retour en fin de journée.', en: 'Return navigation at the end of the day.' } },
    ],
    included: [
      { fr: 'Sortie en bateau', en: 'Boat trip' },
      { fr: 'Accompagnement local', en: 'Local guide' },
    ],
    notIncluded: [
      { fr: 'Repas selon la formule', en: 'Meals depending on the package' },
      { fr: 'Matériel de plongée en apnée personnel', en: 'Personal snorkeling equipment' },
    ],
    practical: [
      { label: { fr: 'Durée', en: 'Duration' }, value: { fr: 'Journée', en: 'Full day' } },
      { label: { fr: 'Type', en: 'Type' }, value: { fr: 'Îles & mer', en: 'Islands & sea' } },
      { label: { fr: 'Départ', en: 'Departure' }, value: { fr: 'Port de Djibouti', en: 'Djibouti port' } },
    ],
  },
  {
    slug: 'djibouti-city',
    name: { fr: 'Djibouti City', en: 'Djibouti City' },
    tagline: { fr: 'Au cœur de la culture djiboutienne', en: 'At the heart of Djiboutian culture' },
    categories: ['Culture', 'day'],
    duration: { fr: 'Demi-journée', en: 'Half day' },
    type: { fr: 'Ville & culture', en: 'City & culture' },
    summary: {
      fr: "Découvrez le cœur battant de Djibouti : ses marchés animés, son architecture métissée, ses places et sa vie locale. Une immersion dans la culture et l'hospitalité djiboutiennes.",
      en: "Discover the beating heart of Djibouti: its lively markets, its mixed architecture, its squares and local life. An immersion in Djiboutian culture and hospitality.",
    },
    image: 'https://images.pexels.com/photos/37492090/pexels-photo-37492090.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    gallery: [
      'https://images.pexels.com/photos/37492090/pexels-photo-37492090.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/36470055/pexels-photo-36470055.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/21618974/pexels-photo-21618974.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      'https://images.pexels.com/photos/30357319/pexels-photo-30357319.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    ],
    highlights: [
      { fr: 'Marchés locaux', en: 'Local markets' },
      { fr: 'Architecture métissée', en: 'Mixed architecture' },
      { fr: 'Vie de quartier', en: 'Neighborhood life' },
      { fr: 'Culture & histoire', en: 'Culture & history' },
    ],
    itinerary: [
      { title: { fr: 'Centre-ville', en: 'City center' }, detail: { fr: 'Découverte des places et de l\u2019architecture.', en: 'Discovery of the squares and architecture.' } },
      { title: { fr: 'Marchés', en: 'Markets' }, detail: { fr: 'Immersion dans les marchés et la vie locale.', en: 'Immersion in the markets and local life.' } },
      { title: { fr: 'Front de mer', en: 'Waterfront' }, detail: { fr: 'Balade le long du littoral urbain.', en: 'Walk along the urban waterfront.' } },
    ],
    included: [
      { fr: 'Accompagnement local', en: 'Local guide' },
    ],
    notIncluded: [
      { fr: 'Repas et boissons', en: 'Meals and drinks' },
      { fr: 'Achats personnels', en: 'Personal purchases' },
    ],
    practical: [
      { label: { fr: 'Durée', en: 'Duration' }, value: { fr: 'Demi-journée', en: 'Half day' } },
      { label: { fr: 'Type', en: 'Type' }, value: { fr: 'Ville & culture', en: 'City & culture' } },
      { label: { fr: 'Départ', en: 'Departure' }, value: { fr: 'Djibouti City', en: 'Djibouti City' } },
    ],
  },
];

export const experienceTypes: LocalizedExperienceType[] = [
  { icon: 'Mountain', title: { fr: 'Aventure', en: 'Adventure' }, text: { fr: 'Excursions dans les paysages désertiques et volcaniques.', en: 'Excursions in desert and volcanic landscapes.' } },
  { icon: 'Waves', title: { fr: 'Mer & îles', en: 'Sea & islands' }, text: { fr: 'Excursions en mer, plages, plongée en apnée et découverte des îles.', en: 'Sea excursions, beaches, snorkeling and island discovery.' } },
  { icon: 'Fish', title: { fr: 'Nature & faune', en: 'Nature & wildlife' }, text: { fr: 'Observation de la faune marine et découverte des écosystèmes.', en: 'Marine wildlife observation and ecosystem discovery.' } },
  { icon: 'Landmark', title: { fr: 'Culture', en: 'Culture' }, text: { fr: "Découverte de Djibouti, de son histoire, de ses traditions et de sa culture.", en: 'Discover Djibouti, its history, its traditions and its culture.' } },
  { icon: 'Car', title: { fr: 'Voyages sur route', en: 'Road trips' }, text: { fr: 'Exploration de Djibouti en véhicule avec accompagnement local.', en: 'Explore Djibouti by vehicle with local guidance.' } },
  { icon: 'Tent', title: { fr: 'Plein air', en: 'Outdoor' }, text: { fr: 'Randonnées, camping et expériences en pleine nature.', en: 'Hiking, camping and outdoor nature experiences.' } },
];

export const services: LocalizedService[] = [
  { icon: 'Compass', title: { fr: 'Excursions & visites', en: 'Excursions & tours' }, text: { fr: "Des excursions guidées vers les paysages emblématiques de Djibouti, adaptées à vos envies.", en: 'Guided excursions to Djibouti\'s iconic landscapes, tailored to your wishes.' } },
  { icon: 'Car', title: { fr: 'Location de voitures', en: 'Car rental' }, text: { fr: 'Un véhicule pour explorer Djibouti à votre rythme, avec un accompagnement local.', en: 'A vehicle to explore Djibouti at your own pace, with local support.' } },
  { icon: 'Plane', title: { fr: 'Navette aéroport', en: 'Airport shuttle' }, text: { fr: 'Des transferts entre l\u2019aéroport et votre hébergement, en toute simplicité.', en: 'Transfers between the airport and your accommodation, hassle-free.' } },
  { icon: 'BedDouble', title: { fr: "Réservation d'hébergement", en: 'Accommodation booking' }, text: { fr: 'Une aide pour trouver et réserver un hébergement adapté à votre séjour.', en: 'Help finding and booking accommodation suited to your stay.' } },
  { icon: 'CalendarCheck', title: { fr: 'Organisation de séjour', en: 'Stay organization' }, text: { fr: "La coordination de l'ensemble de votre voyage, du premier au dernier jour.", en: 'Coordination of your entire trip, from the first to the last day.' } },
];

export const galleryCategories = ['Desert', 'Lakes', 'Ocean', 'Wildlife', 'Culture', 'Adventure'] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

export const gallery: LocalizedGalleryItem[] = [
  { url: 'https://images.pexels.com/photos/4154219/pexels-photo-4154219.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Desert', alt: { fr: 'Désert de Djibouti vu du ciel', en: 'Djibouti desert from above' } },
  { url: 'https://images.pexels.com/photos/4154222/pexels-photo-4154222.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Desert', alt: { fr: 'Plaines arides et montagnes', en: 'Arid plains and mountains' } },
  { url: 'https://images.pexels.com/photos/14065506/pexels-photo-14065506.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Lakes', alt: { fr: 'Lac de sel turquoise', en: 'Turquoise salt lake' } },
  { url: 'https://images.pexels.com/photos/9868411/pexels-photo-9868411.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Lakes', alt: { fr: 'Lac turquoise entouré de montagnes', en: 'Turquoise lake surrounded by mountains' } },
  { url: 'https://images.pexels.com/photos/29273388/pexels-photo-29273388.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Lakes', alt: { fr: 'Étendues de sel', en: 'Salt expanses' } },
  { url: 'https://images.pexels.com/photos/921724/pexels-photo-921724.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Ocean', alt: { fr: 'Plage turquoise', en: 'Turquoise beach' } },
  { url: 'https://images.pexels.com/photos/12858459/pexels-photo-12858459.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Ocean', alt: { fr: 'Baigneurs dans une eau cristalline', en: 'Swimmers in crystal-clear water' } },
  { url: 'https://images.pexels.com/photos/3426864/pexels-photo-3426864.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Ocean', alt: { fr: 'Île tropicale vue du ciel', en: 'Tropical island from above' } },
  { url: 'https://images.pexels.com/photos/6530412/pexels-photo-6530412.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Wildlife', alt: { fr: 'Requin-baleine et plongeurs', en: 'Whale shark and divers' } },
  { url: 'https://images.pexels.com/photos/10154784/pexels-photo-10154784.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Wildlife', alt: { fr: 'Requins-baleines sous l\u2019eau', en: 'Whale sharks underwater' } },
  { url: 'https://images.pexels.com/photos/5967796/pexels-photo-5967796.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Wildlife', alt: { fr: 'Requin-baleine près de la surface', en: 'Whale shark near the surface' } },
  { url: 'https://images.pexels.com/photos/37492090/pexels-photo-37492090.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Culture', alt: { fr: 'Front de mer de Tadjoura', en: 'Tadjoura waterfront' } },
  { url: 'https://images.pexels.com/photos/36470055/pexels-photo-36470055.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Culture', alt: { fr: 'Marché animé', en: 'Lively market' } },
  { url: 'https://images.pexels.com/photos/21618974/pexels-photo-21618974.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Culture', alt: { fr: 'Scène de rue', en: 'Street scene' } },
  { url: 'https://images.pexels.com/photos/37268331/pexels-photo-37268331.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Adventure', alt: { fr: 'Cheminées du Lac Abbé au coucher du soleil', en: 'Lake Abbé chimneys at sunset' } },
  { url: 'https://images.pexels.com/photos/17877123/pexels-photo-17877123.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Adventure', alt: { fr: 'Caravane de chameaux dans les dunes', en: 'Camel caravan in the dunes' } },
  { url: 'https://images.pexels.com/photos/9497619/pexels-photo-9497619.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Adventure', alt: { fr: 'Bivouac dans le désert', en: 'Desert camp' } },
  { url: 'https://images.pexels.com/photos/13611801/pexels-photo-13611801.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', category: 'Desert', alt: { fr: 'Formations rocheuses désertiques', en: 'Desert rock formations' } },
];

export const experienceCategories: Category[] = categoryKeys;

// Home page data
export const whyDjiboutiImages = [
  { titleKey: 'whydjibouti.1.title', textKey: 'whydjibouti.1.text', img: 'https://images.pexels.com/photos/9868411/pexels-photo-9868411.jpeg?auto=compress&cs=tinysrgb&h=600&w=800' },
  { titleKey: 'whydjibouti.2.title', textKey: 'whydjibouti.2.text', img: 'https://images.pexels.com/photos/37268331/pexels-photo-37268331.jpeg?auto=compress&cs=tinysrgb&h=600&w=800' },
  { titleKey: 'whydjibouti.3.title', textKey: 'whydjibouti.3.text', img: 'https://images.pexels.com/photos/6530412/pexels-photo-6530412.jpeg?auto=compress&cs=tinysrgb&h=600&w=800' },
  { titleKey: 'whydjibouti.4.title', textKey: 'whydjibouti.4.text', img: 'https://images.pexels.com/photos/3426864/pexels-photo-3426864.jpeg?auto=compress&cs=tinysrgb&h=600&w=800' },
];

export const reasonIcons = ['Compass', 'Sparkles', 'Users', 'Heart'];
export const reasonKeys = [
  { icon: 'Compass', titleKey: 'reasons.1.title', textKey: 'reasons.1.text' },
  { icon: 'Sparkles', titleKey: 'reasons.2.title', textKey: 'reasons.2.text' },
  { icon: 'Users', titleKey: 'reasons.3.title', textKey: 'reasons.3.text' },
  { icon: 'Heart', titleKey: 'reasons.4.title', textKey: 'reasons.4.text' },
];
