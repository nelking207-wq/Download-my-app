/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Download, 
  MessageCircle, 
  Sparkles, 
  Users, 
  Bell, 
  User, 
  Layers, 
  UploadCloud, 
  Heart, 
  Share2,
  ChevronRight,
  Menu,
  X,
  Play,
  Languages
} from "lucide-react";
import { useState, useRef } from "react";

const translations = {
  en: {
    dir: "ltr",
    nav: ["Features", "AI", "Community", "Download"],
    hero: {
      tags: ["SOCIAL", "AI", "CONNECTION"],
      cta: "Download for Android",
      more: "Explore Features"
    },
    stats: ["WESAL CONNECT", "NEXT GEN SOCIAL", "AI POWERED"],
    featuresSection: {
      title: ["Every", "Feature", "Matters."],
      description: "We've engineered Wesal to be more than just an app. It's an ecosystem of expression, built with the latest cloud technology and AI intelligence."
    },
    features: [
      { title: "Social Feed", desc: "Share your moments with posts, photos, and expressive reactions." },
      { title: "Stories", desc: "Immerse yourself in fleeting moments. Vertical storytelling." },
      { title: "Follow System", desc: "Build your circle. Smart notifications keep you connected." },
      { title: "Instant Chat", desc: "Powerful real-time messaging with full media support." },
      { title: "AI Assist", desc: "Intelligent companion to help write, search, and navigate." },
      { title: "Push Notifications", desc: "Never miss a beat. Real-time alerts delivered instantly." },
      { title: "User Profiles", desc: "Show the world who you are with rich profiles." },
      { title: "Multi-Theme UI", desc: "Choose your vibe. 5 distinct themes designed for you." },
      { title: "Cloud Media", desc: "Seamless asset management. Securely accessible everywhere." }
    ],
    ai: {
      badge: "Powered by Intelligence",
      title: ["AI Assist.", "Your New", "Best Friend."],
      desc: "Wesal integration with Gemini AI allows you to craft the perfect messages, summarize long threads, and get instant answers without ever leaving the conversation.",
      cta: "Experience the future"
    },
    cta: "JOIN THE REVOLUTION.",
    footer: {
      copyright: "© 2024 WESAL GLOBAL",
      links: ["Privacy Policy", "Terms of Service", "Contact"]
    }
  },
  ar: {
    dir: "rtl",
    nav: ["الميزات", "الذكاء الاصطناعي", "المجتمع", "تحميل"],
    hero: {
      tags: ["اجتماعي", "ذكاء اصطناعي", "تواصل"],
      cta: "تحميل للأندرويد",
      more: "اكتشف الميزات"
    },
    stats: ["وصال كوناكت", "تواصل جيل جديد", "مدعوم بالذكاء"],
    featuresSection: {
      title: ["كل", "ميزة", "تفرق."],
      description: "لقد صممنا وصال ليكون أكثر من مجرد تطبيق. إنه بيئة متكاملة للتعبير، مبنية بأحدث تقنيات السحاب وذكاء الـ AI."
    },
    features: [
      { title: "خلاصة اجتماعية", desc: "شارك لحظاتك من خلال المنشورات والصور والتفاعلات التعبيرية." },
      { title: "القصص (Stories)", desc: "انغمس في اللحظات العابرة. قصص رأسية مصممة للعصر الحديث." },
      { title: "نظام المتابعة", desc: "ابنِ دائرتك. إشعارات ذكية تبقيك متصلاً بمن تهتم لأمرهم." },
      { title: "دردشة فورية", desc: "رسائل قوية في الوقت الفعلي مع دعم كامل للوسائط المتعددة." },
      { title: "مساعد AI", desc: "رفيق ذكي لمساعدتك في الكتابة والبحث والتنقل في التطبيق." },
      { title: "إشعارات فورية", desc: "لا تفوت أي لحظة. تنبيهات فورية للإعجابات والتعليقات والمنشن." },
      { title: "ملفات المستخدمين", desc: "تخصيص واسع. أظهر للعالم من أنت بملفات تعريف غنية." },
      { title: "واجهات متعددة", desc: "اختر أسلوبك. 5 ثيمات مميزة صممت لتناسب مزاجك تماماً." },
      { title: "ميديا سحابية", desc: "إدارة سلسة للوسائط. صورك وفيديوهاتك مخزنة بأمان في كل مكان." }
    ],
    ai: {
      badge: "مدعوم بالذكاء الاصطناعي",
      title: ["مساعد الـ AI.", "صديقك", "الجديد."],
      desc: "تكامل وصال مع Gemini AI يمنحك القدرة على صياغة الرسائل المثالية، وتلخيص المحادثات الطويلة، والحصول على إجابات فورية دون مغادرة الدردشة.",
      cta: "عِش المستقبل الآن"
    },
    cta: "انضم إلى الثورة.",
    footer: {
      copyright: "© 2024 وصال جلوبال",
      links: ["سياسة الخصوصية", "شروط الخدمة", "تواصل معنا"]
    }
  }
};

interface FeatureProps {
  icon: any;
  title: string;
  description: string;
  index: number;
  key?: any;
}

