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

      <div className="border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* LOGO */}
          <div className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-brand-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-highlight" />
            <span className="hidden sm:inline">NOVA</span>
            <span className="sm:hidden">NOVA</span>
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
            className="md:hidden rounded-lg p-2 text-brand-dark transition hover:bg-brand-soft"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ───────────── MOBILE MENU ───────────── */}
        {open && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl">
            <nav className="mx-4 my-4 rounded-2xl border border-slate-200/60 p-6 shadow-lg">
              <div className="flex flex-col gap-6">
                {NAVIGATION_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-slate-700 transition hover:text-brand-primary"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="/contacto"
                  className="mt-2 rounded-xl bg-brand-primary py-3 text-lg font-semibold text-white shadow hover:bg-brand-accent transition text-center"
                >
                  Cotizar
                </a>

                {/* Redes */}
                <div className="mt-6 flex items-center gap-6 border-t pt-4 text-brand-dark">
                  {COMPANY_INFO.social.facebook && (
                    <Facebook
                      size={22}
                      className="cursor-pointer hover:text-brand-highlight transition"
                    />
                  )}
                  {COMPANY_INFO.social.instagram && (
                    <Instagram
                      size={22}
                      className="cursor-pointer hover:text-brand-highlight transition"
                    />
                  )}
                  {COMPANY_INFO.social.linkedin && (
                    <Linkedin
                      size={22}
                      className="cursor-pointer hover:text-brand-highlight transition"
                    />
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
