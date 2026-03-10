/**
 * Hero Slider Component
 * Displays 3 rotating slides with background images, headlines, and CTAs.
 * Edit slide content in src/data/content.ts (hero.slide1/2/3)
 */
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

const slideImages = [heroBg, aboutBg, gallery1];

const HeroSlider = () => {
  const { t, language } = useLanguage();
  const bn = language === "bn" ? "font-bangla" : "";
  const [current, setCurrent] = useState(0);

  const slides = [
    { title: t("hero.slide1.title"), subtitle: t("hero.slide1.subtitle") },
    { title: t("hero.slide2.title"), subtitle: t("hero.slide2.subtitle") },
    { title: t("hero.slide3.title"), subtitle: t("hero.slide3.subtitle") },
  ];

  const next = useCallback(() => setCurrent((c) => (c + 1) % 3), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + 3) % 3), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slideImages[current]}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className={`text-4xl md:text-5xl lg:text-7xl font-display font-bold text-background leading-tight max-w-4xl mx-auto ${bn}`}>
              {slides[current].title}
            </h1>
            <p className={`mt-6 text-lg md:text-xl text-background/80 max-w-2xl mx-auto leading-relaxed ${bn}`}>
              {slides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/donate"
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg gradient-gold text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg ${bn}`}
          >
            <Heart className="w-5 h-5" />
            {t("hero.donate")}
          </Link>
          <Link
            to="/contact"
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-background/40 text-background font-semibold text-lg hover:bg-background/10 transition-colors ${bn}`}
          >
            {t("hero.join")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-background w-8" : "bg-background/40 hover:bg-background/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
