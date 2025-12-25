import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';

const LOGO_URL = "https://i0.wp.com/www.alegriainocente.org/wp-content/uploads/2023/01/Alegria-inocente-logo-scaled.jpg?w=2560&ssl=1";

const translations = {
  es: {
    title: 'Política de Privacidad',
    subtitle: 'Comprometidos con la protección de tus datos personales',
    backToHome: 'Volver al Inicio',
    lastUpdated: 'Última actualización: Enero 2026',
    sections: [
      {
        icon: Shield,
        title: 'Información que Recopilamos',
        content: 'La Fundación Alegría Inocente recopila información personal cuando realizas donaciones, te registras como voluntario, o te comunicas con nosotros. Esta información puede incluir nombre, dirección de correo electrónico, dirección postal, número de teléfono e información de pago.'
      },
      {
        icon: Lock,
        title: 'Uso de la Información',
        content: 'Utilizamos la información recopilada para procesar donaciones, comunicarnos contigo sobre nuestros programas, enviar actualizaciones sobre nuestro trabajo, y cumplir con requisitos legales. Nunca vendemos ni compartimos tu información personal con terceros para fines comerciales.'
      },
      {
        icon: Eye,
        title: 'Protección de Datos',
        content: 'Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Utilizamos tecnologías de encriptación y protocolos seguros para todas las transacciones.'
      },
      {
        icon: FileText,
        title: 'Tus Derechos',
        content: 'Tienes derecho a acceder, rectificar, eliminar o limitar el procesamiento de tus datos personales. También puedes oponerte al procesamiento o solicitar la portabilidad de tus datos. Para ejercer estos derechos, contáctanos a través de nuestros canales oficiales.'
      }
    ],
    contact: 'Si tienes preguntas sobre esta política de privacidad, puedes contactarnos a través de nuestras redes sociales o visitando nuestra página web.'
  },
  en: {
    title: 'Privacy Policy',
    subtitle: 'Committed to protecting your personal data',
    backToHome: 'Back to Home',
    lastUpdated: 'Last updated: January 2026',
    sections: [
      {
        icon: Shield,
        title: 'Information We Collect',
        content: 'The Alegría Inocente Foundation collects personal information when you make donations, register as a volunteer, or communicate with us. This information may include name, email address, postal address, phone number, and payment information.'
      },
      {
        icon: Lock,
        title: 'Use of Information',
        content: 'We use the collected information to process donations, communicate with you about our programs, send updates about our work, and comply with legal requirements. We never sell or share your personal information with third parties for commercial purposes.'
      },
      {
        icon: Eye,
        title: 'Data Protection',
        content: 'We implement technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We use encryption technologies and secure protocols for all transactions.'
      },
      {
        icon: FileText,
        title: 'Your Rights',
        content: 'You have the right to access, rectify, delete, or limit the processing of your personal data. You can also object to processing or request data portability. To exercise these rights, contact us through our official channels.'
      }
    ],
    contact: 'If you have questions about this privacy policy, you can contact us through our social media or by visiting our website.'
  }
};

export default function Privacy() {
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
                    <div className="w-12 h-12 rounded-xl bg-[#009640]/10 flex items-center justify-center flex-shrink-0">
                      <section.icon className="text-[#009640]" size={24} />
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

