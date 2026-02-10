import { Seo } from "../../components/seo/Seo";
import { PageHeader } from "../../components/ui/PageHeader";
import { StatsSection } from "../../components/ui/StatsSection";
import { MotionWrapper } from "../../components/ui/MotionWrapper";
import { Award, Users, Target, ShieldCheck, Clock, Wrench } from "lucide-react";

export function QuienesSomosPage() {
  return (
    <>
      <Seo
        title="Quiénes Somos - NOVA ASCENSORES E.I.R.L."
        description="Empresa líder en transporte vertical en Perú. Conoce nuestra historia, misión y el equipo de expertos detrás de cada ascensor seguro y eficiente."
        keywords="historia nova ascensores, equipo técnico ascensores, misión visión valores, empresa peruana ascensores"
      />

      <PageHeader
        title="Nuestra Historia"
        subtitle="Más de una década definiendo los estándares de seguridad y eficiencia en el transporte vertical peruano."
        image="/about/team-hero.jpg"
        breadcrumbs={[{ label: "Quiénes Somos" }]}
      />

      {/* ───────── MISSION & VISION ───────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image Side */}
            <MotionWrapper direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-brand-primary to-brand-accent rounded-[2rem] rotate-3 opacity-20 blur-lg" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] bg-slate-100">
                  <img
                    src="/about/mission.jpg"
                    alt="Ingenieros trabajando"
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-brand-highlight text-white rounded-xl">
                        <Target size={24} />
                      </div>
                      <h3 className="text-2xl font-bold">Nuestra Misión</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed text-sm">
                      Proporcionar soluciones integrales en transporte vertical, garantizando la máxima seguridad, eficiencia y durabilidad, superando las expectativas con innovación tecnológica.
                    </p>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            {/* Text Side */}
            <MotionWrapper direction="left">
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark relative">
                  <span className="relative z-10">Ingeniería con Propósito</span>
                  <div className="absolute -bottom-2 left-0 w-24 h-2 bg-brand-primary/20 -z-0" />
                </h2>

                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-brand-dark">NOVA ASCENSORES</strong> nace de la visión de transformar la industria del transporte vertical en Perú. Nos especializamos en la fabricación, instalación y mantenimiento de sistemas que no solo mueven personas, sino que elevan la calidad de vida en cada edificación.
                  </p>
                  <p>
                    Nos distinguimos por un compromiso inquebrantable con la <strong>seguridad</strong>. Cada proyecto es ejecutado bajo estrictas normas técnicas internacionales, asegurando que cada viaje sea una experiencia de confianza.
                  </p>
                  <p>
                    Nuestro equipo técnico está conformado por profesionales certificados en constante capacitación, lo que nos permite abordar desafíos complejos en hospitales, centros comerciales y residencias de alto tránsito.
                  </p>
                </div>
              </div>
            </MotionWrapper>

          </div>
        </div>
      </section>

      {/* ───────── STATS ───────── */}
      <div className="bg-brand-dark border-y border-white/5 relative">
        <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-5" />
        <StatsSection
          title="Impacto que Trasciende"
          subtitle="Nuestra trayectoria resumida en cifras que generan confianza."
          background="dark"
          stats={[
            { number: "12+", label: "Años de Innovación", icon: <Clock /> },
            { number: "100%", label: "Seguridad Certificada", icon: <ShieldCheck /> },
            { number: "500+", label: "Proyectos Entregados", icon: <Award /> },
            { number: "24/7", label: "Soporte Técnico", icon: <Users /> },
          ]}
        />
      </div>

      {/* ───────── VALUES GRID ───────── */}
      <section className="py-24 bg-brand-soft relative">
        <div className="mx-auto max-w-7xl px-4">
          <MotionWrapper direction="up">
            <div className="text-center mb-16">
              <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">Nuestra Cultura</span>
              <h2 className="text-4xl font-bold text-brand-dark">Pilares de Nuestra Excelencia</h2>
            </div>
          </MotionWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Seguridad Ante Todo",
                description: "No negociamos con la seguridad. Aplicamos protocolos rigurosos en cada etapa del proceso."
              },
              {
                icon: Users,
                title: "Compromiso Total",
                description: "Asumimos cada proyecto como propio, acompañando al cliente desde el diseño hasta la post-venta."
              },
              {
                icon: Wrench,
                title: "Innovación Técnica",
                description: "Integramos las últimas tecnologías en control y tracción para maximizar la eficiencia energética."
              },
              {
                icon: Clock,
                title: "Puntualidad",
                description: "Respetamos los cronogramas de obra y los tiempos de respuesta en emergencias."
              },
              {
                icon: Target,
                title: "Orientación al Cliente",
                description: "Diseñamos soluciones personalizadas que se adaptan a las necesidades reales de cada usuario."
              },
              {
                icon: Award,
                title: "Integridad",
                description: "Transparencia absoluta en nuestros diagnósticos, cotizaciones y procesos técnicos."
              }
            ].map((value, idx) => (
              <MotionWrapper key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                  <div className="w-14 h-14 bg-brand-soft rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-center bg-brand-primary rounded-[2.5rem] p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-dark/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para trabajar con expertos?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Descubre por qué somos la elección de confianza para arquitectos, constructores y administradores de edificios.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center bg-white text-brand-dark px-8 py-4 rounded-xl font-bold hover:bg-brand-highlight hover:text-white transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              Contactar al Equipo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
