import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";


interface Project {
    id: string | number;
    title: string;
    category: string;
    location?: string;
    image: string;
    size?: "small" | "medium" | "large";
}

interface ProjectGalleryProps {
    projects?: Project[];
}

const DEFAULT_PROJECTS: Project[] = [
    {
        id: 1,
        title: "Torre Empresarial San Isidro",
        category: "Corporativo",
        location: "Lima, Perú",
        image: "/projects/project-1.jpg",
        size: "large"
    },
    {
        id: 2,
        title: "Residencial Miraflores",
        category: "Vivienda",
        location: "Miraflores, Lima",
        image: "/projects/project-2.jpg",
        size: "medium"
    },
    {
        id: 3,
        title: "Clínica Delgado",
        category: "Hospitalario",
        location: "Miraflores, Lima",
        image: "/projects/project-3.jpg",
        size: "medium"
    },
    {
        id: 4,
        title: "Centro Comercial Real Plaza",
        category: "Comercial",
        location: "Lima",
        image: "/projects/project-4.jpg",
        size: "small"
    },
    {
        id: 5,
        title: "Hotel Westin",
        category: "Hotelería",
        location: "San Isidro",
        image: "/projects/project-5.jpg",
        size: "medium"
    }
];

export function ProjectGallery({ projects = DEFAULT_PROJECTS }: ProjectGalleryProps) {


    return (
        <div className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:auto-rows-[280px] md:grid-cols-4 md:auto-rows-[300px]">
            {projects.map((project, idx) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className={`
             relative group overflow-hidden rounded-2xl cursor-pointer
             ${project.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
             ${project.size === "medium" ? "md:col-span-2 md:row-span-1" : ""}
             ${project.size === "small" ? "md:col-span-1 md:row-span-1" : ""}
           `}

                >
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-slate-200">
                        {/* Placeholder for real implementation if image fails or is empty, use a pattern */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null; // Prevent infinite loop
                                target.src = `https://placehold.co/800x600?text=Building+${project.id}`;
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                        <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                            <span className="mb-3 inline-block rounded-full bg-brand-primary/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                {project.category}
                            </span>
                            <h3 className="mb-1 text-lg font-bold text-white sm:text-xl md:text-2xl">
                                {project.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-slate-300 opacity-100 transition-opacity duration-300 md:opacity-0 md:delay-75 md:group-hover:opacity-100">
                                <MapPin className="w-4 h-4" />
                                {project.location}
                            </div>
                        </div>

                        {/* Hover Icon */}
                        <div className="absolute right-4 top-4 hidden translate-y-4 transform rounded-full bg-white p-3 text-brand-dark opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-brand-primary hover:text-white sm:right-6 sm:top-6 md:block">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
