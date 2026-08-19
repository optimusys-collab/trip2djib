import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BedDouble,
  CalendarCheck,
  Car,
  CheckCircle2,
  Compass,
  Facebook,
  Fish,
  Landmark,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Plane,
  Send,
  Tent,
  Waves,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ExcursionCard from '@/components/ExcursionCard';
import { useI18n } from '@/i18n/context';
import { CONTACT, excursions, experienceTypes, gallery, galleryCategories, services, type GalleryCategory } from '@/data/content';
import { sendTripRequest, type TripRequest } from '@/lib/emailjs';
import { useRouter } from '@/router';

const icons = { Compass, Car, Plane, BedDouble, CalendarCheck, Mountain, Waves, Fish, Landmark, Tent };

export function Experiences() {
  const { lang, t } = useI18n();
  return (
    <div>
      <PageHero image="https://images.pexels.com/photos/17877123/pexels-photo-17877123.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000" eyebrow={t('experiences.eyebrow')} title={t('experiences.title')} subtitle={t('experiences.subtitle')} />
      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experienceTypes.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return <Reveal key={item.title[lang]} delay={index * 70} className="rounded-2xl bg-sand-100 p-7 ring-1 ring-black/5 transition hover:-translate-y-1 hover:bg-sand-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sea-500/10 text-sea-600"><Icon size={25} /></div>
              <h2 className="mt-5 font-display text-2xl font-semibold">{item.title[lang]}</h2>
              <p className="mt-2 text-sm leading-relaxed text-volcanic-600">{item.text[lang]}</p>
            </Reveal>;
          })}
        </div>
      </section>
      <section className="bg-volcanic-900 py-16 text-center text-white sm:py-20"><Reveal className="mx-auto max-w-2xl px-5"><p className="text-sm uppercase tracking-[0.2em] text-sea-300">{t('experiences.cta.eyebrow')}</p><h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">{t('experiences.cta.title')}</h2><p className="mt-4 text-sand-200/80">{t('experiences.cta.text')}</p><button onClick={() => window.location.hash = '/contact'} className="mt-7 inline-flex items-center gap-2 rounded-full bg-sea-500 px-6 py-3 text-sm font-semibold transition hover:bg-sea-600">{t('header.planTrip')} <ArrowRight size={16} /></button></Reveal></section>
    </div>
  );
}

export function About() {
  const { t } = useI18n();
  return <div>
    <PageHero image="https://images.pexels.com/photos/37492090/pexels-photo-37492090.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000" eyebrow={t('about.eyebrow')} title={t('about.title')} subtitle={t('about.subtitle')} />
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:gap-12 sm:py-24 lg:grid-cols-2 lg:items-center lg:px-8">
      <Reveal><p className="text-sm font-semibold uppercase tracking-[0.2em] text-sea-600">{t('about.story.eyebrow')}</p><h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">{t('about.story.title')}</h2><p className="mt-6 text-lg leading-relaxed text-volcanic-600">{t('about.story.text1')}</p><p className="mt-4 text-lg leading-relaxed text-volcanic-600">{t('about.story.text2')}</p></Reveal>
      <Reveal delay={120} className="relative"><img src="https://images.pexels.com/photos/4154222/pexels-photo-4154222.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200" alt="Paysage de Djibouti" className="h-72 w-full rounded-2xl object-cover shadow-xl sm:h-[28rem]" /><div className="absolute -bottom-5 -left-4 rounded-xl bg-sea-500 px-5 py-4 text-white shadow-lg sm:-left-6"><p className="font-display text-xl">{t('about.story.badge')}</p></div></Reveal>
    </section>
    <section className="bg-sand-100 py-16 sm:py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-sea-600">{t('about.values.eyebrow')}</p><h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">{t('about.values.title')}</h2></Reveal><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[1, 2, 3, 4].map((n) => <Reveal key={n} delay={n * 70} className="rounded-xl bg-sand-50 p-5"><span className="font-display text-3xl text-sea-500">0{n}</span><p className="mt-5 font-medium text-volcanic-800">{t(`about.values.${n}`)}</p></Reveal>)}</div></div></section>
  </div>;
}

