import { useState } from "react";
import { Seo } from "../../components/seo/Seo";
import { PageHeader } from "../../components/ui/PageHeader";
import { MotionWrapper } from "../../components/ui/MotionWrapper";
import { COMPANY_INFO } from "@/constants/company";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import type { ContactForm } from "@/types";

export function ContactoPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <Seo
        title="Contáctanos | NOVA Ascensores"
        description="Estamos listos para atender su requerimiento. Solicite una cotización o visita técnica hoy mismo."
        keywords="contacto nova ascensores, cotización ascensores, teléfono ascensores, dirección nova ascensores"
      />

      <PageHeader
        title="Hablemos de su Proyecto"
        subtitle="Nuestro equipo de ingenieros está listo para brindarle la asesoría que necesita. Respondemos en menos de 24 horas."
        image="/contacto.webp"
        breadcrumbs={[{ label: "Contacto" }]}
      />

      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* ───────── LEFT COLUMN: INFO ───────── */}
            <MotionWrapper direction="right">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-brand-dark sm:mb-8 sm:text-4xl">
                  Información de Contacto
                </h2>
                <div className="space-y-7 rounded-[1.8rem] bg-brand-soft p-6 sm:space-y-8 sm:rounded-[2rem] sm:p-10">
                  {/* Info Items */}
                  <div className="space-y-7 sm:space-y-8">
                    <div className="group flex items-start gap-4 sm:gap-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                        <Phone size={22} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Llámanos
                        </p>
                        <a
                          href={`tel:${COMPANY_INFO.phone}`}
                          className="block text-lg font-bold text-brand-dark transition-colors hover:text-brand-primary sm:text-xl"
                        >
                          {COMPANY_INFO.phone}
                        </a>
                        <span className="text-sm text-slate-500">
                          Lunes a Viernes, 8am - 6pm
                        </span>
                      </div>
                    </div>

                    <div className="group flex items-start gap-4 sm:gap-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                        <Mail size={22} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Escríbenos
                        </p>
                        <a
                          href={`mailto:${COMPANY_INFO.email}`}
                          className="block break-all text-lg font-bold text-brand-dark transition-colors hover:text-brand-primary sm:text-xl"
                        >
                          {COMPANY_INFO.email}
                        </a>
                        <span className="text-sm text-slate-500">
                          Consultas técnicas y comerciales
                        </span>
                      </div>
                    </div>

                    <div className="group flex items-start gap-4 sm:gap-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                        <MapPin size={22} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Visítanos
                        </p>
                        <p className="text-lg font-bold leading-tight text-brand-dark sm:text-xl">
                          Huancayo, Perú
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Action */}
                  <div className="pt-8 border-t border-slate-200">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-start gap-4 rounded-2xl bg-green-500 p-5 text-white shadow-lg shadow-green-200 transition-colors hover:bg-green-600 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <MessageCircle size={28} />
                        <div>
                          <p className="font-bold text-lg">Chat en Vivo</p>
                          <p className="text-green-100 text-sm">
                            Respuesta inmediata por WhatsApp
                          </p>
                        </div>
                      </div>
                      <div className="bg-white/20 p-2 rounded-full group-hover:rotate-45 transition-transform duration-300">
                        <ArrowRight size={20} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            {/* ───────── RIGHT COLUMN: FORM ───────── */}
            <MotionWrapper direction="left" delay={0.2}>
              <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-100 bg-white p-6 shadow-2xl sm:rounded-[2rem] sm:p-8 md:p-12">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-bl-[4rem] -z-0" />

                <h2 className="mb-2 text-2xl font-bold text-brand-dark sm:text-3xl">
                  Solicitar Cotización
                </h2>
                <p className="text-slate-500 mb-8">
                  Cuéntanos sobre tu proyecto y te responderemos a la brevedad.
                </p>

                {isSubmitted ? (
                  <div className="flex min-h-[320px] flex-col items-center justify-center text-center sm:min-h-[400px]">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-slate-500 max-w-xs mx-auto">
                      Gracias por contactarnos. Un asesor comercial se
                      comunicará contigo en breve.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-brand-primary font-bold hover:underline"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-bold text-brand-dark"
                        >
                          Nombre Completo *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all placeholder:text-slate-300"
                          placeholder="Juan Pérez"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-bold text-brand-dark"
                        >
                          Teléfono *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all placeholder:text-slate-300"
                          placeholder="999 000 000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-bold text-brand-dark"
                      >
                        Correo Electrónico *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all placeholder:text-slate-300"
                        placeholder="juan@empresa.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="text-sm font-bold text-brand-dark"
                      >
                        Servicio de Interés
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all text-slate-600 bg-white"
                      >
                        <option value="">Seleccionar opción...</option>
                        <option value="fabricacion">
                          Fabricación de Ascensor
                        </option>
                        <option value="modernizacion">Modernización</option>
                        <option value="mantenimiento">Mantenimiento</option>
                        <option value="reparacion">
                          Reparación / Emergencia
                        </option>
                        <option value="otro">Otros</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-bold text-brand-dark"
                      >
                        Detalles del Proyecto *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all placeholder:text-slate-300 resize-none"
                        placeholder="Ubicación, número de pisos, tipo de uso..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-dark py-4 text-base font-bold text-white shadow-xl shadow-brand-dark/20 transition-colors hover:bg-brand-primary disabled:cursor-not-allowed disabled:opacity-50 sm:text-lg"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                      {!isSubmitting && <Send size={20} />}
                    </button>
                  </form>
                )}
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* ───────── MAP ───────── */}
      <section className="relative h-[280px] w-full bg-slate-200 md:h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15607.780183359654!2d-75.2098765!3d-12.0651234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e964555555555%3A0x1234567890abcdef!2sHuancayo%2C%20Per%C3%fa!5e0!3m2!1ses!2spe!4v1610000000000!5m2!1ses!2spe"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "grayscale(100%) invert(92%) contrast(83%)",
          }}
          allowFullScreen={false}
          loading="lazy"
          title="Mapa de ubicación"
        />
        <div className="absolute inset-0 pointer-events-none border-t-4 border-brand-primary/50" />
      </section>
    </>
  );
}
