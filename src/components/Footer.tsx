/**
 * Footer Component
 * Edit contact info in src/data/content.ts (contactInfo)
 * Edit text in src/data/content.ts (footer.*)
 */
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { contactInfo } from "@/data/content";
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
                {t("site.name")}
              </span>
            </div>
            <p className={`text-primary-foreground/80 text-sm leading-relaxed ${bn}`}>
              {t("footer.desc")}
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Facebook, url: contactInfo.socialLinks.facebook },
                { Icon: Twitter, url: contactInfo.socialLinks.twitter },
                { Icon: Instagram, url: contactInfo.socialLinks.instagram },
                { Icon: Youtube, url: contactInfo.socialLinks.youtube },
              ].map(({ Icon, url }, i) => (
                <a key={i} href={url} className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
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
              <p className={bn}>{t("causes.food")}</p>
              <p className={bn}>{t("causes.women")}</p>
              <p className={bn}>{t("causes.disaster")}</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`font-display font-semibold mb-4 ${bn}`}>{t("nav.contact")}</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <p className="whitespace-pre-line">{contactInfo.address}</p>
              <p>{contactInfo.phone}</p>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-sm text-primary-foreground/70 ${bn}`}>
            © {new Date().getFullYear()} {t("site.name")}. {t("footer.rights")}
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
