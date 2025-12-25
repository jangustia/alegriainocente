import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, DollarSign, Shield, CheckCircle, Gift, ArrowLeft } from 'lucide-react';

const LOGO_URL = "https://i0.wp.com/www.alegriainocente.org/wp-content/uploads/2023/01/Alegria-inocente-logo-scaled.jpg?w=2560&ssl=1";

const translations = {
  es: {
    title: 'Política de Donaciones',
    subtitle: 'Información sobre cómo realizamos y utilizamos las donaciones',
    backToHome: 'Volver al Inicio',
    lastUpdated: 'Última actualización: Enero 2026',
    sections: [
      {
        icon: Heart,
        title: 'Cómo Donar',
        content: 'Puedes realizar donaciones a través de nuestra página web, transferencias bancarias, o contactándonos directamente. Aceptamos donaciones en efectivo, transferencias electrónicas, y otros métodos de pago seguros. Todas las donaciones, sin importar su tamaño, son valiosas y contribuyen directamente a nuestros programas de ayuda social.'
      },
      {
        icon: DollarSign,
        title: 'Uso de Fondos',
        content: 'Nos comprometemos a utilizar cada donación de manera transparente y eficiente. Los fondos se destinan directamente a nuestros programas: útiles escolares, ropa y calzado, alimentos básicos, y equipos médicos para las comunidades más vulnerables de Constanza y áreas rurales.'
      },
      {
        icon: Shield,
        title: 'Transparencia',
        content: 'Mantenemos registros detallados de todas las donaciones recibidas y su utilización. Publicamos informes periódicos sobre el impacto de nuestros programas y cómo se utilizan los fondos. Estamos comprometidos con la máxima transparencia en todas nuestras operaciones financieras.'
      },
      {
        icon: CheckCircle,
        title: 'Reconocimientos',
        content: 'Agradecemos profundamente cada donación. Aunque no podemos ofrecer beneficios fiscales directos, todas las donaciones contribuyen a crear un impacto positivo y medible en las vidas de las familias que servimos. Tu generosidad transforma comunidades enteras.'
      },
      {
        icon: Gift,
        title: 'Donaciones en Especie',
        content: 'Además de donaciones monetarias, aceptamos donaciones en especie como útiles escolares, ropa, calzado, alimentos no perecederos, y equipos médicos. Para coordinar donaciones en especie, contáctanos a través de nuestras redes sociales o página web.'
      }
    ],
    contact: 'Para más información sobre cómo donar o hacer preguntas sobre nuestra política de donaciones, puedes contactarnos a través de nuestras redes sociales o visitando nuestra página web.'
  },
  en: {
    title: 'Donations Policy',
    subtitle: 'Information about how we receive and use donations',
    backToHome: 'Back to Home',
    lastUpdated: 'Last updated: January 2026',
    sections: [
      {
        icon: Heart,
        title: 'How to Donate',
        content: 'You can make donations through our website, bank transfers, or by contacting us directly. We accept cash donations, electronic transfers, and other secure payment methods. All donations, regardless of size, are valuable and contribute directly to our social assistance programs.'
      },
      {
        icon: DollarSign,
        title: 'Use of Funds',
        content: 'We are committed to using every donation transparently and efficiently. Funds are allocated directly to our programs: school supplies, clothing and footwear, basic food, and medical equipment for the most vulnerable communities in Constanza and rural areas.'
      },
      {
        icon: Shield,
        title: 'Transparency',
        content: 'We maintain detailed records of all donations received and their use. We publish periodic reports on the impact of our programs and how funds are used. We are committed to maximum transparency in all our financial operations.'
      },
      {
        icon: CheckCircle,
        title: 'Acknowledgments',
        content: 'We deeply appreciate every donation. Although we cannot offer direct tax benefits, all donations contribute to creating a positive and measurable impact on the lives of the families we serve. Your generosity transforms entire communities.'
      },
      {
        icon: Gift,
        title: 'In-Kind Donations',
        content: 'In addition to monetary donations, we accept in-kind donations such as school supplies, clothing, footwear, non-perishable food, and medical equipment. To coordinate in-kind donations, contact us through our social media or website.'
      }
    ],
    contact: 'For more information on how to donate or questions about our donations policy, you can contact us through our social media or by visiting our website.'
  }
};

export default function Donations() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={LOGO_URL} alt="Logo" className="h-10 object-contain" />
            </Link>
            <Link 
              to="/"
              className="flex items-center gap-2 text-slate-700 font-semibold text-sm hover:text-[#e4002b] transition-colors"
            >
              <ArrowLeft size={16} />
              {t.backToHome}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95] text-slate-900 tracking-tight">
                {t.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-4">
                {t.subtitle}
              </p>
              <p className="text-sm text-slate-400 font-medium">
                {t.lastUpdated}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {t.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#e4002b]/10 flex items-center justify-center flex-shrink-0">
                      <section.icon className="text-[#e4002b]" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-slate-900 mb-3">{section.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200"
            >
              <p className="text-slate-600 leading-relaxed">{t.contact}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

