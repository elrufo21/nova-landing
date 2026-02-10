import { Seo } from "../../components/seo/Seo";
import { PageHeader } from "../../components/ui/PageHeader";
import { ServiceCardPremium } from "../../components/ui/ServiceCardPremium";
import { MotionWrapper } from "../../components/ui/MotionWrapper";
import { Wrench, Settings, Clock, Award, CheckCircle, ArrowRight, Zap, FileText } from "lucide-react";

export function ServiciosPage() {
  return (
    <>
      <Seo
        title="Servicios Especializados | NOVA Ascensores"
        description="Ingeniería vertical de punta a punta: Fabricación, Instalación, Modernización y Mantenimiento de ascensores con estándares internacionales."
        keywords="mantenimiento ascensores, reparación ascensores, modernización ascensores, instalación ascensores perú"
      />

      <PageHeader
        title="Soluciones Integrales"
        subtitle="Dominamos todo el ciclo de vida del transporte vertical. Desde el diseño conceptual hasta el mantenimiento predictivo."
        image="/services/services-hero.jpg"
        breadcrumbs={[{ label: "Servicios" }]}
      />

      {/* ───────── MAIN SERVICES GRID ───────── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <MotionWrapper direction="up">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                Excelencia Técnica en Cada Etapa
              </h2>
              <p className="text-lg text-slate-600">
                Combinamos ingeniería de precisión con un servicio al cliente excepcional para garantizar la seguridad y continuidad operativa de sus equipos.
              </p>
            </div>
          </MotionWrapper>

          <div className="grid gap-8 md:grid-cols-2">
            <ServiceCardPremium
              title="Fabricación de Ascensores"
              description="Diseñamos y fabricamos cabinas y sistemas de elevación a medida, adaptándonos a las especificaciones arquitectónicas más exigentes. Utilizamos componentes de marcas reconocidas mundialmente."
              icon={<Settings />}
              image="/services/manufacturing.jpg"
              href="#fabricacion"
              index={0}
            />
            <ServiceCardPremium
              title="Instalación y Montaje"
              description="Ejecución de obra bajo estrictos protocolos de seguridad y cronogramas precisos. Nuestro equipo de montaje está certificado para trabajos en altura y espacios confinados."
              icon={<Wrench />}
              image="/services/installation.jpg"
              href="#instalacion"
              index={1}
            />
            <ServiceCardPremium
              title="Mantenimiento Preventivo"
              description="Planes de mantenimiento diseñados para maximizar la vida útil de sus equipos y prevenir paradas inesperadas. Atención 24/7 y stock de repuestos garantizado."
              icon={<Clock />}
              image="/services/maintenance.jpg"
              href="#mantenimiento"
              index={2}
            />
            <ServiceCardPremium
              title="Modernización Tecnológica"
              description="Renovamos ascensores antiguos con nuevos sistemas de control, variación de frecuencia y diseño de cabina, mejorando el confort, la seguridad y la eficiencia energética."
              icon={<Zap />}
              image="/services/modernization.jpg"
              href="#modernizacion"
              index={3}
            />
          </div>
        </div>
      </section>

      {/* ───────── PROCESS TIMELINE ───────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <MotionWrapper direction="left">
            <div className="mb-16">
              <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">Metodología NOVA</span>
              <h2 className="text-4xl font-bold text-brand-dark">Nuestro Proceso de Trabajo</h2>
            </div>
          </MotionWrapper>

          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-brand-soft" />

            <div className="grid gap-12 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Diagnóstico",
                  description: "Evaluación técnica detallada y relevamiento de necesidades en sitio.",
                  icon: <FileText />
                },
                {
                  step: "02",
                  title: "Ingeniería",
                  description: "Diseño de la solución y planificación logística del proyecto.",
                  icon: <Settings />
                },
                {
                  step: "03",
                  title: "Ejecución",
                  description: "Implementación bajo supervisión constante y control de calidad.",
                  icon: <Wrench />
                },
                {
                  step: "04",
                  title: "Certificación",
                  description: "Pruebas de carga, seguridad y entrega de dossier de calidad.",
                  icon: <Award />
                }
              ].map((item, idx) => (
                <MotionWrapper key={idx} delay={idx * 0.2}>
                  <div className="relative pt-8 lg:pt-0">
                    <div className="w-24 h-24 bg-white border-4 border-brand-soft rounded-full flex items-center justify-center text-brand-primary relative z-10 mb-6 mx-auto lg:mx-0 shadow-lg">
                      <span className="sr-only">{item.step}</span>
                      {item.icon}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-highlight text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3 text-center lg:text-left">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-center lg:text-left text-sm">
                      {item.description}
                    </p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FEATURE HIGHLIGHTS ───────── */}
      <section className="py-20 bg-brand-dark text-white rounded-t-[3rem] -mt-10 relative z-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Por qué elegir NOVA Servicios</h2>
              <div className="space-y-6">
                {[
                  "Técnicos certificados con SCTR y EPPs normados.",
                  "Atención de emergencias 24/7 los 365 días.",
                  "Stock permanente de repuestos multimarca.",
                  "Garantía extendida en trabajos correctivos.",
                  "Informes técnicos digitales con registro fotográfico."
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-1 bg-brand-primary/20 rounded-full mt-1">
                      <CheckCircle size={16} className="text-brand-primary" />
                    </div>
                    <p className="text-slate-300 font-medium">{feat}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <a href="/contacto" className="inline-flex items-center gap-2 text-white font-bold border-b border-brand-primary pb-1 hover:text-brand-primary transition-colors">
                  Solicitar Visita Técnica <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/services/tech-tablet.jpg" alt="Tecnología en servicio" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                {/* Overlay Stats */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-brand-primary uppercase tracking-wider font-bold mb-1">Tiempo de Respuesta</p>
                      <p className="text-2xl font-bold text-white">&lt; 4 Horas</p>
                    </div>
                    <Zap className="text-brand-highlight" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
