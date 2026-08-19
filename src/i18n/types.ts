export type Lang = 'fr' | 'en';

export type LocalizedString = Record<Lang, string>;

export type LocalizedExcursion = {
  slug: string;
  name: LocalizedString;
  tagline: LocalizedString;
  categories: string[];
  duration: LocalizedString;
  type: LocalizedString;
  summary: LocalizedString;
  image: string;
  gallery: string[];
  highlights: LocalizedString[];
  itinerary: { title: LocalizedString; detail: LocalizedString }[];
  included: LocalizedString[];
  notIncluded: LocalizedString[];
  practical: { label: LocalizedString; value: LocalizedString }[];
};

export type LocalizedExperienceType = {
  icon: string;
  title: LocalizedString;
  text: LocalizedString;
};

export type LocalizedService = {
  icon: string;
  title: LocalizedString;
  text: LocalizedString;
};

export type LocalizedGalleryItem = {
  url: string;
  category: string;
  alt: LocalizedString;
};

export type LocalizedNavLink = {
  label: LocalizedString;
  to: string;
};

export type LocalizedWhyDjibouti = {
  title: LocalizedString;
  text: LocalizedString;
  img: string;
};

export type LocalizedReason = {
  icon: string;
  title: LocalizedString;
  text: LocalizedString;
};
