import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import type { ReactNode } from "react";

interface ServiceCardPremiumProps {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  href?: string;
  index?: number;
}

export function ServiceCardPremium({
  title,
  description,
  icon,
  image,
  href,
  index = 0,
}: ServiceCardPremiumProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <Wrapper
        {...(href && { href })}
        className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100"
      >
        {/* Image Header / Background Area */}
        <div className="relative h-48 w-full overflow-hidden bg-brand-dark">
          {image ? (
            <div className="absolute inset-0">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-brand-primary/20 mix-blend-multiply" />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand-primary opacity-20">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            </div>
          )}

          {/* Floating Icon */}
        </div>
        {/* Icon Floating Between Header & Content */}
        <div className="relative z-10 -mt-8 mb-4 px-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl text-brand-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 border-4 border-white">
            {icon || <Plus className="h-8 w-8" />}
          </div>
        </div>

        {/* Content Body */}
        <div className="flex flex-1 flex-col pt-12 pb-8 px-8">
          <h3 className="mb-3 text-2xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
            {title}
          </h3>

          <p className="mb-6 flex-1 text-slate-600 leading-relaxed">
            {description}
          </p>

          {/* Footer / Action */}
          <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
            <span className="text-sm font-semibold text-brand-secondary group-hover:text-brand-primary transition-colors">
              Explorar Servicio
            </span>
            <motion.div
              className="rounded-full bg-slate-50 p-2 text-brand-dark group-hover:bg-brand-primary group-hover:text-white transition-colors"
              whileHover={{ rotate: -45 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 pointer-events-none border-2 border-transparent rounded-3xl transition-colors duration-500 group-hover:border-brand-primary/10" />
      </Wrapper>
    </motion.div>
  );
}
