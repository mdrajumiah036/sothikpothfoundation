import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, BookOpen, Stethoscope, Droplets, Users, ArrowRight, Quote, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";

const Index = () => {
  const { t, language } = useLanguage();
  const bn = language === "bn" ? "font-bangla" : "";

  const causes = [
    { icon: BookOpen, title: t("causes.education"), desc: t("causes.education.desc"), color: "bg-primary-light text-primary" },
    { icon: Stethoscope, title: t("causes.health"), desc: t("causes.health.desc"), color: "bg-secondary-light text-secondary" },
    { icon: Droplets, title: t("causes.water"), desc: t("causes.water.desc"), color: "bg-primary-light text-primary" },
    { icon: Users, title: t("causes.women"), desc: t("causes.women.desc"), color: "bg-secondary-light text-secondary" },
  ];

  const stats = [
    { value: "50,000+", label: t("stats.people") },
    { value: "120+", label: t("stats.projects") },
    { value: "2,500+", label: t("stats.volunteers") },
    { value: "32", label: t("stats.districts") },
  ];

  const testimonials = [
    {
      text: language === "bn"
        ? "এই ফাউন্ডেশন আমার গ্রামের শিশুদের জীবন পরিবর্তন করেছে। এখন তারা স্কুলে যাচ্ছে এবং স্বপ্ন দেখছে।"
        : "This foundation has changed the lives of children in my village. Now they are going to school and dreaming big.",
      name: language === "bn" ? "রহিমা বেগম" : "Rahima Begum",
      role: language === "bn" ? "সম্প্রদায়ের সদস্য" : "Community Member",
    },
    {
      text: language === "bn"
        ? "স্বেচ্ছাসেবক হিসেবে কাজ করা আমার জীবনের সেরা অভিজ্ঞতা। প্রতিটি মুহূর্ত অর্থবহ।"
        : "Working as a volunteer has been the best experience of my life. Every moment is meaningful.",
      name: language === "bn" ? "করিম আহমেদ" : "Karim Ahmed",
      role: language === "bn" ? "স্বেচ্ছাসেবী" : "Volunteer",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Children learning" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <AnimatedSection>
            <h1 className={`text-4xl md:text-5xl lg:text-7xl font-display font-bold text-background leading-tight max-w-4xl mx-auto ${bn}`}>
              {t("hero.title")}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className={`mt-6 text-lg md:text-xl text-background/80 max-w-2xl mx-auto leading-relaxed ${bn}`}>
              {t("hero.subtitle")}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
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
                {t("hero.involved")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Summary */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src={aboutBg} alt="Bangladesh landscape" className="w-full h-80 lg:h-[28rem] object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <span className={`text-sm font-semibold text-accent uppercase tracking-wider ${bn}`}>{t("about.tag")}</span>
              <h2 className={`mt-3 text-3xl md:text-4xl font-display font-bold text-foreground ${bn}`}>{t("about.title")}</h2>
              <p className={`mt-5 text-muted-foreground leading-relaxed ${bn}`}>{t("about.desc")}</p>
              <Link
                to="/about"
                className={`mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors ${bn}`}
              >
                {t("about.learn")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="section-padding section-alt">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <span className={`text-sm font-semibold text-accent uppercase tracking-wider ${bn}`}>{t("causes.tag")}</span>
            <h2 className={`mt-3 text-3xl md:text-4xl font-display font-bold text-foreground ${bn}`}>{t("causes.title")}</h2>
          </AnimatedSection>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {causes.map((cause, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center h-full">
                  <div className={`w-16 h-16 rounded-2xl ${cause.color} flex items-center justify-center mx-auto`}>
                    <cause.icon className="w-7 h-7" />
                  </div>
                  <h3 className={`mt-5 text-lg font-display font-semibold text-foreground ${bn}`}>{cause.title}</h3>
                  <p className={`mt-3 text-sm text-muted-foreground leading-relaxed ${bn}`}>{cause.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="gradient-primary section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">{stat.value}</div>
                  <p className={`mt-2 text-primary-foreground/80 font-medium ${bn}`}>{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <span className={`text-sm font-semibold text-accent uppercase tracking-wider ${bn}`}>{t("gallery.tag")}</span>
            <h2 className={`mt-3 text-3xl md:text-4xl font-display font-bold text-foreground ${bn}`}>{t("gallery.title")}</h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden group cursor-pointer">
                  <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <Link to="/gallery" className={`mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:underline ${bn}`}>
              {language === "bn" ? "সব ছবি দেখুন" : "View Full Gallery"} <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-padding section-alt">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <span className={`text-sm font-semibold text-accent uppercase tracking-wider ${bn}`}>{t("team.tag")}</span>
            <h2 className={`mt-3 text-3xl md:text-4xl font-display font-bold text-foreground ${bn}`}>{t("team.title")}</h2>
          </AnimatedSection>
          <div className="mt-12 flex justify-center gap-8 flex-wrap">
            {[
              { img: team1, name: language === "bn" ? "ড. আরিফুল ইসলাম" : "Dr. Ariful Islam", role: language === "bn" ? "প্রতিষ্ঠাতা ও চেয়ারম্যান" : "Founder & Chairman" },
              { img: team2, name: language === "bn" ? "ফারজানা আক্তার" : "Farzana Akter", role: language === "bn" ? "নির্বাহী পরিচালক" : "Executive Director" },
            ].map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="text-center">
                  <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg" />
                  <h4 className={`mt-4 font-display font-semibold text-foreground ${bn}`}>{member.name}</h4>
                  <p className={`text-sm text-muted-foreground ${bn}`}>{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <Link to="/team" className={`mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:underline ${bn}`}>
              {language === "bn" ? "পুরো টিম দেখুন" : "Meet the Full Team"} <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="gradient-gold section-padding">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className={`text-3xl md:text-4xl font-display font-bold text-primary-foreground ${bn}`}>{t("donate.title")}</h2>
            <p className={`mt-4 text-primary-foreground/90 max-w-xl mx-auto ${bn}`}>{t("donate.desc")}</p>
            <Link
              to="/donate"
              className={`mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-foreground font-semibold text-lg hover:bg-primary-foreground/90 transition-colors shadow-lg ${bn}`}
            >
              <Heart className="w-5 h-5" />
              {t("hero.donate")}
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <span className={`text-sm font-semibold text-accent uppercase tracking-wider ${bn}`}>{t("testimonials.tag")}</span>
            <h2 className={`mt-3 text-3xl md:text-4xl font-display font-bold text-foreground ${bn}`}>{t("testimonials.title")}</h2>
          </AnimatedSection>
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="bg-card rounded-2xl p-8 shadow-sm text-left">
                  <Quote className="w-8 h-8 text-accent/40" />
                  <p className={`mt-4 text-muted-foreground leading-relaxed italic ${bn}`}>"{item.text}"</p>
                  <div className="mt-6">
                    <p className={`font-semibold text-foreground ${bn}`}>{item.name}</p>
                    <p className={`text-sm text-muted-foreground ${bn}`}>{item.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding section-alt">
        <div className="container mx-auto text-center max-w-xl">
          <AnimatedSection>
            <Mail className="w-12 h-12 text-primary mx-auto" />
            <h2 className={`mt-4 text-3xl font-display font-bold text-foreground ${bn}`}>{t("newsletter.title")}</h2>
            <p className={`mt-3 text-muted-foreground ${bn}`}>{t("newsletter.desc")}</p>
            <div className="mt-8 flex gap-3">
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className={`flex-1 px-4 py-3 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring ${bn}`}
              />
              <button className={`px-6 py-3 rounded-lg gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity ${bn}`}>
                {t("newsletter.subscribe")}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
