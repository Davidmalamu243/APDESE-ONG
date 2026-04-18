import React, { useState, useEffect } from "react";
import { 
  Globe, 
  Menu, 
  X, 
  ChevronRight, 
  Shield, 
  HandHeart, 
  TrendingUp, 
  Leaf, 
  Scale, 
  Users, 
  Briefcase, 
  MessageSquare, 
  Sprout, 
  GraduationCap, 
  Stethoscope, 
  Ban, 
  Pickaxe,
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Heart,
  Bird,
  Building,
  Coins,
  Sun,
  Moon
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { translations, Language } from "./translations";

const Logo = () => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className="relative">
      <div className="bg-gradient-logo p-2.5 rounded-2xl shadow-2xl shadow-primary/40 relative z-10 overflow-hidden">
        <Globe className="h-7 w-7 text-white animate-pulse" />
        <motion.div 
          initial={{ x: -20, y: 20, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-1 right-1"
        >
          <Bird className="h-3 w-3 text-secondary fill-secondary" />
        </motion.div>
      </div>
      <div className="absolute -bottom-2 -left-2 bg-secondary p-1 rounded-full shadow-lg z-20 border-2 border-background">
        <HandHeart className="h-3 w-3 text-secondary-foreground" />
      </div>
    </div>
    <div className="flex flex-col">
      <span className="font-black text-2xl tracking-tighter text-gradient-logo leading-none">APDESE</span>
      <span className="text-[8px] uppercase tracking-[0.3em] font-black text-secondary/80 dark:text-secondary/80">NGO • RDC</span>
    </div>
  </div>
);

const Navbar = ({ lang, setLang, theme, toggleTheme }: { 
  lang: Language, 
  setLang: (l: Language) => void,
  theme: 'light' | 'dark',
  toggleTheme: () => void
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].nav;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/40 backdrop-blur-2xl border-b border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Logo />
          
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              <a href="#accueil" className="text-sm font-black uppercase tracking-widest hover:text-secondary transition-colors">{t.home}</a>
              <a href="#a-propos" className="text-sm font-black uppercase tracking-widest hover:text-secondary transition-colors">{t.about}</a>
              <a href="#mission" className="text-sm font-black uppercase tracking-widest hover:text-secondary transition-colors">{t.mission}</a>
              <a href="#domaines" className="text-sm font-black uppercase tracking-widest hover:text-secondary transition-colors">{t.domains}</a>
              <a href="#ressources" className="text-sm font-black uppercase tracking-widest hover:text-secondary transition-colors">{translations[lang].resources.title}</a>
              <a href="#actualites" className="text-sm font-black uppercase tracking-widest hover:text-secondary transition-colors">{t.news}</a>
              <a href="#organisation" className="text-sm font-black uppercase tracking-widest hover:text-secondary transition-colors">{t.org}</a>
            </div>
            
            <div className="h-8 w-px bg-white/10 mx-2" />
            
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className="p-3 glass-card rounded-2xl hover:bg-white/10 transition-all duration-500 text-primary"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <div className="flex items-center gap-1 bg-white/5 p-1 rounded-2xl border border-white/10">
                {(['fr', 'en', 'sw'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all duration-300 ${
                      lang === l ? 'bg-gradient-gold text-secondary-foreground shadow-xl scale-105' : 'hover:bg-white/5 text-muted-foreground'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <Button size="lg" className="bg-gradient-gold text-secondary-foreground font-black border-none hover:scale-105 transition-transform shadow-2xl shadow-secondary/20 rounded-2xl px-8">
                {t.donate}
              </Button>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 glass-card rounded-xl text-primary"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
             <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
              {(['fr', 'en', 'sw'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 rounded-lg text-[8px] font-black uppercase transition-all ${
                    lang === l ? 'bg-gradient-gold text-secondary-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="p-3 text-primary glass-card rounded-xl">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-background/95 backdrop-blur-3xl border-b border-white/5 px-8 py-12 flex flex-col gap-8 shadow-2xl"
          >
            <a href="#accueil" onClick={() => setIsOpen(false)} className="text-2xl font-black text-foreground">{t.home}</a>
            <a href="#a-propos" onClick={() => setIsOpen(false)} className="text-2xl font-black text-foreground">{t.about}</a>
            <a href="#mission" onClick={() => setIsOpen(false)} className="text-2xl font-black text-foreground">{t.mission}</a>
            <a href="#domaines" onClick={() => setIsOpen(false)} className="text-2xl font-black text-foreground">{t.domains}</a>
            <a href="#ressources" onClick={() => setIsOpen(false)} className="text-2xl font-black text-foreground">{translations[lang].resources.title}</a>
            <a href="#actualites" onClick={() => setIsOpen(false)} className="text-2xl font-black text-foreground">{t.news}</a>
            <a href="#organisation" onClick={() => setIsOpen(false)} className="text-2xl font-black text-foreground">{t.org}</a>
            <Button className="w-full bg-gradient-gold text-secondary-foreground font-black py-8 text-xl rounded-2xl">
              {t.donate}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang].hero;
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070&auto=format&fit=crop" 
          alt="African Community" 
          className="w-full h-full object-cover opacity-30 grayscale-[0.5]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge variant="outline" className="mb-6 px-6 py-1.5 border-secondary/30 text-secondary bg-secondary/10 font-bold uppercase tracking-[0.5em] text-[9px] rounded-full shadow-2xl shadow-secondary/10">
            {t.badge}
          </Badge>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 text-balance leading-[1.1] uppercase">
            {t.title1} <span className="text-gradient-logo">{t.title2}</span> <br className="hidden md:block" /> 
            <span className="text-foreground/20 dark:text-white/40">{t.title3}</span> <span className="text-secondary">{t.title4}</span> {t.title5}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-balance font-medium leading-relaxed opacity-80">
            {t.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button size="lg" className="bg-gradient-logo text-white font-bold px-10 py-6 rounded-xl shadow-2xl shadow-primary/40 hover:scale-105 transition-all gap-2 text-lg">
              {t.cta1} <ChevronRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border bg-card/50 text-foreground font-bold px-10 py-6 rounded-xl hover:bg-accent transition-all text-lg backdrop-blur-xl">
              {t.cta2}
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12">
            {[
              { label: t.stats.since, value: "2019" },
              { label: t.stats.provinces, value: "2" },
              { label: t.stats.domains, value: "9+" },
              { label: t.stats.engaged, value: "100%" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="group"
              >
                <div className="text-3xl md:text-4xl font-black text-foreground dark:text-white group-hover:text-secondary transition-all duration-500">{stat.value}</div>
                <div className="text-[8px] font-bold uppercase tracking-[0.5em] text-muted-foreground mt-3 group-hover:text-foreground dark:group-hover:text-white transition-colors">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = ({ lang }: { lang: Language }) => {
  const t = translations[lang].about;
  return (
    <section id="a-propos" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-secondary/10 rounded-full mb-6 border border-secondary/20">
              <Shield className="h-4 w-4 text-secondary" />
              <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-secondary">{t.badge}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter leading-[1.1] uppercase">{t.badge}</h2>
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
              <p className="opacity-90">{t.p1}</p>
              <p className="opacity-90">{t.p2}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="p-6 glass-card rounded-2xl group hover:border-secondary/40 transition-all duration-500 shadow-xl">
                <MapPin className="h-8 w-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-foreground dark:text-white uppercase tracking-[0.4em] text-[8px] mb-1.5">{t.hq}</h4>
                <p className="text-muted-foreground font-bold text-base">Bukavu, Ibanda, Av. Kalehe No. 3, Sud-Kivu, RDC</p>
              </div>
              <div className="p-6 glass-card rounded-2xl group hover:border-secondary/40 transition-all duration-500 shadow-xl">
                <Calendar className="h-8 w-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-foreground dark:text-white uppercase tracking-[0.4em] text-[8px] mb-1.5">{t.founded}</h4>
                <p className="text-muted-foreground font-bold text-base">Février 2019</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-gradient-logo rounded-[3rem] blur-[80px] opacity-20 animate-pulse" />
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/5 group">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
                alt="Women in Community" 
                className="object-cover w-full h-full grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-gold p-6 rounded-2xl shadow-2xl hidden xl:block border-4 border-background animate-bounce-slow">
              <div className="text-secondary-foreground font-black text-center">
                <div className="text-3xl mb-0.5">5+</div>
                <div className="text-[8px] uppercase tracking-[0.5em] font-bold">{t.impact}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MissionVision = ({ lang }: { lang: Language }) => {
  const t = translations[lang].mission;
  return (
    <section id="mission" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2070&auto=format&fit=crop" 
          alt="Nature" 
          className="w-full h-full object-cover opacity-10 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase">{t.title}</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed opacity-80 text-balance">
          {t.subtitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Tabs defaultValue="mission" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 p-1 bg-muted/50 dark:bg-white/5 rounded-2xl border border-border dark:border-white/10 backdrop-blur-3xl shadow-2xl">
            <TabsTrigger value="mission" className="rounded-xl py-3 font-bold text-base data-[state=active]:bg-gradient-logo data-[state=active]:text-white transition-all duration-500 shadow-xl uppercase tracking-widest">{t.tabs.mission}</TabsTrigger>
            <TabsTrigger value="vision" className="rounded-xl py-3 font-bold text-base data-[state=active]:bg-gradient-gold data-[state=active]:text-secondary-foreground transition-all duration-500 shadow-xl uppercase tracking-widest">{t.tabs.vision}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mission">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { ...t.items.m1, icon: HandHeart },
                { ...t.items.m2, icon: TrendingUp },
                { ...t.items.m3, icon: Leaf }
              ].map((item, i) => (
                <Card key={i} className="glass-card border-none rounded-2xl hover:scale-105 transition-all duration-700 group shadow-2xl">
                  <CardHeader className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-logo transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-primary/40 group-hover:rotate-6">
                      <item.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-black text-foreground dark:text-white mb-3 tracking-tight uppercase">{item.t}</CardTitle>
                    <p className="text-muted-foreground text-base font-medium leading-relaxed opacity-80">{item.d}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="vision">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { ...t.items.v1, icon: Shield },
                { ...t.items.v2, icon: Scale },
                { ...t.items.v3, icon: Globe },
                { ...t.items.v4, icon: Users }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-8 glass-card rounded-2xl group hover:border-secondary/40 transition-all duration-700 shadow-2xl">
                  <div className="flex-shrink-0 w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-gradient-gold transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-secondary/40 group-hover:-rotate-6">
                    <item.icon className="h-8 w-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-3 text-foreground dark:text-white tracking-tight uppercase">{item.t}</h4>
                    <p className="text-muted-foreground font-medium text-base leading-relaxed opacity-80">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const Domains = ({ lang }: { lang: Language }) => {
  const t = translations[lang].domains;
  const icons = [Shield, HandHeart, Briefcase, MessageSquare, Sprout, Leaf, GraduationCap, Stethoscope, Pickaxe];
  const images = [
    "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop"
  ];
  
  return (
    <section id="domaines" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-none font-bold px-5 py-1.5 mb-6 uppercase tracking-[0.5em] text-[8px] rounded-full shadow-xl shadow-primary/10">{t.badge}</Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase">{t.title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium opacity-80 leading-relaxed text-balance">{t.subtitle}</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((domain, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -15px rgba(var(--primary), 0.3)"
                }}
                className="glass-card rounded-2xl group relative overflow-hidden transition-all duration-500 shadow-2xl flex flex-col h-full border border-white/5 hover:border-primary/30"
              >
                <div className="h-40 relative overflow-hidden">
                  <img 
                    src={images[i]} 
                    alt={domain.t} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:bg-gradient-logo transition-all duration-700 border border-white/10 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center lg:hidden group-hover:flex transition-all">
                       <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="font-black text-xl text-foreground dark:text-white tracking-tight group-hover:text-secondary transition-all uppercase leading-tight">{domain.t}</h4>
                  </div>
                  <p className="text-muted-foreground font-medium text-sm md:text-base leading-relaxed opacity-80">{domain.d}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Resources = ({ lang }: { lang: Language }) => {
  const t = translations[lang].resources;
  const resourceItems = [
    { ...t.human, icon: Users, color: "bg-blue-500/10 text-blue-500" },
    { ...t.material, icon: Building, color: "bg-amber-500/10 text-amber-500" },
    { ...t.financial, icon: Coins, color: "bg-emerald-500/10 text-emerald-500" }
  ];

  return (
    <section id="ressources" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase">{t.title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium opacity-80 leading-relaxed text-balance">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resourceItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 glass-card rounded-2xl group hover:border-white/20 transition-all duration-700 shadow-2xl"
            >
              <div className={`w-16 h-16 ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-700`}>
                <item.icon className="h-8 w-8" />
              </div>
              <h4 className="font-black text-xl mb-3 text-foreground dark:text-white tracking-tight uppercase">{item.t}</h4>
              <p className="text-muted-foreground font-medium text-base leading-relaxed opacity-80">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const News = ({ lang }: { lang: Language }) => {
  const t = translations[lang].news;
  const [filter, setFilter] = useState('all');
  
  const filteredItems = filter === 'all' 
    ? t.items 
    : t.items.filter(item => {
        if (filter === 'project') return item.cat === translations[lang].news.categories.project;
        if (filter === 'success') return item.cat === translations[lang].news.categories.success;
        if (filter === 'announcement') return item.cat === translations[lang].news.categories.announcement;
        return true;
      });

  return (
    <section id="actualites" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-none font-bold px-5 py-1.5 mb-6 uppercase tracking-[0.5em] text-[8px] rounded-full shadow-xl shadow-primary/10">{t.badge}</Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase">{t.title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium opacity-80 leading-relaxed text-balance">{t.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(t.categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                filter === key 
                  ? 'bg-gradient-logo text-white border-transparent shadow-xl scale-105' 
                  : 'bg-white/5 text-muted-foreground border-white/10 hover:bg-white/10'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.t}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-3xl overflow-hidden group hover:border-primary/30 transition-all duration-500 shadow-2xl flex flex-col h-full"
              >
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.t} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/80 backdrop-blur-md text-foreground border-none font-bold px-3 py-1 uppercase text-[8px] tracking-widest rounded-lg">
                      {item.cat}
                    </Badge>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </div>
                  <h4 className="text-xl font-black text-foreground dark:text-white mb-4 tracking-tight uppercase leading-tight group-hover:text-primary transition-colors">
                    {item.t}
                  </h4>
                  <p className="text-muted-foreground font-medium text-base leading-relaxed opacity-80 mb-8 line-clamp-3">
                    {item.d}
                  </p>
                  <div className="mt-auto">
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-secondary transition-colors group/btn">
                      {t.readMore} <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Organization = ({ lang }: { lang: Language }) => {
  const t = translations[lang].org;
  return (
    <section id="organisation" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter leading-[1.1] uppercase">{t.title}</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 font-medium leading-relaxed opacity-80">
              {t.desc}
            </p>
            
            <div className="grid gap-4">
              {t.items.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-white/10 transition-all duration-500 group shadow-xl">
                  <div className="bg-gradient-gold p-1 rounded-full shadow-lg group-hover:rotate-[360deg] transition-transform duration-1000">
                    <CheckCircle2 className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span className="font-bold text-lg text-foreground/90 dark:text-white/90 group-hover:text-foreground dark:group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="bg-gradient-logo p-1 rounded-3xl shadow-2xl shadow-primary/20">
            <div className="bg-background/80 rounded-[1.4rem] p-8 backdrop-blur-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-border dark:border-white/5 py-3">
                  <AccordionTrigger className="text-lg font-black text-foreground dark:text-white hover:no-underline hover:text-secondary transition-colors tracking-tight uppercase">{t.accordion.t1}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-medium text-base leading-relaxed pt-4 opacity-80">
                    {t.accordion.d1}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-border dark:border-white/5 py-3">
                  <AccordionTrigger className="text-lg font-black text-foreground dark:text-white hover:no-underline hover:text-secondary transition-colors tracking-tight uppercase">{t.accordion.t2}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-medium text-base leading-relaxed pt-4 opacity-80">
                    {t.accordion.d2}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-none py-3">
                  <AccordionTrigger className="text-lg font-black text-foreground dark:text-white hover:no-underline hover:text-secondary transition-colors tracking-tight uppercase">{t.accordion.t3}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-medium text-base leading-relaxed pt-4 opacity-80">
                    {t.accordion.d3}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Partners = ({ lang }: { lang: Language }) => {
  const t = translations[lang].partners;
  return (
    <section className="py-24 bg-white/5 backdrop-blur-3xl border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-16 tracking-[0.6em] uppercase text-secondary/40">{t.title}</h2>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-1000">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-4 group cursor-pointer hover:scale-110 transition-transform">
              <div className="w-14 h-14 glass-card rounded-full flex items-center justify-center group-hover:bg-gradient-gold transition-all duration-500">
                <Globe className="h-7 w-7 text-foreground dark:text-white group-hover:text-secondary-foreground" />
              </div>
              <span className="font-black text-xl tracking-tighter text-foreground dark:text-white group-hover:text-secondary transition-colors">PARTNER {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang].footer;
  return (
    <footer className="bg-background border-t border-white/5 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -ml-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Logo />
            <p className="text-muted-foreground max-w-md text-base font-medium leading-relaxed opacity-80 mt-8">
              {t.desc}
            </p>
            <div className="flex gap-4 mt-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 glass-card rounded-lg flex items-center justify-center hover:bg-gradient-gold transition-all duration-500 cursor-pointer group shadow-xl">
                  <div className="w-5 h-5 bg-foreground/20 dark:bg-white/20 rounded-md group-hover:bg-secondary-foreground/20 transition-colors" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[9px] uppercase tracking-[0.6em] mb-8 text-secondary">{t.nav}</h4>
            <ul className="space-y-4 text-base font-bold">
              <li><a href="#accueil" className="text-muted-foreground hover:text-white transition-colors">{translations[lang].nav.home}</a></li>
              <li><a href="#a-propos" className="text-muted-foreground hover:text-white transition-colors">{translations[lang].nav.about}</a></li>
              <li><a href="#mission" className="text-muted-foreground hover:text-white transition-colors">{translations[lang].nav.mission}</a></li>
              <li><a href="#domaines" className="text-muted-foreground hover:text-white transition-colors">{translations[lang].nav.domains}</a></li>
              <li><a href="#ressources" className="text-muted-foreground hover:text-white transition-colors">{translations[lang].resources.title}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[9px] uppercase tracking-[0.6em] mb-8 text-secondary">{t.contact}</h4>
            <ul className="space-y-6 text-base font-bold text-muted-foreground">
              <li className="flex gap-4 items-start group">
                <MapPin className="h-5 w-5 text-secondary shrink-0 group-hover:scale-110 transition-transform duration-500" />
                <div className="flex flex-col gap-2">
                  <span className="group-hover:text-white transition-colors">Bukavu: Commune d’Ibanda, Avenue Kalehe no 3, Sud-Kivu, RD Congo.</span>
                  <span className="group-hover:text-white transition-colors">Goma: Himbi, Avenue du 30 Juin, Nord-Kivu, RD Congo.</span>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <Heart className="h-5 w-5 text-secondary shrink-0 group-hover:scale-110 transition-transform duration-500" />
                <span className="group-hover:text-white transition-colors">apdeseorg@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 text-center text-muted-foreground/20 font-bold text-[9px] uppercase tracking-[0.4em]">
          <p>&copy; {new Date().getFullYear()} APDESE NGO. {t.rights} <span className="text-secondary/20 ml-4">{t.motto}</span></p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang && ['fr', 'en', 'sw'].includes(savedLang)) {
      setLang(savedLang);
    }
    
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleSetLang = (l: Language) => {
    setLang(l);
    localStorage.setItem('lang', l);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen font-sans selection:bg-secondary selection:text-secondary-foreground antialiased overflow-x-hidden transition-colors duration-500">
      <Navbar lang={lang} setLang={handleSetLang} theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <MissionVision lang={lang} />
        <Domains lang={lang} />
        <Resources lang={lang} />
        <News lang={lang} />
        <Organization lang={lang} />
        <Partners lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
