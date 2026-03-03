import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/constants/company";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}?text=Hola%20NOVA%20ASCENSORES,%20me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-4 right-4 z-50 rounded-full bg-green-500 p-3 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 sm:bottom-6 sm:right-6 sm:p-4"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-800 px-3 py-2 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
        ¿Necesitas ayuda? Chatea con nosotros
      </span>
    </a>
  );
}
