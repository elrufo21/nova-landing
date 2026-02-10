import { Seo } from "../../components/seo/Seo";
import { PageHeader } from "../../components/ui/PageHeader";
import { MotionWrapper } from "../../components/ui/MotionWrapper";
import { ShieldCheck, Award, Clock, FileText, CheckCircle, Users } from "lucide-react";

export function GarantiaPage() {
  return (
    <>
      <Seo
        title="Garantía y Seguridad | NOVA Ascensores"
        description="Seguridad sin compromisos. Certificaciones internacionales, cumplimiento de normas EN 81 y garantía extendida en todos nuestros equipos."
        keywords="seguridad ascensores, normativa ascensores perú, certificación ascensores, garantía posventa"
      />

      <PageHeader
        title="Compromiso de Seguridad"
        subtitle="En NOVA, la seguridad no es una opción, es nuestra base. Operamos bajo las más estrictas normativas nacionales e internacionales."
        image="/warranty/warranty-hero.jpg"
        breadcrumbs={[{ label: "Garantía" }]}
      />

      {/* ───────── TRUST GRID ───────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <MotionWrapper direction="right">
              <div className="relative p-8">
                <div className="absolute inset-0 bg-brand-soft rounded-[3rem] -rotate-3 transform z-0" />
                <div className="relative z-10 bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-brand-primary text-white rounded-2xl flex items-center justify-center">
                      <ShieldCheck size={40} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-dark">Garantía Total NOVA</h3>
                      <p className="text-slate-500">Cobertura Integral</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "2 años de garantía en defectos de fabricación.",
                      "1 año de mantenimiento preventivo gratuito.",
                      "Cobertura por vicios ocultos.",
                      "Reposición inmediata de componentes críticos.",
                      "Soporte técnico prioritario."
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle size={20} className="text-brand-highlight flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper direction="left">
              <div>
                <h2 className="text-4xl font-bold text-brand-dark mb-6">Tranquilidad para su Inversión</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Entendemos que un ascensor es una inversión a largo plazo. Por eso, diseñamos nuestros contratos y políticas de garantía para proteger su capital y asegurar la máxima disponibilidad operativa.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-brand-soft p-6 rounded-xl border border-slate-200 hover:border-brand-primary transition-colors">
                    <FileText className="text-brand-primary mb-4" size={32} />
                    <h4 className="font-bold text-brand-dark mb-2">Contratos Transparentes</h4>
                    <p className="text-sm text-slate-600">Sin letras chicas. Especificaciones técnicas claras y cronogramas definidos.</p>
                  </div>
                  <div className="bg-brand-soft p-6 rounded-xl border border-slate-200 hover:border-brand-primary transition-colors">
                    <Users className="text-brand-primary mb-4" size={32} />
                    <h4 className="font-bold text-brand-dark mb-2">Respaldo Técnico</h4>
                    <p className="text-sm text-slate-600">Equipo de ingeniería listo para resolver cualquier incidencia compleja.</p>
                  </div>
                </div>
              </div>
            </MotionWrapper>

          </div>
        </div>
      </section>

      {/* ───────── CERTIFICATIONS ───────── */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at center, white 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Normativas y Cumplimiento</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Nuestros procesos y equipos cumplen estrictamente con los estándares más exigentes del mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Norma Técnica Peruana",
                code: "NTP",
                desc: "Cumplimiento total del Reglamento Nacional de Edificaciones y normas de seguridad eléctrica.",
                icon: <FileText />
              },
              {
                title: "Estándar Europeo",
                code: "EN 81-20/50",
                desc: "Seguimos las directrices de seguridad más actualizadas de la Unión Europea para ascensores.",
                icon: <Award />
              },
              {
                title: "Seguridad Ocupacional",
                code: "SST",
                desc: "Protocolos de seguridad y salud en el trabajo para proteger a nuestro personal y a sus usuarios.",
                icon: <ShieldCheck />
              }
            ].map((cert, i) => (
              <MotionWrapper key={i} delay={i * 0.2}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center text-brand-primary">
                      {cert.icon}
                    </div>
                    <span className="font-mono text-brand-highlight font-bold bg-brand-highlight/10 px-3 py-1 rounded text-sm">
                      {cert.code}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── MAINTENANCE ───────── */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden grid lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-wider text-sm mb-4">
                <Clock size={16} />
                <span>Post-Venta</span>
              </div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                El Mantenimiento no es un gasto, es seguridad.
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Un plan de mantenimiento adecuado previene el 85% de las fallas mecánicas. Nuestros programas incluyen visitas mensuales, limpieza técnica, ajustes y lubricación de componentes vitales.
              </p>
              <a
                href="/contacto"
                className="inline-block bg-brand-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-primary transition-colors text-center w-max"
              >
                Ver Planes de Mantenimiento
              </a>
            </div>
            <div className="relative bg-slate-200 min-h-[300px]">
              <img
                src="/warranty/maintenance-tech.jpg"
                alt="Técnico realizando mantenimiento"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
