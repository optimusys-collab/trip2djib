import emailjs from '@emailjs/browser';

export type TripRequest = {
  name: string;
  email: string;
  phone: string;
  preferred_date: string;
  travelers: string;
  experience_type: string;
  message: string;
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export async function sendTripRequest(form: TripRequest) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      preferred_date: form.preferred_date,
      travelers: form.travelers,
      experience_type: form.experience_type,
      message: form.message,
    },
    { publicKey: PUBLIC_KEY },
  );
}
