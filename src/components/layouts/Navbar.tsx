import { useState } from "react";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
} from "lucide-react";
import { NAVIGATION_ITEMS, COMPANY_INFO } from "@/constants/company";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ───────────────── TOP BAR ───────────────── */}
      <div className="hidden md:block bg-brand-dark text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          {/* CONTACTO */}
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} />
              {COMPANY_INFO.phone}
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} />
              {COMPANY_INFO.email}
            </span>
          </div>

          {/* REDES */}
          <div className="flex items-center gap-4">
            {COMPANY_INFO.social.facebook && (
              <a 
                href={COMPANY_INFO.social.facebook} 
                className="hover:text-brand-highlight transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={16} />
              </a>
            )}
            {COMPANY_INFO.social.instagram && (
              <a 
                href={COMPANY_INFO.social.instagram} 
                className="hover:text-brand-highlight transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} />
              </a>
            )}
            {COMPANY_INFO.social.linkedin && (
              <a 
                href={COMPANY_INFO.social.linkedin} 
                className="hover:text-brand-highlight transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200/60 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4">
          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="/LOGO.png"
              alt="NOVA"
              className="h-9 w-auto sm:h-11"
            />
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-10 md:flex">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative font-medium text-slate-700 transition"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* CTA */}
            <a
              href="/contacto"
              className="relative overflow-hidden rounded-xl bg-brand-primary px-7 py-2.5 font-semibold text-white shadow-md transition hover:bg-brand-accent hover:shadow-lg"
            >
              <span className="relative z-10">Cotizar</span>
              <span className="absolute inset-0 -z-0 bg-gradient-to-r from-brand-accent to-brand-primary opacity-0 transition-opacity hover:opacity-100" />
            </a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="rounded-lg p-2 text-brand-dark transition hover:bg-brand-soft md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ───────────── MOBILE MENU ───────────── */}
        {open && (
          <div className="border-t border-slate-200/60 bg-white/95 backdrop-blur-xl md:hidden">
            <nav className="mx-4 my-4 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-slate-200/60 p-5 shadow-lg sm:p-6">
              <div className="flex flex-col gap-6">
                {NAVIGATION_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-slate-700 transition hover:text-brand-primary"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="/contacto"
                  className="mt-2 rounded-xl bg-brand-primary py-3 text-base font-semibold text-white shadow transition hover:bg-brand-accent text-center"
                >
                  Cotizar
                </a>

                {/* Redes */}
                <div className="mt-4 flex items-center gap-5 border-t pt-4 text-brand-dark">
                  {COMPANY_INFO.social.facebook && (
                    <a
                      href={COMPANY_INFO.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="transition hover:text-brand-highlight"
                    >
                      <Facebook size={22} />
                    </a>
                  )}
                  {COMPANY_INFO.social.instagram && (
                    <a
                      href={COMPANY_INFO.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="transition hover:text-brand-highlight"
                    >
                      <Instagram size={22} />
                    </a>
                  )}
                  {COMPANY_INFO.social.linkedin && (
                    <a
                      href={COMPANY_INFO.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="transition hover:text-brand-highlight"
                    >
                      <Linkedin size={22} />
                    </a>
                  )}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
