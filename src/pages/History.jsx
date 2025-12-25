import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Heart, ArrowLeft, Target, Eye, Award, Hand, Users, Sparkles, BookOpen, Gift, ChevronDown, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LOGO_URL = "https://i0.wp.com/www.alegriainocente.org/wp-content/uploads/2023/01/Alegria-inocente-logo-scaled.jpg?w=2560&ssl=1";

const translations = {
  es: {
    tag: 'Nuestra Historia',
    title: 'Comprometidos en Ayudar Nuestras Comunidades',
    subtitle: 'Un viaje de amor, dedicación y transformación que comenzó en 2011',
    backToHome: 'Volver al Inicio',
    timeline: {
      title: 'Evolución Histórica',
      subtitle: 'Nuestro recorrido desde los inicios hasta hoy'
    },
    sections: [
      {
        year: '2011',
        title: 'Los Inicios: Un Gesto de Amor',
        description: 'La Fundación Alegría Inocente surge en el municipio de Constanza, Provincia La Vega. Todo comenzó con una simple entrega de juguetes y útiles escolares en la comunidad de Los Limoncitos. La idea nace mientras un grupo de jóvenes del referido municipio se encontraban de excursión en esta retirada comunidad, donde se percataron de que los niños no habían iniciado el año escolar por falta de útiles escolares. Lo que parecía un acto aislado de generosidad, se convirtió en el germen de algo mucho más grande.'
      },
      {
        year: '2011',
        title: 'Primera Acción: El Despertar',
        description: 'Luego de ver las carencias de esa localidad, los jóvenes Bernardo Patiño y Anthony Quezada deciden regresar con útiles escolares para que los niños empezaran a recibir el pan de la enseñanza. Este gesto marcó el inicio de algo más grande. Al ver las necesidades reales de las comunidades, los fundadores comprendieron que se necesitaba algo más que entregas esporádicas. Se requería un compromiso sostenido y estructurado.'
      },
      {
        year: '2011',
        title: 'El Nombre: Fundación Alegría Inocente',
        description: 'Marleny Duran se convirtió en la principal patrocinadora de la fundación, quien hasta la fecha continúa enviando aportes económicos desde EE.UU. Resaltando que la joven es quien da el nombre de FUNDACIÓN ALEGRÍA INOCENTE, un nombre que refleja la esencia de nuestro trabajo: llevar alegría pura e inocente a quienes más lo necesitan.'
      },
      {
        year: '2012',
        title: 'Crecimiento y Expansión',
        description: 'Las redes sociales fueron de gran ayuda para el inicio de la fundación, despertando el interés de otros jóvenes que se involucraron y comenzaron a hacer aportaciones para continuar año tras año con el hermoso gesto de desprendimiento en diferentes comunidades. La fundación comenzó a crecer de manera orgánica, expandiendo su alcance a más comunidades necesitadas.'
      },
      {
        year: '2013',
        title: 'Expansión Internacional: La Estructuración',
        description: 'Juan Angustia se une a la idea para fortalecer el desarrollo de la fundación y llevándola más allá de Constanza, convirtiéndose en miembro y representante internacional. Ha logrado obtener importantes aportes para beneficio de nuestros munícipes. Con el tiempo, la fundación evolucionó de un grupo de jóvenes entusiastas a una organización formal con programas definidos, procesos establecidos y un impacto medible en las comunidades.'
      },
      {
        year: '2014',
        title: 'Nueva Etapa: Consolidación',
        description: 'Los primeros jóvenes toman caminos distintos, quedando a cargo de seguir llevando aportes Bernardo Pastiño, quien se une a otros colaboradores. El programa de ayudas sociales hasta la fecha ha ido creciendo de manera sostenida. La fundación se consolida como una organización estructurada con una visión clara y un compromiso renovado.'
      },
      {
        year: 'Hoy',
        title: 'El Impacto Actual: Transformación Continua',
        description: 'Hoy, la Fundación Alegría Inocente no solo entrega ayuda material, sino que construye puentes de esperanza, educación y oportunidades para miles de familias en las zonas más vulnerables de República Dominicana. Continuamos comprometidos con nuestra misión de llevar alegría y esperanza, expandiendo nuestro alcance y fortaleciendo nuestros programas para crear un impacto duradero y transformador.'
      }
    ],
    location: 'Constanza, La Vega, República Dominicana',
    footer: '© 2026 Fundación Alegría Inocente. Todos los derechos reservados.',
    madeWith: 'Hecho con',
    nav: ['Inicio', 'Historia', 'Misión', 'Enfoque', 'Impacto', 'Equipo', 'Donar'],
    mission: {
      tag: 'Nuestra Misión',
      title: 'Misión',
      text: 'Somos una organización sin fines de lucro comprometida a promover el derecho de toda persona, en especial de la infancia y juventud, a disfrutar de una vida digna y plena en igualdad de oportunidades, con el fin de mejorar, enriquecer y contribuir a la calidad de vida de los menos privilegiados.'
    },
    vision: {
      tag: 'Nuestra Visión',
      title: 'Visión',
      text: 'Creemos en la capacidad humana para construir un mundo más equitativo y justo donde cada persona pueda tener una vida digna y cubrir sus necesidades básicas.'
    },
    values: {
      tag: 'Nuestros Valores',
      title: 'Valores Fundamentales',
      items: [
        {
          title: 'Compromiso',
          description: 'Dedicación constante hacia las comunidades más vulnerables.',
          icon: Heart
        },
        {
          title: 'Transparencia',
          description: 'Honestidad y claridad en todas nuestras acciones y recursos.',
          icon: Eye
        },
        {
          title: 'Solidaridad',
          description: 'Trabajo conjunto para el bienestar común.',
          icon: Hand
        },
        {
          title: 'Excelencia',
          description: 'Búsqueda constante de la mejor manera de servir.',
          icon: Award
        }
      ]
    },
    founders: {
      tag: 'Fundadores',
      title: 'Los Rostros Detrás de la Fundación',
      subtitle: 'Conoce a las personas que dieron vida a este sueño',
      bernardo: {
        name: 'Bernardo Pastiño',
        role: 'Presidente y Fundador',
        bio: 'Líder y fundador desde 2011. Ha transformado una simple idea de ayudar en una organización estructurada que impacta miles de vidas.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop'
      },
      anthony: {
        name: 'Anthony Quezada',
        role: 'Co-Fundador',
        bio: 'Junto con Bernardo Pastiño, dio los primeros pasos de la fundación. Su determinación para ayudar a los niños de Los Limoncitos fue fundamental.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84a45d3d?q=80&w=400&h=400&fit=crop'
      },
      marleny: {
        name: 'Marleny Duran',
        role: 'Fundadora y Principal Patrocinadora',
        bio: 'Principal patrocinadora desde los inicios. Es quien dio el nombre de FUNDACIÓN ALEGRÍA INOCENTE y continúa apoyando desde EE.UU.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop'
      },
      juan: {
        name: 'Juan Angustia',
        role: 'Representante Internacional',
        bio: 'Se unió en 2013 expandiendo el alcance internacional. Ha establecido conexiones globales y es responsable del diseño e imagen institucional.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&fit=crop'
      }
    },
    activeMembers: {
      tag: 'Miembros Activos',
      title: 'Nuestro Equipo',
      subtitle: 'Profesionales comprometidos que hacen posible nuestra misión',
      awilda: {
        name: 'Awilda Hernández',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop'
      },
      member1: {
        name: 'María Rodríguez',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop'
      },
      member2: {
        name: 'Carlos Martínez',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop'
      },
      member3: {
        name: 'Ana García',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&fit=crop'
      },
      member4: {
        name: 'Luis Pérez',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84a45d3d?q=80&w=400&h=400&fit=crop'
      },
      member5: {
        name: 'Sofía Fernández',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&h=400&fit=crop'
      },
      member6: {
        name: 'Roberto Sánchez',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&fit=crop'
      },
      member7: {
        name: 'Carmen López',
        image: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=400&h=400&fit=crop'
      },
      member8: {
        name: 'José Ramírez',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop'
      }
    },
    faq: {
      tag: 'Preguntas Frecuentes',
      title: 'Preguntas Frecuentes',
      subtitle: 'Encuentra respuestas a las preguntas más comunes sobre nuestra fundación',
      items: [
        {
          question: '¿Qué es la Fundación Alegría Inocente?',
          answer: 'La Fundación Alegría Inocente es una organización sin fines de lucro comprometida a promover el derecho de toda persona, en especial de la infancia y juventud, a disfrutar de una vida digna y plena en igualdad de oportunidades. Trabajamos para mejorar, enriquecer y contribuir a la calidad de vida de los menos privilegiados en comunidades vulnerables de República Dominicana.'
        },
        {
          question: '¿Cuándo fue fundada la organización?',
          answer: 'La fundación comenzó en 2011 en el municipio de Constanza, Provincia La Vega, cuando un grupo de jóvenes decidió ayudar a los niños de la comunidad de Los Limoncitos que no habían iniciado el año escolar por falta de útiles escolares. Lo que comenzó como un gesto simple de generosidad se convirtió en una organización estructurada que impacta miles de vidas.'
        },
        {
          question: '¿Dónde opera la fundación?',
          answer: 'Nuestro esfuerzo principal se concentra en llegar a las zonas más remotas y rurales del municipio de Constanza, llevando alivio directo donde otros no llegan. También tenemos presencia internacional a través de nuestro representante internacional.'
        },
        {
          question: '¿Cómo puedo hacer una donación?',
          answer: 'Puedes hacer una donación a través de nuestra página web. Cada contribución, sin importar su tamaño, ayuda a transformar vidas y crear un impacto positivo en las comunidades más vulnerables. Todas las donaciones se utilizan directamente para apoyar nuestros programas de ayuda social.'
        },
        {
          question: '¿Qué tipo de ayuda proporciona la fundación?',
          answer: 'Proporcionamos útiles escolares, juguetes, alimentos, ropa y otros recursos esenciales a familias en comunidades vulnerables. También trabajamos en programas educativos y de desarrollo comunitario para crear un impacto sostenible y transformador.'
        },
        {
          question: '¿Cómo puedo ser voluntario?',
          answer: 'Si estás interesado en ser voluntario, puedes contactarnos a través de nuestra página web o redes sociales. Valoramos el apoyo de personas comprometidas que quieran contribuir con su tiempo y habilidades para ayudar a nuestras comunidades.'
        },
        {
          question: '¿La fundación es transparente con sus recursos?',
          answer: 'Sí, la transparencia es uno de nuestros valores fundamentales. Mantenemos honestidad y claridad en todas nuestras acciones y recursos. Estamos comprometidos a utilizar cada donación de manera responsable y eficiente para maximizar nuestro impacto.'
        }
      ]
    }
  },
  en: {
    tag: 'Our History',
    title: 'Committed to Helping Our Communities',
    subtitle: 'A journey of love, dedication, and transformation that began in 2011',
    backToHome: 'Back to Home',
    timeline: {
      title: 'Historical Evolution',
      subtitle: 'Our journey from the beginning to today'
    },
    sections: [
      {
        year: '2011',
        title: 'The Beginning: A Gesture of Love',
        description: 'The Alegría Inocente Foundation emerged in the municipality of Constanza, La Vega Province. Everything started with a simple delivery of toys and school supplies in the Los Limoncitos community. The idea was born when a group of young people from the municipality were on an excursion to this remote community, where they noticed that children had not started the school year due to lack of school supplies. What seemed like an isolated act of generosity became the seed of something much bigger.'
      },
      {
        year: '2011',
        title: 'First Action: The Awakening',
        description: 'After seeing the needs of that locality, young people Bernardo Patiño and Anthony Quezada decided to return with school supplies so that children could begin to receive the bread of education. This gesture marked the beginning of something bigger. Upon seeing the real needs of the communities, the founders understood that more than sporadic deliveries was needed. A sustained and structured commitment was required.'
      },
      {
        year: '2011',
        title: 'The Name: Alegría Inocente Foundation',
        description: 'Marleny Duran became the foundation\'s main sponsor, who to this day continues to send economic contributions from the U.S. It should be noted that this young woman is the one who gave the name FUNDACIÓN ALEGRÍA INOCENTE, a name that reflects the essence of our work: bringing pure and innocent joy to those who need it most.'
      },
      {
        year: '2012',
        title: 'Growth and Expansion',
        description: 'Social media was of great help for the foundation\'s start, awakening the interest of other young people who got involved and began making contributions to continue year after year with the beautiful gesture of selflessness in different communities. The foundation began to grow organically, expanding its reach to more communities in need.'
      },
      {
        year: '2013',
        title: 'International Expansion: The Structuring',
        description: 'Juan Angustia joined the idea to strengthen the foundation\'s development and take it beyond Constanza, becoming a member and international representative. He has managed to obtain important contributions for the benefit of our citizens. Over time, the foundation evolved from a group of enthusiastic young people to a formal organization with defined programs, established processes, and measurable impact on communities.'
      },
      {
        year: '2014',
        title: 'New Stage: Consolidation',
        description: 'The first young people took different paths, leaving Bernardo Pastiño in charge of continuing to bring contributions, who joined other collaborators. The social assistance program has continued to grow steadily to this day. The foundation consolidated as a structured organization with a clear vision and renewed commitment.'
      },
      {
        year: 'Today',
        title: 'Current Impact: Continuous Transformation',
        description: 'Today, the Alegría Inocente Foundation not only delivers material aid, but builds bridges of hope, education, and opportunities for thousands of families in the most vulnerable areas of the Dominican Republic. We continue committed to our mission of bringing joy and hope, expanding our reach and strengthening our programs to create lasting and transformative impact.'
      }
    ],
    location: 'Constanza, La Vega, Dominican Republic',
      footer: '© 2026 Alegría Inocente Foundation. All rights reserved.',
      madeWith: 'Made with',
      nav: ['Home', 'History', 'Mission', 'Focus', 'Team', 'Impact', 'Donate'],
    mission: {
      tag: 'Our Mission',
      title: 'Mission',
      text: 'We are a non-profit organization committed to promoting the right of every person, especially children and youth, to enjoy a dignified and full life with equal opportunities, in order to improve, enrich and contribute to the quality of life of the less privileged.'
    },
    vision: {
      tag: 'Our Vision',
      title: 'Vision',
      text: 'We believe in the human capacity to build a more equitable and just world where every person can have a dignified life and meet their basic needs.'
    },
    values: {
      tag: 'Our Values',
      title: 'Fundamental Values',
      items: [
        {
          title: 'Commitment',
          description: 'Constant dedication to the most vulnerable communities.',
          icon: Heart
        },
        {
          title: 'Transparency',
          description: 'Honesty and clarity in all our actions and resources.',
          icon: Eye
        },
        {
          title: 'Solidarity',
          description: 'Working together for the common good.',
          icon: Hand
        },
        {
          title: 'Excellence',
          description: 'Constant pursuit of the best way to serve.',
          icon: Award
        }
      ]
    },
    founders: {
      tag: 'Founders',
      title: 'The Faces Behind the Foundation',
      subtitle: 'Meet the people who brought this dream to life',
      bernardo: {
        name: 'Bernardo Pastiño',
        role: 'President & Founder',
        bio: 'Leader and founder since 2011. Has transformed a simple idea of helping into a structured organization that impacts thousands of lives.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop'
      },
      anthony: {
        name: 'Anthony Quezada',
        role: 'Co-Founder',
        bio: 'Together with Bernardo Pastiño, took the first steps of the foundation. His determination to help the children of Los Limoncitos was fundamental.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84a45d3d?q=80&w=400&h=400&fit=crop'
      },
      marleny: {
        name: 'Marleny Duran',
        role: 'Founder & Main Sponsor',
        bio: 'Main sponsor since the beginning. She gave the name FUNDACIÓN ALEGRÍA INOCENTE and continues to support from the U.S.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop'
      },
      juan: {
        name: 'Juan Angustia',
        role: 'International Representative',
        bio: 'Joined in 2013 expanding international reach. Has established global connections and is responsible for design and institutional image.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&fit=crop'
      }
    },
    activeMembers: {
      tag: 'Active Members',
      title: 'Our Team',
      subtitle: 'Committed professionals who make our mission possible',
      awilda: {
        name: 'Awilda Hernández',
        role: 'Secretary',
        bio: 'In charge of administrative management and coordination of foundation activities.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop'
      }
    }
  },
  en: {
    tag: 'Our History',
    title: 'Committed to Helping Our Communities',
    subtitle: 'A journey of love, dedication, and transformation that began in 2011',
    backToHome: 'Back to Home',
    timeline: {
      title: 'Historical Evolution',
      subtitle: 'Our journey from the beginning to today'
    },
    sections: [
      {
        year: '2011',
        title: 'The Beginning: A Gesture of Love',
        description: 'The Alegría Inocente Foundation emerged in the municipality of Constanza, La Vega Province. Everything started with a simple delivery of toys and school supplies in the Los Limoncitos community. The idea was born when a group of young people from the municipality were on an excursion to this remote community, where they noticed that children had not started the school year due to lack of school supplies. What seemed like an isolated act of generosity became the seed of something much bigger.'
      },
      {
        year: '2011',
        title: 'First Action: The Awakening',
        description: 'After seeing the needs of that locality, young people Bernardo Patiño and Anthony Quezada decided to return with school supplies so that children could begin to receive the bread of education. This gesture marked the beginning of something bigger. Upon seeing the real needs of the communities, the founders understood that more than sporadic deliveries was needed. A sustained and structured commitment was required.'
      },
      {
        year: '2011',
        title: 'The Name: Alegría Inocente Foundation',
        description: 'Marleny Duran became the foundation\'s main sponsor, who to this day continues to send economic contributions from the U.S. It should be noted that this young woman is the one who gave the name FUNDACIÓN ALEGRÍA INOCENTE, a name that reflects the essence of our work: bringing pure and innocent joy to those who need it most.'
      },
      {
        year: '2012',
        title: 'Growth and Expansion',
        description: 'Social media was of great help for the foundation\'s start, awakening the interest of other young people who got involved and began making contributions to continue year after year with the beautiful gesture of selflessness in different communities. The foundation began to grow organically, expanding its reach to more communities in need.'
      },
      {
        year: '2013',
        title: 'International Expansion: The Structuring',
        description: 'Juan Angustia joined the idea to strengthen the foundation\'s development and take it beyond Constanza, becoming a member and international representative. He has managed to obtain important contributions for the benefit of our citizens. Over time, the foundation evolved from a group of enthusiastic young people to a formal organization with defined programs, established processes, and measurable impact on communities.'
      },
      {
        year: '2014',
        title: 'New Stage: Consolidation',
        description: 'The first young people took different paths, leaving Bernardo Pastiño in charge of continuing to bring contributions, who joined other collaborators. The social assistance program has continued to grow steadily to this day. The foundation consolidated as a structured organization with a clear vision and renewed commitment.'
      },
      {
        year: 'Today',
        title: 'Current Impact: Continuous Transformation',
        description: 'Today, the Alegría Inocente Foundation not only delivers material aid, but builds bridges of hope, education, and opportunities for thousands of families in the most vulnerable areas of the Dominican Republic. We continue committed to our mission of bringing joy and hope, expanding our reach and strengthening our programs to create lasting and transformative impact.'
      }
    ],
    location: 'Constanza, La Vega, Dominican Republic',
      footer: '© 2026 Alegría Inocente Foundation. All rights reserved.',
      madeWith: 'Made with',
      nav: ['Home', 'History', 'Mission', 'Focus', 'Team', 'Impact', 'Donate'],
    mission: {
      tag: 'Our Mission',
      title: 'Mission',
      text: 'We are a non-profit organization committed to promoting the right of every person, especially children and youth, to enjoy a dignified and full life with equal opportunities, in order to improve, enrich and contribute to the quality of life of the less privileged.'
    },
    vision: {
      tag: 'Our Vision',
      title: 'Vision',
      text: 'We believe in the human capacity to build a more equitable and just world where every person can have a dignified life and meet their basic needs.'
    },
    values: {
      tag: 'Our Values',
      title: 'Fundamental Values',
      items: [
        {
          title: 'Commitment',
          description: 'Constant dedication to the most vulnerable communities.',
          icon: Heart
        },
        {
          title: 'Transparency',
          description: 'Honesty and clarity in all our actions and resources.',
          icon: Eye
        },
        {
          title: 'Solidarity',
          description: 'Working together for the common good.',
          icon: Hand
        },
        {
          title: 'Excellence',
          description: 'Constant pursuit of the best way to serve.',
          icon: Award
        }
      ]
    },
    founders: {
      tag: 'Founders',
      title: 'The Faces Behind the Foundation',
      subtitle: 'Meet the people who brought this dream to life',
      bernardo: {
        name: 'Bernardo Pastiño',
        role: 'President & Founder',
        bio: 'Leader and founder since 2011. Has transformed a simple idea of helping into a structured organization that impacts thousands of lives.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop'
      },
      anthony: {
        name: 'Anthony Quezada',
        role: 'Co-Founder',
        bio: 'Together with Bernardo Pastiño, took the first steps of the foundation. His determination to help the children of Los Limoncitos was fundamental.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84a45d3d?q=80&w=400&h=400&fit=crop'
      },
      marleny: {
        name: 'Marleny Duran',
        role: 'Founder & Main Sponsor',
        bio: 'Main sponsor since the beginning. She gave the name FUNDACIÓN ALEGRÍA INOCENTE and continues to support from the U.S.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop'
      },
      juan: {
        name: 'Juan Angustia',
        role: 'International Representative',
        bio: 'Joined in 2013 expanding international reach. Has established global connections and is responsible for design and institutional image.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&fit=crop'
      }
    },
    activeMembers: {
      tag: 'Active Members',
      title: 'Our Team',
      subtitle: 'Committed professionals who make our mission possible',
      awilda: {
        name: 'Awilda Hernández',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop'
      },
      member1: {
        name: 'María Rodríguez',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop'
      },
      member2: {
        name: 'Carlos Martínez',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop'
      },
      member3: {
        name: 'Ana García',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&fit=crop'
      },
      member4: {
        name: 'Luis Pérez',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84a45d3d?q=80&w=400&h=400&fit=crop'
      },
      member5: {
        name: 'Sofía Fernández',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&h=400&fit=crop'
      },
      member6: {
        name: 'Roberto Sánchez',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&fit=crop'
      },
      member7: {
        name: 'Carmen López',
        image: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=400&h=400&fit=crop'
      },
      member8: {
        name: 'José Ramírez',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop'
      }
    },
    faq: {
      tag: 'Frequently Asked Questions',
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to the most common questions about our foundation',
      items: [
        {
          question: 'What is the Alegría Inocente Foundation?',
          answer: 'The Alegría Inocente Foundation is a non-profit organization committed to promoting the right of every person, especially children and youth, to enjoy a dignified and full life with equal opportunities. We work to improve, enrich and contribute to the quality of life of the less privileged in vulnerable communities in the Dominican Republic.'
        },
        {
          question: 'When was the organization founded?',
          answer: 'The foundation began in 2011 in the municipality of Constanza, La Vega Province, when a group of young people decided to help children in the Los Limoncitos community who had not started the school year due to lack of school supplies. What began as a simple gesture of generosity became a structured organization that impacts thousands of lives.'
        },
        {
          question: 'Where does the foundation operate?',
          answer: 'Our main effort focuses on reaching the most remote and rural areas of the municipality of Constanza, bringing direct relief where others do not reach. We also have international presence through our international representative.'
        },
        {
          question: 'How can I make a donation?',
          answer: 'You can make a donation through our website. Every contribution, regardless of size, helps transform lives and create a positive impact in the most vulnerable communities. All donations are used directly to support our social assistance programs.'
        },
        {
          question: 'What kind of help does the foundation provide?',
          answer: 'We provide school supplies, toys, food, clothing and other essential resources to families in vulnerable communities. We also work on educational and community development programs to create sustainable and transformative impact.'
        },
        {
          question: 'How can I volunteer?',
          answer: 'If you are interested in volunteering, you can contact us through our website or social media. We value the support of committed people who want to contribute their time and skills to help our communities.'
        },
        {
          question: 'Is the foundation transparent with its resources?',
          answer: 'Yes, transparency is one of our fundamental values. We maintain honesty and clarity in all our actions and resources. We are committed to using every donation responsibly and efficiently to maximize our impact.'
        }
      ]
    }
  }
};

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 md:px-8 py-6 md:py-7 flex items-center justify-between text-left group"
      >
        <h3 className="text-lg md:text-xl font-black text-slate-900 pr-4 group-hover:text-[#e4002b] transition-colors">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="text-slate-400 group-hover:text-[#e4002b] transition-colors" size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 md:pb-7">
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

