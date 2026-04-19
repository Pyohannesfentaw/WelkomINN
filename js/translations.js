/**
 * WELKOMME-INN — Translation Strings
 * ─────────────────────────────────────────────────────────────
 * Keys use underscore-prefixed section names for clarity:
 *   nav_*         Navigation
 *   hero_*        Hero section
 *   stats_*       Stats strip
 *   about_*       About / Why Us
 *   services_*    Services cards
 *   how_*         How It Works
 *   areas_*       Service areas
 *   pricing_*     Pricing section
 *   properties_*  Available rentals
 *   contact_*     Contact section
 *   form_*        Contact form
 *   reviews_*     Reviews / testimonials
 *   blog_*        Owner resources / blog
 *   faq_*         FAQ accordion
 *   cta_*         Final CTA banner
 *   footer_*      Footer
 *
 * Values may contain HTML (e.g. <em>, <strong>) — applied via innerHTML.
 * Proper nouns (Pedro Almeida, Portimão, SEF, Airbnb, etc.) are kept
 * unchanged across languages as they are brand/place names.
 *
 * SCALING TIP:
 *   When this file grows, split into:
 *     i18n/en.js  →  export default { ... }
 *     i18n/pt.js  →  export default { ... }
 *     i18n/es.js  →  export default { ... }
 *   and import them in a loader:
 *     i18n/index.js  →  import en from './en.js'; ...
 */

