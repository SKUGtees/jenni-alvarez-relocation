// Smooth scroll for in-page anchor nav links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var id = link.getAttribute('href');
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    var nav = document.getElementById('main-nav');
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      document.getElementById('nav-toggle').setAttribute('aria-expanded', 'false');
    }
  });
});

// Mobile nav toggle
var navToggle = document.getElementById('nav-toggle');
var mainNav = document.getElementById('main-nav');
navToggle.addEventListener('click', function () {
  var isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Language toggle (EN / ES)
var translations = {
  en: {
    'nav.services': 'Services',
    'nav.process': 'How It Works',
    'nav.about': 'About',
    'nav.testimonials': 'Testimonials',
    'nav.tips': 'Tips',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.whatsapp': 'WhatsApp',
    'hero.eyebrow': 'Mérida & Progreso, Yucatán · Relocation & Residency Specialist',
    'hero.title': 'Get your Mexican residency<br><span class="accent">the right way.</span>',
    'hero.subtitle': 'Personalized guidance through every step of your immigration and relocation process — so your move to Mexico feels exciting, not overwhelming.',
    'hero.cta1': 'Schedule your consultation',
    'hero.cta2': 'See services',
    'hero.trust1': 'Trusted',
    'hero.trust2': 'Reliable',
    'hero.trust3': 'Personalized Service',
    'services.title': 'How I can help',
    'services.subtitle': 'Certified relocation specialist support, from your first appointment to life fully settled in Mérida.',
    'services.card1.title': 'Residency Applications',
    'services.card1.body': 'Temporary and permanent residency applications and renewals, handled start to finish.',
    'services.card2.title': 'Immigration & Document Guidance',
    'services.card2.body': 'Document preparation and visa application support, reviewed carefully so nothing gets rejected.',
    'services.card3.title': 'RFC Assistance',
    'services.card3.body': 'Help registering for your RFC (Federal Taxpayers Registry), a key step for banking and daily life in Mexico.',
    'services.card4.title': 'Bank Account Opening',
    'services.card4.body': 'Guidance opening a Mexican bank account, with the right paperwork ready in advance.',
    'services.card5.title': 'Real Estate & Property Management',
    'services.card5.body': "Support finding a home in Mérida and ongoing property management once you're settled.",
    'services.card6.title': 'Relocation Assistance',
    'services.card6.body': 'Full relocation support for individuals and families, plus advice before and after your move.',
    'process.title': 'I take care of everything',
    'process.subtitle': "From the U.S. to your new life in Mexico — here's how the residency process works with me.",
    'process.step1.title': 'Consulate Appointment',
    'process.step1.body': 'I secure your appointment at the Mexican Consulate in the U.S.',
    'process.step2.title': 'Document Review',
    'process.step2.body': 'I review your documents to make sure everything is correct and complete.',
    'process.step3.title': 'Exchange in Mexico',
    'process.step3.body': 'I assist you with the exchange process in Mexico so you can receive your residency card.',
    'process.note': "I'll guide you every step of the way, so you can enjoy the benefits of living in Mexico with peace of mind.",
    'about.title': 'About Jenni Alvarez Relocation Services',
    'about.p1': 'Moving to Mexico should be exciting — not overwhelming. I help expatriates, retirees, digital nomads, families, and remote workers relocate to Mérida, Progreso, and the surrounding Yucatán coast with confidence.',
    'about.p2': 'I provide personalized guidance through every step of the immigration and relocation process, making your transition as smooth and stress-free as possible — every client gets honest communication, reliable support, and a service tailored to their unique situation.',
    'about.p3': "Whether you're still planning your move or already in Mexico, I'm here to help you navigate the process with clarity and peace of mind.",
    'about.areas': 'Proudly serving clients across Mérida, Progreso, and the greater Yucatán Peninsula.',
    'about.cta': "Let's talk about your move",
    'testimonials.title': 'Real clients, residency cards in hand',
    'testimonials.subtitle': "A few of the people I've walked through the process, right outside the immigration office in Mérida.",
    'testimonials.quote1.text': '"Excellent service — Jenni is very professional, and in a short time I got my permanent residency in Mexico. Thank you, Jenni, I highly recommend her!"',
    'testimonials.quote1.source': 'Facebook review',
    'testimonials.quote2.text': '"I cannot recommend Jenni enough! She is an incredibly knowledgeable, bilingual relocation specialist who made moving to Mexico an absolute breeze. She perfectly guided my husband and I through every step of getting our residency, opening a local bank account, and securing our RFC. Having her translate and explain everything made it seamless and completely stress free."',
    'testimonials.quote2.source': 'Facebook review',
    'testimonials.quote3.text': "\"Jenny is an incredibly helpful person who goes out of her way to assist others. Whether it's offering guidance, sharing valuable insights, or simply being there to support when needed, Jenny consistently demonstrates a genuine desire to help. Highly recommended!\"",
    'testimonials.quote3.source': 'Facebook review',
    'tips.title': 'Renewing or switching to permanent status?',
    'tips.subtitle': 'A few tips before you start.',
    'tips.tip1.title': '1. Start early',
    'tips.tip1.body': "You can begin the process one month before your expiration date. The sooner you start, the better your chances of getting it — waiting until the last minute leaves no room for errors or rejections, and if your residency expires while you're in Mexico, you'll have to start over from scratch.",
    'tips.tip2.title': '2. Appointments are online',
    'tips.tip2.body': "Renewals and changes to permanent residency are done through the immigration system's online appointment calendar.",
    'tips.tip3.title': '3. Plan ahead',
    'tips.tip3.body': "There's a three-week lag in the appointment calendar. I recommend starting the scheduling process about a month before expiration.",
    'tips.tip4.title': '4. Requirements may have changed',
    'tips.tip4.body': "Many people who obtained residency under a previous administration weren't required to submit certain documents that may now be mandatory. Scheduling in advance helps you avoid surprises.",
    'tips.tip5.title': '5. Keep your information updated',
    'tips.tip5.body': "All your details must match what you originally registered with immigration, including your address. If you've moved, you'll first need to file a change-of-address notification — a separate procedure that also requires an online appointment.",
    'tips.tip6.title': '6. Plan your travel',
    'tips.tip6.body': 'If approved, your new residency card is usually issued the same day, but delays can happen. Schedule any travel a few days after your appointment — otherwise you\'ll need an "exit permit without residency" and won\'t receive your card until you return to Mexico.',
    'faq.title': 'Frequently asked questions',
    'faq.subtitle': 'Common questions before you get started.',
    'faq.q1.q': 'How long does the residency process take?',
    'faq.q1.a': "It varies by case, but a typical temporary residency process runs a few months from your consulate appointment to receiving your card in Mexico. I'll give you a realistic timeline once I know your specific situation.",
    'faq.q2.q': "What's the difference between temporary and permanent residency?",
    'faq.q2.a': "Temporary residency is granted for a set period and can usually be renewed or upgraded; permanent residency has no expiration date. Which one fits you depends on factors like income, savings, family ties, or retirement status — I'll help you figure out which path applies.",
    'faq.q3.q': "Do I need to start the process in the U.S., or can I begin once I'm already in Mexico?",
    'faq.q3.a': "Most residency applications start with an appointment at a Mexican consulate outside Mexico. If you're already here on a tourist visa, we can talk through your options.",
    'faq.q4.q': 'Do you only work with clients in Mérida?',
    'faq.q4.a': 'No — while my office is in Mérida, I regularly work with clients relocating to Progreso and other communities across the Yucatán coast, in person and remotely.',
    'faq.q5.q': 'What documents will I need?',
    'faq.q5.a': 'This depends on the type of residency and your personal situation, but generally includes a valid passport, proof of income or savings meeting the current consulate requirements, and supporting documents like birth or marriage certificates for family applications. I review everything with you before your appointment so nothing gets rejected.',
    'faq.q6.q': 'Can my family apply together?',
    'faq.q6.a': 'Yes. Spouses and dependent children can generally apply as a family unit, and I coordinate the paperwork and appointments for everyone together.',
    'contact.title': 'Ready to get started?',
    'contact.subtitle': "Your new life in Mexico starts here. Let's make it simple.",
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.facebook': 'Facebook',
    'contact.note': 'We assist clients worldwide — schedule your consultation today.',
    'footer.tagline': 'Get your Mexican residency the right way.'
  },
  es: {
    'nav.services': 'Servicios',
    'nav.process': 'Cómo Funciona',
    'nav.about': 'Acerca de',
    'nav.testimonials': 'Testimonios',
    'nav.tips': 'Consejos',
    'nav.faq': 'Preguntas',
    'nav.contact': 'Contacto',
    'nav.whatsapp': 'WhatsApp',
    'hero.eyebrow': 'Mérida y Progreso, Yucatán · Especialista en Reubicación y Residencia',
    'hero.title': 'Obtén tu residencia mexicana<br><span class="accent">de la manera correcta.</span>',
    'hero.subtitle': 'Te acompaño personalmente en cada paso de tu proceso migratorio y de reubicación, para que tu mudanza a México se sienta emocionante, no abrumadora.',
    'hero.cta1': 'Agenda tu consulta',
    'hero.cta2': 'Ver servicios',
    'hero.trust1': 'De confianza',
    'hero.trust2': 'Confiable',
    'hero.trust3': 'Servicio personalizado',
    'services.title': 'Cómo puedo ayudarte',
    'services.subtitle': 'Apoyo de especialista certificada en reubicación, desde tu primera cita hasta que estés completamente instalado en Mérida.',
    'services.card1.title': 'Solicitudes de Residencia',
    'services.card1.body': 'Solicitudes y renovaciones de residencia temporal y permanente, gestionadas de principio a fin.',
    'services.card2.title': 'Asesoría Migratoria y de Documentos',
    'services.card2.body': 'Preparación de documentos y apoyo en solicitudes de visa, revisados con cuidado para que nada sea rechazado.',
    'services.card3.title': 'Trámite de RFC',
    'services.card3.body': 'Ayuda para registrarte en el RFC (Registro Federal de Contribuyentes), un paso clave para la banca y la vida diaria en México.',
    'services.card4.title': 'Apertura de Cuenta Bancaria',
    'services.card4.body': 'Guía para abrir una cuenta bancaria mexicana, con los documentos correctos listos con anticipación.',
    'services.card5.title': 'Bienes Raíces y Administración de Propiedades',
    'services.card5.body': 'Apoyo para encontrar un hogar en Mérida y administración continua de tu propiedad una vez instalado.',
    'services.card6.title': 'Asistencia en la Reubicación',
    'services.card6.body': 'Apoyo completo de reubicación para individuos y familias, además de asesoría antes y después de tu mudanza.',
    'process.title': 'Yo me encargo de todo',
    'process.subtitle': 'De Estados Unidos a tu nueva vida en México — así funciona el proceso de residencia conmigo.',
    'process.step1.title': 'Cita Consular',
    'process.step1.body': 'Aseguro tu cita en el Consulado de México en Estados Unidos.',
    'process.step2.title': 'Revisión de Documentos',
    'process.step2.body': 'Reviso tus documentos para asegurarme de que todo esté correcto y completo.',
    'process.step3.title': 'Canje en México',
    'process.step3.body': 'Te acompaño en el proceso de canje en México para que recibas tu tarjeta de residencia.',
    'process.note': 'Te guiaré en cada paso del camino, para que disfrutes los beneficios de vivir en México con total tranquilidad.',
    'about.title': 'Acerca de Jenni Alvarez Relocation Services',
    'about.p1': 'Mudarte a México debería ser emocionante, no abrumador. Ayudo a expatriados, jubilados, nómadas digitales, familias y trabajadores remotos a reubicarse en Mérida, Progreso y la costa yucateca con confianza.',
    'about.p2': 'Te brindo orientación personalizada en cada paso del proceso migratorio y de reubicación, haciendo tu transición lo más fluida y libre de estrés posible — cada cliente recibe comunicación honesta, apoyo confiable y un servicio adaptado a su situación particular.',
    'about.p3': 'Ya sea que estés planeando tu mudanza o ya estés en México, estoy aquí para ayudarte a navegar el proceso con claridad y tranquilidad.',
    'about.areas': 'Con orgullo atiendo a clientes en Mérida, Progreso y toda la Península de Yucatán.',
    'about.cta': 'Hablemos de tu mudanza',
    'testimonials.title': 'Clientes reales, tarjeta de residencia en mano',
    'testimonials.subtitle': 'Algunas de las personas a quienes he acompañado en el proceso, justo afuera de la oficina de migración en Mérida.',
    'testimonials.quote1.text': '"Excelente servicio, Jenni es muy profesional y en poco tiempo logré mi residencia permanente en México, gracias Jenni la súper recomiendo."',
    'testimonials.quote1.source': 'Reseña de Facebook',
    'testimonials.quote2.text': '"¡No puedo recomendar a Jenni lo suficiente! Es una especialista en reubicación increíblemente conocedora y bilingüe que hizo que mudarme a México fuera pan comido. Nos guio perfectamente a mi esposo y a mí en cada paso para obtener nuestra residencia, abrir una cuenta bancaria local y tramitar nuestro RFC. Tradujo y explicó todo de forma clara, sin ningún estrés."',
    'testimonials.quote2.source': 'Reseña de Facebook',
    'testimonials.quote3.text': '"Jenny es una persona increíblemente servicial que siempre hace lo posible por ayudar a los demás. Ya sea ofreciendo orientación, compartiendo información valiosa o simplemente estando ahí para apoyar cuando se necesita, Jenny demuestra constantemente un deseo genuino de ayudar. ¡Altamente recomendada!"',
    'testimonials.quote3.source': 'Reseña de Facebook',
    'tips.title': '¿Renovando o cambiando a residente permanente?',
    'tips.subtitle': 'Algunos consejos antes de comenzar.',
    'tips.tip1.title': '1. Empieza temprano',
    'tips.tip1.body': 'Puedes iniciar el proceso un mes antes de tu fecha de vencimiento. Entre antes empieces, mejores serán tus posibilidades — esperar hasta el último momento no deja margen para errores o rechazos, y si tu residencia vence estando en México, tendrás que empezar de nuevo.',
    'tips.tip2.title': '2. Las citas son en línea',
    'tips.tip2.body': 'Las renovaciones y los cambios a residencia permanente se realizan a través del calendario de citas en línea del sistema de migración.',
    'tips.tip3.title': '3. Planea con anticipación',
    'tips.tip3.body': 'Hay un retraso de tres semanas en el calendario de citas. Recomiendo comenzar el proceso de agendar una cita aproximadamente un mes antes del vencimiento.',
    'tips.tip4.title': '4. Los requisitos pueden haber cambiado',
    'tips.tip4.body': 'Muchas personas que obtuvieron su residencia bajo una administración anterior no tuvieron que presentar ciertos documentos que ahora pueden ser obligatorios. Agendar con anticipación te ayuda a evitar sorpresas.',
    'tips.tip5.title': '5. Mantén tu información actualizada',
    'tips.tip5.body': 'Todos tus datos deben coincidir con lo que registraste originalmente ante migración, incluyendo tu domicilio. Si te mudaste, primero deberás presentar un aviso de cambio de domicilio, un trámite aparte que también requiere cita en línea.',
    'tips.tip6.title': '6. Planea tus viajes',
    'tips.tip6.body': 'Si tu trámite es aprobado, tu nueva tarjeta de residencia normalmente se emite el mismo día, pero pueden ocurrir demoras. Programa cualquier viaje unos días después de tu cita — de lo contrario necesitarás un "permiso de salida sin residencia" y no recibirás tu tarjeta hasta que regreses a México.',
    'faq.title': 'Preguntas frecuentes',
    'faq.subtitle': 'Dudas comunes antes de comenzar.',
    'faq.q1.q': '¿Cuánto tiempo toma el proceso de residencia?',
    'faq.q1.a': 'Varía según el caso, pero un proceso típico de residencia temporal toma unos meses, desde tu cita consular hasta recibir tu tarjeta en México. Te daré un calendario realista una vez que conozca tu situación específica.',
    'faq.q2.q': '¿Cuál es la diferencia entre residencia temporal y permanente?',
    'faq.q2.a': 'La residencia temporal se otorga por un periodo determinado y generalmente puede renovarse o cambiarse a permanente; la residencia permanente no tiene fecha de vencimiento. Cuál te conviene depende de factores como ingresos, ahorros, vínculos familiares o estatus de jubilado — te ayudo a identificar qué camino aplica en tu caso.',
    'faq.q3.q': '¿Necesito iniciar el proceso en Estados Unidos, o puedo comenzar estando ya en México?',
    'faq.q3.a': 'La mayoría de las solicitudes de residencia inician con una cita en un consulado mexicano fuera de México. Si ya estás aquí con una visa de turista, podemos platicar sobre tus opciones.',
    'faq.q4.q': '¿Solo trabajas con clientes en Mérida?',
    'faq.q4.a': 'No — aunque mi oficina está en Mérida, trabajo regularmente con clientes que se reubican en Progreso y otras comunidades de la costa yucateca, tanto en persona como a distancia.',
    'faq.q5.q': '¿Qué documentos voy a necesitar?',
    'faq.q5.a': 'Depende del tipo de residencia y tu situación personal, pero generalmente incluye pasaporte vigente, comprobante de ingresos o ahorros que cumpla con los requisitos actuales del consulado, y documentos de soporte como actas de nacimiento o matrimonio para solicitudes familiares. Reviso todo contigo antes de tu cita para que nada sea rechazado.',
    'faq.q6.q': '¿Puede mi familia solicitar junto conmigo?',
    'faq.q6.a': 'Sí. Cónyuges e hijos dependientes generalmente pueden solicitar como unidad familiar, y yo coordino los documentos y las citas de todos en conjunto.',
    'contact.title': '¿Listo para comenzar?',
    'contact.subtitle': 'Tu nueva vida en México comienza aquí. Hagámoslo simple.',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Correo',
    'contact.facebook': 'Facebook',
    'contact.note': 'Atendemos clientes en todo el mundo — agenda tu consulta hoy.',
    'footer.tagline': 'Obtén tu residencia mexicana de la manera correcta.'
  }
};

var htmlKeys = { 'hero.title': true };
var langToggle = document.getElementById('lang-toggle');
var currentLang = localStorage.getItem('jar-lang') || 'en';

function applyLanguage(lang) {
  var dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    var value = dict[key];
    if (value === undefined) return;
    if (htmlKeys[key]) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });
  document.documentElement.lang = lang;
  langToggle.textContent = lang === 'en' ? 'ES' : 'EN';
  currentLang = lang;
  localStorage.setItem('jar-lang', lang);
}

langToggle.addEventListener('click', function () {
  applyLanguage(currentLang === 'en' ? 'es' : 'en');
});

applyLanguage(currentLang);
