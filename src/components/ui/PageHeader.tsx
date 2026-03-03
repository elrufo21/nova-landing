import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
  images?: string[];
  badge?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHeader({
  title,
  subtitle,
  image = "/hero-bg.jpg",
  images = [],
  badge = "NOVA ASCENSORES",
  breadcrumbs = [],
}: PageHeaderProps) {
  const allImages = [...new Set((images.length > 0 ? images : [image]).filter(Boolean))];
  const primaryImage = allImages[0] ?? "/hero-bg.jpg";
  const secondaryImages = allImages.slice(1, 4);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-brand-dark to-slate-900">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      <div className="absolute -left-28 top-8 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl" />
      <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-brand-highlight/20 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,430px)] lg:gap-12"
        >
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-highlight backdrop-blur-sm sm:text-xs">
              {badge}
            </div>

            {/* Breadcrumbs */}
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300 sm:mb-6 sm:text-sm">
              <Link to="/" className="rounded-md px-1 py-0.5 transition-colors hover:text-white">
                Inicio
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <ChevronRight size={14} />
                  {crumb.href ? (
                    <Link
                      to={crumb.href}
                      className="rounded-md px-1 py-0.5 transition-colors hover:text-white"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="rounded-md bg-brand-primary/15 px-2 py-0.5 text-brand-primary">
                      {crumb.label}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <h1 className="mb-5 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>

            {subtitle && (
              <p className="max-w-2xl border-l-4 border-brand-primary/60 pl-4 text-base leading-relaxed text-slate-200 sm:pl-6 sm:text-lg md:text-xl">
                {subtitle}
              </p>
            )}
          </div>

          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-800">
                <img
                  src={primaryImage}
                  alt={title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/35 via-transparent to-transparent" />
              </div>
            </motion.div>

            {secondaryImages.length > 0 && (
              <div className="mt-3 grid grid-cols-3 gap-3">
                {secondaryImages.map((img, index) => (
                  <motion.div
                    key={`${img}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + index * 0.1, duration: 0.4 }}
                    className="h-16 overflow-hidden rounded-xl border border-white/15 bg-white/5 sm:h-20"
                  >
                    <img
                      src={img}
                      alt={`${title} ${index + 2}`}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
