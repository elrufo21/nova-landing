import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ServiceCardNewProps {
  title: string;
  description: string;
  icon?: ReactNode;

  href?: string;
  delay?: number;
  featured?: boolean;
}

export function ServiceCardNew({
  title,
  description,
  icon,

  href,
  delay = 0,
  featured = false
}: ServiceCardNewProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={featured ? "lg:col-span-2" : ""}
    >
      <Wrapper
        {...(href && { href })}
        className={`
          group relative block overflow-hidden rounded-3xl border border-slate-200/60 bg-white transition-all duration-500 hover:border-brand-primary/30 hover:shadow-2xl hover:-translate-y-2
          ${featured ? "lg:aspect-[2/1]" : ""}
        `}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent/5" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dots' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='2' cy='2' r='1' fill='brand-primary' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23dots)'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 lg:p-10">
          {/* Icon */}
          {icon && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay + 0.2, duration: 0.5 }}
              className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent text-white shadow-lg"
            >
              {icon}
            </motion.div>
          )}

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.3, duration: 0.5 }}
            className="text-xl lg:text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300"
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.4, duration: 0.5 }}
            className="text-slate-600 leading-relaxed mb-6"
          >
            {description}
          </motion.p>

          {/* Link */}
          {href && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay + 0.5, duration: 0.5 }}
              className="flex items-center text-brand-primary font-semibold group-hover:text-brand-accent transition-colors duration-300"
            >
              <span>Conocer más</span>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          )}

          {/* Featured Badge */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.6, duration: 0.5 }}
              className="absolute top-6 right-6 px-3 py-1 bg-brand-highlight text-white text-xs font-bold rounded-full"
            >
              DESTACADO
            </motion.div>
          )}
        </div>

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Wrapper>
    </motion.div>
  );
}
