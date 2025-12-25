import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import History from './pages/History';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Donations from './pages/Donations';
import { useLanguage } from './contexts/LanguageContext';
import { 
  Globe, 
  Menu, 
  X, 
  Heart, 
  Users, 
  Award, 
  PlayCircle, 
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Quote,
  BookOpen,
  Apple,
  Stethoscope,
  Shirt,
  Linkedin,
  TrendingUp,
  DollarSign,
  Calendar,
  MapPin,
  ChevronDown,
  Check
} from 'lucide-react';

const LOGO_URL = "https://i0.wp.com/www.alegriainocente.org/wp-content/uploads/2023/01/Alegria-inocente-logo-scaled.jpg?w=2560&ssl=1";
const YOUTUBE_VIDEO_ID = "gvVQJIwdfKI";
const MISSION_IMG_URL = "https://i0.wp.com/www.alegriainocente.org/wp-content/uploads/2023/01/IMG_1143-scaled.jpg?w=1920&ssl=1";

const PROFILE_BERNARDO = "src/img/Bernardo.png";
const PROFILE_AWILDA = "src/img/Bernardo.png";
const PROFILE_JUAN = "src/img/juan.jpg";

const translations = {
  es: {
    nav: ['Inicio', 'Historia', 'Enfoque', 'Impacto', 'Equipo', 'Haz la Diferencia'],
    heroTag: 'Extendiendo una mano a quien más lo necesita',
    heroTitle: 'Sembrando Alegría, Cosechando Futuro',
    heroSub: 'La Fundación Alegría Inocente se dedica a transformar comunidades vulnerables a través del amor, la educación y el apoyo sostenible.',
    mission: 'Propósito y Visión',
    missionTitle: 'Por qué hacemos lo que hacemos',
    missionText: 'Nuestra fundación nació de un sueño simple: que cada niño merece reír, aprender y crecer sin el peso de la pobreza. Construimos puentes entre recursos y necesidades.',
    constanzaTitle: 'Compromiso con las Comunidades Rurales',
    constanzaSub: 'Nuestro esfuerzo principal se concentra en llegar a las zonas más remotas y rurales del municipio de Constanza, llevando alivio directo donde otros no llegan.',
    achievementsTitle: 'Impacto Real en Números',
    achievementsSubtitle: 'Cada cifra representa una vida tocada, una familia apoyada y un futuro transformado en nuestras comunidades.',
    achievementLabels: {
      projects: 'Proyectos Realizados',
      donations: 'Donaciones Recibidas',
      volunteers: 'Voluntarios Activos',
      funds: 'Fondos Recaudados',
      disclaimer: '*Cifras expresadas en Pesos Dominicanos (RD$)'
    },
    focusAreas: [
      {
        title: 'Ropa y Calzado',
        desc: 'Una de nuestras mayores prioridades: proveemos vestimenta digna y calzado adecuado para proteger a los niños y familias del clima de montaña.',
        icon: Shirt,
        color: 'bg-purple-50 text-purple-600 border-purple-100'
      },
      {
        title: 'Útiles Escolares',
        desc: 'Equipamos a los estudiantes de escuelas rurales con mochilas y útiles para que la distancia no sea un obstáculo para sus sueños.',
        icon: BookOpen,
        color: 'bg-blue-50 text-blue-600 border-blue-100'
      },
      {
        title: 'Alimentos Básicos',
        desc: 'Entregamos raciones de alimentos esenciales a familias en parajes aislados, asegurando su nutrición básica.',
        icon: Apple,
        color: 'bg-[#009640]/5 text-[#009640] border-[#009640]/10'
      },
      {
        title: 'Equipo Médico',
        desc: 'Facilitamos insumos médicos y equipos de movilidad para personas con discapacidad en zonas de difícil acceso.',
        icon: Stethoscope,
        color: 'bg-[#e4002b]/5 text-[#e4002b] border-[#e4002b]/10'
      }
    ],
    team: 'Liderazgo Visionario',
    teamSubtitle: 'Conoce a las personas dedicadas que impulsan nuestra misión global.',
    videoTitle: 'Testigo del Cambio',
    donateBtn: 'Haz la Diferencia',
    learnMore: 'Nuestra Historia',
    stats: [
      { label: 'Comidas Servidas', value: '25k+' },
      { label: 'Niños Educados', value: '1.2k' },
      { label: 'Voluntarios Activos', value: '450' }
    ],
    roles: {
      bernardo: 'Presidente y Fundador',
      awilda: 'Vice presidenta',
      juan: 'Representante Internacional'
    },
    history: {
      tag: 'Nuestra Historia',
      title: 'Comprometidos en Ayudar Nuestras Comunidades',
      subtitle: 'Un viaje de amor, dedicación y transformación',
      sections: [
        {
          year: '2011',
          title: 'El Inicio',
          description: 'La Fundación Alegría Inocente surge en el municipio de Constanza, Provincia La Vega. La idea nace mientras un grupo de jóvenes del referido municipio se encontraban de excursión en la retirada comunidad "Los Limoncitos", donde se percataron de que los niños no habían iniciado el año escolar por falta de útiles escolares.'
        },
        {
          year: '2011',
          title: 'Primera Acción',
          description: 'Luego de ver las carencias de esa localidad, los jóvenes Bernardo Patiño y Anthony Quezada deciden regresar con útiles escolares para que los niños empezaran a recibir el pan de la enseñanza.'
        },
        {
          year: '2011-2013',
          title: 'Crecimiento y Expansión',
          description: 'Las redes sociales fueron de gran ayuda para el inicio de la fundación, despertando el interés de otros jóvenes que se involucraron y comenzaron a hacer aportaciones para continuar año tras año con el hermoso gesto de desprendimiento en diferentes comunidades.'
        },
        {
          year: '2011',
          title: 'El Nombre',
          description: 'Marleny Duran se convirtió en la principal patrocinadora de la fundación, quien hasta la fecha continúa enviando aportes económicos desde EE.UU. Resaltando que la joven es quien da el nombre de FUNDACIÓN ALEGRÍA INOCENTE.'
        },
        {
          year: '2013',
          title: 'Expansión Internacional',
          description: 'Juan Angustia se une a la idea para fortalecer el desarrollo de la fundación y llevándola más allá de Constanza, convirtiéndose en miembro y representante internacional. Ha logrado obtener importantes aportes para beneficio de nuestros munícipes.'
        },
        {
          year: '2014',
          title: 'Nueva Etapa',
          description: 'Los primeros jóvenes toman caminos distintos, quedando a cargo de seguir llevando aportes Bernardo Pastiño, quien se une a otros colaboradores. El programa de ayudas sociales hasta la fecha ha ido creciendo.'
        }
      ],
      current: {
        title: 'Hoy en Día',
        description: 'Actualmente, Juan Angustia no solo se enfoca en captar aportes internacionales, sino que a su vez se encarga de diseñar y organizar nuestra imagen, dando vida a la fundación. Continuamos comprometidos con nuestra misión de llevar alegría y esperanza a las comunidades más vulnerables.'
      }
    },
    footer: '© 2026 Fundación Alegría Inocente. Todos los derechos reservados.',
    madeWith: 'Hecho con'
  },
  en: {
    nav: ['Home', 'History', 'Focus', 'Impact', 'Team', 'Be the Difference'],
    heroTag: 'Lending a hand to those in need',
    heroTitle: 'Spreading Joy, One Child at a Time',
    heroSub: 'The Alegría Inocente Foundation is dedicated to transforming vulnerable communities through love, education, and sustainable support.',
    mission: 'Purpose & Vision',
    missionTitle: 'Why we do what we do',
    missionText: 'Our foundation was born from a simple dream: that every child deserves to laugh, learn, and grow without the weight of poverty. Without boundaries.',
    constanzaTitle: 'Commitment to Rural Communities',
    constanzaSub: 'Our main effort is focused on reaching the most remote and rural areas of Constanza, bringing direct relief where others don\'t reach.',
    achievementsTitle: 'Real Impact in Numbers',
    achievementsSubtitle: 'Each figure represents a life touched, a family supported, and a future transformed in our communities.',
    achievementLabels: {
      projects: 'Projects Completed',
      donations: 'Donations Received',
      volunteers: 'Active Volunteers',
      funds: 'Funds Raised',
      disclaimer: '*Figures expressed in Dominican Pesos (RD$)'
    },
    focusAreas: [
      {
        title: 'Clothing & Footwear',
        desc: 'One of our highest priorities: providing dignified clothing and proper footwear to protect children from the mountain climate.',
        icon: Shirt,
        color: 'bg-purple-50 text-purple-600 border-purple-100'
      },
      {
        title: 'School Supplies',
        desc: 'We equip students in rural schools with backpacks and supplies so that distance is not an obstacle to their dreams.',
        icon: BookOpen,
        color: 'bg-blue-50 text-blue-600 border-blue-100'
      },
      {
        title: 'Basic Food',
        desc: 'We deliver essential food rations to families in isolated hamlets, ensuring their basic navigation.',
        icon: Apple,
        color: 'bg-[#009640]/5 text-[#009640] border-[#009640]/10'
      },
      {
        title: 'Medical Equipment',
        desc: 'We facilitate medical supplies and mobility equipment for people with disabilities in hard-to-reach areas.',
        icon: Stethoscope,
        color: 'bg-[#e4002b]/5 text-[#e4002b] border-[#e4002b]/10'
      }
    ],
    team: 'Visionary Leadership',
    teamSubtitle: 'Meet the dedicated individuals driving our global mission.',
    videoTitle: 'Witness the Change',
    donateBtn: 'Be the Difference',
    learnMore: 'Our Story',
    stats: [
      { label: 'Meals Served', value: '25k+' },
      { label: 'Children Educated', value: '1.2k' },
      { label: 'Active Volunteers', value: '450' }
    ],
    roles: {
      bernardo: 'President & Founder',
      awilda: 'Vice President',
      juan: 'International Representative'
    },
    history: {
      tag: 'Our History',
      title: 'Committed to Helping Our Communities',
      subtitle: 'A journey of love, dedication, and transformation',
      sections: [
        {
          year: '2011',
          title: 'The Beginning',
          description: 'The Alegría Inocente Foundation emerged in the municipality of Constanza, La Vega Province. The idea was born when a group of young people from the municipality were on an excursion to the remote community "Los Limoncitos", where they noticed that children had not started the school year due to lack of school supplies.'
        },
        {
          year: '2011',
          title: 'First Action',
          description: 'After seeing the needs of that locality, young people Bernardo Patiño and Anthony Quezada decided to return with school supplies so that children could begin to receive the bread of education.'
        },
        {
          year: '2011-2013',
          title: 'Growth and Expansion',
          description: 'Social media was of great help for the foundation\'s start, awakening the interest of other young people who got involved and began making contributions to continue year after year with the beautiful gesture of selflessness in different communities.'
        },
        {
          year: '2011',
          title: 'The Name',
          description: 'Marleny Duran became the foundation\'s main sponsor, who to this day continues to send economic contributions from the U.S. It should be noted that this young woman is the one who gave the name FUNDACIÓN ALEGRÍA INOCENTE.'
        },
        {
          year: '2013',
          title: 'International Expansion',
          description: 'Juan Angustia joined the idea to strengthen the foundation\'s development and take it beyond Constanza, becoming a member and international representative. He has managed to obtain important contributions for the benefit of our citizens.'
        },
        {
          year: '2014',
          title: 'New Stage',
          description: 'The first young people took different paths, leaving Bernardo Pastiño in charge of continuing to bring contributions, who joined other collaborators. The social assistance program has continued to grow to this day.'
        }
      ],
      current: {
        title: 'Today',
        description: 'Currently, Juan Angustia not only focuses on capturing international contributions, but also designs and organizes our image, giving life to the foundation. We continue committed to our mission of bringing joy and hope to the most vulnerable communities.'
      }
    },
    footer: '© 2026 Alegría Inocente Foundation. All rights reserved.',
    madeWith: 'Made with'
  }
};

