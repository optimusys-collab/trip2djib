import { CalendarHeart, MessageCircle } from 'lucide-react';
import { useRouter } from '@/router';
import { useI18n } from '@/i18n/context';
import { CONTACT } from '@/data/content';

export default function MobileCta() {
  const { navigate } = useRouter();
  const { t } = useI18n();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-sand-200 bg-sand-50/95 p-3 backdrop-blur-md md:hidden" style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
      <button
        onClick={() => navigate('/contact')}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-sea-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sea-500/20"
      >
        <CalendarHeart size={18} />
        {t('header.planTrip')}
      </button>
      <a
        href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex items-center justify-center rounded-full bg-volcanic-900 px-4 py-3 text-white"
      >
        <MessageCircle size={18} />
      </a>
    </div>
  );
}