function HistoryContent() {
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    // Si hay un hash en la URL, hacer scroll al elemento
    if (window.location.hash === '#inicio') {
      const element = document.getElementById('inicio');
      if (element) {
        setTimeout(() => {
          const offset = 100; // Offset para el header sticky
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      // Si no hay hash, hacer scroll al top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Minimal Header */}
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

      {/* Hero Section - Clean & Modern */}
      <section id="inicio" className="pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.15em] mb-6 text-[#e4002b] border border-[#e4002b]/20">
                {t.tag}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95] text-slate-900 tracking-tight">
                {t.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                {t.subtitle}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - First Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.15em] mb-4 text-slate-400"
              >
                {lang === 'es' ? 'Filosofía Institucional' : 'Institutional Philosophy'}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black text-slate-900"
              >
                {lang === 'es' ? 'Nuestros Pilares' : 'Our Pillars'}
              </motion.h2>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 border border-slate-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#e4002b] flex items-center justify-center flex-shrink-0">
                    <Target className="text-white" size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#e4002b] block mb-2">
                      {t.mission.tag}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900">{t.mission.title}</h3>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">{t.mission.text}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-8 border border-slate-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#009640] flex items-center justify-center flex-shrink-0">
                    <Eye className="text-white" size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#009640] block mb-2">
                      {t.vision.tag}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900">{t.vision.title}</h3>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">{t.vision.text}</p>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  {t.values.tag}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">{t.values.title}</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {t.values.items.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="bg-slate-50 rounded-lg p-6 border border-slate-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                      <value.icon className="text-[#e4002b]" size={20} />
                    </div>
                    <h4 className="text-lg font-black text-slate-900 mb-2">{value.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Modern Design */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.15em] mb-4 text-slate-400"
              >
                {t.timeline.tag}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black text-slate-900 mb-3"
              >
                {t.timeline.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-slate-500"
              >
                {t.timeline.subtitle}
              </motion.p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line - Centrada en las fechas, color gris, detrás del contenido */}
              <div className="absolute left-[3.5rem] md:left-[4.5rem] top-0 bottom-0 w-0.5 bg-slate-300 z-0" />

              <div className="relative z-10">
                {t.sections.map((item, index) => {
                  const isLast = index === t.sections.length - 1;
                  const isFirst = index === 0;
                  const isToday = item.year.toLowerCase() === 'hoy' || item.year.toLowerCase() === 'today';
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="relative flex items-start gap-6 md:gap-8 py-6 md:py-8"
                    >
                      {/* Year Badge - Sin recuadro, solo texto grande y bold en negro */}
                      <div className="w-28 md:w-36 flex-shrink-0 md:text-right relative py-8 md:py-12">
                        {/* Mask para ocultar la línea detrás de la fecha */}
                        <div className="absolute left-[3.5rem] md:left-[4.5rem] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-slate-50 rounded-full z-15" />
                        
                        <span className="text-3xl md:text-5xl font-black block text-slate-900 relative z-20">
                          {item.year}
                        </span>
                      </div>
                      
                      {/* Content Card - Alineada siempre a la derecha */}
                      <div className="flex-1 md:pl-8">
                        <div className={`rounded-[2rem] border p-6 md:p-8 transition-all duration-300 shadow-sm hover:shadow-lg focus:outline-none focus-visible:outline-none hover:outline-none ${
                          isToday
                            ? 'bg-gradient-to-br from-[#009640] to-[#009640]/90 text-white border-[#009640]'
                            : 'bg-white border-slate-200 hover:border-[#e4002b] hover:shadow-xl'
                        }`}>
                          <h3 className={`text-xl md:text-2xl font-black mb-3 ${
                            isToday ? 'text-white' : 'text-slate-900'
                          }`}>
                            {item.title}
                          </h3>
                          <p className={`leading-relaxed text-sm md:text-base ${
                            isToday ? 'text-white/90' : 'text-slate-600'
                          }`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.15em] mb-4 text-slate-400"
              >
                {t.founders.tag}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black text-slate-900 mb-3"
              >
                {t.founders.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-slate-500"
              >
                {t.founders.subtitle}
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { key: 'bernardo', delay: 0.1, color: '#0066cc' },
                { key: 'anthony', delay: 0.2, color: '#f39200' },
                { key: 'marleny', delay: 0.3, color: '#e4002b' },
                { key: 'juan', delay: 0.4, color: '#009640' }
              ].map((founder) => {
                const founderData = t.founders[founder.key];
                return (
                  <motion.div
                    key={founder.key}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: founder.delay, ease: "easeOut" }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group relative bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden text-center"
                  >
                    <div className="pt-12 pb-10 px-8 flex flex-col items-center">
                      <div className="relative mb-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                          <img 
                            src={founderData.image} 
                            alt={founderData.name} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                          />
                        </div>
                        <div 
                          className="absolute -inset-2 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ 
                            background: `radial-gradient(circle, ${founder.color}20 0%, transparent 70%)`
                          }}
                        />
                      </div>

                      <h3 className="text-2xl font-black text-slate-900 mb-1">{founderData.name}</h3>
                      <p 
                        className="font-bold text-[10px] uppercase tracking-widest mb-6"
                        style={{ color: founder.color }}
                      >
                        {founderData.role}
                      </p>
                      
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {founderData.bio}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Active Members Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.15em] mb-4 text-slate-400"
              >
                {t.activeMembers.tag}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black text-slate-900 mb-3"
              >
                {t.activeMembers.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-slate-500"
              >
                {t.activeMembers.subtitle}
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { key: 'awilda', delay: 0.1, color: '#0066cc' },
                { key: 'member1', delay: 0.2, color: '#f39200' },
                { key: 'member2', delay: 0.3, color: '#e4002b' },
                { key: 'member3', delay: 0.4, color: '#009640' },
                { key: 'member4', delay: 0.5, color: '#0066cc' },
                { key: 'member5', delay: 0.6, color: '#f39200' },
                { key: 'member6', delay: 0.7, color: '#e4002b' },
                { key: 'member7', delay: 0.8, color: '#009640' },
                { key: 'member8', delay: 0.9, color: '#0066cc' }
              ].map((member) => {
                const memberData = t.activeMembers[member.key];
                return (
                  <motion.div
                    key={member.key}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: member.delay, ease: "easeOut" }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group relative bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden text-center"
                  >
                    <div className="pt-12 pb-10 px-8 flex flex-col items-center">
                      <div className="relative mb-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                          <img 
                            src={memberData.image} 
                            alt={memberData.name} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                          />
                        </div>
                        <div 
                          className="absolute -inset-2 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ 
                            background: `radial-gradient(circle, ${member.color}20 0%, transparent 70%)`
                          }}
                        />
                      </div>

                      <h3 className="text-xl font-black text-slate-900">{memberData.name}</h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.15em] mb-4 text-slate-400"
              >
                {t.faq.tag}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black text-slate-900 mb-3"
              >
                {t.faq.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-slate-500"
              >
                {t.faq.subtitle}
              </motion.p>
            </div>

            <div className="space-y-4">
              {t.faq.items.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg border border-slate-200">
                <MapPin className="text-[#e4002b]" size={16} />
                <span className="text-slate-700 font-medium text-sm">
                  {t.location}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                {lang === 'es' ? 'Únete a Nuestra Misión' : 'Join Our Mission'}
              </h2>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                {lang === 'es'
                  ? 'Cada pequeño gesto puede transformar vidas. Sé parte del cambio que queremos ver en el mundo.'
                  : 'Every small gesture can transform lives. Be part of the change we want to see in the world.'
                }
              </p>
              <Link
                to="/#donar"
                className="inline-flex items-center gap-2 bg-[#e4002b] text-white px-8 py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-[#e4002b]/90 transition-all"
              >
                {lang === 'es' ? 'Haz una Donación' : 'Make a Donation'}
                <Heart size={16} fill="currentColor" />
              </Link>
            </motion.div>
          </div>
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
                    const href = item.toLowerCase() === 'inicio' || item.toLowerCase() === 'home' 
                      ? '/' 
                      : item.toLowerCase() === 'historia' || item.toLowerCase() === 'history'
                      ? '/historia'
                      : `#${item.toLowerCase()}`;
                    return (
                      <li key={item}>
                        <Link to={href.startsWith('#') ? '/' : href} className="hover:text-[#e4002b] transition-colors">
                          {item}
                        </Link>
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

export default function History() {
  return <HistoryContent />;
}
