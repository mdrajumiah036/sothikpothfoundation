import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { Target, Eye, BookOpen } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  const { t, language } = useLanguage();
  const bn = language === "bn" ? "font-bangla" : "";

  const sections = [
    { icon: Target, title: t("aboutpage.mission.title"), desc: t("aboutpage.mission.desc") },
    { icon: Eye, title: t("aboutpage.vision.title"), desc: t("aboutpage.vision.desc") },
    { icon: BookOpen, title: t("aboutpage.story.title"), desc: t("aboutpage.story.desc") },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center">
        <img src={aboutBg} alt="About" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <AnimatedSection className="relative z-10 text-center px-4">
          <h1 className={`text-4xl md:text-5xl font-display font-bold text-background ${bn}`}>{t("aboutpage.title")}</h1>
        </AnimatedSection>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl space-y-16">
          {sections.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center shrink-0">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className={`text-2xl font-display font-bold text-foreground ${bn}`}>{s.title}</h2>
                  <p className={`mt-3 text-muted-foreground leading-relaxed ${bn}`}>{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