window.translations = {

  /* ══════════════════════════════════════════════════════════
     ENGLISH  (default / fallback)
     ══════════════════════════════════════════════════════════ */
  en: {

    /* ── Navigation ───────────────────────────────────────── */
    nav_why:       'Why Us',
    nav_services:  'Services',
    nav_how:       'How It Works',
    nav_pricing:   'Pricing',
    nav_rentals:   'Rentals',
    nav_contact:   'Contact',
    nav_cta:       'Free Assessment',

    /* ── Hero ─────────────────────────────────────────────── */
    hero_badge:         'Based in Portimão, Algarve',
    hero_title:         'Property management that <em>actually works.</em>',
    hero_subtitle:      'Run by Pedro Almeida — a small, dedicated team managing Airbnb and short-term rentals in Portimão. Direct communication. Fast action. Full accountability.',
    hero_cta_primary:   'Get a Free Assessment',
    hero_cta_secondary: 'See How It Works',
    hero_scroll:        'Scroll',

    /* ── Stats strip ──────────────────────────────────────── */
    stats_properties_label: 'Properties managed',
    stats_rating_label:     'Average guest rating',
    stats_years_suffix:     '+ yrs',
    stats_years_label:      'In Portimão',
    stats_support_label:    'Guest support',

    /* ── About ────────────────────────────────────────────── */
    about_label:   'Why WELKOMME-INN',
    about_heading: 'Your property, managed by people who actually show up',
    about_text:    'I\'m Pedro Almeida. I run WELKOMME-INN with a small, dedicated team in Portimão. We\'re not an agency with hundreds of properties and a call centre you can\'t reach. <strong>You deal directly with me.</strong> When a guest has a problem at 11pm, I handle it. When a pipe bursts, I\'m there. We manage everything — from professional photography and listing setup to cleaning, maintenance, SEF registration and tourist tax. <strong>No middlemen. No delays. Just the work, done properly.</strong>',
    about_cta:     'Browse managed properties',

    /* ── Services ─────────────────────────────────────────── */
    services_label:   'What we manage',
    services_heading: 'Everything your rental needs, handled',

    services_card1_title: 'Advertising &amp; Bookings',
    services_card1_i1:    'Airbnb &amp; Booking.com ads',
    services_card1_i2:    'Professional photography',
    services_card1_i3:    'Price optimisation',
    services_card1_i4:    'Interior consulting',
    services_card1_i5:    'Calendar &amp; booking management',

    services_card2_title: 'Property Management',
    services_card2_i1:    'Professional cleaning',
    services_card2_i2:    'Linens, towels &amp; toiletries',
    services_card2_i3:    'Maintenance &amp; repairs',
    services_card2_i4:    'Property insurance support',
    services_card2_i5:    'Owner access area',

    services_card3_title: 'Guest Management',
    services_card3_i1:    'Guest verification',
    services_card3_i2:    'Check-in &amp; check-out',
    services_card3_i3:    'SEF registration',
    services_card3_i4:    'Tourist tax handling',
    services_card3_i5:    '24/7 guest support',
    services_card3_i6:    'Personalised guest guides',

    services_cta: 'Get a free property assessment',

    /* ── How It Works ─────────────────────────────────────── */
    how_label:   'How it works',
    how_heading: 'From first call to first booking',
    how_sub:     'No lengthy contracts. No complicated setup. Pedro visits your property, assesses what\'s needed, and gets things running — usually within a week.',

    how_title: 'Talk to Pedro. Get started fast.',
    how_desc:  'No complicated onboarding. Call or WhatsApp me, tell me about your property, and I\'ll come take a look. We agree on what you need and I get to work — usually within days.',

    how_step1_title: 'Free property assessment',
    how_step1_desc:  'I visit your property, check the condition, review your current listing setup, and discuss your goals.',

    how_step2_title: 'Custom management plan',
    how_step2_desc:  'You get a clear proposal — which services you need, what it costs, and when we start. No hidden fees.',

    how_step3_title: 'Photography, listing, and go live',
    how_step3_desc:  'We photograph the property, optimise or create your listings, set up cleaning schedules, and start accepting bookings.',

    /* ── Areas ────────────────────────────────────────────── */
    areas_label:      'Service area',
    areas_heading:    'Where we operate',
    areas_sub:        'We operate exclusively in Portimão — keeping our area tight so Pedro can be on-site fast, every time.',
    areas_pin:        'Portimão, Algarve · Portugal',
    areas_city:       'Portimão',
    areas_desc:       'Our home base and the only place we operate. City centre apartments, riverside rentals, beachfront properties at Praia da Rocha, and villas near Alvor — all within Portimão municipality, all within reach.',
    areas_tag1:       'Portimão Centre',
    areas_tag2:       'Praia da Rocha',
    areas_tag3:       'Alvor',
    areas_stat1_num:  '~30m',
    areas_stat1_label:'On-site response',
    areas_stat2_num:  '1',
    areas_stat2_label:'City. Done well.',

    /* ── Pricing ──────────────────────────────────────────── */
    pricing_label:   'Management pricing',
    pricing_heading: 'Honest pricing, no hidden fees',
    pricing_sub:     'You pay a percentage of your rental income. When your property earns, we earn. Pricing is tailored to your property — contact Pedro for a quote.',
    pricing_popular: 'Most popular',

    pricing_tier1:  'Essential',
    pricing_price1: '15%',
    pricing_per1:   'of rental income',
    pricing_desc1:  'For owners who manage their own bookings but need reliable local support on the ground.',
    pricing_f1_1:   'Professional cleaning between guests',
    pricing_f1_2:   'Linens, towels &amp; toiletries',
    pricing_f1_3:   'Guest check-in &amp; check-out',
    pricing_f1_4:   'Key management',
    pricing_f1_5:   'Basic maintenance coordination',
    pricing_f1_6:   'SEF registration &amp; tourist tax',
    pricing_cta1:   'Talk to Pedro',

    pricing_tier2:  'Full management',
    pricing_price2: '20%',
    pricing_per2:   'of rental income',
    pricing_desc2:  'Complete hands-off management. We handle everything from photography to guest checkout. You collect the income.',
    pricing_f2_1:   'Everything in Essential',
    pricing_f2_2:   'Professional photography &amp; listing creation',
    pricing_f2_3:   'Interior consulting &amp; staging advice',
    pricing_f2_4:   'Dynamic pricing &amp; ad management',
    pricing_f2_5:   'Full guest communication (24/7)',
    pricing_f2_6:   'Guest verification &amp; personalised guides',
    pricing_f2_7:   'Maintenance, repairs &amp; insurance support',
    pricing_f2_8:   'Owner access area &amp; monthly reporting',
    pricing_cta2:   'Get a free assessment',

    /* ── Properties ───────────────────────────────────────── */
    properties_label:   'Available rentals',
    properties_heading: 'Book a stay in Portimão',
    properties_sub:     'Looking for a holiday rental in Portimão? All our properties are professionally managed, spotlessly clean, and locally supported. Contact Pedro for current availability.',

    prop1_badge: 'Superhost',
    prop1_loc:   'Portimão Centre',
    prop1_title: 'Modern 2-bed with river views',
    prop1_meta:  '2 bedrooms · 1 bath · 4 guests',
    prop1_price: '€85',
    prop1_per:   '/ night',

    prop2_badge: 'Top rated',
    prop2_loc:   'Praia da Rocha',
    prop2_title: 'Bright studio steps from the beach',
    prop2_meta:  'Studio · 1 bath · 2 guests',
    prop2_price: '€65',
    prop2_per:   '/ night',

    prop3_badge: 'New listing',
    prop3_loc:   'Alvor',
    prop3_title: '3-bed house with private pool',
    prop3_meta:  '3 bedrooms · 2 baths · 6 guests',
    prop3_price: '€145',
    prop3_per:   '/ night',

    properties_cta: 'Contact Pedro for availability',

    /* ── Contact ──────────────────────────────────────────── */
    contact_label:   'Get in touch',
    contact_heading: 'Talk to Pedro directly',
    contact_sub:     'Property owner or guest — you get the same fast response. No forms, no waiting. Just call, message, or email.',

    contact_phone_title: 'Phone / WhatsApp',
    contact_phone_desc:  'Call or message Pedro directly. No call centre, no queue.',

    contact_email_title: 'Email',
    contact_email_desc:  'For property enquiries, assessment requests, or guest questions.',

    contact_loc_title: 'Location',
    contact_loc_desc:  'Beco Três Castelos, Torre Verde',
    contact_loc_val:   'Portimão, Algarve · Portugal',

    /* ── Contact form ─────────────────────────────────────── */
    form_heading:            'Request a free assessment',
    form_desc:               'Tell us about your property and we\'ll be in touch within 24 hours.',
    form_label_name:         'Full name *',
    form_placeholder_name:   'Your name',
    form_label_email:        'Email address *',
    form_placeholder_email:  'you@example.com',
    form_label_phone:        'Phone / WhatsApp',
    form_placeholder_phone:  '+351 …',
    form_label_type:         'I am a…',
    form_option_default:     'Select one',
    form_option_owner:       'Property owner',
    form_option_guest:       'Guest / tourist',
    form_option_other:       'Other',
    form_label_msg:          'Message *',
    form_placeholder_msg:    'Tell us about your property or question…',
    form_submit:             'Send message',
    form_success_title:      'Message sent!',
    form_success_desc:       'Pedro will be in touch within 24 hours. You can also reach him directly at <strong>+351 927 970 151</strong>.',

    /* ── Reviews ──────────────────────────────────────────── */
    reviews_label:   'Reviews',
    reviews_heading: 'What owners and guests say',
    reviews_source:  'Based on Airbnb &amp; Booking.com reviews',
    reviews_comm:    'Communication',
    reviews_clean:   'Cleanliness',
    reviews_rel:     'Reliability',

    /* ── Blog ─────────────────────────────────────────────── */
    blog_label:   'Owner resources',
    blog_heading: 'Guides &amp; insights',

    blog1_tag:     'Property Management',
    blog1_title:   'What to look for in a property manager in Portimão',
    blog1_excerpt: 'From SEF compliance to cleaning standards — what separates good management from bad in the Algarve.',

    blog2_tag:     'Rental Income',
    blog2_title:   'What can your Portimão property actually earn?',
    blog2_excerpt: 'Realistic rental income expectations based on location, property type, and seasonality.',

    blog3_tag:     'Regulations',
    blog3_title:   'AL licence in Portugal: what owners need to know',
    blog3_excerpt: 'A practical guide to short-term rental licensing requirements in the Algarve.',

    /* ── FAQ ──────────────────────────────────────────────── */
    faq_label:   'FAQ',
    faq_heading: 'Common questions',

    faq_q1: 'How is WELKOMME-INN different from a large management agency?',
    faq_a1: 'We\'re a small team — Pedro Almeida runs the operation directly, supported by a marketing manager. That means you talk to the person who actually manages your property. No account managers, no rotating staff, no lost messages. We take on fewer properties and give each one more attention than a large agency ever could.',

    faq_q2: 'I live abroad. Can you manage my property remotely?',
    faq_a2: 'Yes — many of our clients live in the UK, Netherlands, Germany, or elsewhere in Portugal. Pedro handles everything on the ground: guest arrivals, cleaning, emergency repairs, inspections. You get regular updates and can reach us anytime on WhatsApp, phone, or email.',

    faq_q3: 'Do you handle SEF registration and tourist tax?',
    faq_a3: 'Yes. We handle SEF communication (mandatory guest registration with Portuguese immigration), tourist tax collection and payment, and other legal requirements for short-term rentals. This is included in our service — you don\'t need to worry about compliance.',

    faq_q4: 'Is there a minimum contract period?',
    faq_a4: 'No long-term lock-in. We offer flexible agreements with a 30-day notice period. If you\'re not satisfied, you can leave. The work should speak for itself — not a contract clause.',

    faq_q5: 'What areas do you cover?',
    faq_a5: 'We\'re based in Portimão (Beco Três Castelos, Torre Verde) and primarily cover Portimão centre, Praia da Rocha, and Alvor. We keep the area tight so Pedro can respond quickly — usually within 30 minutes — instead of spreading across the whole Algarve.',

    faq_q6: 'What\'s included in cleaning and turnover?',
    faq_a6: 'Professional cleaning between every guest stay, fresh linens and towels, replenished toiletries, and a quality inspection before the next guest arrives. We also handle laundry management. Everything is done to a consistent standard — not rushed between bookings.',

    faq_q7: 'I\'m a tourist. How do I book a stay?',
    faq_a7: 'You can find our properties on Airbnb and Booking.com. If you prefer to book directly, contact Pedro by phone (+351 927 970 151), WhatsApp, or email (geral@welkome-inn.com) and he\'ll check availability and send you the details.',

    /* ── Final CTA ────────────────────────────────────────── */
    cta_title: 'Your property deserves better management.',
    cta_sub:   'Get a free, no-obligation property assessment. Pedro will visit, review your setup, and tell you exactly what we can improve.',
    cta_btn:   'Get Your Free Assessment',

    /* ── Footer ───────────────────────────────────────────── */
    footer_address:      'Beco Três Castelos, Torre Verde · Portimão, Algarve',
    footer_contact_info: '+351 927 970 151 · geral@welkome-inn.com',
    footer_copy:         '© 2026 WELKOMME-INN. All rights reserved.',
    footer_link_why:     'Why Us',
    footer_link_services:'Services',
    footer_link_pricing: 'Pricing',
    footer_link_rentals: 'Rentals',
    footer_link_contact: 'Contact',
    footer_link_faq:     'FAQ',

    /* ── Testimonials (array — used by main.js carousel) ──── */
    testimonials: [
      {
        stars: 5,
        quote: '"I live in the Netherlands and was tired of agencies ignoring my calls. With Pedro, I message on WhatsApp and get a response in minutes. He handles everything — SEF registration, tourist tax, cleaning — I just check the reports."',
        name:  'Pieter van D.',
        loc:   'Amsterdam, Netherlands',
        role:  'Property owner — 2 apartments',
        color: '#2C5F7C'
      },
      {
        stars: 5,
        quote: '"Everything was spotless when we arrived. Pedro responded within minutes when we had questions about parking. Fresh towels, local restaurant tips in the guide — one of the smoothest check-ins we\'ve had in Portugal."',
        name:  'Sarah M.',
        loc:   'London, UK',
        role:  'Guest — Praia da Rocha',
        color: '#7C4E2C'
      },
      {
        stars: 5,
        quote: '"Before WELKOMME-INN I was managing three properties myself from Lisbon. Now Pedro handles guest check-ins, cleaning, maintenance — even had new photos taken that improved my bookings. I just check the monthly reports."',
        name:  'Ricardo S.',
        loc:   'Lisbon, Portugal',
        role:  'Property owner — 3 units',
        color: '#4A6741'
      },
      {
        stars: 5,
        quote: '"The apartment was perfect. Clean, well-equipped, and great location near Praia da Rocha. You can tell someone actually cares about the property — not just another generic rental with no local support."',
        name:  'Thomas & Lena K.',
        loc:   'Munich, Germany',
        role:  'Guests — Portimão',
        color: '#6B4A7C'
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     PORTUGUÊS  (European Portuguese — Portugal)
     ══════════════════════════════════════════════════════════ */
  pt: {

    /* ── Navegação ────────────────────────────────────────── */
    nav_why:      'Porquê Nós',
    nav_services: 'Serviços',
    nav_how:      'Como Funciona',
    nav_pricing:  'Preços',
    nav_rentals:  'Alojamentos',
    nav_contact:  'Contacto',
    nav_cta:      'Avaliação Gratuita',

    /* ── Hero ─────────────────────────────────────────────── */
    hero_badge:         'Sediados em Portimão, Algarve',
    hero_title:         'Gestão de imóveis que <em>realmente funciona.</em>',
    hero_subtitle:      'Dirigido por Pedro Almeida — uma equipa pequena e dedicada à gestão de Airbnb e arrendamentos de curta duração em Portimão. Comunicação direta. Ação rápida. Total responsabilidade.',
    hero_cta_primary:   'Obter Avaliação Gratuita',
    hero_cta_secondary: 'Ver Como Funciona',
    hero_scroll:        'Descer',

    /* ── Stats ────────────────────────────────────────────── */
    stats_properties_label: 'Propriedades geridas',
    stats_rating_label:     'Classificação média',
    stats_years_suffix:     '+ anos',
    stats_years_label:      'Em Portimão',
    stats_support_label:    'Apoio a hóspedes',

    /* ── Sobre nós ────────────────────────────────────────── */
    about_label:   'Porquê a WELKOMME-INN',
    about_heading: 'A sua propriedade, gerida por pessoas que realmente aparecem',
    about_text:    'Sou o Pedro Almeida. Giro a WELKOMME-INN com uma pequena equipa dedicada em Portimão. Não somos uma agência com centenas de propriedades e uma linha de apoio que não consegue contactar. <strong>Trata diretamente comigo.</strong> Quando um hóspede tem um problema às 23h, eu resolvo. Quando um cano rebenta, estou lá. Gerimos tudo — desde a fotografia profissional e configuração de listagens até à limpeza, manutenção, registo no SEF e taxa turística. <strong>Sem intermediários. Sem demoras. Só trabalho, feito como deve ser.</strong>',
    about_cta:     'Ver propriedades geridas',

    /* ── Serviços ─────────────────────────────────────────── */
    services_label:   'O que gerimos',
    services_heading: 'Tudo o que o seu alojamento precisa, tratado',

    services_card1_title: 'Publicidade e Reservas',
    services_card1_i1:    'Anúncios no Airbnb e Booking.com',
    services_card1_i2:    'Fotografia profissional',
    services_card1_i3:    'Otimização de preços',
    services_card1_i4:    'Consultoria de interiores',
    services_card1_i5:    'Gestão de calendário e reservas',

    services_card2_title: 'Gestão da Propriedade',
    services_card2_i1:    'Limpeza profissional',
    services_card2_i2:    'Roupa de cama, toalhas e amenities',
    services_card2_i3:    'Manutenção e reparações',
    services_card2_i4:    'Apoio em seguros da propriedade',
    services_card2_i5:    'Área de acesso ao proprietário',

    services_card3_title: 'Gestão de Hóspedes',
    services_card3_i1:    'Verificação de hóspedes',
    services_card3_i2:    'Check-in e check-out',
    services_card3_i3:    'Registo no SEF',
    services_card3_i4:    'Tratamento da taxa turística',
    services_card3_i5:    'Apoio 24/7 a hóspedes',
    services_card3_i6:    'Guias personalizados para hóspedes',

    services_cta: 'Obter avaliação gratuita da propriedade',

    /* ── Como Funciona ────────────────────────────────────── */
    how_label:   'Como funciona',
    how_heading: 'Da primeira chamada à primeira reserva',
    how_sub:     'Sem contratos prolongados. Sem configurações complicadas. Pedro visita a sua propriedade, avalia o que é necessário e começa a trabalhar — normalmente em menos de uma semana.',

    how_title: 'Fale com o Pedro. Comece rapidamente.',
    how_desc:  'Sem processos de integração complicados. Ligue ou envie mensagem pelo WhatsApp, fale sobre a sua propriedade e eu irei visitá-la. Chegamos a acordo sobre o que precisa e começo a trabalhar — normalmente em poucos dias.',

    how_step1_title: 'Avaliação gratuita da propriedade',
    how_step1_desc:  'Visito a sua propriedade, verifico o estado, revejo a listagem atual e discuto os seus objetivos.',

    how_step2_title: 'Plano de gestão personalizado',
    how_step2_desc:  'Recebe uma proposta clara — os serviços necessários, o custo e quando começamos. Sem taxas ocultas.',

    how_step3_title: 'Fotografia, listagem e publicação',
    how_step3_desc:  'Fotografamos a propriedade, otimizamos ou criamos as listagens, configuramos os horários de limpeza e começamos a aceitar reservas.',

    /* ── Área de Serviço ──────────────────────────────────── */
    areas_label:       'Área de serviço',
    areas_heading:     'Onde operamos',
    areas_sub:         'Operamos exclusivamente em Portimão — mantendo a nossa área restrita para que o Pedro esteja sempre disponível no local.',
    areas_pin:         'Portimão, Algarve · Portugal',
    areas_city:        'Portimão',
    areas_desc:        'A nossa base de operações e o único local onde trabalhamos. Apartamentos no centro, arrendamentos à beira-rio, propriedades frente ao mar na Praia da Rocha e vivendas perto de Alvor — tudo dentro do município de Portimão, tudo ao alcance.',
    areas_tag1:        'Centro de Portimão',
    areas_tag2:        'Praia da Rocha',
    areas_tag3:        'Alvor',
    areas_stat1_num:   '~30m',
    areas_stat1_label: 'Resposta no local',
    areas_stat2_num:   '1',
    areas_stat2_label: 'Cidade. Feito bem.',

    /* ── Preços ───────────────────────────────────────────── */
    pricing_label:   'Preços de gestão',
    pricing_heading: 'Preços transparentes, sem taxas ocultas',
    pricing_sub:     'Paga uma percentagem do seu rendimento de arrendamento. Quando a sua propriedade ganha, nós ganhamos. Os preços são adaptados à sua propriedade — contacte o Pedro para um orçamento.',
    pricing_popular: 'Mais popular',

    pricing_tier1:  'Essencial',
    pricing_price1: '15%',
    pricing_per1:   'do rendimento de arrendamento',
    pricing_desc1:  'Para proprietários que gerem as suas próprias reservas mas precisam de apoio local fiável no terreno.',
    pricing_f1_1:   'Limpeza profissional entre hóspedes',
    pricing_f1_2:   'Roupa de cama, toalhas e amenities',
    pricing_f1_3:   'Check-in e check-out de hóspedes',
    pricing_f1_4:   'Gestão de chaves',
    pricing_f1_5:   'Coordenação básica de manutenção',
    pricing_f1_6:   'Registo no SEF e taxa turística',
    pricing_cta1:   'Falar com o Pedro',

    pricing_tier2:  'Gestão Completa',
    pricing_price2: '20%',
    pricing_per2:   'do rendimento de arrendamento',
    pricing_desc2:  'Gestão totalmente passiva. Tratamos de tudo, desde a fotografia ao check-out dos hóspedes. O proprietário recebe o rendimento.',
    pricing_f2_1:   'Tudo o que está no Essencial',
    pricing_f2_2:   'Fotografia profissional e criação de listagem',
    pricing_f2_3:   'Consultoria de interiores e aconselhamento de decoração',
    pricing_f2_4:   'Preços dinâmicos e gestão de anúncios',
    pricing_f2_5:   'Comunicação completa com hóspedes (24/7)',
    pricing_f2_6:   'Verificação de hóspedes e guias personalizados',
    pricing_f2_7:   'Manutenção, reparações e apoio em seguros',
    pricing_f2_8:   'Área de acesso ao proprietário e relatórios mensais',
    pricing_cta2:   'Obter avaliação gratuita',

    /* ── Alojamentos ──────────────────────────────────────── */
    properties_label:   'Alojamentos disponíveis',
    properties_heading: 'Reserve uma estadia em Portimão',
    properties_sub:     'À procura de um alojamento de férias em Portimão? Todas as nossas propriedades são geridas profissionalmente, impecavelmente limpas e com apoio local. Contacte o Pedro para verificar disponibilidade.',

    prop1_badge: 'Superhost',
    prop1_loc:   'Centro de Portimão',
    prop1_title: 'Apartamento T2 moderno com vistas para o rio',
    prop1_meta:  '2 quartos · 1 casa de banho · 4 hóspedes',
    prop1_price: '€85',
    prop1_per:   '/ noite',

    prop2_badge: 'Top classificado',
    prop2_loc:   'Praia da Rocha',
    prop2_title: 'Estúdio luminoso a passos da praia',
    prop2_meta:  'Estúdio · 1 casa de banho · 2 hóspedes',
    prop2_price: '€65',
    prop2_per:   '/ noite',

    prop3_badge: 'Nova listagem',
    prop3_loc:   'Alvor',
    prop3_title: 'Vivenda T3 com piscina privativa',
    prop3_meta:  '3 quartos · 2 casas de banho · 6 hóspedes',
    prop3_price: '€145',
    prop3_per:   '/ noite',

    properties_cta: 'Contacte o Pedro para disponibilidade',

    /* ── Contacto ─────────────────────────────────────────── */
    contact_label:   'Entre em contacto',
    contact_heading: 'Fale diretamente com o Pedro',
    contact_sub:     'Proprietário ou hóspede — obtém a mesma resposta rápida. Sem formulários, sem esperas. Ligue, envie mensagem ou escreva um e-mail.',

    contact_phone_title: 'Telefone / WhatsApp',
    contact_phone_desc:  'Ligue ou envie mensagem diretamente ao Pedro. Sem central de atendimento, sem filas.',

    contact_email_title: 'E-mail',
    contact_email_desc:  'Para questões sobre propriedades, pedidos de avaliação ou perguntas de hóspedes.',

    contact_loc_title: 'Localização',
    contact_loc_desc:  'Beco Três Castelos, Torre Verde',
    contact_loc_val:   'Portimão, Algarve · Portugal',

    /* ── Formulário ───────────────────────────────────────── */
    form_heading:            'Pedir uma avaliação gratuita',
    form_desc:               'Conte-nos sobre a sua propriedade e entraremos em contacto em 24 horas.',
    form_label_name:         'Nome completo *',
    form_placeholder_name:   'O seu nome',
    form_label_email:        'Endereço de e-mail *',
    form_placeholder_email:  'voce@exemplo.com',
    form_label_phone:        'Telefone / WhatsApp',
    form_placeholder_phone:  '+351 …',
    form_label_type:         'Sou…',
    form_option_default:     'Selecionar',
    form_option_owner:       'Proprietário',
    form_option_guest:       'Hóspede / turista',
    form_option_other:       'Outro',
    form_label_msg:          'Mensagem *',
    form_placeholder_msg:    'Conte-nos sobre a sua propriedade ou questão…',
    form_submit:             'Enviar mensagem',
    form_success_title:      'Mensagem enviada!',
    form_success_desc:       'O Pedro entrará em contacto em 24 horas. Pode também contactá-lo diretamente no <strong>+351 927 970 151</strong>.',

    /* ── Avaliações ───────────────────────────────────────── */
    reviews_label:   'Avaliações',
    reviews_heading: 'O que dizem proprietários e hóspedes',
    reviews_source:  'Com base em avaliações do Airbnb e Booking.com',
    reviews_comm:    'Comunicação',
    reviews_clean:   'Limpeza',
    reviews_rel:     'Fiabilidade',

    /* ── Blog ─────────────────────────────────────────────── */
    blog_label:   'Recursos para proprietários',
    blog_heading: 'Guias e dicas',

    blog1_tag:     'Gestão de Propriedades',
    blog1_title:   'O que procurar num gestor de propriedades em Portimão',
    blog1_excerpt: 'Da conformidade com o SEF aos padrões de limpeza — o que separa uma boa gestão de uma má no Algarve.',

    blog2_tag:     'Rendimento de Arrendamento',
    blog2_title:   'Quanto pode a sua propriedade em Portimão realmente render?',
    blog2_excerpt: 'Expectativas realistas de rendimento com base na localização, tipo de propriedade e sazonalidade.',

    blog3_tag:     'Regulamentação',
    blog3_title:   'Licença AL em Portugal: o que os proprietários precisam de saber',
    blog3_excerpt: 'Um guia prático sobre os requisitos de licenciamento de alojamento de curta duração no Algarve.',

    /* ── FAQ ──────────────────────────────────────────────── */
    faq_label:   'FAQ',
    faq_heading: 'Perguntas frequentes',

    faq_q1: 'Em que se distingue a WELKOMME-INN de uma agência de gestão de maior dimensão?',
    faq_a1: 'Somos uma equipa pequena — o Pedro Almeida gere a operação diretamente, apoiado por um gestor de marketing. Isso significa que fala diretamente com a pessoa que realmente gere a sua propriedade. Sem gestores de conta, sem rotatividade de pessoal, sem mensagens perdidas. Gerimos menos propriedades e dedicamos a cada uma mais atenção do que qualquer grande agência poderia.',

    faq_q2: 'Vivo no estrangeiro. Podem gerir a minha propriedade remotamente?',
    faq_a2: 'Sim — muitos dos nossos clientes vivem no Reino Unido, Países Baixos, Alemanha ou noutras partes de Portugal. O Pedro trata de tudo no terreno: chegadas de hóspedes, limpeza, reparações de emergência, inspeções. Recebe atualizações regulares e pode contactar-nos a qualquer momento por WhatsApp, telefone ou e-mail.',

    faq_q3: 'Tratam do registo no SEF e da taxa turística?',
    faq_a3: 'Sim. Tratamos da comunicação com o SEF (registo obrigatório de hóspedes com as autoridades de imigração portuguesas), da cobrança e pagamento da taxa turística e de outros requisitos legais para arrendamentos de curta duração. Está incluído no nosso serviço — não precisa de se preocupar com a conformidade.',

    faq_q4: 'Existe um período mínimo de contrato?',
    faq_a4: 'Sem vinculação a longo prazo. Oferecemos acordos flexíveis com um período de pré-aviso de 30 dias. Se não ficar satisfeito, pode sair. O trabalho deve falar por si — não uma cláusula contratual.',

    faq_q5: 'Que áreas abrangem?',
    faq_a5: 'A nossa base é em Portimão (Beco Três Castelos, Torre Verde) e cobrimos principalmente o centro de Portimão, a Praia da Rocha e Alvor. Mantemos a área restrita para que o Pedro possa responder rapidamente — normalmente em 30 minutos — em vez de nos dispersarmos por todo o Algarve.',

    faq_q6: 'O que está incluído na limpeza e na preparação entre hóspedes?',
    faq_a6: 'Limpeza profissional entre cada estadia, roupa de cama e toalhas frescas, reabastecimento de amenities e uma inspeção de qualidade antes da chegada do próximo hóspede. Tratamos também da gestão de lavandaria. Tudo é feito com um padrão consistente — não à pressa entre reservas.',

    faq_q7: 'Sou turista. Como posso reservar uma estadia?',
    faq_a7: 'Pode encontrar as nossas propriedades no Airbnb e no Booking.com. Se preferir reservar diretamente, contacte o Pedro por telefone (+351 927 970 151), WhatsApp ou e-mail (geral@welkome-inn.com) e ele verificará a disponibilidade e enviará os detalhes.',

    /* ── CTA Final ────────────────────────────────────────── */
    cta_title: 'A sua propriedade merece uma gestão melhor.',
    cta_sub:   'Obtenha uma avaliação gratuita e sem compromisso. O Pedro visitará, analisará a sua situação atual e diz-lhe exatamente o que podemos melhorar.',
    cta_btn:   'Obter a Sua Avaliação Gratuita',

    /* ── Rodapé ───────────────────────────────────────────── */
    footer_address:       'Beco Três Castelos, Torre Verde · Portimão, Algarve',
    footer_contact_info:  '+351 927 970 151 · geral@welkome-inn.com',
    footer_copy:          '© 2026 WELKOMME-INN. Todos os direitos reservados.',
    footer_link_why:      'Porquê Nós',
    footer_link_services: 'Serviços',
    footer_link_pricing:  'Preços',
    footer_link_rentals:  'Alojamentos',
    footer_link_contact:  'Contacto',
    footer_link_faq:      'FAQ',

    /* ── Testemunhos ──────────────────────────────────────── */
    testimonials: [
      {
        stars: 5,
        quote: '"Vivo nos Países Baixos e estava farto de agências que não atendiam as minhas chamadas. Com o Pedro, envio uma mensagem pelo WhatsApp e recebo resposta em minutos. Trata de tudo — registo no SEF, taxa turística, limpeza — eu limito-me a verificar os relatórios."',
        name:  'Pieter van D.',
        loc:   'Amesterdão, Países Baixos',
        role:  'Proprietário — 2 apartamentos',
        color: '#2C5F7C'
      },
      {
        stars: 5,
        quote: '"Estava tudo impecável quando chegámos. O Pedro respondeu em minutos quando tínhamos dúvidas sobre estacionamento. Toalhas frescas, dicas de restaurantes no guia — um dos check-ins mais fluidos que já tivemos em Portugal."',
        name:  'Sarah M.',
        loc:   'Londres, Reino Unido',
        role:  'Hóspede — Praia da Rocha',
        color: '#7C4E2C'
      },
      {
        stars: 5,
        quote: '"Antes da WELKOMME-INN eu próprio geria três propriedades a partir de Lisboa. Agora o Pedro trata dos check-ins, limpeza, manutenção — até tirou novas fotografias que melhoraram as minhas reservas. Eu limito-me a ver os relatórios mensais."',
        name:  'Ricardo S.',
        loc:   'Lisboa, Portugal',
        role:  'Proprietário — 3 unidades',
        color: '#4A6741'
      },
      {
        stars: 5,
        quote: '"O apartamento era perfeito. Limpo, bem equipado e excelente localização perto da Praia da Rocha. Nota-se que alguém realmente cuida da propriedade — não é mais um alojamento genérico sem apoio local."',
        name:  'Thomas & Lena K.',
        loc:   'Munique, Alemanha',
        role:  'Hóspedes — Portimão',
        color: '#6B4A7C'
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════
     ESPAÑOL  (Spanish — complete)
     ══════════════════════════════════════════════════════════ */
  es: {

    /* ── Navegación ───────────────────────────────────────── */
    nav_why:      'Por Qué Nosotros',
    nav_services: 'Servicios',
    nav_how:      'Cómo Funciona',
    nav_pricing:  'Precios',
    nav_rentals:  'Alquileres',
    nav_contact:  'Contacto',
    nav_cta:      'Evaluación Gratuita',

    /* ── Hero ─────────────────────────────────────────────── */
    hero_badge:         'Con sede en Portimão, Algarve',
    hero_title:         'Gestión de propiedades que <em>realmente funciona.</em>',
    hero_subtitle:      'Dirigido por Pedro Almeida — un pequeño equipo dedicado que gestiona Airbnb y alquileres de corta duración en Portimão. Comunicación directa. Acción rápida. Responsabilidad total.',
    hero_cta_primary:   'Obtener Evaluación Gratuita',
    hero_cta_secondary: 'Ver Cómo Funciona',
    hero_scroll:        'Bajar',

    /* ── Estadísticas ─────────────────────────────────────── */
    stats_properties_label: 'Propiedades gestionadas',
    stats_rating_label:     'Valoración media',
    stats_years_suffix:     '+ años',
    stats_years_label:      'En Portimão',
    stats_support_label:    'Soporte para huéspedes',

    /* ── Sobre nosotros ───────────────────────────────────── */
    about_label:   'Por Qué WELKOMME-INN',
    about_heading: 'Su propiedad, gestionada por personas que realmente se presentan',
    about_text:    'Soy Pedro Almeida. Dirijo WELKOMME-INN con un pequeño equipo dedicado en Portimão. No somos una agencia con cientos de propiedades y un centro de llamadas al que no puede llegar. <strong>Trata directamente conmigo.</strong> Cuando un huésped tiene un problema a las 11pm, lo resuelvo. Cuando revienta una tubería, estoy allí. Gestionamos todo — desde la fotografía profesional y la configuración de anuncios hasta la limpieza, el mantenimiento, el registro SEF y la tasa turística. <strong>Sin intermediarios. Sin demoras. Solo el trabajo, hecho correctamente.</strong>',
    about_cta:     'Ver propiedades gestionadas',

    /* ── Servicios ────────────────────────────────────────── */
    services_label:   'Qué gestionamos',
    services_heading: 'Todo lo que su alquiler necesita, resuelto',

    services_card1_title: 'Publicidad y Reservas',
    services_card1_i1:    'Anuncios en Airbnb y Booking.com',
    services_card1_i2:    'Fotografía profesional',
    services_card1_i3:    'Optimización de precios',
    services_card1_i4:    'Consultoría de interiores',
    services_card1_i5:    'Gestión de calendario y reservas',

    services_card2_title: 'Gestión de la Propiedad',
    services_card2_i1:    'Limpieza profesional',
    services_card2_i2:    'Ropa de cama, toallas y artículos de baño',
    services_card2_i3:    'Mantenimiento y reparaciones',
    services_card2_i4:    'Soporte en seguros de la propiedad',
    services_card2_i5:    'Área de acceso para propietarios',

    services_card3_title: 'Gestión de Huéspedes',
    services_card3_i1:    'Verificación de huéspedes',
    services_card3_i2:    'Check-in y check-out',
    services_card3_i3:    'Registro SEF',
    services_card3_i4:    'Gestión de la tasa turística',
    services_card3_i5:    'Soporte 24/7 para huéspedes',
    services_card3_i6:    'Guías personalizadas para huéspedes',

    services_cta: 'Obtener evaluación gratuita de la propiedad',

    /* ── Cómo Funciona ────────────────────────────────────── */
    how_label:   'Cómo funciona',
    how_heading: 'De la primera llamada a la primera reserva',
    how_sub:     'Sin contratos prolongados. Sin configuraciones complicadas. Pedro visita su propiedad, evalúa lo que se necesita y empieza a trabajar — normalmente en menos de una semana.',

    how_title: 'Hable con Pedro. Empiece rápido.',
    how_desc:  'Sin procesos de incorporación complicados. Llame o envíe un mensaje por WhatsApp, cuénteme sobre su propiedad y la visitaré. Acordamos lo que necesita y me pongo a trabajar — normalmente en pocos días.',

    how_step1_title: 'Evaluación gratuita de la propiedad',
    how_step1_desc:  'Visito su propiedad, compruebo el estado, reviso su anuncio actual y hablamos de sus objetivos.',

    how_step2_title: 'Plan de gestión personalizado',
    how_step2_desc:  'Recibirá una propuesta clara — qué servicios necesita, el coste y cuándo empezamos. Sin cargos ocultos.',

    how_step3_title: 'Fotografía, anuncio y publicación',
    how_step3_desc:  'Fotografiamos la propiedad, optimizamos o creamos sus anuncios, configuramos los horarios de limpieza y empezamos a aceptar reservas.',

    /* ── Área de Servicio ─────────────────────────────────── */
    areas_label:       'Área de servicio',
    areas_heading:     'Dónde operamos',
    areas_sub:         'Operamos exclusivamente en Portimão — manteniendo nuestra área delimitada para que Pedro esté siempre disponible en el lugar.',
    areas_pin:         'Portimão, Algarve · Portugal',
    areas_city:        'Portimão',
    areas_desc:        'Nuestra base de operaciones y el único lugar donde trabajamos. Apartamentos en el centro, alquileres junto al río, propiedades frente al mar en Praia da Rocha y villas cerca de Alvor — todo dentro del municipio de Portimão, todo al alcance.',
    areas_tag1:        'Centro de Portimão',
    areas_tag2:        'Praia da Rocha',
    areas_tag3:        'Alvor',
    areas_stat1_num:   '~30m',
    areas_stat1_label: 'Respuesta in situ',
    areas_stat2_num:   '1',
    areas_stat2_label: 'Ciudad. Bien hecho.',

    /* ── Precios ──────────────────────────────────────────── */
    pricing_label:   'Precios de gestión',
    pricing_heading: 'Precios honestos, sin cargos ocultos',
    pricing_sub:     'Paga un porcentaje de sus ingresos por alquiler. Cuando su propiedad gana, nosotros ganamos. Los precios se adaptan a su propiedad — contacte a Pedro para un presupuesto.',
    pricing_popular: 'Más popular',

    pricing_tier1:  'Esencial',
    pricing_price1: '15%',
    pricing_per1:   'de los ingresos por alquiler',
    pricing_desc1:  'Para propietarios que gestionan sus propias reservas pero necesitan apoyo local fiable sobre el terreno.',
    pricing_f1_1:   'Limpieza profesional entre huéspedes',
    pricing_f1_2:   'Ropa de cama, toallas y artículos de baño',
    pricing_f1_3:   'Check-in y check-out de huéspedes',
    pricing_f1_4:   'Gestión de llaves',
    pricing_f1_5:   'Coordinación básica de mantenimiento',
    pricing_f1_6:   'Registro SEF y tasa turística',
    pricing_cta1:   'Hablar con Pedro',

    pricing_tier2:  'Gestión Completa',
    pricing_price2: '20%',
    pricing_per2:   'de los ingresos por alquiler',
    pricing_desc2:  'Gestión totalmente pasiva. Nos encargamos de todo, desde la fotografía hasta el check-out de los huéspedes. El propietario cobra los ingresos.',
    pricing_f2_1:   'Todo lo incluido en Esencial',
    pricing_f2_2:   'Fotografía profesional y creación de anuncios',
    pricing_f2_3:   'Consultoría de interiores y consejos de decoración',
    pricing_f2_4:   'Precios dinámicos y gestión de anuncios',
    pricing_f2_5:   'Comunicación completa con huéspedes (24/7)',
    pricing_f2_6:   'Verificación de huéspedes y guías personalizadas',
    pricing_f2_7:   'Mantenimiento, reparaciones y soporte en seguros',
    pricing_f2_8:   'Área de acceso para propietarios e informes mensuales',
    pricing_cta2:   'Obtener evaluación gratuita',

    /* ── Alquileres ───────────────────────────────────────── */
    properties_label:   'Alquileres disponibles',
    properties_heading: 'Reserve su estancia en Portimão',
    properties_sub:     '¿Busca un alquiler vacacional en Portimão? Todas nuestras propiedades están gestionadas profesionalmente, impecablemente limpias y con apoyo local. Contacte a Pedro para disponibilidad.',

    prop1_badge: 'Superhost',
    prop1_loc:   'Centro de Portimão',
    prop1_title: 'Moderno apartamento de 2 hab. con vistas al río',
    prop1_meta:  '2 habitaciones · 1 baño · 4 huéspedes',
    prop1_price: '€85',
    prop1_per:   '/ noche',

    prop2_badge: 'Mejor valorado',
    prop2_loc:   'Praia da Rocha',
    prop2_title: 'Luminoso estudio a pasos de la playa',
    prop2_meta:  'Estudio · 1 baño · 2 huéspedes',
    prop2_price: '€65',
    prop2_per:   '/ noche',

    prop3_badge: 'Nuevo anuncio',
    prop3_loc:   'Alvor',
    prop3_title: 'Casa de 3 hab. con piscina privada',
    prop3_meta:  '3 habitaciones · 2 baños · 6 huéspedes',
    prop3_price: '€145',
    prop3_per:   '/ noche',

    properties_cta: 'Contacte a Pedro para disponibilidad',

    /* ── Contacto ─────────────────────────────────────────── */
    contact_label:   'Ponerse en contacto',
    contact_heading: 'Hable directamente con Pedro',
    contact_sub:     'Propietario o huésped — obtendrá la misma respuesta rápida. Sin formularios, sin esperas. Llame, envíe un mensaje o escriba un correo.',

    contact_phone_title: 'Teléfono / WhatsApp',
    contact_phone_desc:  'Llame o envíe un mensaje directamente a Pedro. Sin centralita, sin colas.',

    contact_email_title: 'Correo electrónico',
    contact_email_desc:  'Para consultas sobre propiedades, solicitudes de evaluación o preguntas de huéspedes.',

    contact_loc_title: 'Ubicación',
    contact_loc_desc:  'Beco Três Castelos, Torre Verde',
    contact_loc_val:   'Portimão, Algarve · Portugal',

    /* ── Formulario ───────────────────────────────────────── */
    form_heading:            'Solicitar una evaluación gratuita',
    form_desc:               'Cuéntenos sobre su propiedad y nos pondremos en contacto en 24 horas.',
    form_label_name:         'Nombre completo *',
    form_placeholder_name:   'Su nombre',
    form_label_email:        'Dirección de correo *',
    form_placeholder_email:  'usted@ejemplo.com',
    form_label_phone:        'Teléfono / WhatsApp',
    form_placeholder_phone:  '+351 …',
    form_label_type:         'Soy…',
    form_option_default:     'Seleccionar',
    form_option_owner:       'Propietario',
    form_option_guest:       'Huésped / turista',
    form_option_other:       'Otro',
    form_label_msg:          'Mensaje *',
    form_placeholder_msg:    'Cuéntenos sobre su propiedad o consulta…',
    form_submit:             'Enviar mensaje',
    form_success_title:      '¡Mensaje enviado!',
    form_success_desc:       'Pedro se pondrá en contacto en 24 horas. También puede contactarlo directamente en el <strong>+351 927 970 151</strong>.',

    /* ── Reseñas ──────────────────────────────────────────── */
    reviews_label:   'Reseñas',
    reviews_heading: 'Lo que dicen propietarios y huéspedes',
    reviews_source:  'Basado en reseñas de Airbnb y Booking.com',
    reviews_comm:    'Comunicación',
    reviews_clean:   'Limpieza',
    reviews_rel:     'Fiabilidad',

    /* ── Blog ─────────────────────────────────────────────── */
    blog_label:   'Recursos para propietarios',
    blog_heading: 'Guías y consejos',

    blog1_tag:     'Gestión de Propiedades',
    blog1_title:   'Qué buscar en un gestor de propiedades en Portimão',
    blog1_excerpt: 'Del cumplimiento del SEF a los estándares de limpieza — qué separa una buena gestión de una mala en el Algarve.',

    blog2_tag:     'Ingresos por Alquiler',
    blog2_title:   '¿Cuánto puede ganar realmente su propiedad en Portimão?',
    blog2_excerpt: 'Expectativas realistas de ingresos por alquiler según ubicación, tipo de propiedad y estacionalidad.',

    blog3_tag:     'Regulación',
    blog3_title:   'Licencia AL en Portugal: lo que los propietarios necesitan saber',
    blog3_excerpt: 'Una guía práctica sobre los requisitos de licencias de alquiler de corta duración en el Algarve.',

    /* ── FAQ ──────────────────────────────────────────────── */
    faq_label:   'FAQ',
    faq_heading: 'Preguntas frecuentes',

    faq_q1: '¿En qué se diferencia WELKOMME-INN de una agencia de gestión grande?',
    faq_a1: 'Somos un equipo pequeño — Pedro Almeida gestiona la operación directamente, apoyado por un gestor de marketing. Eso significa que habla con la persona que realmente gestiona su propiedad. Sin gestores de cuenta, sin rotación de personal, sin mensajes perdidos. Gestionamos menos propiedades y dedicamos a cada una más atención de la que podría una gran agencia.',

    faq_q2: 'Vivo en el extranjero. ¿Pueden gestionar mi propiedad de forma remota?',
    faq_a2: 'Sí — muchos de nuestros clientes viven en el Reino Unido, Países Bajos, Alemania o en otras partes de Portugal. Pedro se encarga de todo sobre el terreno: llegadas de huéspedes, limpieza, reparaciones de emergencia, inspecciones. Recibirá actualizaciones periódicas y puede contactarnos en cualquier momento por WhatsApp, teléfono o correo electrónico.',

    faq_q3: '¿Se encargan del registro SEF y de la tasa turística?',
    faq_a3: 'Sí. Nos encargamos de la comunicación con el SEF (registro obligatorio de huéspedes con las autoridades de inmigración portuguesas), la recaudación y el pago de la tasa turística y otros requisitos legales para alquileres de corta duración. Está incluido en nuestro servicio — no tiene que preocuparse por el cumplimiento normativo.',

    faq_q4: '¿Existe un período mínimo de contrato?',
    faq_a4: 'Sin compromiso a largo plazo. Ofrecemos acuerdos flexibles con un período de preaviso de 30 días. Si no está satisfecho, puede irse. El trabajo debe hablar por sí mismo — no una cláusula contractual.',

    faq_q5: '¿Qué zonas cubren?',
    faq_a5: 'Tenemos nuestra base en Portimão (Beco Três Castelos, Torre Verde) y cubrimos principalmente el centro de Portimão, Praia da Rocha y Alvor. Mantenemos el área delimitada para que Pedro pueda responder rápidamente — normalmente en 30 minutos — en lugar de dispersarnos por todo el Algarve.',

    faq_q6: '¿Qué incluye la limpieza y la preparación entre huéspedes?',
    faq_a6: 'Limpieza profesional entre cada estancia, ropa de cama y toallas frescas, reposición de artículos de baño y una inspección de calidad antes de la llegada del siguiente huésped. También gestionamos la lavandería. Todo se hace con un estándar consistente — no con prisas entre reservas.',

    faq_q7: 'Soy turista. ¿Cómo puedo reservar una estancia?',
    faq_a7: 'Puede encontrar nuestras propiedades en Airbnb y Booking.com. Si prefiere reservar directamente, contacte a Pedro por teléfono (+351 927 970 151), WhatsApp o correo electrónico (geral@welkome-inn.com) y comprobará la disponibilidad y le enviará los detalles.',

    /* ── CTA Final ────────────────────────────────────────── */
    cta_title: 'Su propiedad merece una gestión mejor.',
    cta_sub:   'Obtenga una evaluación gratuita sin compromiso. Pedro visitará su propiedad, revisará su configuración actual y le dirá exactamente qué podemos mejorar.',
    cta_btn:   'Obtener Su Evaluación Gratuita',

    /* ── Pie de página ────────────────────────────────────── */
    footer_address:       'Beco Três Castelos, Torre Verde · Portimão, Algarve',
    footer_contact_info:  '+351 927 970 151 · geral@welkome-inn.com',
    footer_copy:          '© 2026 WELKOMME-INN. Todos los derechos reservados.',
    footer_link_why:      'Por Qué Nosotros',
    footer_link_services: 'Servicios',
    footer_link_pricing:  'Precios',
    footer_link_rentals:  'Alquileres',
    footer_link_contact:  'Contacto',
    footer_link_faq:      'FAQ',

    /* ── Testimonios ──────────────────────────────────────── */
    testimonials: [
      {
        stars: 5,
        quote: '"Vivo en los Países Bajos y estaba harto de agencias que ignoraban mis llamadas. Con Pedro, envío un mensaje por WhatsApp y recibo respuesta en minutos. Se encarga de todo — registro SEF, tasa turística, limpieza — yo solo reviso los informes."',
        name:  'Pieter van D.',
        loc:   'Ámsterdam, Países Bajos',
        role:  'Propietario — 2 apartamentos',
        color: '#2C5F7C'
      },
      {
        stars: 5,
        quote: '"Todo estaba impecable cuando llegamos. Pedro respondió en minutos cuando teníamos dudas sobre el aparcamiento. Toallas frescas, consejos de restaurantes locales en la guía — uno de los check-ins más fluidos que hemos tenido en Portugal."',
        name:  'Sarah M.',
        loc:   'Londres, Reino Unido',
        role:  'Huésped — Praia da Rocha',
        color: '#7C4E2C'
      },
      {
        stars: 5,
        quote: '"Antes de WELKOMME-INN yo mismo gestionaba tres propiedades desde Lisboa. Ahora Pedro se encarga de los check-ins, la limpieza, el mantenimiento — incluso hizo nuevas fotos que mejoraron mis reservas. Yo solo reviso los informes mensuales."',
        name:  'Ricardo S.',
        loc:   'Lisboa, Portugal',
        role:  'Propietario — 3 unidades',
        color: '#4A6741'
      },
      {
        stars: 5,
        quote: '"El apartamento era perfecto. Limpio, bien equipado y excelente ubicación cerca de Praia da Rocha. Se nota que alguien cuida realmente la propiedad — no es solo otro alquiler genérico sin apoyo local."',
        name:  'Thomas & Lena K.',
        loc:   'Múnich, Alemania',
        role:  'Huéspedes — Portimão',
        color: '#6B4A7C'
      }
    ]
  }

}; // end window.translations
