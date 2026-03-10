/**
 * Team Page
 * Team members are defined in src/data/content.ts (teamMembers array).
 * Add or remove members there.
 */
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { teamMembers } from "@/data/content";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

// Map image keys to imports - add new images here when adding team members
const teamImages: Record<string, string> = {
  "team-1": team1,
  "team-2": team2,
  "team-3": team3,
  "team-4": team4,
};

const Team = () => {
  const { t, language } = useLanguage();
  const bn = language === "bn" ? "font-bangla" : "";

  return (
    <div className="pt-20">
      <section className="gradient-primary section-padding text-center">
        <AnimatedSection>
          <span className={`text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider ${bn}`}>{t("team.tag")}</span>
          <h1 className={`mt-3 text-4xl md:text-5xl font-display font-bold text-primary-foreground ${bn}`}>{t("team.title")}</h1>
        </AnimatedSection>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                  <div className="overflow-hidden">
                    <img
                      src={teamImages[m.imageKey] || team1}
                      alt={language === "bn" ? m.nameBn : m.nameEn}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`text-lg font-display font-semibold text-foreground ${bn}`}>
                      {language === "bn" ? m.nameBn : m.nameEn}
                    </h3>
                    <p className={`text-sm text-accent font-medium ${bn}`}>
                      {language === "bn" ? m.roleBn : m.roleEn}
                    </p>
                    <p className={`mt-2 text-sm text-muted-foreground ${bn}`}>
                      {language === "bn" ? m.bioBn : m.bioEn}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
