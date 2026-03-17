/**
 * ============================================
 * SOTHIK POTH FOUNDATION - SITE CONTENT
 * ============================================
 * 
 * Edit this file to update ALL text content on the website.
 * Each entry has "en" (English) and "bn" (Bangla) versions.
 * 
 * To add new content: add a new key with { en: "...", bn: "..." }
 * Then use t("your.key") in any component.
 */

export interface TranslationEntry {
  en: string;
  bn: string;
}

export interface Translations {
  [key: string]: TranslationEntry;
}

export const siteContent: Translations = {
  // ============================================
  // SITE NAME & BRANDING
  // ============================================
  "site.name": { en: "Sothik Poth Foundation", bn: "সঠিক পথ ফাউন্ডেশন" },
  "site.tagline": { en: "Walking the Right Path Together", bn: "একসাথে সঠিক পথে চলি" },

  // ============================================
  // NAVIGATION
  // ============================================
  "nav.home": { en: "Home", bn: "হোম" },
  "nav.about": { en: "About Us", bn: "আমাদের সম্পর্কে" },
  "nav.donate": { en: "Donate", bn: "দান করুন" },
  "nav.team": { en: "Our Team", bn: "আমাদের টিম" },
  "nav.gallery": { en: "Gallery", bn: "গ্যালারি" },
  "nav.contact": { en: "Contact", bn: "যোগাযোগ" },

  // ============================================
  // HERO SLIDER (3 slides)
  // ============================================
  "hero.slide1.title": {
    en: "Building a Brighter Future for Bangladesh",
    bn: "বাংলাদেশের জন্য একটি উজ্জ্বল ভবিষ্যৎ গড়ে তুলছি",
  },
  "hero.slide1.subtitle": {
    en: "Empowering communities through education, healthcare, and sustainable development.",
    bn: "শিক্ষা, স্বাস্থ্যসেবা এবং টেকসই উন্নয়নের মাধ্যমে সম্প্রদায়কে ক্ষমতায়ন করছি।",
  },
  "hero.slide2.title": {
    en: "Standing Beside the Vulnerable",
    bn: "দরিদ্র ও অসহায় মানুষের পাশে দাঁড়াচ্ছি",
  },
  "hero.slide2.subtitle": {
    en: "Providing food, shelter, and medical care to those who need it most.",
    bn: "যাদের সবচেয়ে বেশি প্রয়োজন তাদের খাদ্য, আশ্রয় এবং চিকিৎসা সেবা প্রদান।",
  },
  "hero.slide3.title": {
    en: "Empowering Women & Protecting Children",
    bn: "নারীর ক্ষমতায়ন ও শিশুদের সুরক্ষা",
  },
  "hero.slide3.subtitle": {
    en: "Creating opportunities for women and ensuring safety for every child.",
    bn: "নারীদের জন্য সুযোগ তৈরি এবং প্রতিটি শিশুর নিরাপত্তা নিশ্চিত করা।",
  },
  "hero.donate": { en: "Donate Now", bn: "এখনই দান করুন" },
  "hero.join": { en: "Join Us", bn: "যুক্ত হন" },

  // ============================================
  // ABOUT SECTION (Homepage short intro)
  // ============================================
  "about.tag": { en: "About Our Foundation", bn: "আমাদের ফাউন্ডেশন সম্পর্কে" },
  "about.title": { en: "Sothik Poth Foundation", bn: "সঠিক পথ ফাউন্ডেশন" },
  "about.desc": {
    en: "Sothik Poth Foundation is a non-political, non-profit social welfare organization. It was established to stand beside the poor, helpless, and underprivileged people. This foundation works in spreading education, healthcare, and rehabilitation of disaster-affected people.",
    bn: "\"সঠিক পথ ফাউন্ডেশন\" একটি অরাজনৈতিক, অলাভজনক সমাজসেবামূলক প্রতিষ্ঠান। এটি প্রতিষ্ঠিত হয়েছে দরিদ্র, অসহায়, এবং সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানোর জন্য। এই ফাউন্ডেশন শিক্ষাবিস্তারে, স্বাস্থ্যসেবায়, এবং দুর্যোগকবলিত মানুষের পুনর্বাসনে কাজ করে থাকে।",
  },
  "about.learn": { en: "Learn More About Us", bn: "আমাদের সম্পর্কে আরও জানুন" },

  // ============================================
  // MISSION & GOALS
  // ============================================
  "mission.tag": { en: "Our Mission", bn: "আমাদের মিশন" },
  "mission.title": { en: "Core Goals of the Foundation", bn: "ফাউন্ডেশনের মূল লক্ষ্য" },

  // ============================================
  // CAUSES / PROGRAMS
  // ============================================
  "causes.tag": { en: "Our Programs", bn: "আমাদের কর্মসূচি" },
  "causes.title": { en: "Programs That Create Impact", bn: "প্রভাব তৈরি করে এমন কর্মসূচি" },
  "causes.education": { en: "Education Support", bn: "শিক্ষা সহায়তা" },
  "causes.education.desc": {
    en: "Providing education support to underprivileged students.",
    bn: "দরিদ্র শিক্ষার্থীদের শিক্ষা সহায়তা প্রদান।",
  },
  "causes.health": { en: "Healthcare", bn: "চিকিৎসা সেবা" },
  "causes.health.desc": {
    en: "Ensuring medical services for the helpless and vulnerable.",
    bn: "অসহায়দের চিকিৎসা সেবা নিশ্চিত করা।",
  },
  "causes.food": { en: "Food & Shelter", bn: "খাদ্য ও আশ্রয়" },
  "causes.food.desc": {
    en: "Arranging food and shelter for those in need.",
    bn: "খাদ্য ও আশ্রয়ের ব্যবস্থা করা।",
  },
  "causes.women": { en: "Women Empowerment", bn: "নারীর ক্ষমতায়ন" },
  "causes.women.desc": {
    en: "Working for women's empowerment and child protection.",
    bn: "নারীর ক্ষমতায়ন এবং শিশুদের সুরক্ষায় কাজ করা।",
  },
  "causes.disaster": { en: "Disaster Relief", bn: "দুর্যোগ ত্রাণ" },
  "causes.disaster.desc": {
    en: "Conducting relief operations during natural disasters.",
    bn: "প্রাকৃতিক দুর্যোগে ত্রাণ কার্যক্রম পরিচালনা।",
  },

  // ============================================
  // IMPACT STATISTICS
  // ============================================
  "stats.people": { en: "People Helped", bn: "সাহায্যকৃত মানুষ" },
  "stats.projects": { en: "Projects Completed", bn: "সম্পন্ন প্রকল্প" },
  "stats.volunteers": { en: "Volunteers", bn: "স্বেচ্ছাসেবী" },
  "stats.districts": { en: "Districts Covered", bn: "জেলা কভার" },

  // ============================================
  // DONATE PAGE
  // ============================================
  "donate.tag": { en: "Make a Difference", bn: "পার্থক্য তৈরি করুন" },
  "donate.title": { en: "Your Donation Changes Lives", bn: "আপনার দান জীবন পরিবর্তন করে" },
  "donate.desc": {
    en: "Every contribution, no matter how small, helps us reach more communities and create lasting change.",
    bn: "প্রতিটি অবদান, যতই ছোট হোক না কেন, আমাদের আরও বেশি সম্প্রদায়ের কাছে পৌঁছাতে এবং স্থায়ী পরিবর্তন তৈরি করতে সাহায্য করে।",
  },
  "donate.custom": { en: "Custom Amount", bn: "কাস্টম পরিমাণ" },
  "donate.name": { en: "Full Name", bn: "পুরো নাম" },
  "donate.email": { en: "Email Address", bn: "ইমেইল ঠিকানা" },
  "donate.submit": { en: "Donate Securely", bn: "নিরাপদে দান করুন" },
  "donate.monthly": { en: "Monthly", bn: "মাসিক" },
  "donate.onetime": { en: "One Time", bn: "একবার" },
  "donate.method": { en: "Payment Method", bn: "পেমেন্ট মাধ্যম" },
  "donate.secure": { en: "Your information is completely secure", bn: "আপনার তথ্য সম্পূর্ণ নিরাপদ" },

  // ============================================
  // TEAM PAGE
  // ============================================
  "team.tag": { en: "Meet Our Team", bn: "আমাদের টিমের সাথে পরিচিত হন" },
  "team.title": { en: "The People Behind Our Mission", bn: "আমাদের মিশনের পেছনের মানুষেরা" },

  // ============================================
  // GALLERY PAGE
  // ============================================
  "gallery.tag": { en: "Our Gallery", bn: "আমাদের গ্যালারি" },
  "gallery.title": { en: "Moments of Impact", bn: "প্রভাবের মুহূর্তসমূহ" },

  // ============================================
  // CONTACT PAGE
  // ============================================
  "contact.tag": { en: "Get in Touch", bn: "যোগাযোগ করুন" },
  "contact.title": { en: "We'd Love to Hear From You", bn: "আমরা আপনার কাছ থেকে শুনতে চাই" },
  "contact.name": { en: "Your Name", bn: "আপনার নাম" },
  "contact.email": { en: "Your Email", bn: "আপনার ইমেইল" },
  "contact.message": { en: "Your Message", bn: "আপনার বার্তা" },
  "contact.send": { en: "Send Message", bn: "বার্তা পাঠান" },
  "contact.address": { en: "Address", bn: "ঠিকানা" },
  "contact.phone": { en: "Phone", bn: "ফোন" },

  // ============================================
  // TESTIMONIALS
  // ============================================
  "testimonials.tag": { en: "What People Say", bn: "মানুষ কী বলে" },
  "testimonials.title": { en: "Stories of Hope & Change", bn: "আশা এবং পরিবর্তনের গল্প" },

  // ============================================
  // NEWSLETTER
  // ============================================
  "newsletter.title": { en: "Stay Connected", bn: "সংযুক্ত থাকুন" },
  "newsletter.desc": {
    en: "Subscribe to our newsletter for updates on our work and how you can help.",
    bn: "আমাদের কাজের আপডেট এবং আপনি কীভাবে সাহায্য করতে পারেন তা জানতে আমাদের নিউজলেটারে সাবস্ক্রাইব করুন।",
  },
  "newsletter.placeholder": { en: "Enter your email", bn: "আপনার ইমেইল দিন" },
  "newsletter.subscribe": { en: "Subscribe", bn: "সাবস্ক্রাইব" },

  // ============================================
  // FOOTER
  // ============================================
  "footer.desc": {
    en: "A non-political, non-profit social welfare organization dedicated to standing beside the poor, helpless, and underprivileged people of Bangladesh.",
    bn: "একটি অরাজনৈতিক, অলাভজনক সমাজসেবামূলক প্রতিষ্ঠান যা বাংলাদেশের দরিদ্র, অসহায় এবং সুবিধাবঞ্চিত মানুষের পাশে দাঁড়াতে নিবেদিত।",
  },
  "footer.quicklinks": { en: "Quick Links", bn: "দ্রুত লিংক" },
  "footer.programs": { en: "Programs", bn: "কর্মসূচি" },
  "footer.rights": { en: "All rights reserved.", bn: "সর্বস্বত্ব সংরক্ষিত।" },
  "footer.belief": {
    en: "We believe that through the blessings of parents, it is possible to bring blessings into people's lives.",
    bn: "আমাদের বিশ্বাস, মা-বাবার দোয়ার মাধ্যমে মানুষের জীবনে আশীর্বাদ বয়ে আনা সম্ভব।",
  },

  // ============================================
  // ABOUT PAGE (Full page)
  // ============================================
  "aboutpage.title": { en: "About Sothik Poth Foundation", bn: "সঠিক পথ ফাউন্ডেশন সম্পর্কে" },
  "aboutpage.intro": {
    en: "Sothik Poth Foundation is a non-political, non-profit social welfare organization. It was established to stand beside the poor, helpless, and underprivileged people. This foundation works in spreading education, healthcare, and rehabilitation of disaster-affected people.",
    bn: "\"সঠিক পথ ফাউন্ডেশন\" একটি অরাজনৈতিক, অলাভজনক সমাজসেবামূলক প্রতিষ্ঠান। এটি প্রতিষ্ঠিত হয়েছে দরিদ্র, অসহায়, এবং সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানোর জন্য। এই ফাউন্ডেশন শিক্ষাবিস্তারে, স্বাস্থ্যসেবায়, এবং দুর্যোগকবলিত মানুষের পুনর্বাসনে কাজ করে থাকে।",
  },
  "aboutpage.mission.title": { en: "Our Mission", bn: "আমাদের মিশন" },
  "aboutpage.mission.desc": {
    en: "To create sustainable change by empowering the most vulnerable communities in Bangladesh through education, healthcare, food, shelter, and livelihood programs. We believe that through the blessings of parents, it is possible to bring blessings into people's lives.",
    bn: "শিক্ষা, স্বাস্থ্যসেবা, খাদ্য, আশ্রয় এবং জীবিকা কর্মসূচির মাধ্যমে বাংলাদেশের সবচেয়ে ঝুঁকিপূর্ণ সম্প্রদায়গুলোকে ক্ষমতায়ন করে টেকসই পরিবর্তন তৈরি করা। আমাদের বিশ্বাস, মা-বাবার দোয়ার মাধ্যমে মানুষের জীবনে আশীর্বাদ বয়ে আনা সম্ভব।",
  },
  "aboutpage.vision.title": { en: "Our Vision", bn: "আমাদের ভিশন" },
  "aboutpage.vision.desc": {
    en: "A Bangladesh where every person can live with dignity and human rights. A society where the poor, helpless, and underprivileged have access to education, healthcare, and opportunities to thrive.",
    bn: "এমন একটি বাংলাদেশ যেখানে প্রতিটি মানুষ মর্যাদা ও মানবিক অধিকার নিয়ে বাঁচতে পারে। এমন একটি সমাজ যেখানে দরিদ্র, অসহায় এবং সুবিধাবঞ্চিত মানুষের শিক্ষা, স্বাস্থ্যসেবা এবং বেড়ে ওঠার সুযোগ রয়েছে।",
  },
  "aboutpage.goals.title": { en: "Our Goals", bn: "আমাদের লক্ষ্য" },
  "aboutpage.goal1": {
    en: "Provide education support to underprivileged students",
    bn: "দরিদ্র শিক্ষার্থীদের শিক্ষা সহায়তা প্রদান",
  },
  "aboutpage.goal2": {
    en: "Ensure medical services for the helpless",
    bn: "অসহায়দের চিকিৎসা সেবা নিশ্চিত করা",
  },
  "aboutpage.goal3": {
    en: "Arrange food and shelter for those in need",
    bn: "খাদ্য ও আশ্রয়ের ব্যবস্থা করা",
  },
  "aboutpage.goal4": {
    en: "Work for women's empowerment and child protection",
    bn: "নারীর ক্ষমতায়ন এবং শিশুদের সুরক্ষায় কাজ করা",
  },
  "aboutpage.goal5": {
    en: "Conduct relief operations during natural disasters",
    bn: "প্রাকৃতিক দুর্যোগে ত্রাণ কার্যক্রম পরিচালনা",
  },
  "aboutpage.belief": {
    en: "We believe that through the blessings of parents, it is possible to bring blessings into people's lives. With this goal, we are actively working so that every person in society can live with dignity and human rights.",
    bn: "আমাদের বিশ্বাস, মা-বাবার দোয়ার মাধ্যমে মানুষের জীবনে আশীর্বাদ বয়ে আনা সম্ভব। সেই লক্ষ্যে আমরা সক্রিয়ভাবে কাজ করে যাচ্ছি, যেন সমাজের প্রতিটি মানুষ মর্যাদা ও মানবিক অধিকার নিয়ে বাঁচতে পারে।",
  },

  // ============================================
  // MISC / COMMON
  // ============================================
  "common.viewAll": { en: "View All", bn: "সব দেখুন" },
  "common.viewGallery": { en: "View Full Gallery", bn: "সব ছবি দেখুন" },
  "common.viewTeam": { en: "Meet the Full Team", bn: "পুরো টিম দেখুন" },
};

