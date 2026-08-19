import type { Lang } from './types';

export const translations: Record<Lang, Record<string, string>> = {
  fr: {
    // Header / Nav
    'nav.home': 'Accueil',
    'nav.destinations': 'Destinations',
    'nav.experiences': 'Expériences',
    'nav.gallery': 'Galerie',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'header.planTrip': 'Planifier mon voyage',

    // Mobile CTA
    'cta.whatsapp': 'WhatsApp',

    // Home — Hero
    'home.hero.badge': 'Djibouti — Corne de l\'Afrique',
    'home.hero.title': 'DÉCOUVREZ DJIBOUTI',
    'home.hero.subtitle': 'Un voyage au-delà de l\'ordinaire.',
    'home.hero.description': 'Découvrez une destination unique entre désert, mer, volcans, lacs et cultures millénaires.',
    'home.hero.explore': 'Explorer nos excursions',
    'home.hero.plan': 'Planifier mon voyage',

    // Home — Why Djibouti
    'home.why.eyebrow': 'Pourquoi Djibouti ?',
    'home.why.title': 'Une destination pas comme les autres.',
    'home.why.text': "Entre l'Afrique et la mer Rouge, Djibouti rassemble en un seul territoire des paysages que l'on retrouve rarement ailleurs : lacs salés, volcans, déserts, îles, plages sauvages et fonds marins exceptionnels.",
    'home.why.statement': 'Djibouti ne se visite pas seulement. Il se vit.',

    // Home — Brand statement
    'home.brand.eyebrow': 'Aventure. Authenticité. Djibouti.',
    'home.brand.title': 'Djibouti n\'est pas qu\'une destination.',
    'home.brand.subtitle': "C'est une expérience.",
    'home.brand.text': 'Découvrez les paysages. Rencontrez les habitants. Vivez l\'aventure.',

    // Home — Explore
    'home.explore.eyebrow': 'Explorer Djibouti',
    'home.explore.title': 'Les expériences emblématiques',
    'home.explore.text': 'Des paysages de sel et de feu aux géants de la mer Rouge, découvrez nos destinations phares.',

    // Home — Why travel with us
    'home.travel.eyebrow': 'Trip2Djib',
    'home.travel.title': 'Votre voyage. Notre connaissance locale.',
    'home.travel.text': 'Découvrez Djibouti avec ceux qui le connaissent de l\'intérieur.',

    // Home — Reviews
    'home.reviews.eyebrow': 'Ils ont voyagé avec nous',
    'home.reviews.title': 'Trip2Djib — {rating} sur Tripadvisor',
    'home.reviews.text': 'Retrouvez les avis authentiques de nos voyageurs directement sur Tripadvisor. Nous ne publions ici aucun témoignage fabriqué.',
    'home.reviews.button': 'Voir tous les avis',

    // Home — Final CTA
    'home.final.title': 'Prêt à découvrir Djibouti ?',
    'home.final.text': "Que vous rêviez de paysages volcaniques, de mer, de désert, de rencontres ou d'aventure, nous vous aidons à construire une expérience à votre mesure.",
    'home.final.plan': 'Planifier mon voyage',
    'home.final.contact': 'Nous contacter',

    // Destinations page
    'destinations.eyebrow': 'Excursions & tours',
    'destinations.title': 'Nos excursions',
    'destinations.subtitle': 'Choisissez votre prochaine aventure, du désert de sel aux géants de la mer Rouge.',
    'destinations.filter.all': 'Toutes',
    'destinations.empty': 'Aucune excursion dans cette catégorie pour le moment.',

    // Excursion card
    'excursion.view': "Voir l'expérience",

    // Excursion detail
    'excursion.back': 'Toutes les excursions',
    'excursion.summary': 'Résumé',
    'excursion.highlights': 'Points forts',
    'excursion.itinerary': 'Itinéraire',
    'excursion.included': 'Inclus',
    'excursion.notIncluded': 'Non inclus',
    'excursion.gallery': 'Galerie photos',
    'excursion.practical': 'Informations pratiques',
    'excursion.departure': 'Départ organisé depuis Djibouti.',
    'excursion.booking.title': 'Réserver cette expérience',
    'excursion.booking.text': 'Contactez notre équipe locale pour organiser votre excursion.',
    'excursion.booking.button': 'Réserver cette expérience',
    'excursion.notFound.title': 'Excursion introuvable',
    'excursion.notFound.text': "Cette expérience n'existe pas ou a été déplacée.",
    'excursion.notFound.button': 'Voir toutes les excursions',

    // Experiences page
    'experiences.eyebrow': 'Aventure. Authenticité. Djibouti.',
    'experiences.title': 'Nos expériences',
    'experiences.subtitle': 'Des façons différentes de rencontrer un pays qui ne ressemble à aucun autre.',
    'experiences.cta.eyebrow': 'À votre rythme',
    'experiences.cta.title': 'Une idée en tête ?',
    'experiences.cta.text': 'Parlez-nous de votre projet et construisons ensemble une expérience qui vous ressemble.',

    // About page
    'about.eyebrow': 'Né à Djibouti. Pensé pour les explorateurs.',
    'about.title': 'Une porte ouverte sur Djibouti',
    'about.subtitle': "Un opérateur local pour découvrir le pays de l'intérieur, avec celles et ceux qui le connaissent vraiment.",
    'about.story.eyebrow': 'Notre histoire',
    'about.story.title': 'Le voyage commence par une rencontre.',
    'about.story.text1': "Trip2Djib est un acteur touristique local dédié à la découverte de Djibouti. Nous souhaitons faire connaître les paysages, les cultures et les grands espaces qui font la singularité de notre pays.",
    'about.story.text2': "Notre rôle est simple : vous ouvrir les bonnes portes, vous accompagner avec proximité et vous aider à vivre une expérience authentique, au-delà des circuits impersonnels.",
    'about.story.badge': 'Découvrez le vrai Djibouti.',
    'about.values.eyebrow': 'Ce qui nous guide',
    'about.values.title': 'Connaissance. Hospitalité. Découverte.',
    'about.values.1': 'Connaissance du territoire',
    'about.values.2': 'Hospitalité djiboutienne',
    'about.values.3': 'Proximité avec les voyageurs',
    'about.values.4': 'Flexibilité et découverte',

    // Services page
    'services.eyebrow': "Au-delà de l'excursion",
    'services.title': 'Des services pour un voyage plus simple',
    'services.subtitle': "De la première idée au dernier transfert, Trip2Djib vous accompagne dans l'organisation de votre séjour.",
    'services.learnMore': 'En savoir plus',

    // Gallery page
    'gallery.eyebrow': "L'esprit du voyage",
    'gallery.title': 'Galerie',
    'gallery.subtitle': 'Des paysages de feu, de sel et d\'eau. Une invitation à regarder Djibouti autrement.',
    'gallery.filter.all': 'Toutes',

    // Contact page
    'contact.eyebrow': 'Votre aventure commence ici',
    'contact.title': 'Planifions votre aventure à Djibouti.',
    'contact.subtitle': 'Racontez-nous votre projet. Notre équipe locale vous répondra avec les informations disponibles pour construire votre séjour.',
    'contact.info.eyebrow': 'Parlons de votre voyage',
    'contact.info.title': 'Nous sommes à votre écoute.',
    'contact.info.text': "Que vous ayez déjà une idée précise ou que vous commenciez à rêver, écrivez-nous. Nous vous aiderons à imaginer la suite.",
    'contact.form.title': 'Planifier mon voyage',
    'contact.form.name': 'Nom *',
    'contact.form.name.placeholder': 'Votre nom',
    'contact.form.email': 'Email *',
    'contact.form.email.placeholder': 'vous@exemple.com',
    'contact.form.phone': 'Téléphone',
    'contact.form.phone.placeholder': '+33 ...',
    'contact.form.date': 'Date souhaitée',
    'contact.form.travelers': 'Nombre de voyageurs',
    'contact.form.travelers.placeholder': 'Ex. 2',
    'contact.form.experience': "Type d'expérience",
    'contact.form.experience.placeholder': 'Choisir une option',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Parlez-nous de votre projet...',
    'contact.form.submit': 'Envoyer ma demande',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.success.title': 'Merci pour votre demande.',
    'contact.form.success.text': 'Votre message a bien été transmis à Trip2Djib. Nous reviendrons vers vous dès que possible.',
    'contact.form.success.again': 'Envoyer une autre demande',
    'contact.form.error': "Votre demande n'a pas pu être envoyée. Essayez à nouveau ou contactez-nous directement.",

    // Contact form experience options
    'contact.exp.adventure': 'Aventure',
    'contact.exp.sea': 'Mer & îles',
    'contact.exp.nature': 'Nature & faune',
    'contact.exp.culture': 'Culture',
    'contact.exp.roadtrip': 'Voyage sur route',
    'contact.exp.stay': 'Organisation de séjour',

    // Footer
    'footer.tagline': 'Opérateur touristique & expériences de voyage à Djibouti.',
    'footer.discover': 'Découvrez le vrai Djibouti.',
    'footer.explore': 'Explorer',
    'footer.contact': 'Contact',
    'footer.follow': 'Suivez-nous',
    'footer.tripadvisor': 'Tripadvisor {rating}',
    'footer.copyright': '© {year} Trip2Djib. Tous droits réservés.',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',

    // Why Djibouti cards
    'whydjibouti.1.title': 'Lac Assal',
    'whydjibouti.1.text': "Le point le plus bas d'Afrique.",
    'whydjibouti.2.title': 'Lac Abbé',
    'whydjibouti.2.text': 'Un paysage presque lunaire dominé par ses cheminées calcaires.',
    'whydjibouti.3.title': 'Mer Rouge',
    'whydjibouti.3.text': 'Des eaux riches en vie marine et des expériences uniques.',
    'whydjibouti.4.title': 'Îles & plages',
    'whydjibouti.4.text': 'Moucha, Maskali, Sables Blancs et autres paysages côtiers.',

    // Reasons
    'reasons.1.title': 'Expertise locale',
    'reasons.1.text': 'Une connaissance directe du territoire et de ses destinations.',
    'reasons.2.title': 'Expériences personnalisées',
    'reasons.2.text': "Des excursions adaptées à vos envies, votre rythme et vos intérêts lorsque cela est possible.",
    'reasons.3.title': 'Accompagnement humain',
    'reasons.3.text': 'Un contact direct avec une équipe locale, à chaque étape.',
    'reasons.4.title': 'Découverte authentique',
    'reasons.4.text': 'Une rencontre avec Djibouti, au-delà des circuits impersonnels.',

    // Categories
    'category.Aventure': 'Aventure',
    'category.Mer': 'Mer',
    'category.Nature': 'Nature',
    'category.Culture': 'Culture',
    'category.Îles': 'Îles',
    'category.day': "Excursions d'une journée",

    // Gallery categories
    'gallery.cat.Desert': 'Désert',
    'gallery.cat.Lakes': 'Lacs',
    'gallery.cat.Ocean': 'Océan',
    'gallery.cat.Wildlife': 'Faune',
    'gallery.cat.Culture': 'Culture',
    'gallery.cat.Adventure': 'Aventure',
  },

  en: {
    // Header / Nav
    'nav.home': 'Home',
    'nav.destinations': 'Destinations',
    'nav.experiences': 'Experiences',
    'nav.gallery': 'Gallery',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'header.planTrip': 'Plan my trip',

    // Mobile CTA
    'cta.whatsapp': 'WhatsApp',

    // Home — Hero
    'home.hero.badge': 'Djibouti — Horn of Africa',
    'home.hero.title': 'DISCOVER DJIBOUTI',
    'home.hero.subtitle': 'A journey beyond the ordinary.',
    'home.hero.description': 'Discover a unique destination between desert, sea, volcanoes, lakes and millennia-old cultures.',
    'home.hero.explore': 'Explore our excursions',
    'home.hero.plan': 'Plan my trip',

    // Home — Why Djibouti
    'home.why.eyebrow': 'Why Djibouti?',
    'home.why.title': 'A destination unlike any other.',
    'home.why.text': 'Between Africa and the Red Sea, Djibouti brings together in a single territory landscapes rarely found elsewhere: salt lakes, volcanoes, deserts, islands, wild beaches and exceptional marine life.',
    'home.why.statement': 'Djibouti is not just visited. It is lived.',

    // Home — Brand statement
    'home.brand.eyebrow': 'Adventure. Authenticity. Djibouti.',
    'home.brand.title': 'Djibouti is not just a destination.',
    'home.brand.subtitle': "It's an experience.",
    'home.brand.text': 'Discover the landscapes. Meet the people. Feel the adventure.',

    // Home — Explore
    'home.explore.eyebrow': 'Explore Djibouti',
    'home.explore.title': 'Iconic experiences',
    'home.explore.text': 'From landscapes of salt and fire to the giants of the Red Sea, discover our flagship destinations.',

    // Home — Why travel with us
    'home.travel.eyebrow': 'Trip2Djib',
    'home.travel.title': 'Your journey. Our local knowledge.',
    'home.travel.text': 'Discover Djibouti with people who know it from the inside.',

    // Home — Reviews
    'home.reviews.eyebrow': 'They traveled with us',
    'home.reviews.title': 'Trip2Djib — {rating} on Tripadvisor',
    'home.reviews.text': 'Find authentic reviews from our travelers directly on Tripadvisor. We publish no fabricated testimonials here.',
    'home.reviews.button': 'See all reviews',

    // Home — Final CTA
    'home.final.title': 'Ready to discover Djibouti?',
    'home.final.text': 'Whether you dream of volcanic landscapes, sea, desert, encounters or adventure, we help you build an experience tailored to you.',
    'home.final.plan': 'Plan my trip',
    'home.final.contact': 'Contact us',

    // Destinations page
    'destinations.eyebrow': 'Excursions & tours',
    'destinations.title': 'Our excursions',
    'destinations.subtitle': 'Choose your next adventure, from the salt desert to the giants of the Red Sea.',
    'destinations.filter.all': 'All',
    'destinations.empty': 'No excursions in this category at the moment.',

    // Excursion card
    'excursion.view': 'View experience',

    // Excursion detail
    'excursion.back': 'All excursions',
    'excursion.summary': 'Summary',
    'excursion.highlights': 'Highlights',
    'excursion.itinerary': 'Itinerary',
    'excursion.included': 'Included',
    'excursion.notIncluded': 'Not included',
    'excursion.gallery': 'Photo gallery',
    'excursion.practical': 'Practical information',
    'excursion.departure': 'Organized departure from Djibouti.',
    'excursion.booking.title': 'Book this experience',
    'excursion.booking.text': 'Contact our local team to organize your excursion.',
    'excursion.booking.button': 'Book this experience',
    'excursion.notFound.title': 'Excursion not found',
    'excursion.notFound.text': "This experience doesn't exist or has been moved.",
    'excursion.notFound.button': 'See all excursions',

    // Experiences page
    'experiences.eyebrow': 'Adventure. Authenticity. Djibouti.',
    'experiences.title': 'Our experiences',
    'experiences.subtitle': 'Different ways to discover a country like no other.',
    'experiences.cta.eyebrow': 'At your own pace',
    'experiences.cta.title': 'Have an idea in mind?',
    'experiences.cta.text': 'Tell us about your project and let\'s build an experience that suits you together.',

    // About page
    'about.eyebrow': 'Born in Djibouti. Made for explorers.',
    'about.title': 'A gateway to Djibouti',
    'about.subtitle': 'A local operator to discover the country from the inside, with those who truly know it.',
    'about.story.eyebrow': 'Our story',
    'about.story.title': 'The journey begins with a meeting.',
    'about.story.text1': 'Trip2Djib is a local tourism operator dedicated to discovering Djibouti. We want to share the landscapes, cultures and wide-open spaces that make our country unique.',
    'about.story.text2': 'Our role is simple: to open the right doors for you, to accompany you closely and to help you live an authentic experience, beyond impersonal tours.',
    'about.story.badge': 'Discover the real Djibouti.',
    'about.values.eyebrow': 'What guides us',
    'about.values.title': 'Knowledge. Hospitality. Discovery.',
    'about.values.1': 'Knowledge of the territory',
    'about.values.2': 'Djiboutian hospitality',
    'about.values.3': 'Closeness with travelers',
    'about.values.4': 'Flexibility and discovery',

    // Services page
    'services.eyebrow': 'Beyond the excursion',
    'services.title': 'Services for a simpler trip',
    'services.subtitle': 'From the first idea to the last transfer, Trip2Djib accompanies you in organizing your stay.',
    'services.learnMore': 'Learn more',

    // Gallery page
    'gallery.eyebrow': 'The spirit of travel',
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Landscapes of fire, salt and water. An invitation to see Djibouti differently.',
    'gallery.filter.all': 'All',

    // Contact page
    'contact.eyebrow': 'Your adventure starts here',
    'contact.title': "Let's plan your Djibouti adventure.",
    'contact.subtitle': 'Tell us about your project. Our local team will respond with the information needed to build your stay.',
    'contact.info.eyebrow': "Let's talk about your trip",
    'contact.info.title': 'We are here to listen.',
    'contact.info.text': 'Whether you have a precise idea or are just starting to dream, write to us. We will help you imagine what comes next.',
    'contact.form.title': 'Plan my trip',
    'contact.form.name': 'Name *',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email *',
    'contact.form.email.placeholder': 'you@example.com',
    'contact.form.phone': 'Phone',
    'contact.form.phone.placeholder': '+33 ...',
    'contact.form.date': 'Preferred date',
    'contact.form.travelers': 'Number of travelers',
    'contact.form.travelers.placeholder': 'Ex. 2',
    'contact.form.experience': 'Experience type',
    'contact.form.experience.placeholder': 'Choose an option',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell us about your project...',
    'contact.form.submit': 'Send my request',
    'contact.form.sending': 'Sending...',
    'contact.form.success.title': 'Thank you for your request.',
    'contact.form.success.text': 'Your message has been sent to Trip2Djib. We will get back to you as soon as possible.',
    'contact.form.success.again': 'Send another request',
    'contact.form.error': 'Your request could not be sent. Please try again or contact us directly.',

    // Contact form experience options
    'contact.exp.adventure': 'Adventure',
    'contact.exp.sea': 'Sea & islands',
    'contact.exp.nature': 'Nature & wildlife',
    'contact.exp.culture': 'Culture',
    'contact.exp.roadtrip': 'Road trip',
    'contact.exp.stay': 'Stay organization',

    // Footer
    'footer.tagline': 'Tour operator & travel experiences in Djibouti.',
    'footer.discover': 'Discover the real Djibouti.',
    'footer.explore': 'Explore',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow us',
    'footer.tripadvisor': 'Tripadvisor {rating}',
    'footer.copyright': '© {year} Trip2Djib. All rights reserved.',
    'footer.legal': 'Legal notice',
    'footer.privacy': 'Privacy policy',

    // Why Djibouti cards
    'whydjibouti.1.title': 'Lake Assal',
    'whydjibouti.1.text': 'The lowest point in Africa.',
    'whydjibouti.2.title': 'Lake Abbé',
    'whydjibouti.2.text': 'An almost lunar landscape dominated by its limestone chimneys.',
    'whydjibouti.3.title': 'Red Sea',
    'whydjibouti.3.text': 'Waters rich in marine life and unique experiences.',
    'whydjibouti.4.title': 'Islands & beaches',
    'whydjibouti.4.text': 'Moucha, Maskali, Sables Blancs and other coastal landscapes.',

    // Reasons
    'reasons.1.title': 'Local expertise',
    'reasons.1.text': 'Direct knowledge of the territory and its destinations.',
    'reasons.2.title': 'Personalized experiences',
    'reasons.2.text': 'Excursions adapted to your wishes, your pace and your interests whenever possible.',
    'reasons.3.title': 'Human accompaniment',
    'reasons.3.text': 'Direct contact with a local team, at every step.',
    'reasons.4.title': 'Authentic discovery',
    'reasons.4.text': 'A meeting with Djibouti, beyond impersonal tours.',

    // Categories
    'category.Aventure': 'Adventure',
    'category.Mer': 'Sea',
    'category.Nature': 'Nature',
    'category.Culture': 'Culture',
    'category.Îles': 'Islands',
    'category.day': 'Day trips',

    // Gallery categories
    'gallery.cat.Desert': 'Desert',
    'gallery.cat.Lakes': 'Lakes',
    'gallery.cat.Ocean': 'Ocean',
    'gallery.cat.Wildlife': 'Wildlife',
    'gallery.cat.Culture': 'Culture',
    'gallery.cat.Adventure': 'Adventure',
  },
};
