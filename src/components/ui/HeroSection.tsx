import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown, CheckCircle } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image?: string;
  actions?: Array<{
    label: string;
    href?: string;
    variant?: "primary" | "secondary";
  }>;
}

export function HeroSection({
  title,
  subtitle,
  image = "/hero-bg.jpg", // Default placeholder if not provided
  actions = []
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/40 z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={image}
          alt="Ingeniería Vertical"
          className="h-full w-full object-cover opacity-60"
        />
      </div>

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-1 w-12 bg-brand-highlight rounded-full" />
              <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">
                Ingeniería Vertical
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-slate-300 leading-relaxed max-w-xl mb-10 border-l-4 border-brand-primary/30 pl-6"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {actions.map((action, idx) => (
                <a
                  key={idx}
                  href={action.href}
                  className={`
                    group relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 overflow-hidden
                    ${action.variant === "secondary"
                      ? "bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-md"
                      : "bg-brand-primary text-white hover:shadow-lg hover:shadow-brand-primary/25"
                    }
                  `}
                >
                  {/* Hover Effect Layer */}
                  <div className={`absolute inset-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ${action.variant === 'secondary' ? 'bg-white/5' : 'bg-brand-accent'}`} />

                  <span className="relative z-10 flex items-center gap-2">
                    {action.label}
                    {action.variant === "secondary" ? <MessageCircle size={20} /> : <ArrowRight size={20} />}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Floating Trust Indicators (Right Side - Desktop) */}
          <div className="hidden lg:block relative h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute right-0 top-1/2 -translate-y-1/2"
            >
              <div className="relative">
                {/* Glass Card */}
                <div className="w-80 backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-brand-primary/20 p-3 rounded-xl text-brand-primary">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Certificación ISO</div>
                      <div className="text-slate-400 text-sm">Estándares Internacionales</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-white/10 rounded-full w-full overflow-hidden">
                      <motion.div
                        className="h-full bg-brand-highlight"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 1.5 }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Seguridad</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>

                {/* Decorative elements behind */}
                <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Descubre Más</span>
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
