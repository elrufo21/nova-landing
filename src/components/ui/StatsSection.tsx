import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { AnimatedNumber } from "./AnimatedNumber";

interface StatItem {
  number: string;
  label: string;
  icon?: ReactNode;
  delay?: number;
}

interface StatsSectionProps {
  title: string;
  subtitle: string;
  stats: StatItem[];
  background?: "light" | "dark" | "gradient";
}

export function StatsSection({
  title,
  subtitle,
  stats,
  background = "light",
}: StatsSectionProps) {
  const bgClasses = {
    light: "bg-white",
    dark: "bg-slate-900",
    gradient:
      "bg-gradient-to-br from-brand-primary via-brand-accent to-brand-secondary",
  };

  const textClasses = {
    light: "text-slate-900",
    dark: "text-white",
    gradient: "text-white",
  };

  return (
    <section className={`py-20 lg:py-32 ${bgClasses[background]}`}>
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className={`text-3xl lg:text-4xl font-bold mb-6 ${textClasses[background]}`}
          >
            {title}
          </h2>
          <p
            className={`text-lg lg:text-xl max-w-3xl mx-auto ${textClasses[background]} opacity-80`}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: stat.delay || index * 0.1,
              }}
              className={`
                relative text-center p-8 rounded-2xl
                ${background === "light" ? "bg-slate-50 border border-slate-200" : ""}
                ${background === "dark" ? "bg-slate-800/50 border border-slate-700" : ""}
                ${background === "gradient" ? "bg-white/10 backdrop-blur-sm border border-white/20" : ""}
              `}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-2xl" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                {stat.icon && (
                  <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{
                      delay: (stat.delay || index * 0.1) + 0.2,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center mx-auto rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent text-white"
                  >
                    {stat.icon}
                  </motion.div>
                )}

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    delay: (stat.delay || index * 0.1) + 0.3,
                    duration: 0.6,
                  }}
                  className={`
                    text-3xl lg:text-4xl font-black mb-2
                    ${background === "gradient" ? "text-white" : textClasses[background]}
                  `}
                >
                  <AnimatedNumber value={stat.number} />
                </motion.div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    delay: (stat.delay || index * 0.1) + 0.4,
                    duration: 0.6,
                  }}
                  className={`
                    text-sm lg:text-base font-medium
                    ${background === "gradient" ? "text-white/90" : textClasses[background]} opacity-80
                  `}
                >
                  {stat.label}
                </motion.div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent/5 opacity-0 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