export function Services() {
  const { lang, t } = useI18n();
  return <div>
    <PageHero image="https://images.pexels.com/photos/13611801/pexels-photo-13611801.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000" eyebrow={t('services.eyebrow')} title={t('services.title')} subtitle={t('services.subtitle')} />
    <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((item, i) => { const Icon = icons[item.icon as keyof typeof icons]; return <Reveal key={item.title[lang]} delay={i * 70} className="rounded-2xl border border-sand-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sea-500/10 text-sea-600"><Icon size={24} /></div><h2 className="mt-5 font-display text-2xl font-semibold">{item.title[lang]}</h2><p className="mt-3 text-sm leading-relaxed text-volcanic-600">{item.text[lang]}</p><a href="mailto:trip2djib@gmail.com" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sea-600">{t('services.learnMore')} <ArrowRight size={15} /></a></Reveal>; })}</div></section>
  </div>;
}

export function Gallery() {
  const { lang, t } = useI18n();
  const [active, setActive] = useState<'All' | GalleryCategory>('All');
  const visible = useMemo(() => active === 'All' ? gallery : gallery.filter((image) => image.category === active), [active]);
  const [selected, setSelected] = useState<string | null>(null);
  return <div>
    <PageHero image="https://images.pexels.com/photos/14065506/pexels-photo-14065506.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000" eyebrow={t('gallery.eyebrow')} title={t('gallery.title')} subtitle={t('gallery.subtitle')} />
    <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8"><div className="mb-8 flex flex-wrap gap-2 sm:mb-10">{['All', ...galleryCategories].map((category) => <button key={category} onClick={() => setActive(category as 'All' | GalleryCategory)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${active === category ? 'bg-sea-500 text-white' : 'bg-sand-100 text-volcanic-700 hover:bg-sand-200'}`}>{category === 'All' ? t('gallery.filter.all') : t(`gallery.cat.${category}`)}</button>)}</div><div className="columns-1 gap-4 sm:columns-2 lg:columns-3">{visible.map((image, i) => <Reveal key={image.url} delay={(i % 3) * 60} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl"><button onClick={() => setSelected(image.url)} className="group relative block w-full"><img src={image.url} alt={image.alt[lang]} loading="lazy" className="w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-volcanic-900/70 to-transparent px-4 pb-4 pt-10 text-left text-sm text-white opacity-0 transition group-hover:opacity-100">{t(`gallery.cat.${image.category}`)}</span></button></Reveal>)}</div></section>
    {selected && <button onClick={() => setSelected(null)} className="fixed inset-0 z-[60] flex items-center justify-center bg-volcanic-900/90 p-5 backdrop-blur-sm"><img src={selected} alt="" className="max-h-[90vh] max-w-full rounded-xl object-contain" /></button>}
  </div>;
}

