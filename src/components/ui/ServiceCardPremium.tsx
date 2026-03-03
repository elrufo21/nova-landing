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
        className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      >
        {/* Image Header / Background Area */}
        <div className="relative h-44 w-full overflow-hidden bg-brand-dark sm:h-48">
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
        <div className="relative z-10 -mt-7 mb-3 px-6 sm:-mt-8 sm:mb-4 sm:px-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-white bg-white text-brand-primary shadow-xl transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110 sm:h-16 sm:w-16">
            {icon || <Plus className="h-8 w-8" />}
          </div>
        </div>

        {/* Content Body */}
        <div className="flex flex-1 flex-col px-6 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-12">
          <h3 className="mb-3 text-xl font-bold text-brand-dark transition-colors group-hover:text-brand-primary sm:text-2xl">
            {title}
          </h3>

          <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600 sm:mb-6 sm:text-base">
            {description}
          </p>

          {/* Footer / Action */}
          <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 sm:pt-6">
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
