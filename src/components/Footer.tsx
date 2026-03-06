import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const { t, language } = useLanguage();
  const bn = language === "bn" ? "font-bangla" : "";

  return (
    <footer className="gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <span className={`text-lg font-bold font-display ${bn}`}>
                {language === "bn" ? "আমার বাংলাদেশ" : "Amar Bangladesh"}
              </span>
            </div>
            <p className={`text-primary-foreground/80 text-sm leading-relaxed ${bn}`}>
              {t("footer.desc")}
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-display font-semibold mb-4 ${bn}`}>{t("footer.quicklinks")}</h4>
            <div className="space-y-2">
              {[
                { to: "/", label: t("nav.home") },
                { to: "/about", label: t("nav.about") },
                { to: "/team", label: t("nav.team") },
                { to: "/gallery", label: t("nav.gallery") },
                { to: "/contact", label: t("nav.contact") },
              ].map((link) => (
                <Link key={link.to} to={link.to} className={`block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors ${bn}`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className={`font-display font-semibold mb-4 ${bn}`}>{t("footer.programs")}</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p className={bn}>{t("causes.education")}</p>
              <p className={bn}>{t("causes.health")}</p>
              <p className={bn}>{t("causes.water")}</p>
              <p className={bn}>{t("causes.women")}</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`font-display font-semibold mb-4 ${bn}`}>{t("nav.contact")}</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <p>House 42, Road 7, Dhanmondi<br />Dhaka 1205, Bangladesh</p>
              <p>+880 1700-000000</p>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@amarbangladesh.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-sm text-primary-foreground/70 ${bn}`}>
            © 2024 Amar Bangladesh Foundation. {t("footer.rights")}
          </p>
          <Link
            to="/donate"
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary-foreground text-primary font-semibold text-sm hover:bg-primary-foreground/90 transition-colors"
          >
            <Heart className="w-4 h-4" />
            {t("hero.donate")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
