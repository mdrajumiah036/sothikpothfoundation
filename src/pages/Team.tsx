import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const Team = () => {
  const { t, language } = useLanguage();
  const bn = language === "bn" ? "font-bangla" : "";

  const members = [
    { img: team1, name: language === "bn" ? "ড. আরিফুল ইসলাম" : "Dr. Ariful Islam", role: language === "bn" ? "প্রতিষ্ঠাতা ও চেয়ারম্যান" : "Founder & Chairman", bio: language === "bn" ? "২০ বছরের অভিজ্ঞতা সহ উন্নয়ন পেশাদার।" : "Development professional with 20 years of experience." },
    { img: team2, name: language === "bn" ? "ফারজানা আক্তার" : "Farzana Akter", role: language === "bn" ? "নির্বাহী পরিচালক" : "Executive Director", bio: language === "bn" ? "এনজিও ব্যবস্থাপনায় বিশেষজ্ঞ।" : "Expert in NGO management and governance." },
    { img: team3, name: language === "bn" ? "তানভীর হোসেন" : "Tanvir Hossain", role: language === "bn" ? "প্রোগ্রাম ডিরেক্টর" : "Program Director", bio: language === "bn" ? "কমিউনিটি উন্নয়নে ১৫ বছরের অভিজ্ঞতা।" : "15 years of community development experience." },
    { img: team4, name: language === "bn" ? "নুসরাত জাহান" : "Nusrat Jahan", role: language === "bn" ? "যোগাযোগ প্রধান" : "Head of Communications", bio: language === "bn" ? "গল্প বলার মাধ্যমে প্রভাব তৈরি করছেন।" : "Creating impact through storytelling." },
  ];

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
            {members.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                  <div className="overflow-hidden">
                    <img src={m.img} alt={m.name} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className={`text-lg font-display font-semibold text-foreground ${bn}`}>{m.name}</h3>
                    <p className={`text-sm text-accent font-medium ${bn}`}>{m.role}</p>
                    <p className={`mt-2 text-sm text-muted-foreground ${bn}`}>{m.bio}</p>
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
