/**
 * Donate Page
 * Payment method placeholders for Stripe, PayPal, bKash, Nagad.
 * Edit amounts and labels in src/data/content.ts (donate.*)
 */
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Shield, CreditCard, Smartphone } from "lucide-react";

const amounts = [500, 1000, 2500, 5000, 10000, 25000];

type PaymentMethod = "card" | "bkash" | "nagad" | "paypal";

const Donate = () => {
  const { t, language } = useLanguage();
  const bn = language === "bn" ? "font-bangla" : "";
  const [selected, setSelected] = useState(1000);
  const [custom, setCustom] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");

  const paymentMethods: { id: PaymentMethod; label: string; icon: React.ReactNode; color: string }[] = [
    { id: "card", label: "Stripe / Card", icon: <CreditCard className="w-5 h-5" />, color: "bg-[hsl(230,60%,55%)]" },
    { id: "paypal", label: "PayPal", icon: <CreditCard className="w-5 h-5" />, color: "bg-[hsl(210,80%,50%)]" },
    { id: "bkash", label: "bKash", icon: <Smartphone className="w-5 h-5" />, color: "bg-[hsl(330,70%,50%)]" },
    { id: "nagad", label: "Nagad", icon: <Smartphone className="w-5 h-5" />, color: "bg-[hsl(25,90%,50%)]" },
  ];

  return (
    <div className="pt-20">
      <section className="gradient-primary section-padding text-center">
        <AnimatedSection>
          <Heart className="w-12 h-12 text-primary-foreground/80 mx-auto" />
          <h1 className={`mt-4 text-4xl md:text-5xl font-display font-bold text-primary-foreground ${bn}`}>{t("donate.title")}</h1>
          <p className={`mt-4 text-primary-foreground/80 max-w-xl mx-auto ${bn}`}>{t("donate.desc")}</p>
        </AnimatedSection>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <AnimatedSection>
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              {/* Monthly / One Time toggle */}
              <div className="flex rounded-lg overflow-hidden border border-border mb-8">
                <button
                  onClick={() => setIsMonthly(false)}
                  className={`flex-1 py-3 text-sm font-semibold transition-colors ${!isMonthly ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"} ${bn}`}
                >
                  {t("donate.onetime")}
                </button>
                <button
                  onClick={() => setIsMonthly(true)}
                  className={`flex-1 py-3 text-sm font-semibold transition-colors ${isMonthly ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"} ${bn}`}
                >
                  {t("donate.monthly")}
                </button>
              </div>

              {/* Preset amounts */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => { setSelected(amt); setCustom(""); }}
                    className={`py-3 rounded-lg font-semibold text-sm transition-all ${
                      selected === amt && !custom
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    ৳{amt.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="mb-6">
                <label className={`block text-sm font-medium text-foreground mb-2 ${bn}`}>{t("donate.custom")}</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">৳</span>
                  <input
                    type="number"
                    value={custom}
                    onChange={(e) => { setCustom(e.target.value); setSelected(0); }}
                    placeholder="0"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="mb-6">
                <label className={`block text-sm font-medium text-foreground mb-3 ${bn}`}>{t("donate.method")}</label>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                        paymentMethod === method.id
                          ? "border-primary bg-primary/5 text-foreground"
                          : "border-border text-muted-foreground hover:border-muted-foreground/30"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg ${method.color} flex items-center justify-center text-primary-foreground`}>
                        {method.icon}
                      </div>
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Donor info form */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className={`block text-sm font-medium text-foreground mb-1 ${bn}`}>{t("donate.name")}</label>
                  <input className={`w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${bn}`} />
                </div>
                <div>
                  <label className={`block text-sm font-medium text-foreground mb-1 ${bn}`}>{t("donate.email")}</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>

                {/* bKash/Nagad specific field */}
                {(paymentMethod === "bkash" || paymentMethod === "nagad") && (
                  <div>
                    <label className={`block text-sm font-medium text-foreground mb-1 ${bn}`}>
                      {language === "bn" ? "মোবাইল নম্বর" : "Mobile Number"}
                    </label>
                    <input
                      type="tel"
                      placeholder="+880 1XXX-XXXXXX"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                )}
              </div>

              <button className={`w-full py-4 rounded-lg gradient-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 ${bn}`}>
                <CreditCard className="w-5 h-5" />
                {t("donate.submit")}
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span className={bn}>{t("donate.secure")}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Donate;