// Helper function to format numbers (abbreviate after 999)
const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
};

const SectionHeading = ({ tag, title, dark = false, centered = false, color = '#e4002b' }) => {
  // Colores de la marca: Azul, Amarillo, Rojo, Verde
  const colorClasses = {
    '#0066cc': 'bg-[#0066cc]/10 text-[#0066cc]', // Azul
    '#f39200': 'bg-[#f39200]/10 text-[#f39200]', // Amarillo
    '#e4002b': 'bg-[#e4002b]/10 text-[#e4002b]', // Rojo
    '#009640': 'bg-[#009640]/10 text-[#009640]'  // Verde
  };
  
  const badgeClass = dark 
    ? 'bg-white/10 text-white' 
    : colorClasses[color] || colorClasses['#e4002b'];
  
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${badgeClass}`}
      >
        {tag}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className={`text-4xl md:text-5xl font-black ${dark ? 'text-white' : 'text-slate-900'} leading-tight ${centered ? 'max-w-4xl mx-auto' : ''}`}
      >
        {title}
      </motion.h2>
    </div>
  );
};

const AchievementCard = ({ rawValue, label, icon: Icon, colorClass, delay, isCurrency = false }) => {
  const formattedValue = formatNumber(rawValue);
  const displayValue = isCurrency ? `$${formattedValue}` : `${formattedValue}+`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center p-8 md:p-10 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group h-full"
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${colorClass}`}>
        <Icon size={28} />
      </div>
      <span className="text-5xl md:text-6xl font-black text-slate-900 mb-3 tracking-tighter">
        {displayValue}
      </span>
      <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#009640] transition-colors leading-relaxed px-2">
        {label}
      </span>
    </motion.div>
  );
};

