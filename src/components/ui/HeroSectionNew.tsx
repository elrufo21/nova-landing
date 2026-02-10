import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Play } from "lucide-react";
import type { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image?: string;
  actions?: Array<{
    label: string;
    href?: string;
    variant?: "primary" | "secondary";
    onClick?: () => void;
  }>;
  children?: ReactNode;
}

export function HeroSection({ 
  title, 
  subtitle, 
  image, 
  actions = [],
  children 
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-brand-dark to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-brand-highlight/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='white' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="inline-block"
                >
                  <span className="px-4 py-2 bg-brand-highlight/20 text-brand-highlight text-sm font-semibold rounded-full">
                    Ingeniería Vertical
                  </span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight"
                >
                  {title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl"
                >
                  {subtitle}
                </motion.p>
              </div>

              {/* Actions */}
              {actions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="flex flex-col gap-4 sm:flex-row pt-8"
                >
                  {actions.map((action, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={action.onClick}
                      className={`
                        relative overflow-hidden group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300
                        ${action.variant === "secondary" 
                          ? "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20" 
                          : "bg-brand-primary text-white hover:bg-brand-accent shadow-xl hover:shadow-2xl"
                        }
                      `}
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        {action.label}
                        {action.variant === "secondary" ? (
                          <MessageCircle className="w-5 h-5" />
                        ) : (
                          <ArrowRight className="w-5 h-5" />
                        )}
                      </span>
                      
                      {/* Animated background for primary button */}
                      {action.variant !== "secondary" && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-primary"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Image or Custom Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="relative"
            >
              {children || (
                image && (
                  <div className="relative">
                    {/* Glow effect */}
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-brand-accent rounded-3xl opacity-20 blur-2xl"
                      animate={{
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Main image container */}
                    <div className="relative bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 p-8 rounded-3xl backdrop-blur-sm">
                      <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800/50">
                        <img
                          src={image}
                          alt="NOVA ASCENSORES - Soluciones de ingeniería vertical"
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                        
                        {/* Floating elements */}
                        <motion.div
                          className="absolute top-4 right-4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                          animate={{
                            y: [0, -10, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Play className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