// ============================================
// TEAM MEMBERS - Edit this array to add/remove team members
// ============================================
export const teamMembers = [
  {
    nameEn: "Md. Raju Miah",
    nameBn: "মোঃ রাজু মিয়া",
    roleEn: "Founder & Chairman",
    roleBn: "প্রতিষ্ঠাতা ও চেয়ারম্যান",
    bioEn: "Development professional with 4 years of experience.",
    bioBn: "08 বছরের অভিজ্ঞতা সহ উন্নয়ন পেশাদার।",
    // Change the image import path to update photos
    imageKey: "team-1",
  },
  {
    nameEn: "Md. Mofizul Islam",
    nameBn: "মোঃ মফিজুল ইসলাম",
    roleEn: "Executive Director",
    roleBn: "নির্বাহী পরিচালক",
    bioEn: "Expert in NGO management and governance.",
    bioBn: "এনজিও ব্যবস্থাপনায় বিশেষজ্ঞ।",
    imageKey: "team-2",
  },
  {
    nameEn: "Tanvir Hossain",
    nameBn: "তানভীর হোসেন",
    roleEn: "Program Director",
    roleBn: "প্রোগ্রাম ডিরেক্টর",
    bioEn: "1 years of community development experience.",
    bioBn: "কমিউনিটি উন্নয়নে ১ বছরের অভিজ্ঞতা।",
    imageKey: "team-3",
  },
  {
    nameEn: "Nusrat Jahan",
    nameBn: "নুসরাত জাহান",
    roleEn: "Head of Communications",
    roleBn: "যোগাযোগ প্রধান",
    bioEn: "Creating impact through storytelling.",
    bioBn: "গল্প বলার মাধ্যমে প্রভাব তৈরি করছেন।",
    imageKey: "team-4",
  },
];