const TeamCard = ({ name, role, image, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="group relative bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden text-center"
  >
    <div className="pt-12 pb-10 px-8 flex flex-col items-center">
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
          />
        </div>
        <div className="absolute -inset-2 bg-gradient-to-tr from-[#e4002b]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <h3 className="text-2xl font-black text-slate-900 mb-1">{name}</h3>
      <p className="text-[#009640] font-bold text-[10px] uppercase tracking-widest mb-8">{role}</p>
      
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all cursor-pointer">
          <Linkedin size={16} />
        </div>
        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#e4002b] hover:text-white transition-all cursor-pointer">
          <Instagram size={16} />
        </div>
        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all cursor-pointer">
          <Mail size={16} />
        </div>
      </div>
    </div>
  </motion.div>
);

const Navbar = ({ lang, setLang, content }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownOpen && !event.target.closest('.lang-dropdown-container')) {
        setLangDropdownOpen(false);
      }
    };
    if (langDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [langDropdownOpen]);

  // Función para normalizar texto y eliminar acentos
  const normalizeText = (text) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  };

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const normalizedId = normalizeText(targetId);
      
      // Mapeo de nombres del menú a IDs de secciones
      const idMap = {
        'inicio': 'inicio',
        'home': 'inicio', // Home apunta a Inicio
        'historia': 'mision', // Historia apunta a Propósito y Visión
        'history': 'mision',
        'mision': 'mision', // Misión apunta a Propósito y Visión
        'mission': 'mision',
        'enfoque': 'enfoque', // Enfoque apunta a Presencia Local
        'focus': 'enfoque',
        'impacto': 'impacto-numeros', // Impacto apunta a Impacto Real
        'impact': 'impacto-numeros',
        'equipo': 'equipo',
        'team': 'equipo',
        'donar': 'donar',
        'donate': 'donar',
        'haz la diferencia': 'donar',
        'be the difference': 'donar'
      };
      
      const actualId = idMap[normalizedId] || normalizedId;
      const targetElement = document.getElementById(actualId);
      
      if (targetElement) {
        const offset = 100; // Offset para el navbar fijo
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.log('Element not found:', actualId, 'normalizedId:', normalizedId, 'targetId:', targetId);
      }
    }
  };

  return (
    <nav className="fixed w-full z-40 pt-6 px-4 pointer-events-none">
      <motion.div 
        className={`container mx-auto max-w-7xl rounded-full flex justify-between items-center px-8 transition-all duration-500 pointer-events-auto border border-white/20 shadow-lg ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md py-3' 
            : 'bg-white py-4'
        }`}
        animate={{
          y: scrolled ? 0 : 4,
          scale: scrolled ? 0.98 : 1
        }}
      >
        <div className="flex items-center">
          <img 
            src={LOGO_URL} 
            alt="Logo" 
            className={`transition-all duration-500 ${scrolled ? 'h-8' : 'h-12'} object-contain`} 
          />
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {content.nav.map((item) => {
            const isHistory = item.toLowerCase() === 'historia' || item.toLowerCase() === 'history';
            const isDonate = item.toLowerCase().includes('diferencia') || item.toLowerCase().includes('difference');
            // Historia ahora apunta a la sección de Propósito y Visión (#mision)
            const itemHref = isHistory ? '#mision' : isDonate ? '#donar' : `#${item.toLowerCase()}`;
            
            // Skip the donate item here, we'll render it separately after the language toggle
            if (isDonate) {
              return null;
            }
            
            return (
              <a
                key={item}
                href={itemHref}
                onClick={(e) => handleSmoothScroll(e, itemHref)}
                className="text-slate-900 text-[13px] font-extrabold uppercase tracking-widest hover:text-[#009640] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#009640] transition-all duration-300 group-hover:w-full" />
              </a>
            );
          })}
          <div className="h-4 w-[1px] bg-slate-200 mx-1" />
          <div className="relative lang-dropdown-container">
            <button 
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium uppercase hover:bg-slate-200 transition-all active:scale-95"
            >
              <span className="text-base">{lang === 'es' ? '🇩🇴' : '🇺🇸'}</span>
              {lang === 'es' ? 'ES' : 'EN'}
              <ChevronDown size={12} className={`transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50 min-w-[140px] backdrop-blur-sm"
                >
                  <button
                    onClick={() => {
                      setLang('es');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-3 text-left text-[11px] font-medium uppercase transition-all ${
                      lang === 'es' 
                        ? 'bg-[#009640]/5 text-slate-900 border-l-2 border-[#009640]' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">🇩🇴</span>
                      <span>Español</span>
                    </div>
                    {lang === 'es' && (
                      <Check size={14} className="text-[#009640]" strokeWidth={3} />
                    )}
                  </button>
                  <div className="h-[1px] bg-slate-100" />
                  <button
                    onClick={() => {
                      setLang('en');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-3 text-left text-[11px] font-medium uppercase transition-all ${
                      lang === 'en' 
                        ? 'bg-[#009640]/5 text-slate-900 border-l-2 border-[#009640]' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">🇺🇸</span>
                      <span>English</span>
                    </div>
                    {lang === 'en' && (
                      <Check size={14} className="text-[#009640]" strokeWidth={3} />
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {content.nav.map((item) => {
            const isDonate = item.toLowerCase().includes('diferencia') || item.toLowerCase().includes('difference');
            if (!isDonate) return null;
            
            const itemHref = '#donar';
            return (
              <a
                key={item}
                href={itemHref}
                onClick={(e) => handleSmoothScroll(e, itemHref)}
                className="bg-[#009640] text-white px-6 py-3 rounded-full text-[12px] font-black uppercase tracking-widest hover:bg-[#009640]/90 transition-all shadow-xl active:scale-95"
              >
                {item}
              </a>
            );
          })}
        </div>

        <button 
          onClick={() => setMobileOpen(!mobileOpen)} 
          className="lg:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-full transition-colors"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 top-0 bg-white z-[60] flex flex-col p-8 lg:hidden h-screen pointer-events-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <img src={LOGO_URL} className="h-10" alt="Logo" />
              <button onClick={() => setMobileOpen(false)} className="p-3 bg-slate-100 rounded-full"><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-6">
              {content.nav.map((item) => {
                const isHistory = item.toLowerCase() === 'historia' || item.toLowerCase() === 'history';
                const isDonate = item.toLowerCase().includes('diferencia') || item.toLowerCase().includes('difference');
                // Historia ahora apunta a la sección de Propósito y Visión (#mision)
                const itemHref = isHistory ? '#mision' : isDonate ? '#donar' : `#${item.toLowerCase()}`;
                
                return (
                  <a
                    key={item}
                    href={itemHref}
                    onClick={(e) => {
                      handleSmoothScroll(e, itemHref);
                      setMobileOpen(false);
                    }}
                    className="text-4xl font-black text-slate-900 tracking-tight"
                  >
                    {item}
                  </a>
                );
              })}
              <div className="h-[1px] bg-slate-100 w-full my-4" />
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setLang('es');
                    setMobileOpen(false);
                  }}
                  className={`w-full text-left text-2xl font-bold flex items-center gap-3 transition-colors ${
                    lang === 'es' ? 'text-[#e4002b]' : 'text-slate-400'
                  }`}
                >
                  <span className="text-3xl">🇩🇴</span>
                  <span>Español</span>
                </button>
                <button
                  onClick={() => {
                    setLang('en');
                    setMobileOpen(false);
                  }}
                  className={`w-full text-left text-2xl font-bold flex items-center gap-3 transition-colors ${
                    lang === 'en' ? 'text-[#e4002b]' : 'text-slate-400'
                  }`}
                >
                  <span className="text-3xl">🇺🇸</span>
                  <span>English</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Lightbox = ({ isOpen, onClose, videoId }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/95 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.button 
          whileHover={{ rotate: 90, scale: 1.1 }}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
          onClick={onClose}
        >
          <X size={40} />
        </motion.button>
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="w-full max-w-6xl aspect-video rounded-[2rem] overflow-hidden bg-black shadow-2xl relative"
          onClick={e => e.stopPropagation()}
        >
          <iframe 
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

function Home() {
  const { lang, setLang } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const t = translations[lang];
  
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const yImage = useTransform(scrollYProgress, [0, 0.2], [0, 50]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  
  const missionRef = useRef(null);
  const { scrollYProgress: missionProgress } = useScroll({
    target: missionRef,
    offset: ["start end", "end start"]
  });
  const yMissionImg = useTransform(missionProgress, [0, 1], [-100, 100]);
  const missionScale = useTransform(missionProgress, [0, 0.5], [0.8, 1]);

  return (
    <div className={`min-h-screen bg-[#fafafa] font-sans text-slate-900 selection:bg-[#009640] selection:text-white overflow-x-hidden ${isVideoOpen ? 'h-screen overflow-hidden' : ''}`}>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#009640] z-[70] origin-left"
        style={{ scaleX: scaleProgress }}
      />

      <Lightbox isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} videoId={YOUTUBE_VIDEO_ID} />

      <Navbar lang={lang} setLang={setLang} content={t} />

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-32 pb-12 overflow-hidden">
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }}
          className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-[#f39200]/10 rounded-full blur-[120px] pointer-events-none" 
        />
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#009640]/5 rounded-full blur-[100px] pointer-events-none" 
        />

        <div className="container mx-auto px-8 lg:px-12 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              style={{ y: yHero }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="h-[2px] bg-[#e4002b]" 
                />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#e4002b]">
                  {t.heroTag}
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] text-slate-900 tracking-tighter">
                {t.heroTitle.split(' ').map((word, i) => (
                  <motion.span 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className={i > 1 && i < 4 ? 'text-[#009640] inline-block mr-3' : 'inline-block mr-3'}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xl text-slate-500 mb-12 max-w-xl leading-relaxed font-medium"
              >
                {t.heroSub}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-6"
              >
                <motion.button 
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-900 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#009640] transition-all shadow-xl flex items-center gap-3"
                >
                  {t.donateBtn} <ArrowRight size={18} />
                </motion.button>
                <motion.button
                  onClick={() => setIsVideoOpen(true)}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-4 text-slate-900 font-black text-sm uppercase tracking-widest hover:text-[#009640] transition-colors"
                >
                  <motion.span 
                    whileHover={{ rotate: 15 }}
                    className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:bg-[#009640] group-hover:text-white transition-all"
                  >
                    <PlayCircle size={20} />
                  </motion.span>
                  {t.videoTitle}
                </motion.button>
              </motion.div>

              <div className="mt-20 flex gap-12 border-t border-slate-100 pt-12">
                {t.stats.map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.2 + (i * 0.1) }}
                  >
                    <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              style={{ y: yImage }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
              className="relative hidden lg:block"
            >
              <motion.div 
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-2 transition-transform duration-700 bg-slate-200"
              >
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200" 
                  className="w-full aspect-[4/5] object-cover"
                  alt="Support"
                />
              </motion.div>
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-10 -left-10 w-64 aspect-square bg-white p-8 rounded-[2rem] shadow-2xl z-20 flex flex-col justify-center"
              >
                <Quote className="text-[#f39200] mb-4" fill="currentColor" size={32} />
                <p className="text-sm font-bold italic text-slate-600 leading-relaxed">
                  {lang === 'es' 
                    ? '"La felicidad no resulta de lo que recibimos, sino de lo que damos."' 
                    : '"Happiness doesn\'t result from what we get, but from what we give."'
                  }
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mision" ref={missionRef} className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div style={{ scale: missionScale }}>
                <SectionHeading tag={t.mission} title={t.missionTitle} color="#0066cc" />
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl text-slate-600 leading-relaxed mb-10 font-medium italic"
                >
                  "{t.missionText}"
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mb-10"
                >
                  <Link 
                    to="/historia#inicio"
                    className="group inline-flex items-center gap-4 text-slate-900 font-black text-base uppercase tracking-widest hover:text-[#009640] transition-colors"
                  >
                    <motion.span 
                      whileHover={{ rotate: 15 }}
                      className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:bg-[#009640] group-hover:text-white transition-all"
                    >
                      <BookOpen size={20} />
                    </motion.span>
                    {t.learnMore}
                  </Link>
                </motion.div>
                
                <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 bg-[#009640]/5 rounded-[2.5rem] border border-[#009640]/10 hover:bg-[#009640]/10 transition-colors cursor-default"
                  >
                    <Heart className="text-[#009640] mb-4 w-8 h-8" />
                    <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">
                      {lang === 'es' ? 'Enfoque en Amor' : 'Love Focused'}
                    </h4>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="p-8 bg-[#009640]/5 rounded-[2.5rem] border border-[#009640]/10 hover:bg-[#009640]/10 transition-colors cursor-default"
                  >
                    <Award className="text-[#e4002b] mb-4 w-8 h-8" />
                    <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">
                      {lang === 'es' ? 'Impulso de Crecimiento' : 'Growth Driven'}
                    </h4>
                  </motion.div>
                </div>
              </motion.div>

              <div className="relative group">
                <motion.div 
                  style={{ rotate: 3, scale: missionScale }}
                  className="absolute inset-0 bg-gradient-to-tr from-[#e4002b] to-[#f39200] rounded-[4rem] opacity-10" 
                />
                <motion.div 
                  style={{ y: yMissionImg }}
                  className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl bg-slate-100"
                >
                  <img 
                    src={MISSION_IMG_URL} 
                    className="w-full h-[600px] object-cover transition-all duration-1000"
                    alt="Our Work"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus / Constanza Section */}
      <section id="enfoque" className="py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <SectionHeading 
            tag={lang === 'es' ? 'Presencia Local' : 'Local Presence'} 
            title={t.constanzaTitle} 
            centered 
            color="#f39200"
          />
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-slate-500 max-w-3xl mx-auto mb-20 font-medium text-lg leading-relaxed"
          >
            {t.constanzaSub}
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.focusAreas.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 text-center flex flex-col items-center"
              >
                <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-6 border ${item.color}`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact in Numbers Section - Auto Abbreviation after 999 */}
      <section id="impacto-numeros" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <SectionHeading 
            tag={lang === 'es' ? 'Impacto Real' : 'Real Impact'} 
            title={t.achievementsTitle} 
            centered 
            color="#e4002b"
          />
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-slate-500 max-w-2xl mx-auto mb-24 font-medium"
          >
            {t.achievementsSubtitle}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AchievementCard 
              rawValue={110} 
              label={t.achievementLabels.projects} 
              icon={TrendingUp} 
              colorClass="bg-blue-50 text-blue-600"
              delay={0.1}
            />
            <AchievementCard 
              rawValue={1254} 
              label={t.achievementLabels.donations} 
              icon={Heart} 
              colorClass="bg-[#e4002b]/5 text-[#e4002b]"
              delay={0.2}
            />
            <AchievementCard 
              rawValue={610} 
              label={t.achievementLabels.volunteers} 
              icon={Users} 
              colorClass="bg-[#009640]/5 text-[#009640]"
              delay={0.3}
            />
            <AchievementCard 
              rawValue={1400000} 
              label={t.achievementLabels.funds} 
              icon={DollarSign} 
              colorClass="bg-amber-50 text-amber-600"
              delay={0.4}
              isCurrency={true}
            />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 opacity-60">
              {t.achievementLabels.disclaimer}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-32 bg-[#fafafa]">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div className="max-w-xl">
              <SectionHeading tag={lang === 'es' ? 'Nuestra Gente' : 'Our People'} title={t.team} color="#009640" />
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-500 font-medium mb-10 md:mb-5 max-w-xs"
            >
              {t.teamSubtitle}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <TeamCard name="Bernardo Pastiño" role={t.roles.bernardo} image={PROFILE_BERNARDO} delay={0.1} />
            <TeamCard name="Awilda Hernández" role={t.roles.awilda} image={PROFILE_AWILDA} delay={0.2} />
            <TeamCard name="Juan Angustia" role={t.roles.juan} image={PROFILE_JUAN} delay={0.3} />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="impacto" className="py-32 bg-slate-900 overflow-hidden relative">
        <motion.div 
          style={{ scale: 1.2, y: yMissionImg }}
          className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none"
        >
          <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </motion.div>
        
        <div className="container mx-auto px-8 relative z-10 text-center">
          <SectionHeading tag={lang === 'es' ? 'Experiencia' : 'Experience'} title={t.videoTitle} dark centered />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto relative group mt-12 cursor-pointer"
            onClick={() => setIsVideoOpen(true)}
          >
             <div className="absolute inset-0 flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
                <motion.button 
                  whileHover={{ scale: 1.2 }}
                  className="w-24 h-24 rounded-full bg-white text-[#009640] shadow-[0_0_50px_rgba(0,150,64,0.3)] flex items-center justify-center group-hover:shadow-[0_0_70px_rgba(0,150,64,0.5)] transition-all"
                >
                  <PlayCircle size={64} fill="currentColor" className="text-white" />
                  <PlayCircle size={64} className="absolute text-[#009640]" />
                </motion.button>
             </div>
             <div className="aspect-video rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl relative">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 pointer-events-none" />
               <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1500" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Video cover" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* Donate CTA */}
      <section id="donar" className="py-20">
        <div className="container mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="bg-slate-900 rounded-[4rem] p-16 md:p-24 relative overflow-hidden group"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-[#e4002b]/20 blur-[120px]" 
            />
            <div className="relative z-10 flex flex-col items-center text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-white mb-10 max-w-3xl leading-tight tracking-tight"
              >
                {lang === 'es' 
                  ? 'Pequeños actos, multiplicados por millones, pueden transformar el mundo.'
                  : 'Small acts, when multiplied by millions, can transform the world.'
                }
              </motion.h2>
              <div className="flex flex-wrap justify-center gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#009640] text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-2xl transition-all"
                >
                  {t.donateBtn}
                </motion.button>
                <motion.button 
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-6 rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all"
                >
                  {lang === 'es' ? 'Contáctanos' : 'Contact Us'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-32 pb-12 border-t border-slate-100">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-5">
              <img src={LOGO_URL} alt="Logo" className="h-24 mb-10 object-contain" />
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md">
                {lang === 'es'
                  ? 'Dedicados a restaurar la esperanza y la dignidad a las comunidades a través de la alegría sostenible y la educación.'
                  : 'Dedicated to restoring hope and dignity to communities through sustainable joy and education.'
                }
              </p>
            </div>
            
            <div className="lg:col-span-7 grid md:grid-cols-3 gap-12">
              <div>
                <h4 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em] mb-8">
                  {lang === 'es' ? 'Navegación' : 'Navigation'}
                </h4>
                <ul className="space-y-4 text-slate-500 font-bold">
                  {t.nav.map(item => {
                    const isHistory = item.toLowerCase() === 'historia' || item.toLowerCase() === 'history';
                    // Historia ahora apunta a la sección de Propósito y Visión (#mision)
                    const itemHref = isHistory ? '#mision' : `#${item.toLowerCase()}`;
                    
                    return (
                      <li key={item}>
                        <a 
                          href={itemHref} 
                          onClick={(e) => {
                            if (itemHref.startsWith('#')) {
                              e.preventDefault();
                              const targetId = itemHref.substring(1);
                              
                              // Función para normalizar texto y eliminar acentos
                              const normalizeText = (text) => {
                                return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                              };
                              
                              const normalizedId = normalizeText(targetId);
                              
                              // Mapeo de nombres del menú a IDs de secciones
                              const idMap = {
                                'inicio': 'inicio',
                                'home': 'inicio', // Home apunta a Inicio
                                'historia': 'mision', // Historia apunta a Propósito y Visión
                                'history': 'mision',
                                'mision': 'mision', // Misión apunta a Propósito y Visión
                                'mission': 'mision',
                                'enfoque': 'enfoque', // Enfoque apunta a Presencia Local
                                'focus': 'enfoque',
                                'impacto': 'impacto-numeros', // Impacto apunta a Impacto Real
                                'impact': 'impacto-numeros',
                                'equipo': 'equipo',
                                'team': 'equipo',
                                'donar': 'donar',
                                'donate': 'donar',
                                'haz la diferencia': 'donar',
                                'be the difference': 'donar'
                              };
                              
                              const actualId = idMap[normalizedId] || normalizedId;
                              const targetElement = document.getElementById(actualId);
                              
                              if (targetElement) {
                                const offset = 100;
                                const elementPosition = targetElement.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.pageYOffset - offset;

                                window.scrollTo({
                                  top: offsetPosition,
                                  behavior: 'smooth'
                                });
                              }
                            }
                          }}
                          className="hover:text-[#e4002b] transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h4 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em] mb-8">
                  {lang === 'es' ? 'Legal' : 'Legal'}
                </h4>
                <ul className="space-y-4 text-slate-500 font-bold">
                  <li><Link to="/privacidad" className="hover:text-[#009640] transition-colors">{lang === 'es' ? 'Privacidad' : 'Privacy Policy'}</Link></li>
                  <li><Link to="/terminos" className="hover:text-[#009640] transition-colors">{lang === 'es' ? 'Términos' : 'Terms of Use'}</Link></li>
                  <li><Link to="/donaciones" className="hover:text-[#009640] transition-colors">{lang === 'es' ? 'Donaciones' : 'Donations Policy'}</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em] mb-8">
                  {lang === 'es' ? 'Conectar' : 'Connect'}
                </h4>
                <div className="flex flex-wrap gap-3">
                  <motion.a 
                    href="https://www.instagram.com/alegriainocente/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, backgroundColor: "#e4002b", color: "#fff" }}
                    className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 transition-all cursor-pointer"
                  >
                    <Instagram size={20} />
                  </motion.a>
                  <motion.a 
                    href="https://www.facebook.com/fundacionalegriainocente" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, backgroundColor: "#e4002b", color: "#fff" }}
                    className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 transition-all cursor-pointer"
                  >
                    <Facebook size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-100 pt-12 gap-6">
            <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">{t.footer}</span>
            <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
              <span>{t.madeWith}</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center"
              >
                <Heart size={14} fill="currentColor" className="text-[#e4002b]" />
              </motion.div>
              <span>{lang === 'es' ? 'por' : 'for'}</span>
              <a 
                href="https://juanangustia.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img 
                  src="https://raw.githubusercontent.com/jangustia/Angustia-2025/fc99a6291812a9044e02565c0b952e18271a04aa/Angustia_Logo.svg" 
                  alt="Angustia" 
                  className="h-3 ml-0.5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(60%)' }}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<History />} />
        <Route path="/privacidad" element={<Privacy />} />
        <Route path="/terminos" element={<Terms />} />
        <Route path="/donaciones" element={<Donations />} />
      </Routes>
    </BrowserRouter>
  );
}

