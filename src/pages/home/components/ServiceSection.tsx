import { motion } from "framer-motion";
import { Wrench, Cog, Building2, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Fabricación",
    desc: "Diseñamos y fabricamos ascensores a medida para proyectos residenciales, comerciales, hospitalarios e industriales.",
    icon: Building2,
  },
  {
    title: "Instalación",
    desc: "Instalamos sistemas de transporte vertical con precisión técnica y cumplimiento de las normativas vigentes.",
    icon: Cog,
  },
  {
    title: "Mantenimiento",
    desc: "Planes preventivos y correctivos que aseguran operación continua y mayor vida útil del ascensor.",
    icon: Wrench,
  },
  {
    title: "Modernización",
    desc: "Actualizamos ascensores existentes incorporando tecnología moderna y mejoras en seguridad y eficiencia.",
    icon: ShieldCheck,
  },
];

/* Animaciones base */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-brand-soft/40">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-highlight">
            Nuestros Servicios
          </span>

          <h2 className="mt-2 text-3xl font-extrabold text-brand-dark md:text-4xl">
            Soluciones integrales en transporte vertical
          </h2>

          <p className="mt-4 text-slate-600">
            Tecnología, seguridad certificada y experiencia técnica aplicadas a
            cada proyecto.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "tween", duration: 0.25 }}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl"
              >
                {/* ICON */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white"
                >
                  <Icon size={28} />
                </motion.div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-brand-dark">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {service.desc}
                </p>

                {/* LINK */}
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand-accent">
                  Ver más
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>

                <span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition group-hover:border-brand-primary/40" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
