import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Scale, FileCheck, AlertCircle, Gavel, ArrowLeft } from 'lucide-react';

const LOGO_URL = "https://i0.wp.com/www.alegriainocente.org/wp-content/uploads/2023/01/Alegria-inocente-logo-scaled.jpg?w=2560&ssl=1";

const translations = {
  es: {
    title: 'Términos y Condiciones',
    subtitle: 'Términos de uso de nuestros servicios y plataforma',
    backToHome: 'Volver al Inicio',
    lastUpdated: 'Última actualización: Enero 2026',
    sections: [
      {
        icon: Scale,
        title: 'Aceptación de Términos',
        content: 'Al acceder y utilizar el sitio web de la Fundación Alegría Inocente, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.'
      },
      {
        icon: FileCheck,
        title: 'Uso del Sitio Web',
        content: 'El contenido de este sitio web es solo para fines informativos. Puedes ver, descargar e imprimir material de este sitio para uso personal y no comercial. No puedes modificar, reproducir, distribuir o utilizar el contenido para fines comerciales sin nuestro consentimiento previo por escrito.'
      },
      {
        icon: AlertCircle,
        title: 'Donaciones',
        content: 'Todas las donaciones son voluntarias y no reembolsables. Las donaciones se utilizan exclusivamente para los programas y actividades de la fundación. Nos comprometemos a utilizar los fondos de manera transparente y eficiente para maximizar nuestro impacto en las comunidades que servimos.'
      },
      {
        icon: Gavel,
        title: 'Limitación de Responsabilidad',
        content: 'La Fundación Alegría Inocente no será responsable de ningún daño directo, indirecto, incidental o consecuente que resulte del uso o la imposibilidad de usar este sitio web. Hacemos nuestro mejor esfuerzo para mantener la información actualizada y precisa, pero no garantizamos la exactitud completa de toda la información.'
      }
    ],
    contact: 'Si tienes preguntas sobre estos términos y condiciones, puedes contactarnos a través de nuestras redes sociales o visitando nuestra página web.'
  },
  en: {
    title: 'Terms and Conditions',
    subtitle: 'Terms of use for our services and platform',
    backToHome: 'Back to Home',
    lastUpdated: 'Last updated: January 2026',
    sections: [
      {
        icon: Scale,
        title: 'Acceptance of Terms',
        content: 'By accessing and using the Alegría Inocente Foundation website, you agree to comply with these terms and conditions. If you do not agree with any part of these terms, you should not use our services.'
      },
      {
        icon: FileCheck,
        title: 'Use of Website',
        content: 'The content of this website is for informational purposes only. You may view, download, and print material from this site for personal and non-commercial use. You may not modify, reproduce, distribute, or use the content for commercial purposes without our prior written consent.'
      },
      {
        icon: AlertCircle,
        title: 'Donations',
        content: 'All donations are voluntary and non-refundable. Donations are used exclusively for the foundation\'s programs and activities. We are committed to using funds transparently and efficiently to maximize our impact on the communities we serve.'
      },
      {
        icon: Gavel,
        title: 'Limitation of Liability',
        content: 'The Alegría Inocente Foundation shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website. We make our best effort to keep information current and accurate, but we do not guarantee complete accuracy of all information.'
      }
    ],
    contact: 'If you have questions about these terms and conditions, you can contact us through our social media or by visiting our website.'
  }
};

export default function Terms() {
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
                    <div className="w-12 h-12 rounded-xl bg-[#0066cc]/10 flex items-center justify-center flex-shrink-0">
                      <section.icon className="text-[#0066cc]" size={24} />
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
              transition={{ delay: 0.4, duration: 0.6 }}
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

