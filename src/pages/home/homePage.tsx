import {
  ArrowRight,
  Wrench,
  ShieldCheck,
  Headset,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Hero } from "../../components/hero";
import { ServiceCard } from "../../components/servicesCard";
import { Seo } from "../../components/seo/Seo";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { COMPANY_INFO } from "@/constants/company";

export function HomePage() {
  return (
    <>
      <Seo
        title="Soluciones Integrales en Ascensores y Transporte Vertical"
        description="NOVA ASCENSORES E.I.R.L. - Fabricación, instalación, mantenimiento y reparación de ascensores con personal especializado y normas técnicas vigentes. Servicios en todo Perú."
        keywords="ascensores perú, fabricación de ascensores, instalación de ascensores, mantenimiento de ascensores, nova ascensores, transporte vertical"
      />

      {/* ───────── HERO ───────── */}
      <Hero
        title="Soluciones Integrales en Ascensores y Transporte Vertical"
        subtitle="Fabricación, instalación, mantenimiento y reparación con personal especializado y cumplimiento de normas técnicas vigentes."
        image="/nova.jpg"
        actions={[
          {
            label: "Cotizar ahora",
            href: "/contacto",
            variant: "primary",
          },
          {
            label: "WhatsApp",
            href: `https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}`,
            variant: "secondary",
          },
        ]}
      />

      {/* ───────── SERVICES OVERVIEW ───────── */}
      <AnimatedSection className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark md:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-600">
              Brindamos soluciones completas para el transporte vertical, desde
              la fabricación hasta el mantenimiento especializado.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Fabricación de Ascensores",
                description:
                  "Diseñamos y construimos ascensores a medida según las necesidades específicas de cada proyecto.",
                icon: <Wrench className="h-6 w-6" />,
              },
              {
                title: "Instalación Profesional",
                description:
                  "Instalación experta de ascensores eléctricos, camilleros y de carga con garantía de seguridad.",
                icon: <ShieldCheck className="h-6 w-6" />,
              },
              {
                title: "Mantenimiento Integral",
                description:
                  "Planes de mantenimiento preventivo y correctivo para asegurar la operatividad continua.",
                icon: <Headset className="h-6 w-6" />,
              },
            ].map((service, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href="/servicios"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ───────── TRUST / DIFFERENTIATORS ───────── */}
      <AnimatedSection className="relative overflow-hidden bg-brand-soft py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark md:text-4xl">
              ¿Por qué elegir NOVA ASCENSORES?
            </h2>
            <p className="mt-4 text-slate-700">
              Trabajamos bajo estándares técnicos exigentes con enfoque en
              seguridad, confiabilidad y soporte continuo para nuestros
              clientes.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Seguridad Certificada",
                desc: "Cumplimiento estricto de normas técnicas vigentes y protocolos de seguridad internacional.",
              },
              {
                icon: Wrench,
                title: "Experiencia Comprobada",
                desc: "Proyectos ejecutados para entidades públicas, privadas, hospitales y edificios corporativos.",
              },
              {
                icon: Headset,
                title: "Soporte Técnico 24/7",
                desc: "Atención rápida y acompañamiento permanente para garantizar la operatividad de sus equipos.",
              },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <AnimatedSection key={title} delay={idx * 0.1}>
                <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg">
                  <Icon className="h-7 w-7 text-brand-primary" />
                  <h3 className="mt-4 text-xl font-bold text-brand-dark">
                    {title}
                  </h3>
                  <p className="mt-3 text-slate-600">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ───────── PROJECTS PREVIEW ───────── */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark md:text-4xl">
                Proyectos y Clientes
              </h2>
              <p className="mt-4 text-slate-600">
                Nuestra experiencia está respaldada por trabajos realizados en
                instituciones públicas, hospitales y edificios corporativos.
              </p>
            </div>

            <a
              href="/proyectos"
              className="inline-flex items-center gap-2 font-semibold text-brand-primary transition hover:text-brand-accent"
            >
              Ver todos los proyectos
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "GORE Junín",
              "Municipalidad de Huancayo",
              "Hospital La Merced",
              "UNCP",
            ].map((name) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-8 text-sm font-semibold text-slate-700 transition hover:bg-white hover:shadow-md"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA FINAL ───────── */}
      <section className="relative overflow-hidden bg-brand-dark py-28 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Confía tu ascensor a manos expertas
          </h2>
          <p className="mt-6 text-white/80">
            Solicita una cotización o contáctanos para brindarte una solución
            segura, eficiente y duradera para tus proyectos de transporte
            vertical.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-10 py-4 font-semibold text-brand-dark shadow-lg transition hover:bg-brand-soft"
            >
              <Phone size={18} />
              Cotizar ahora
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-10 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
