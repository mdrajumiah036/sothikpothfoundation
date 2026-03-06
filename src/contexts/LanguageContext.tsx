import React, { createContext, useContext, useState, useCallback } from "react";

type Language = "en" | "bn";

interface Translations {
  [key: string]: { en: string; bn: string };
}

const translations: Translations = {
  // Nav
  "nav.home": { en: "Home", bn: "হোম" },
  "nav.about": { en: "About Us", bn: "আমাদের সম্পর্কে" },
  "nav.donate": { en: "Donate", bn: "দান করুন" },
  "nav.team": { en: "Our Team", bn: "আমাদের টিম" },
  "nav.gallery": { en: "Gallery", bn: "গ্যালারি" },
  "nav.contact": { en: "Contact", bn: "যোগাযোগ" },

  // Hero
  "hero.title": { en: "Building a Brighter Future for Bangladesh", bn: "বাংলাদেশের জন্য একটি উজ্জ্বল ভবিষ্যৎ গড়ে তুলছি" },
  "hero.subtitle": { en: "Empowering communities through education, healthcare, and sustainable development across Bangladesh.", bn: "বাংলাদেশ জুড়ে শিক্ষা, স্বাস্থ্যসেবা এবং টেকসই উন্নয়নের মাধ্যমে সম্প্রদায়কে ক্ষমতায়ন করছি।" },
  "hero.donate": { en: "Donate Now", bn: "এখনই দান করুন" },
  "hero.involved": { en: "Get Involved", bn: "যুক্ত হন" },

  // About
  "about.tag": { en: "About Our Foundation", bn: "আমাদের ফাউন্ডেশন সম্পর্কে" },
  "about.title": { en: "Transforming Lives Since 2010", bn: "২০১০ সাল থেকে জীবন পরিবর্তন করছি" },
  "about.desc": { en: "The Amar Bangladesh Foundation is dedicated to uplifting the most vulnerable communities across Bangladesh. Through our programs in education, healthcare, clean water, and women's empowerment, we have touched the lives of thousands.", bn: "আমার বাংলাদেশ ফাউন্ডেশন বাংলাদেশ জুড়ে সবচেয়ে ঝুঁকিপূর্ণ সম্প্রদায়গুলোকে উন্নত করতে নিবেদিত। শিক্ষা, স্বাস্থ্যসেবা, বিশুদ্ধ পানি এবং নারীর ক্ষমতায়নে আমাদের কর্মসূচির মাধ্যমে আমরা হাজার হাজার মানুষের জীবন স্পর্শ করেছি।" },
  "about.learn": { en: "Learn More About Us", bn: "আমাদের সম্পর্কে আরও জানুন" },

  // Causes
  "causes.tag": { en: "Our Key Causes", bn: "আমাদের মূল কারণসমূহ" },
  "causes.title": { en: "Programs That Create Impact", bn: "প্রভাব তৈরি করে এমন কর্মসূচি" },
  "causes.education": { en: "Education", bn: "শিক্ষা" },
  "causes.education.desc": { en: "Providing quality education to underprivileged children through schools and scholarship programs.", bn: "স্কুল এবং বৃত্তি কর্মসূচির মাধ্যমে সুবিধাবঞ্চিত শিশুদের মানসম্মত শিক্ষা প্রদান।" },
  "causes.health": { en: "Healthcare", bn: "স্বাস্থ্যসেবা" },
  "causes.health.desc": { en: "Running mobile health camps and clinics in rural areas to provide free medical services.", bn: "বিনামূল্যে চিকিৎসা সেবা প্রদানের জন্য গ্রামীণ এলাকায় ভ্রাম্যমাণ স্বাস্থ্য ক্যাম্প পরিচালনা।" },
  "causes.water": { en: "Clean Water", bn: "বিশুদ্ধ পানি" },
  "causes.water.desc": { en: "Installing tube wells and water purification systems in communities lacking safe drinking water.", bn: "নিরাপদ পানীয় জলের অভাবে থাকা সম্প্রদায়গুলোতে নলকূপ এবং পানি বিশুদ্ধকরণ ব্যবস্থা স্থাপন।" },
  "causes.women": { en: "Women Empowerment", bn: "নারীর ক্ষমতায়ন" },
  "causes.women.desc": { en: "Supporting women through vocational training, microfinance, and awareness programs.", bn: "বৃত্তিমূলক প্রশিক্ষণ, ক্ষুদ্রঋণ এবং সচেতনতামূলক কর্মসূচির মাধ্যমে নারীদের সহায়তা।" },

  // Stats
  "stats.people": { en: "People Helped", bn: "সাহায্যকৃত মানুষ" },
  "stats.projects": { en: "Projects Completed", bn: "সম্পন্ন প্রকল্প" },
  "stats.volunteers": { en: "Volunteers", bn: "স্বেচ্ছাসেবী" },
  "stats.districts": { en: "Districts Covered", bn: "জেলা কভার" },

  // Donate
  "donate.tag": { en: "Make a Difference", bn: "পার্থক্য তৈরি করুন" },
  "donate.title": { en: "Your Donation Changes Lives", bn: "আপনার দান জীবন পরিবর্তন করে" },
  "donate.desc": { en: "Every contribution, no matter how small, helps us reach more communities and create lasting change.", bn: "প্রতিটি অবদান, যতই ছোট হোক না কেন, আমাদের আরও বেশি সম্প্রদায়ের কাছে পৌঁছাতে এবং স্থায়ী পরিবর্তন তৈরি করতে সাহায্য করে।" },
  "donate.custom": { en: "Custom Amount", bn: "কাস্টম পরিমাণ" },
  "donate.name": { en: "Full Name", bn: "পুরো নাম" },
  "donate.email": { en: "Email Address", bn: "ইমেইল ঠিকানা" },
  "donate.submit": { en: "Donate Securely", bn: "নিরাপদে দান করুন" },
  "donate.monthly": { en: "Monthly", bn: "মাসিক" },
  "donate.onetime": { en: "One Time", bn: "একবার" },

  // Team
  "team.tag": { en: "Meet Our Team", bn: "আমাদের টিমের সাথে পরিচিত হন" },
  "team.title": { en: "The People Behind Our Mission", bn: "আমাদের মিশনের পেছনের মানুষেরা" },

  // Gallery
  "gallery.tag": { en: "Our Gallery", bn: "আমাদের গ্যালারি" },
  "gallery.title": { en: "Moments of Impact", bn: "প্রভাবের মুহূর্তসমূহ" },

  // Contact
  "contact.tag": { en: "Get in Touch", bn: "যোগাযোগ করুন" },
  "contact.title": { en: "We'd Love to Hear From You", bn: "আমরা আপনার কাছ থেকে শুনতে চাই" },
  "contact.name": { en: "Your Name", bn: "আপনার নাম" },
  "contact.email": { en: "Your Email", bn: "আপনার ইমেইল" },
  "contact.message": { en: "Your Message", bn: "আপনার বার্তা" },
  "contact.send": { en: "Send Message", bn: "বার্তা পাঠান" },
  "contact.address": { en: "Address", bn: "ঠিকানা" },
  "contact.phone": { en: "Phone", bn: "ফোন" },

  // Testimonials
  "testimonials.tag": { en: "What People Say", bn: "মানুষ কী বলে" },
  "testimonials.title": { en: "Stories of Hope & Change", bn: "আশা এবং পরিবর্তনের গল্প" },

  // Newsletter
  "newsletter.title": { en: "Stay Connected", bn: "সংযুক্ত থাকুন" },
  "newsletter.desc": { en: "Subscribe to our newsletter for updates on our work and how you can help.", bn: "আমাদের কাজের আপডেট এবং আপনি কীভাবে সাহায্য করতে পারেন তা জানতে আমাদের নিউজলেটারে সাবস্ক্রাইব করুন।" },
  "newsletter.placeholder": { en: "Enter your email", bn: "আপনার ইমেইল দিন" },
  "newsletter.subscribe": { en: "Subscribe", bn: "সাবস্ক্রাইব" },

  // Footer
  "footer.desc": { en: "Empowering communities and transforming lives across Bangladesh through sustainable development.", bn: "টেকসই উন্নয়নের মাধ্যমে সম্প্রদায়কে ক্ষমতায়ন এবং বাংলাদেশ জুড়ে জীবন পরিবর্তন।" },
  "footer.quicklinks": { en: "Quick Links", bn: "দ্রুত লিংক" },
  "footer.programs": { en: "Programs", bn: "কর্মসূচি" },
  "footer.rights": { en: "All rights reserved.", bn: "সর্বস্বত্ব সংরক্ষিত।" },

  // About page
  "aboutpage.title": { en: "About Amar Bangladesh Foundation", bn: "আমার বাংলাদেশ ফাউন্ডেশন সম্পর্কে" },
  "aboutpage.mission.title": { en: "Our Mission", bn: "আমাদের মিশন" },
  "aboutpage.mission.desc": { en: "To create sustainable change by empowering the most vulnerable communities in Bangladesh through education, healthcare, clean water, and livelihood programs.", bn: "শিক্ষা, স্বাস্থ্যসেবা, বিশুদ্ধ পানি এবং জীবিকা কর্মসূচির মাধ্যমে বাংলাদেশের সবচেয়ে ঝুঁকিপূর্ণ সম্প্রদায়গুলোকে ক্ষমতায়ন করে টেকসই পরিবর্তন তৈরি করা।" },
  "aboutpage.vision.title": { en: "Our Vision", bn: "আমাদের ভিশন" },
  "aboutpage.vision.desc": { en: "A Bangladesh where every person has access to quality education, healthcare, and opportunities to thrive with dignity.", bn: "এমন একটি বাংলাদেশ যেখানে প্রতিটি মানুষের মানসম্মত শিক্ষা, স্বাস্থ্যসেবা এবং সম্মানের সাথে বেড়ে ওঠার সুযোগ রয়েছে।" },
  "aboutpage.story.title": { en: "Our Story", bn: "আমাদের গল্প" },
  "aboutpage.story.desc": { en: "Founded in 2010 by a group of passionate Bangladeshi professionals, Amar Bangladesh Foundation started with a small literacy program in Dhaka. Today, we operate across 32 districts, impacting over 50,000 lives annually through our diverse programs.", bn: "২০১০ সালে একদল উৎসাহী বাংলাদেশি পেশাদারদের দ্বারা প্রতিষ্ঠিত, আমার বাংলাদেশ ফাউন্ডেশন ঢাকায় একটি ছোট সাক্ষরতা কর্মসূচি দিয়ে শুরু করেছিল। আজ আমরা ৩২টি জেলায় কাজ করছি, আমাদের বিভিন্ন কর্মসূচির মাধ্যমে বছরে ৫০,০০০-এরও বেশি জীবনে প্রভাব ফেলছি।" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = useCallback(
    (key: string) => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[language];
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
