import { ArrowRight } from "lucide-react";
import clsx from "clsx";

type HeroAction = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

type HeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;

  actions?: HeroAction[];

  align?: "left" | "center";
  gradient?: boolean;
  minHeight?: string;
};

export function Hero({
  title,
  subtitle,
  image,
  imageAlt = "",
  actions = [],
  align = "left",
  gradient = true,
  minHeight = "70vh",
}: HeroProps) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden",
        gradient &&
          "bg-gradient-to-br from-brand-dark via-brand-primary to-brand-accent",
      )}
      style={{ minHeight }}
    >
      {/* Overlay suave */}
      {/* Corte inferior elegante */}
      {gradient && (
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-white 
    [clip-path:polygon(0_60%,100%_0,100%_100%,0_100%)]"
        />
      )}

      <div
        className={clsx(
          "relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-24",
          image ? "md:grid-cols-2" : "grid-cols-1",
          align === "center" && "text-center",
        )}
      >
        {/* ───── TEXT ───── */}
        <div
          className={clsx(
            "text-white",
            align === "center" && "mx-auto max-w-3xl",
          )}
        >
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 max-w-xl text-lg text-white/90">{subtitle}</p>
          )}

          {/* ACTIONS */}
          {actions.length > 0 && (
            <div
              className={clsx(
                "mt-10 flex flex-col gap-4",
                align === "center"
                  ? "items-center sm:flex-row sm:justify-center"
                  : "sm:flex-row",
              )}
            >
              {actions.map((action, idx) =>
                action.href ? (
                  <a
                    key={idx}
                    href={action.href}
                    className={clsx(
                      "inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold transition",
                      action.variant === "secondary"
                        ? "border border-white/40 text-white hover:bg-white/10"
                        : "bg-white text-brand-dark hover:bg-brand-soft",
                    )}
                  >
                    {action.label}
                    <ArrowRight size={18} />
                  </a>
                ) : (
                  <button
                    key={idx}
                    onClick={action.onClick}
                    className={clsx(
                      "inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold transition",
                      action.variant === "secondary"
                        ? "border border-white/40 text-white hover:bg-white/10"
                        : "bg-white text-brand-dark hover:bg-brand-soft",
                    )}
                  >
                    {action.label}
                    <ArrowRight size={18} />
                  </button>
                ),
              )}
            </div>
          )}
        </div>

        {/* ───── IMAGE ───── */}
        {image && (
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-2xl" />
            <img
              src={image}
              alt={imageAlt}
              className="relative mx-auto w-full max-w-lg rounded-3xl object-cover shadow-2xl"
            />
          </div>
        )}
      </div>

      {/* Corte inferior elegante */}
      {gradient && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white [clip-path:polygon(0_60%,100%_0,100%_100%,0_100%)]" />
      )}
    </section>
  );
}
