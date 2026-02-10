import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { COMPANY_INFO, NAVIGATION_ITEMS } from "@/constants/company";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4 md:items-start">
          {/* ───── BRAND ───── */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-brand-dark">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-highlight" />
              NOVA ASCENSORES
            </div>

            <p className="max-w-md text-sm text-slate-600 leading-relaxed">
              Empresa peruana especializada en fabricación, instalación, mantenimiento y reparación de ascensores y sistemas de transporte vertical. 
              Garantizamos seguridad, eficiencia y cumplimiento de normas técnicas vigentes.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin size={16} className="text-brand-primary" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Phone size={16} className="text-brand-primary" />
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-brand-primary transition"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Mail size={16} className="text-brand-primary" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-brand-primary transition"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2 text-brand-dark">
              {COMPANY_INFO.social.facebook && (
                <a 
                  href={COMPANY_INFO.social.facebook} 
                  className="hover:text-brand-highlight transition"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {COMPANY_INFO.social.instagram && (
                <a 
                  href={COMPANY_INFO.social.instagram} 
                  className="hover:text-brand-highlight transition"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {COMPANY_INFO.social.linkedin && (
                <a 
                  href={COMPANY_INFO.social.linkedin} 
                  className="hover:text-brand-highlight transition"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* ───── NAVEGACIÓN ───── */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-dark">
              Navegación
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="hover:text-brand-primary transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ───── LEGAL ───── */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-dark">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a href="/politica-privacidad" className="hover:text-brand-primary transition">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="/terminos-condiciones" className="hover:text-brand-primary transition">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="/libro-reclamaciones" className="hover:text-brand-primary transition">
                  Libro de reclamaciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200/60 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados.
            </p>
            <p className="text-xs text-slate-400">
              Desarrollado con ❤️ en Perú
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
