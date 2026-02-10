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
    breadcrumbs?: BreadcrumbItem[];
}

export function PageHeader({
    title,
    subtitle,
    image = "/hero-bg.jpg",
    breadcrumbs = []
}: PageHeaderProps) {
    return (
        <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden bg-brand-dark">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-dark/40 z-10" />
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover opacity-50"
                />
            </div>

            {/* Decorative Elements */}
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Content */}
            <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                        <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
                        {breadcrumbs.map((crumb, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <ChevronRight size={14} />
                                {crumb.href ? (
                                    <Link to={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                                ) : (
                                    <span className="text-brand-primary">{crumb.label}</span>
                                )}
                            </div>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-xl text-slate-300 leading-relaxed border-l-4 border-brand-primary/50 pl-6">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