// ============================================
// TESTIMONIALS - Edit this array to add/remove testimonials
// ============================================
export const testimonials = [
  {
    textEn: "This foundation has changed the lives of children in my village. Now they are going to school and dreaming big.",
    textBn: "এই ফাউন্ডেশন আমার গ্রামের শিশুদের জীবন পরিবর্তন করেছে। এখন তারা স্কুলে যাচ্ছে এবং স্বপ্ন দেখছে।",
    nameEn: "Rahima Begum",
    nameBn: "রহিমা বেগম",
    roleEn: "Community Member",
    roleBn: "সম্প্রদায়ের সদস্য",
  },
  {
    textEn: "Working as a volunteer has been the best experience of my life. Every moment is meaningful.",
    textBn: "স্বেচ্ছাসেবক হিসেবে কাজ করা আমার জীবনের সেরা অভিজ্ঞতা। প্রতিটি মুহূর্ত অর্থবহ।",
    nameEn: "Karim Ahmed",
    nameBn: "করিম আহমেদ",
    roleEn: "Volunteer",
    roleBn: "স্বেচ্ছাসেবী",
  },
];

// ============================================
// CONTACT INFO - Edit these to update contact details
// ============================================
export const contactInfo = {
  address: "Kurigram, Bangladesh",
  phone: "+880 1619860990",
  email: "sothikpothfoundation@gmail.com",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2587562064037!2d90.37481021498266!3d23.746395584589567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36b%3A0x7b1576b60152e4dd!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd",
  socialLinks: {
    facebook: "https://www.facebook.com/sothikpothfoundation/",
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },
};

// ============================================
// IMPACT STATS - Edit values here
// ============================================
export const impactStats = [
  { value: "50,000+", keyEn: "People Helped", keyBn: "সাহায্যকৃত মানুষ" },
  { value: "120+", keyEn: "Projects Completed", keyBn: "সম্পন্ন প্রকল্প" },
  { value: "2,500+", keyEn: "Volunteers", keyBn: "স্বেচ্ছাসেবী" },
  { value: "32", keyEn: "Districts Covered", keyBn: "জেলা কভার" },
];
