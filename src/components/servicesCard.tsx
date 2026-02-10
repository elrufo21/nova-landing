import clsx from "clsx";

type ServiceCardProps = {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  href?: string;
};

export function ServiceCard({
  title,
  description,
  image,
  icon,
  href,
}: ServiceCardProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href && { href })}
      className={clsx(
        "group relative block overflow-hidden rounded-3xl border border-slate-200 bg-white transition",
        "hover:-translate-y-1 hover:shadow-2xl",
      )}
    >
      {/* IMAGE */}
      {image && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      )}

      {/* CONTENT */}
      <div className="p-8">
        {icon && (
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand-primary">
            {icon}
          </div>
        )}

        <h3 className="text-lg font-semibold text-brand-dark transition group-hover:text-brand-primary">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        {href && (
          <span className="mt-6 inline-block text-sm font-semibold text-brand-primary">
            Ver más →
          </span>
        )}
      </div>
    </Wrapper>
  );
}