const FeatureCard = ({ icon: Icon, title, description, index }: FeatureProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative p-8 border border-white/10 bg-black hover:bg-white hover:text-black transition-all duration-500 ease-in-out cursor-default overflow-hidden"
    id={`feature-${index}`}
  >
    <div className="relative z-10">
      <div className="mb-6">
        <Icon size={32} className="group-hover:scale-110 transition-transform duration-500" />
      </div>
      <h3 className="text-xl font-bold mb-3 tracking-tight uppercase font-display">{title}</h3>
      <p className="text-sm opacity-60 group-hover:opacity-100 leading-relaxed font-light">
        {description}
      </p>
    </div>
    {/* Decorative background number */}
    <span className="absolute -bottom-4 -right-2 text-8xl font-black opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
      0{index + 1}
    </span>
  </motion.div>
);

export default function App() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const t = translations[lang];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === "en" ? "ar" : "en");
    document.documentElement.dir = lang === "en" ? "rtl" : "ltr";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className={`min-h-screen bg-black text-white font-sans overflow-x-hidden ${lang === 'ar' ? 'font-display' : ''}`} dir={t.dir}>
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-white/5 blur-[100px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-6">
        <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
             <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6a8e8b6-96b4-4061-9f22-1f4864c01096?placeholderIfAbsent=true" alt="Wesal" className="h-6 invert" />
          </motion.div>

          <div className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-widest uppercase opacity-70">
            {t.nav.map((item, idx) => (
              <a key={idx} href={`#${translations.en.nav[idx].toLowerCase()}`} className="hover:opacity-100 transition-opacity">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white hover:text-black transition-all duration-300 text-[10px] font-bold uppercase tracking-widest"
            >
              {lang === "en" ? "العربية" : "English"}
            </button>
            <button className="md:hidden opacity-70" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col gap-10 text-4xl font-extrabold uppercase">
              {t.nav.map((item, idx) => (
                <a 
                  key={idx} 
                  href={`#${translations.en.nav[idx].toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-white/5 pb-4 last:border-0"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-white/50">
            {t.hero.tags.join(" • ")}
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] uppercase mb-12">
            Wesal.<br/>
            <span className="text-white/20">The Future.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-white/40 max-w-2xl mx-auto mb-16 leading-relaxed">
            {t.featuresSection.description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-12 py-6 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              <Download size={20} /> {t.hero.cta}
            </button>
            <button className="px-12 py-6 glass rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all duration-300">
              {t.hero.more}
            </button>
          </div>
        </motion.div>
      </section>

      {/* Bento Features */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {/* Large Card */}
          <motion.div variants={itemVariants} className="md:col-span-4 lg:col-span-3 glass-hover glass rounded-[2.5rem] p-12 flex flex-col justify-end min-h-[400px]">
             <Sparkles className="mb-8 opacity-20" size={48} />
             <h3 className="text-4xl font-black uppercase mb-4 leading-none">{t.features[4].title}</h3>
             <p className="opacity-40 font-light text-sm max-w-xs">{t.features[4].desc}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-3 glass-hover glass rounded-[2.5rem] p-10 flex flex-col justify-between">
             <div className="flex justify-between items-start">
               <MessageCircle size={32} className="opacity-20" />
               <div className="w-10 h-10 rounded-full bg-white/5"></div>
             </div>
             <div>
               <h3 className="text-2xl font-bold uppercase mb-2">{t.features[3].title}</h3>
               <p className="opacity-40 font-light text-xs">{t.features[3].desc}</p>
             </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 glass-hover glass rounded-[2.5rem] p-10">
             <Layers size={32} className="mb-8 opacity-20" />
             <h3 className="text-2xl font-bold uppercase mb-2">{t.features[7].title}</h3>
             <p className="opacity-40 font-light text-xs">{t.features[7].desc}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 glass-hover glass rounded-[2.5rem] p-10 bg-white text-black">
             <Download size={32} className="mb-8 opacity-50" />
             <h3 className="text-2xl font-black uppercase mb-2">{t.hero.cta}</h3>
             <p className="font-bold opacity-60 text-xs">V.1.0.4 AVAILABLE NOW</p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 glass-hover glass rounded-[2.5rem] p-10">
             <Users size={32} className="mb-8 opacity-20" />
             <h3 className="text-2xl font-bold uppercase mb-2">{t.features[0].title}</h3>
             <p className="opacity-40 font-light text-xs">{t.features[0].desc}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Premium CTA Section */}
      <section id="download" className="py-40 px-6">
        <div className="max-w-5xl mx-auto glass rounded-[3rem] p-16 md:p-32 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-none">
              {t.cta}
            </h2>
            <button className="inline-flex items-center gap-4 px-16 py-8 bg-white text-black text-2xl font-black uppercase tracking-widest rounded-3xl hover:scale-105 transition-all duration-500 shadow-2xl shadow-white/10 group">
               <Download size={32} /> {lang === 'en' ? 'Get for Android' : 'احصل عليه للأندرويد'}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="pb-20 pt-10 px-6">
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
          <div className="flex items-center gap-3">
             <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6a8e8b6-96b4-4061-9f22-1f4864c01096?placeholderIfAbsent=true" alt="Wesal" className="h-4 invert" />
             <span className="text-[10px] font-bold uppercase tracking-widest">{t.footer.copyright}</span>
          </div>
          
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest">
            {t.footer.links.map((link, idx) => (
              <a key={idx} href="#" className="hover:text-white transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
