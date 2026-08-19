type Props = {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ image, eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative flex min-h-[50svh] items-end overflow-hidden sm:h-[58vh] sm:min-h-[380px]">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full animate-slow-zoom object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-volcanic-900/85 via-volcanic-900/40 to-volcanic-900/40" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 text-white lg:px-8">
        {eyebrow && (
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-sea-300">{eyebrow}</p>
        )}
        <h1 className="animate-fade-up mt-3 max-w-3xl text-balance font-display text-3xl font-semibold leading-heading sm:text-5xl md:text-6xl" style={{ animationDelay: '100ms' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="animate-fade-up mt-3 max-w-2xl text-base text-white/85 sm:text-lg" style={{ animationDelay: '200ms' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
