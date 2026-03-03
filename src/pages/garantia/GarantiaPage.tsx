import { Seo } from "../../components/seo/Seo";
import { PageHeader } from "../../components/ui/PageHeader";
import { MotionWrapper } from "../../components/ui/MotionWrapper";
import {
  ShieldCheck,
  Award,
  Clock,
  FileText,
  CheckCircle,
  Users,
} from "lucide-react";

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
        image="/seguridad.webp"
        breadcrumbs={[{ label: "Garantía" }]}
      />

      {/* ───────── TRUST GRID ───────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <MotionWrapper direction="right">
              <div className="relative p-2 sm:p-8">
                <div className="absolute inset-0 bg-brand-soft rounded-[3rem] -rotate-3 transform z-0" />
                <div className="relative z-10 rounded-[1.8rem] border border-slate-100 bg-white p-6 shadow-xl sm:rounded-[2rem] sm:p-10">
                  <div className="mb-6 flex items-center gap-4 sm:mb-8 sm:gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary text-white sm:h-20 sm:w-20">
                      <ShieldCheck size={34} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark sm:text-2xl">
                        Garantía Total NOVA
                      </h3>
                      <p className="text-slate-500">Cobertura Integral</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "2 años de garantía en defectos de fabricación.",
                      "1 año de mantenimiento preventivo gratuito.",
                      "Cobertura por vicios ocultos.",
                      "Reposición inmediata de componentes críticos.",
                      "Soporte técnico prioritario.",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-700"
                      >
                        <CheckCircle
                          size={20}
                          className="text-brand-highlight flex-shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper direction="left">
              <div>
                <h2 className="mb-5 text-3xl font-bold text-brand-dark sm:text-4xl md:mb-6">
                  Tranquilidad para su Inversión
                </h2>
                <p className="mb-7 text-base leading-relaxed text-slate-600 sm:text-lg md:mb-8">
                  Entendemos que un ascensor es una inversión a largo plazo. Por
                  eso, diseñamos nuestros contratos y políticas de garantía para
                  proteger su capital y asegurar la máxima disponibilidad
                  operativa.
                </p>

                <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                  <div className="rounded-xl border border-slate-200 bg-brand-soft p-6 transition-colors hover:border-brand-primary">
                    <FileText className="text-brand-primary mb-4" size={32} />
                    <h4 className="font-bold text-brand-dark mb-2">
                      Contratos Transparentes
                    </h4>
                    <p className="text-sm text-slate-600">
                      Sin letras chicas. Especificaciones técnicas claras y
                      cronogramas definidos.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-brand-soft p-6 transition-colors hover:border-brand-primary">
                    <Users className="text-brand-primary mb-4" size={32} />
                    <h4 className="font-bold text-brand-dark mb-2">
                      Respaldo Técnico
                    </h4>
                    <p className="text-sm text-slate-600">
                      Equipo de ingeniería listo para resolver cualquier
                      incidencia compleja.
                    </p>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* ───────── CERTIFICATIONS ───────── */}
      <section className="relative overflow-hidden bg-brand-dark py-16 text-white md:py-24">
        {/* Background Decoration */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Normativas y Cumplimiento
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Nuestros procesos y equipos cumplen estrictamente con los
              estándares más exigentes del mercado.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {[
              {
                title: "Norma Técnica Peruana",
                code: "NTP",
                desc: "Cumplimiento total del Reglamento Nacional de Edificaciones y normas de seguridad eléctrica.",
                icon: <FileText />,
              },
              {
                title: "Estándar Europeo",
                code: "EN 81-20/50",
                desc: "Seguimos las directrices de seguridad más actualizadas de la Unión Europea para ascensores.",
                icon: <Award />,
              },
              {
                title: "Seguridad Ocupacional",
                code: "SST",
                desc: "Protocolos de seguridad y salud en el trabajo para proteger a nuestro personal y a sus usuarios.",
                icon: <ShieldCheck />,
              },
            ].map((cert, i) => (
              <MotionWrapper key={i} delay={i * 0.2}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-colors hover:bg-white/10 sm:p-8">
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/20 text-brand-primary">
                      {cert.icon}
                    </div>
                    <span className="rounded bg-brand-highlight/10 px-3 py-1 font-mono text-xs font-bold text-brand-highlight sm:text-sm">
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
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
              <div className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-wider text-sm mb-4">
                <Clock size={16} />
                <span>Post-Venta</span>
              </div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                El Mantenimiento no es un gasto, es seguridad.
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Un plan de mantenimiento adecuado previene el 85% de las fallas
                mecánicas. Nuestros programas incluyen visitas mensuales,
                limpieza técnica, ajustes y lubricación de componentes vitales.
              </p>
              <a
                href="/contacto"
                className="inline-block w-full rounded-lg bg-brand-dark px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-brand-primary sm:w-max"
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
