import { Wrench, ShieldCheck, Headset, MessageCircle, Building, Users, Award, CheckCircle, ArrowRight } from "lucide-react";

import { Seo } from "../../components/seo/Seo";
import { HeroSection } from "../../components/ui/HeroSection";
import { ServiceCardPremium } from "../../components/ui/ServiceCardPremium";
import { StatsSection } from "../../components/ui/StatsSection";
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
            variant: "primary"
          },
          {
            label: "Soporte Técnico",
            href: `https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}`,
            variant: "secondary"
          },
        ]}
      />

      {/* ───────── STATS SECTION (Dark Theme) ───────── */}
      <div className="bg-brand-dark border-b border-white/5">
        <StatsSection
          title=""
          subtitle=""
          background="dark"
          stats={[
            {
              number: "12+",
              label: "Años de Excelencia",
              icon: <Building className="w-6 h-6" />,
              delay: 0
            },
            {
              number: "600+",
              label: "Proyectos Ejecutados",
              icon: <Award className="w-6 h-6" />,
              delay: 0.1
            },
            {
              number: "98%",
              label: "Satisfacción Cliente",
              icon: <Users className="w-6 h-6" />,
              delay: 0.2
            },
            {
              number: "24/7",
              label: "Respuesta Inmediata",
              icon: <Headset className="w-6 h-6" />,
              delay: 0.3
            }
          ]}
        />
      </div>

      {/* ───────── SERVICES SECTION ───────── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <MotionWrapper direction="up">
            <div className="text-center mb-16">
              <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">Nuestras Soluciones</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
                Ciclo Integral de Servicio
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Gestión completa de sus activos verticales, desde el diseño y fabricación hasta la modernización y mantenimiento preventivo.
              </p>
            </div>
          </MotionWrapper>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 h-auto">
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
      <section className="py-24 bg-brand-dark text-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <MotionWrapper direction="right">
              <div>
                <span className="text-brand-highlight font-bold tracking-wider uppercase text-sm mb-2 block">Portafolio</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Proyectos Emblemáticos</h2>
                <p className="text-slate-400 max-w-xl">
                  La confianza de nuestros clientes se construye proyecto a proyecto. Conoce algunas de nuestras instalaciones más destacadas.
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper direction="left">
              <a href="/proyectos" className="group flex items-center gap-2 text-white font-semibold border-b border-brand-primary pb-1 hover:text-brand-primary transition-colors">
                Ver todos los proyectos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </MotionWrapper>
          </div>

          <ProjectGallery />
        </div>
      </section>

      {/* ───────── TRUST & CERTIFICATIONS ───────── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <MotionWrapper direction="right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 relative z-10">
                  <img
                    src="/trust-image.jpg"
                    alt="Equipo técnico NOVA"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <p className="font-bold text-lg">Equipo Técnico Calificado</p>
                      <p className="text-sm opacity-80">Capacitación constante y certificación</p>
                    </div>
                  </div>
                </div>
                {/* Decorative Blob */}
                <div className="absolute -bottom-10 -left-10 w-full h-full bg-brand-soft rounded-3xl -z-0" />
              </div>
            </MotionWrapper>

            <MotionWrapper direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                  Seguridad y Confianza Certificada
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  No solo instalamos ascensores, garantizamos tranquilidad. Nuestros procesos cumplen con los más estrictos estándares internacionales y normativas locales.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    "Normativa EN-81",
                    "ISO 9001:2015",
                    "Personal Asegurado (SCTR)",
                    "Garantía Extendida",
                    "Stock de Repuestos",
                    "Atención 24/7"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                        <CheckCircle size={14} strokeWidth={3} />
                      </div>
                      <span className="font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <a href="/garantia" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 rounded-xl text-brand-dark font-semibold hover:border-brand-primary hover:text-brand-primary transition-colors bg-white">
                    Conocer más sobre nuestra garantía
                  </a>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* ───────── FINAL CTA ───────── */}
      <section className="relative py-24 bg-brand-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="mx-auto max-w-5xl px-4 relative z-10 text-center">
          <MotionWrapper direction="scale">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              ¿Listo para elevar su proyecto?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Solicite una visita técnica gratuita o una cotización personalizada. Nuestro equipo de ingenieros está listo para asesorarlo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contacto" className="px-8 py-4 bg-white text-brand-primary font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Solicitar Cotización
              </a>
              <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}`} className="px-8 py-4 bg-brand-dark text-white font-bold rounded-xl shadow-xl hover:bg-brand-dark/90 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
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