export function Contact() {
  const { lang, t } = useI18n();
  const [form, setForm] = useState<TripRequest>({ name: '', email: '', phone: '', preferred_date: '', travelers: '', experience_type: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const update = (key: keyof TripRequest, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setStatus('sending'); setError('');
    try {
      await sendTripRequest(form);
    } catch {
      setStatus('error'); setError(t('contact.form.error')); return;
    }
    setStatus('success');
  };
  const inputClass = 'mt-2 w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-volcanic-900 outline-none transition placeholder:text-volcanic-400 focus:border-sea-500 focus:ring-2 focus:ring-sea-500/15';
  const expOptions = [
    { value: 'adventure', key: 'contact.exp.adventure' },
    { value: 'sea', key: 'contact.exp.sea' },
    { value: 'nature', key: 'contact.exp.nature' },
    { value: 'culture', key: 'contact.exp.culture' },
    { value: 'roadtrip', key: 'contact.exp.roadtrip' },
    { value: 'stay', key: 'contact.exp.stay' },
  ];
  return <div>
    <PageHero image="https://images.pexels.com/photos/37492090/pexels-photo-37492090.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000" eyebrow={t('contact.eyebrow')} title={t('contact.title')} subtitle={t('contact.subtitle')} />
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:gap-12 sm:py-16 lg:grid-cols-5 lg:px-8">
      <div className="lg:col-span-2"><Reveal><p className="text-sm font-semibold uppercase tracking-[0.2em] text-sea-600">{t('contact.info.eyebrow')}</p><h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">{t('contact.info.title')}</h2><p className="mt-5 leading-relaxed text-volcanic-600">{t('contact.info.text')}</p><div className="mt-8 space-y-5 text-sm"> <div className="flex gap-3"><MapPin className="shrink-0 text-sea-600" size={19}/><span>{CONTACT.address[lang]}</span></div>{CONTACT.phones.map(phone => <div className="flex gap-3" key={phone}><Phone className="shrink-0 text-sea-600" size={19}/><a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-sea-600">{phone}</a></div>)}<div className="flex gap-3"><Mail className="shrink-0 text-sea-600" size={19}/><a href={`mailto:${CONTACT.email}`} className="hover:text-sea-600">{CONTACT.email}</a></div></div><div className="mt-8 flex flex-wrap gap-3"><a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-sea-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sea-600">{t('cta.whatsapp')} <ArrowRight size={15}/></a><a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-sand-300 px-5 py-3 text-sm font-semibold text-volcanic-800 transition hover:border-sea-500 hover:text-sea-600"><Facebook size={16}/> Facebook</a></div></Reveal></div>
      <Reveal delay={100} className="rounded-2xl bg-sand-100 p-5 sm:p-8 lg:col-span-3"><h2 className="font-display text-xl font-semibold sm:text-2xl">{t('contact.form.title')}</h2>{status === 'success' ? <div className="flex min-h-[28rem] flex-col items-center justify-center text-center"><CheckCircle2 className="text-sea-500" size={52}/><h3 className="mt-5 font-display text-3xl font-semibold">{t('contact.form.success.title')}</h3><p className="mt-3 max-w-md text-volcanic-600">{t('contact.form.success.text')}</p><button onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', preferred_date: '', travelers: '', experience_type: '', message: '' }); }} className="mt-6 text-sm font-semibold text-sea-600">{t('contact.form.success.again')}</button></div> : <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2"><label className="text-sm font-medium">{t('contact.form.name')}<input required value={form.name} onChange={e => update('name', e.target.value)} className={inputClass} placeholder={t('contact.form.name.placeholder')} /></label><label className="text-sm font-medium">{t('contact.form.email')}<input required type="email" value={form.email} onChange={e => update('email', e.target.value)} className={inputClass} placeholder={t('contact.form.email.placeholder')} /></label><label className="text-sm font-medium">{t('contact.form.phone')}<input value={form.phone} onChange={e => update('phone', e.target.value)} className={inputClass} placeholder={t('contact.form.phone.placeholder')} /></label><label className="text-sm font-medium">{t('contact.form.date')}<input type="date" value={form.preferred_date} onChange={e => update('preferred_date', e.target.value)} className={inputClass} /></label><label className="text-sm font-medium">{t('contact.form.travelers')}<input value={form.travelers} onChange={e => update('travelers', e.target.value)} className={inputClass} placeholder={t('contact.form.travelers.placeholder')} /></label><label className="text-sm font-medium">{t('contact.form.experience')}<select value={form.experience_type} onChange={e => update('experience_type', e.target.value)} className={inputClass}><option value="">{t('contact.form.experience.placeholder')}</option>{expOptions.map(opt => <option key={opt.value} value={opt.value}>{t(opt.key)}</option>)}</select></label><label className="text-sm font-medium sm:col-span-2">{t('contact.form.message')}<textarea required rows={5} value={form.message} onChange={e => update('message', e.target.value)} className={inputClass} placeholder={t('contact.form.message.placeholder')} /></label>{error && <p className="text-sm text-red-700 sm:col-span-2">{error}</p>}<button disabled={status === 'sending'} className="inline-flex items-center justify-center gap-2 rounded-full bg-sea-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sea-600 disabled:cursor-wait disabled:opacity-60 sm:col-span-2">{status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')} <Send size={16}/></button></form>}</Reveal>
    </section>
  </div>;
}

export function ExperiencePreview() {
  const { t } = useI18n();
  const { navigate } = useRouter();
  return <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8"><h2 className="font-display text-3xl font-semibold sm:text-4xl">{t('experiences.title')}</h2><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{excursions.slice(0, 3).map((x) => <ExcursionCard key={x.slug} excursion={x}/>)}</div><button onClick={() => navigate('/experiences')} className="mt-8 inline-flex items-center gap-2 font-semibold text-sea-600">{t('nav.experiences')} <ArrowRight size={16}/></button></section>;
}
