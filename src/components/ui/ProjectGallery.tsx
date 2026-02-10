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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
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
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-white bg-brand-primary/80 backdrop-blur-sm rounded-full">
                                {project.category}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                {project.title}
                            </h3>
                            <div className="flex items-center gap-2 text-slate-300 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 delay-75">
                                <MapPin className="w-4 h-4" />
                                {project.location}
                            </div>
                        </div>

                        {/* Hover Icon */}
                        <div className="absolute top-6 right-6 bg-white text-brand-dark p-3 rounded-full opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-brand-primary hover:text-white">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
