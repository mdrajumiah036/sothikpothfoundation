/**
 * About Page
 * Content sourced from src/data/content.ts (aboutpage.*)
 * Edit goals and descriptions there.
 */
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { Target, Eye, BookOpen, CheckCircle, Heart } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  const { t, language } = useLanguage();
  const bn = language === "bn" ? "font-bangla" : "";

  const goals = [
    t("aboutpage.goal1"),
    t("aboutpage.goal2"),
    t("aboutpage.goal3"),
    t("aboutpage.goal4"),
    t("aboutpage.goal5"),
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

      {/* Introduction */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <p className={`text-lg text-muted-foreground leading-relaxed ${bn}`}>
              {t("aboutpage.intro")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-4xl space-y-16">
          {[
            { icon: Target, title: t("aboutpage.mission.title"), desc: t("aboutpage.mission.desc") },
            { icon: Eye, title: t("aboutpage.vision.title"), desc: t("aboutpage.vision.desc") },
          ].map((s, i) => (
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

      {/* Goals */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center shrink-0">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className={`text-2xl font-display font-bold text-foreground ${bn}`}>{t("aboutpage.goals.title")}</h2>
                <ul className="mt-4 space-y-3">
                  {goals.map((goal, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className={`text-muted-foreground leading-relaxed ${bn}`}>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Belief Statement */}
      <section className="gradient-primary section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <Heart className="w-10 h-10 text-primary-foreground/80 mx-auto mb-4" />
            <p className={`text-xl md:text-2xl text-primary-foreground leading-relaxed font-medium italic ${bn}`}>
              "{t("aboutpage.belief")}"
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
