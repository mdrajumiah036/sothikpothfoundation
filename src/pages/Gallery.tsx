import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.jpg";

const images = [
  { src: gallery1, alt: "Community education" },
  { src: gallery2, alt: "Clean water project" },
  { src: gallery3, alt: "Health camp" },
  { src: gallery4, alt: "Tree planting" },
  { src: heroBg, alt: "Children learning" },
  { src: aboutBg, alt: "Bangladesh landscape" },
];

const Gallery = () => {
  const { t, language } = useLanguage();
  const bn = language === "bn" ? "font-bangla" : "";
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="pt-20">
      <section className="gradient-primary section-padding text-center">
        <AnimatedSection>
          <span className={`text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider ${bn}`}>{t("gallery.tag")}</span>
          <h1 className={`mt-3 text-4xl md:text-5xl font-display font-bold text-primary-foreground ${bn}`}>{t("gallery.title")}</h1>
        </AnimatedSection>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  className="rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-48 md:h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-background hover:text-background/70" onClick={() => setLightbox(null)}>
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[85vh] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
