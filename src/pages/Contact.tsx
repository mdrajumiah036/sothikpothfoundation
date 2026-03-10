/**
 * Contact Page
 * Contact details are in src/data/content.ts (contactInfo).
 * Edit there to update address, phone, email, map.
 */
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { contactInfo } from "@/data/content";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const { t, language } = useLanguage();
  const bn = language === "bn" ? "font-bangla" : "";

  return (
    <div className="pt-20">
      <section className="gradient-primary section-padding text-center">
        <AnimatedSection>
          <span className={`text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider ${bn}`}>{t("contact.tag")}</span>
          <h1 className={`mt-3 text-4xl md:text-5xl font-display font-bold text-primary-foreground ${bn}`}>{t("contact.title")}</h1>
        </AnimatedSection>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-foreground ${bn}`}>{t("contact.address")}</h3>
                    <p className="text-sm text-muted-foreground mt-1 whitespace-pre-line">{contactInfo.address}</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-foreground ${bn}`}>{t("contact.phone")}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{contactInfo.phone}</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-foreground ${bn}`}>{t("contact.email")}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{contactInfo.email}</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Map */}
              <AnimatedSection delay={0.3}>
                <div className="rounded-2xl overflow-hidden shadow-sm border border-border">
                  <iframe
                    src={contactInfo.mapUrl}
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Office Location"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                  <div className="space-y-5">
                    <div>
                      <label className={`block text-sm font-medium text-foreground mb-1 ${bn}`}>{t("contact.name")}</label>
                      <input className={`w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${bn}`} />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-foreground mb-1 ${bn}`}>{t("contact.email")}</label>
                      <input type="email" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-foreground mb-1 ${bn}`}>{t("contact.message")}</label>
                      <textarea rows={5} className={`w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none ${bn}`} />
                    </div>
                    <button className={`w-full py-4 rounded-lg gradient-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 ${bn}`}>
                      <Send className="w-5 h-5" />
                      {t("contact.send")}
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
