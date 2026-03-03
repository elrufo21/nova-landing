import {
  Wrench,
  ShieldCheck,
  Headset,
  MessageCircle,
  Building,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import { Seo } from "../../components/seo/Seo";
import { HeroSection } from "../../components/ui/HeroSection";
import { ServiceCardPremium } from "../../components/ui/ServiceCardPremium";
import { ProjectGallery } from "../../components/ui/ProjectGallery";
import { MotionWrapper } from "../../components/ui/MotionWrapper";
import { COMPANY_INFO } from "@/constants/company";

export function HomePage() {
  return (
    <>
      <Seo
        title="Ingeniería Vertical de Precisión | NOVA Ascensores"
        description="Líderes en fabricación, instalación y mantenimiento de ascensores. Soluciones de transporte vertical con tecnología de punta y seguridad certificada en Perú."
        keywords="ascensores, mantenimiento ascensores, fabricación ascensores, ascensores perú, transporte vertical, montacargas, escaleras eléctricas"
      />

      {/* ───────── HERO SECTION ───────── */}
      <HeroSection
        title="Ingeniería Vertical de Precisión"
        subtitle="Transformamos el skyline peruano con soluciones de transporte vertical seguras, eficientes y de vanguardia tecnológica."
        image="/hero-bg.jpg" // Placeholder, user will replace
        actions={[
          {
            label: "Iniciar Proyecto",
            href: "/contacto",
            variant: "primary",
          },
          {
            label: "Soporte Técnico",
            href: `https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}`,
            variant: "secondary",
          },
        ]}
        stats={[
          {
            number: "12+",
            label: "Años de Excelencia",
            icon: <Building className="w-5 h-5" />,
            delay: 0,
          },
          {
            number: "600+",
            label: "Proyectos Ejecutados",
            icon: <Award className="w-5 h-5" />,
            delay: 0.1,
          },
          {
            number: "20+",
            label: "Clientes que confian en nosotros",
            icon: <Users className="w-5 h-5" />,
            delay: 0.2,
          },
          {
            number: "24/7",
            label: "Respuesta Inmediata",
            icon: <Headset className="w-5 h-5" />,
            delay: 0.3,
          },
        ]}
      />

      {/* ───────── SERVICES SECTION ───────── */}
      <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <MotionWrapper direction="up">
            <div className="mb-12 text-center md:mb-16">
              <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                Nuestras Soluciones
              </span>
              <h2 className="mb-5 text-3xl font-bold text-brand-dark sm:text-4xl md:mb-6 md:text-5xl">
                Ciclo Integral de Servicio
              </h2>
              <p className="mx-auto max-w-2xl text-base text-slate-600 sm:text-lg">
                Gestión completa de sus activos verticales, desde el diseño y
                fabricación hasta la modernización y mantenimiento preventivo.
              </p>
            </div>
          </MotionWrapper>

          <div className="grid h-auto gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            <ServiceCardPremium
              title="Fabricación a Medida"
              description="Diseño y manufactura de cabinas y sistemas de elevación personalizados, adaptados a la arquitectura de su proyecto y normativas vigentes."
              icon={<Wrench />}
              image="/services/manufacturing.jpg"
              href="/servicios"
              index={0}
            />
            <ServiceCardPremium
              title="Instalación Certificada"
              description="Montaje experto de equipos nuevos con protocolos rigurosos de seguridad y puesta en marcha garantizada."
              icon={<ShieldCheck />}
              image="/services/installation.jpg"
              href="/servicios"
              index={1}
            />
            <ServiceCardPremium
              title="Mantenimiento y Modernización"
              description="Programas de mantenimiento preventivo y actualizaciones tecnológicas para extender la vida útil y seguridad de sus equipos."
              icon={<Headset />}
              image="/services/maintenance.jpg"
              href="/servicios"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* ───────── FEATURED PROJECTS (Gallery) ───────── */}
      <section className="relative overflow-hidden bg-brand-dark py-16 text-white md:py-24">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex flex-col items-start justify-between gap-5 md:mb-12 md:flex-row md:items-end md:gap-6">
            <MotionWrapper direction="right">
              <div>
                <span className="text-brand-highlight font-bold tracking-wider uppercase text-sm mb-2 block">
                  Portafolio
                </span>
                <h2 className="mb-3 text-3xl font-bold sm:text-4xl md:mb-4 md:text-5xl">
                  Proyectos Emblemáticos
                </h2>
                <p className="text-slate-400 max-w-xl">
                  La confianza de nuestros clientes se construye proyecto a
                  proyecto. Conoce algunas de nuestras instalaciones más
                  destacadas.
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper direction="left">
              <a
                href="/proyectos"
                className="group flex items-center gap-2 text-white font-semibold border-b border-brand-primary pb-1 hover:text-brand-primary transition-colors"
              >
                Ver todos los proyectos{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </MotionWrapper>
          </div>

          <ProjectGallery />
        </div>
      </section>

      {/* ───────── TRUST & CERTIFICATIONS ───────── */}
      <section className="overflow-hidden bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <MotionWrapper direction="right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 relative z-10">
                  <img
                    src="/trust-image.jpg"
                    alt="Equipo técnico NOVA"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-dark/80 to-transparent p-5 sm:p-8">
                    <div className="text-white">
                      <p className="text-base font-bold sm:text-lg">
                        Equipo Técnico Calificado
                      </p>
                      <p className="text-sm opacity-80">
                        Capacitación constante y certificación
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative Blob */}
                <div className="absolute -bottom-8 -left-8 -z-0 h-full w-full rounded-3xl bg-brand-soft sm:-bottom-10 sm:-left-10" />
              </div>
            </MotionWrapper>

            <MotionWrapper direction="left">
              <div>
                <h2 className="mb-5 text-2xl font-bold text-brand-dark sm:text-3xl md:mb-6 md:text-4xl">
                  Seguridad y Confianza Certificada
                </h2>
                <p className="mb-7 text-base leading-relaxed text-slate-600 sm:text-lg md:mb-8">
                  No solo instalamos ascensores, garantizamos tranquilidad.
                  Nuestros procesos cumplen con los más estrictos estándares
                  internacionales y normativas locales.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  {[
                    "Normativa EN-81",
                    "ISO 9001:2015",
                    "Personal Asegurado (SCTR)",
                    "Garantía Extendida",
                    "Stock de Repuestos",
                    "Atención 24/7",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                        <CheckCircle size={14} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium text-slate-700 sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <a
                    href="/garantia"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-brand-dark transition-colors hover:border-brand-primary hover:text-brand-primary sm:w-auto"
                  >
                    Conocer más sobre nuestra garantía
                  </a>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* ───────── FINAL CTA ───────── */}
      <section className="relative overflow-hidden bg-brand-primary py-16 md:py-24">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute right-0 top-0 h-[320px] w-[320px] -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 blur-3xl sm:h-[500px] sm:w-[500px]" />

        <div className="mx-auto max-w-5xl px-4 relative z-10 text-center">
          <MotionWrapper direction="scale">
            <h2 className="mb-5 text-3xl font-black text-white sm:text-4xl md:mb-6 md:text-5xl">
              ¿Listo para elevar su proyecto?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base text-blue-100 sm:text-lg md:mb-10 md:text-xl">
              Solicite una visita técnica gratuita o una cotización
              personalizada. Nuestro equipo de ingenieros está listo para
              asesorarlo.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/contacto"
                className="w-full rounded-xl bg-white px-8 py-4 font-bold text-brand-primary shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:w-auto"
              >
                Solicitar Cotización
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}`}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-dark px-8 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-brand-dark/90 sm:w-auto"
              >
                <MessageCircle size={20} />
                Chat por WhatsApp
              </a>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
