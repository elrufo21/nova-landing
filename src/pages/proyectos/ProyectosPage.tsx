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
        className="flex w-max gap-8 py-4"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="group flex h-32 w-[280px] shrink-0 items-center justify-center rounded-2xl border border-slate-200/90 bg-white px-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="max-h-16 w-auto object-contain opacity-90 transition-all duration-300 group-hover:opacity-100"
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
        image="/projects/projects-hero.jpg"
        breadcrumbs={[{ label: "Proyectos" }]}
      />

      {/* ───────── FILTERS & GALLERY ───────── */}
      <section className="py-24 bg-white min-h-screen">
        <div className="mx-auto max-w-7xl px-4">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border-2
                  ${
                    activeCategory === cat.id
                      ? "bg-brand-dark text-white border-brand-dark shadow-lg scale-105"
                      : "bg-white text-slate-500 border-slate-200 hover:border-brand-primary hover:text-brand-primary"
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry-ish Grid */}
          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
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
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
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
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur text-brand-dark text-xs font-bold rounded-lg shadow-sm">
                        {project.year || "2024"}
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 relative">
                    {/* Floating Action Button */}
                    <div className="absolute -top-6 right-6 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </div>

                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-brand-dark mb-1 group-hover:text-brand-primary transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <MapPin size={14} className="text-brand-accent" />
                        {project.location}
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
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
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">
                No se encontraron proyectos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ───────── FEATURED CLIENTS LOGOS ───────── */}
      <section className="py-20 bg-brand-soft border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
            Confían en Nosotros
          </h3>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-brand-soft to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-brand-soft to-transparent" />
            <LogoCarouselRow logos={CLIENT_LOGOS} duration={75} />
          </div>
        </div>
      </section>
    </>
  );
}
