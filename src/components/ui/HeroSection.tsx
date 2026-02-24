import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  ChevronDown,
  CheckCircle,
} from "lucide-react";
import type { ReactNode } from "react";

interface StatItem {
  number: string;
  label: string;
  icon?: ReactNode;
  delay?: number;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image?: string;
  backgroundVideo?: string;
  stats?: StatItem[];
  actions?: Array<{
    label: string;
    href?: string;
    variant?: "primary" | "secondary";
  }>;
}

export function HeroSection({
  title,
  subtitle,
  image = "/hero-bg.jpg",
  backgroundVideo = "/videoHero.mp4",
  stats = [],
  actions = [],
}: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-brand-dark">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={image}
          aria-hidden="true"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.14),transparent_45%)]" />
      </div>

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div
        className="absolute -left-12 top-24 z-10 h-64 w-64 rounded-full bg-brand-primary/25 blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-10 z-10 h-80 w-80 rounded-full bg-brand-highlight/20 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text Content */}
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6 flex items-center gap-3"
              >
                <div className="h-1 w-12 rounded-full bg-brand-highlight" />
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-bold uppercase tracking-widest text-brand-primary backdrop-blur-sm">
                  Ingenieria Vertical
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-10 max-w-xl border-l-4 border-brand-primary/40 pl-6 text-lg leading-relaxed text-slate-200 md:text-xl"
              >
                {subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                {actions.map((action, idx) => (
                  <a
                    key={idx}
                    href={action.href ?? "#"}
                    className={`
                      group relative flex items-center justify-center gap-3 overflow-hidden rounded-xl px-8 py-4 text-lg font-bold transition-all duration-300
                      ${
                        action.variant === "secondary"
                          ? "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                          : "bg-brand-primary text-white shadow-lg shadow-brand-primary/25 hover:bg-brand-accent hover:shadow-xl hover:shadow-brand-primary/30"
                      }
                    `}
                  >
                    <div
                      className={`absolute inset-0 translate-y-[100%] transition-transform duration-300 group-hover:translate-y-0 ${
                        action.variant === "secondary"
                          ? "bg-white/5"
                          : "bg-brand-accent"
                      }`}
                    />

                    <span className="relative z-10 flex items-center gap-2">
                      {action.label}
                      {action.variant === "secondary" ? (
                        <MessageCircle size={20} />
                      ) : (
                        <ArrowRight size={20} />
                      )}
                    </span>
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Floating Trust Indicators (Right Side - Desktop) */}
            <div className="relative hidden h-full lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute right-0 top-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  <div className="w-80 rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="rounded-xl bg-brand-primary/20 p-3 text-brand-primary">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">
                          Certificacion ISO
                        </div>
                        <div className="text-sm text-slate-300">
                          Estandares Internacionales
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full bg-brand-highlight"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.5, delay: 1.5 }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-slate-300">
                        <span>Seguridad</span>
                        <span>100%</span>
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3 text-center">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                        <div className="text-xl font-black text-white">
                          24/7
                        </div>
                        <div className="text-xs text-slate-300">Soporte</div>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                        <div className="text-xl font-black text-white">+10</div>
                        <div className="text-xs text-slate-300">Anos</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-10 top-10 -z-10 h-40 w-40 rounded-full bg-brand-primary/20 blur-3xl animate-pulse" />
                </div>
              </motion.div>
            </div>
          </div>

          {stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={`${stat.label}-${index}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.05 + (stat.delay ?? index * 0.08),
                  }}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl"
                >
                  <div className="mb-3 flex items-center gap-3">
                    {stat.icon && (
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/25 text-brand-highlight">
                        {stat.icon}
                      </div>
                    )}
                    <div className="text-3xl font-black tracking-tight text-white">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-slate-200">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Descubre Mas</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
