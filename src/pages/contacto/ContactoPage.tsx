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
  ArrowRight
} from "lucide-react";
import type { ContactForm } from "@/types";

export function ContactoPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
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
        image="/contact/contact-hero.jpg"
        breadcrumbs={[{ label: "Contacto" }]}
      />

      <section className="relative py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* ───────── LEFT COLUMN: INFO ───────── */}
            <MotionWrapper direction="right">
              <div>
                <h2 className="text-4xl font-bold text-brand-dark mb-8">Información de Contacto</h2>
                <div className="bg-brand-soft rounded-[2rem] p-10 space-y-8">

                  {/* Info Items */}
                  <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Llámanos</p>
                        <a href={`tel:${COMPANY_INFO.phone}`} className="text-xl font-bold text-brand-dark hover:text-brand-primary transition-colors block">
                          {COMPANY_INFO.phone}
                        </a>
                        <span className="text-sm text-slate-500">Lunes a Viernes, 8am - 6pm</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Escríbenos</p>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="text-xl font-bold text-brand-dark hover:text-brand-primary transition-colors block">
                          {COMPANY_INFO.email}
                        </a>
                        <span className="text-sm text-slate-500">Consultas técnicas y comerciales</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Visítanos</p>
                        <p className="text-xl font-bold text-brand-dark leading-tight">
                          {COMPANY_INFO.address}
                        </p>
                        <span className="text-sm text-slate-500">Huancayo, Perú</span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Action */}
                  <div className="pt-8 border-t border-slate-200">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-green-500 text-white p-6 rounded-2xl hover:bg-green-600 transition-colors group shadow-lg shadow-green-200"
                    >
                      <div className="flex items-center gap-4">
                        <MessageCircle size={32} />
                        <div>
                          <p className="font-bold text-lg">Chat en Vivo</p>
                          <p className="text-green-100 text-sm">Respuesta inmediata por WhatsApp</p>
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
              <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-bl-[4rem] -z-0" />

                <h2 className="text-3xl font-bold text-brand-dark mb-2">Solicitar Cotización</h2>
                <p className="text-slate-500 mb-8">Cuéntanos sobre tu proyecto y te responderemos a la brevedad.</p>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-[400px] text-center">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-slate-500 max-w-xs mx-auto">
                      Gracias por contactarnos. Un asesor comercial se comunicará contigo en breve.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-brand-primary font-bold hover:underline"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-brand-dark">Nombre Completo *</label>
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
                        <label htmlFor="phone" className="text-sm font-bold text-brand-dark">Teléfono *</label>
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
                      <label htmlFor="email" className="text-sm font-bold text-brand-dark">Correo Electrónico *</label>
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
                      <label htmlFor="service" className="text-sm font-bold text-brand-dark">Servicio de Interés</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all text-slate-600 bg-white"
                      >
                        <option value="">Seleccionar opción...</option>
                        <option value="fabricacion">Fabricación de Ascensor</option>
                        <option value="modernizacion">Modernización</option>
                        <option value="mantenimiento">Mantenimiento</option>
                        <option value="reparacion">Reparación / Emergencia</option>
                        <option value="otro">Otros</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-brand-dark">Detalles del Proyecto *</label>
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
                      className="w-full bg-brand-dark text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-xl shadow-brand-dark/20"
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
      <section className="h-[400px] w-full bg-slate-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15607.780183359654!2d-75.2098765!3d-12.0651234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e964555555555%3A0x1234567890abcdef!2sHuancayo%2C%20Per%C3%fa!5e0!3m2!1ses!2spe!4v1610000000000!5m2!1ses!2spe"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
          allowFullScreen={false}
          loading="lazy"
          title="Mapa de ubicación"
        />
        <div className="absolute inset-0 pointer-events-none border-t-4 border-brand-primary/50" />
      </section>
    </>
  );
}
