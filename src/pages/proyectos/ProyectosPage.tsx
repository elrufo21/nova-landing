import { useState } from "react";
import { Seo } from "../../components/seo/Seo";
import { PageHeader } from "../../components/ui/PageHeader";
import { MapPin, Building, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/constants/company";
import { motion, AnimatePresence } from "framer-motion";

type ClientLogo = {
  name: string;
  src: string;
};

const CATEGORIES = [
  { id: "all", label: "Todos" },
  { id: "equipo-completo", label: "Proyectos Integrales" },
  { id: "modernizacion", label: "Modernizaciones" },
  { id: "mantenimiento", label: "Mantenimiento" },
];

const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Cayetano", src: "/logosEmpresas/cayetano.webp" },
  { name: "CCC", src: "/logosEmpresas/ccc.webp" },
  { name: "Clinica Ortega", src: "/logosEmpresas/clinicaortega.webp" },
  { name: "Corte Huanuco", src: "/logosEmpresas/cortehuanuco.webp" },
  { name: "Corte Junin", src: "/logosEmpresas/cortejunin.webp" },
  { name: "Corte Selva", src: "/logosEmpresas/corteselva.webp" },
  { name: "DAC", src: "/logosEmpresas/dac.webp" },
  { name: "Emilima", src: "/logosEmpresas/emilima.webp" },
  { name: "Essalud", src: "/logosEmpresas/essalud.webp" },
  { name: "GORE", src: "/logosEmpresas/gore.webp" },
  { name: "Hospital La Merced", src: "/logosEmpresas/hlamerced.webp" },
  { name: "IREN", src: "/logosEmpresas/iren.webp" },
  { name: "Legado Lima", src: "/logosEmpresas/legadolima.webp" },
  { name: "Municipalidad Huancayo", src: "/logosEmpresas/munihuancayo.webp" },
  { name: "UNCP", src: "/logosEmpresas/uncp.webp" },
  { name: "UNFV", src: "/logosEmpresas/unfv.webp" },
  { name: "UPLA", src: "/logosEmpresas/upla.webp" },
];

function LogoCarouselRow({
  logos,
  reverse = false,
  duration = 42,
}: {
  logos: ClientLogo[];
  reverse?: boolean;
  duration?: number;
}) {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex w-max gap-4 py-3 sm:gap-8 sm:py-4"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="group flex h-24 w-[220px] shrink-0 items-center justify-center rounded-xl border border-slate-200/90 bg-white px-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:h-32 sm:w-[280px] sm:rounded-2xl sm:px-8"
          >
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="max-h-12 w-auto object-contain opacity-90 transition-all duration-300 group-hover:opacity-100 sm:max-h-16"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function ProyectosPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <Seo
        title="Portafolio de Proyectos | NOVA Ascensores"
        description="Galería de proyectos realizados en todo el Perú. Hospitales, edificios residenciales e instituciones que confían en nuestra ingeniería."
        keywords="proyectos ascensores perú, instalación ascensores huancayo, clientes nova ascensores"
      />

      <PageHeader
        title="Nuestra Huella"
        subtitle="Cada proyecto es un testimonio de nuestra capacidad técnica. Desde grandes hospitales hasta exclusivos edificios residenciales."
        image="/novaproyectos.webp"
        breadcrumbs={[{ label: "Proyectos" }]}
      />

      {/* ───────── FILTERS & GALLERY ───────── */}
      <section className="min-h-screen bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          {/* Filter Bar */}
          <div className="-mx-4 mb-10 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0 md:pb-0">
            <div className="flex w-max gap-3 md:w-full md:flex-wrap md:justify-center md:gap-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    whitespace-nowrap rounded-full border-2 px-4 py-2.5 text-xs font-bold transition-all duration-300 sm:px-6 sm:py-3 sm:text-sm
                    ${
                      activeCategory === cat.id
                        ? "scale-105 border-brand-dark bg-brand-dark text-white shadow-lg"
                        : "border-slate-200 bg-white text-slate-500 hover:border-brand-primary hover:text-brand-primary"
                    }
                  `}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry-ish Grid */}
          <motion.div
            layout
            className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
                >
                  {/* Image Area */}
                  <div className="aspect-[4/3] overflow-hidden relative bg-brand-soft">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300">
                        <Building size={48} />
                      </div>
                    )}

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

                    {/* Floating Tag */}
                    <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                      <span className="rounded-lg bg-white/90 px-3 py-1 text-xs font-bold text-brand-dark shadow-sm backdrop-blur">
                        {project.year || "2024"}
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="relative p-5 sm:p-6">
                    {/* Floating Action Button */}
                    <div className="absolute -top-5 right-5 flex h-10 w-10 translate-y-2 transform items-center justify-center rounded-full bg-brand-primary text-white shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:scale-110 sm:-top-6 sm:right-6 sm:h-12 sm:w-12">
                      <ArrowUpRight size={18} />
                    </div>

                    <div className="mb-4">
                      <h3 className="mb-1 text-lg font-bold text-brand-dark transition-colors group-hover:text-brand-primary sm:text-xl">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <MapPin size={14} className="text-brand-accent" />
                        {project.location}
                      </div>
                    </div>

                    <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {CATEGORIES.find((c) => c.id === project.category)
                          ?.label || project.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-16 text-center md:py-20">
              <p className="text-slate-400 text-lg">
                No se encontraron proyectos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ───────── FEATURED CLIENTS LOGOS ───────── */}
      <section className="border-t border-slate-200 bg-brand-soft py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h3 className="mb-8 text-xs font-bold uppercase tracking-widest text-slate-400 sm:mb-10 sm:text-sm">
            Confían en Nosotros
          </h3>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-brand-soft to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-brand-soft to-transparent sm:w-20" />
            <LogoCarouselRow logos={CLIENT_LOGOS} duration={75} />
          </div>
        </div>
      </section>
    </>
  );
}
