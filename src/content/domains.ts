import type { I18nText, I18nList } from '@/lib/i18n'

export type DomainSlug =
  | 'finances-publiques'
  | 'finance-comptabilite-entreprise'
  | 'gouvernance-leadership'
  | 'ressources-humaines'
  | 'strategie-organisation'
  | 'projets-programmes-evaluation'
  | 'economie-politiques-publiques'
  | 'marketing-communication'
  | 'digital-data-ia'
  | 'droit-reglementation'
  | 'logistique-supply-chain'
  | 'entrepreneuriat-innovation'

export type Domain = {
  slug: DomainSlug
  number: string
  title: I18nText
  short: I18nText
  description: I18nText
  /** Modules détaillés de l'axe, repris du catalogue des domaines de formation */
  topics: I18nList
}

export const domains: Domain[] = [
  {
    slug: 'finances-publiques',
    number: '01',
    title: { fr: "Finances publiques, fiscalité et trésorerie", en: "Public finance, taxation and treasury", ar: "المالية العمومية والجبايات والخزينة" },
    short: { fr: "Finances publiques", en: "Public finance", ar: "المالية العمومية" },
    description: { fr: "Pilotage budgétaire, exécution de la dépense et modernisation de la gestion publique.", en: "Budget management, expenditure execution and modernisation of public administration.", ar: "قيادة الميزانية وتنفيذ النفقة وتحديث التدبير العمومي." },
    topics: {
      fr: [
        "Commande publique : marchés publics, procédures de passation, contractualisation, contrôle de l'exécution, partenariats public-privé",
        "Audit et contrôle des risques : audit interne et externe, contrôle interne budgétaire et comptable, cartographie des risques financiers",
        "Comptabilité publique et trésorerie : comptabilité budgétaire et patrimoniale, gestion de la trésorerie de l'État, normes IPSAS",
        "Budget-programme et performance : budgétisation axée sur les résultats, cadre de dépenses à moyen terme, indicateurs de performance",
        "Fiscalité et douanes : politique fiscale, gestion de l'impôt, contentieux fiscal, facilitation douanière, lutte contre la fraude",
      ],
      en: [
        "Public procurement: tendering procedures, contracting, execution control, public-private partnerships",
        "Audit and risk control: internal and external audit, budgetary and accounting internal control, financial risk mapping",
        "Public accounting and treasury: budgetary and asset accounting, state treasury management, IPSAS standards",
        "Programme budgeting and performance: results-based budgeting, medium-term expenditure framework, performance indicators",
        "Taxation and customs: tax policy, tax administration, tax disputes, customs facilitation, fraud prevention",
      ],
      ar: [
        "الصفقات العمومية: مساطر الإبرام والتعاقد ومراقبة التنفيذ والشراكة بين القطاعين العام والخاص",
        "التدقيق ومراقبة المخاطر: التدقيق الداخلي والخارجي، المراقبة الداخلية الميزانياتية والمحاسبية، خريطة المخاطر المالية",
        "المحاسبة العمومية والخزينة: المحاسبة الميزانياتية والممتلكات، تدبير خزينة الدولة، معايير إيبساس",
        "ميزانية البرامج والأداء: الميزانية المبنية على النتائج، إطار النفقات متوسط المدى، مؤشرات الأداء",
        "الجبايات والجمارك: السياسة الجبائية، تدبير الضريبة، المنازعات الجبائية، التسهيل الجمركي، مكافحة الغش",
      ],
    },
  },
  {
    slug: 'finance-comptabilite-entreprise',
    number: '02',
    title: { fr: "Finance et comptabilité d'entreprise", en: "Corporate finance and accounting", ar: "المالية والمحاسبة بالمقاولة" },
    short: { fr: "Finance d'entreprise", en: "Corporate finance", ar: "مالية المقاولة" },
    description: { fr: "Maîtrise des outils comptables, financiers et fiscaux au service de la performance des organisations.", en: "Command of the accounting, financial and tax tools that drive organisational performance.", ar: "التحكم في الأدوات المحاسبية والمالية والجبائية في خدمة أداء المنظمات." },
    topics: {
      fr: [
        "Comptabilité générale et analytique : tenue des comptes, normes IFRS et référentiels nationaux, comptabilité de gestion et calcul des coûts",
        "Contrôle de gestion : élaboration budgétaire, tableaux de bord, reporting financier, pilotage de la performance",
        "Analyse financière et évaluation : lecture des états financiers, diagnostic, méthodes d'évaluation d'entreprise, audit d'acquisition",
        "Fiscalité des entreprises : impôt sur les sociétés, taxe sur la valeur ajoutée, optimisation et conformité fiscale",
        "Ingénierie financière : montages financiers, financement de projets, marchés de capitaux, gestion de trésorerie",
      ],
      en: [
        "General and cost accounting: bookkeeping, IFRS and national standards, management accounting and costing",
        "Management control: budgeting, dashboards, financial reporting, performance management",
        "Financial analysis and valuation: reading financial statements, diagnosis, company valuation methods, due diligence",
        "Corporate taxation: corporate income tax, value added tax, tax optimisation and compliance",
        "Financial engineering: financial structuring, project finance, capital markets, cash management",
      ],
      ar: [
        "المحاسبة العامة والتحليلية: مسك الحسابات، معايير إيفرس والمرجعيات الوطنية، محاسبة التدبير وحساب التكاليف",
        "مراقبة التدبير: إعداد الميزانية، لوحات القيادة، التقارير المالية، قيادة الأداء",
        "التحليل المالي والتقييم: قراءة القوائم المالية، التشخيص، طرق تقييم المقاولة، العناية الواجبة",
        "جبايات المقاولات: الضريبة على الشركات، الضريبة على القيمة المضافة، التحسين والمطابقة الجبائية",
        "الهندسة المالية: التركيبات المالية، تمويل المشاريع، أسواق الرساميل، تدبير الخزينة",
      ],
    },
  },
  {
    slug: 'gouvernance-leadership',
    number: '03',
    title: { fr: "Gouvernance et leadership", en: "Governance and leadership", ar: "الحكامة والقيادة" },
    short: { fr: "Gouvernance et leadership", en: "Governance and leadership", ar: "الحكامة والقيادة" },
    description: { fr: "Renforcement des capacités de direction, d'éthique institutionnelle et de conduite du changement.", en: "Strengthening leadership capacity, institutional ethics and change management.", ar: "تقوية قدرات القيادة والأخلاقيات المؤسساتية وتدبير التغيير." },
    topics: {
      fr: [
        "Gouvernance institutionnelle et d'entreprise : structures de gouvernance, conseils d'administration, redevabilité et transparence",
        "Leadership et management d'équipe : styles de leadership, motivation, communication managériale, gestion des talents",
        "Éthique, déontologie et lutte contre la corruption : intégrité publique, prévention des conflits d'intérêts, dispositifs de conformité",
        "Conduite du changement : diagnostic organisationnel, accompagnement du changement, gestion des résistances",
        "Négociation et prise de décision : négociation institutionnelle, aide à la décision, gestion de crise",
      ],
      en: [
        "Institutional and corporate governance: governance structures, boards, accountability and transparency",
        "Leadership and team management: leadership styles, motivation, managerial communication, talent management",
        "Ethics, professional conduct and anti-corruption: public integrity, conflict of interest prevention, compliance frameworks",
        "Change management: organisational diagnosis, change support, managing resistance",
        "Negotiation and decision-making: institutional negotiation, decision support, crisis management",
      ],
      ar: [
        "الحكامة المؤسساتية وحكامة المقاولة: هياكل الحكامة، مجالس الإدارة، المساءلة والشفافية",
        "القيادة وتدبير الفرق: أساليب القيادة، التحفيز، التواصل التدبيري، تدبير المواهب",
        "الأخلاقيات وقواعد السلوك ومكافحة الفساد: النزاهة العمومية، الوقاية من تضارب المصالح، أنظمة المطابقة",
        "تدبير التغيير: التشخيص التنظيمي، مواكبة التغيير، تدبير المقاومة",
        "التفاوض واتخاذ القرار: التفاوض المؤسساتي، دعم القرار، تدبير الأزمات",
      ],
    },
  },
  {
    slug: 'ressources-humaines',
    number: '04',
    title: { fr: "Management des ressources humaines", en: "Human resources management", ar: "تدبير الموارد البشرية" },
    short: { fr: "Ressources humaines", en: "Human resources", ar: "الموارد البشرية" },
    description: { fr: "Développement du capital humain, des compétences et du dialogue social.", en: "Developing human capital, skills and social dialogue.", ar: "تنمية الرأسمال البشري والكفاءات والحوار الاجتماعي." },
    topics: {
      fr: [
        "Gestion prévisionnelle des emplois et des compétences : cartographie des métiers, plans de succession",
        "Recrutement et gestion des talents : sourcing, évaluation des compétences, fidélisation, gestion de la performance individuelle",
        "Droit du travail et relations sociales : cadre juridique de l'emploi, dialogue social, négociation collective, prévention des conflits",
        "Formation et développement des compétences : ingénierie de formation, analyse des besoins, formation à distance, parcours professionnels",
        "Rémunération et protection sociale : politiques de rémunération, avantages sociaux, retraite et prévoyance",
      ],
      en: [
        "Workforce and skills planning: job mapping, succession plans",
        "Recruitment and talent management: sourcing, skills assessment, retention, individual performance management",
        "Labour law and industrial relations: employment law, social dialogue, collective bargaining, conflict prevention",
        "Training and skills development: instructional design, needs analysis, digital learning, career paths",
        "Pay and social protection: compensation policy, benefits, pensions and welfare schemes",
      ],
      ar: [
        "التدبير التوقعي للوظائف والكفاءات: خريطة المهن، مخططات الخلافة",
        "التوظيف وتدبير المواهب: البحث عن الكفاءات، تقييمها، الاستبقاء، تدبير الأداء الفردي",
        "قانون الشغل والعلاقات الاجتماعية: الإطار القانوني للتشغيل، الحوار الاجتماعي، المفاوضة الجماعية، الوقاية من النزاعات",
        "التكوين وتنمية الكفاءات: هندسة التكوين، تحليل الحاجيات، التكوين عن بعد، المسارات المهنية",
        "الأجور والحماية الاجتماعية: سياسات الأجور، التعويضات الاجتماعية، التقاعد والاحتياط",
      ],
    },
  },
  {
    slug: 'strategie-organisation',
    number: '05',
    title: { fr: "Stratégie et développement organisationnel", en: "Strategy and organisational development", ar: "الاستراتيجية والتطوير التنظيمي" },
    short: { fr: "Stratégie et organisation", en: "Strategy and organisation", ar: "الاستراتيجية والتنظيم" },
    description: { fr: "Construction d'organisations performantes, agiles et responsables.", en: "Building organisations that perform, adapt and take responsibility.", ar: "بناء منظمات ذات أداء ومرونة ومسؤولية." },
    topics: {
      fr: [
        "Planification stratégique : diagnostic, formulation de la vision, déploiement et suivi des plans stratégiques",
        "Organisation et processus : cartographie des processus, réingénierie organisationnelle, amélioration continue",
        "Qualité, normes et certification : systèmes de management de la qualité, démarches de certification, comparaison des pratiques",
        "Responsabilité sociétale et développement durable : stratégie, reporting extra-financier, économie circulaire, transition écologique",
        "Intelligence économique et veille stratégique : collecte et analyse de l'information, veille concurrentielle, aide à la décision",
      ],
      en: [
        "Strategic planning: diagnosis, vision setting, deployment and monitoring of strategic plans",
        "Organisation and processes: process mapping, organisational redesign, continuous improvement",
        "Quality, standards and certification: quality management systems, certification processes, benchmarking",
        "Corporate responsibility and sustainability: strategy, non-financial reporting, circular economy, green transition",
        "Competitive intelligence and strategic watch: information gathering and analysis, market watch, decision support",
      ],
      ar: [
        "التخطيط الاستراتيجي: التشخيص، صياغة الرؤية، تنزيل المخططات الاستراتيجية وتتبعها",
        "التنظيم والمساطر: خريطة المساطر، إعادة الهندسة التنظيمية، التحسين المستمر",
        "الجودة والمعايير والاعتماد: أنظمة تدبير الجودة، مساطر الاعتماد، مقارنة الممارسات",
        "المسؤولية المجتمعية والتنمية المستدامة: الاستراتيجية، التقارير غير المالية، الاقتصاد الدائري، الانتقال البيئي",
        "اليقظة الاستراتيجية والذكاء الاقتصادي: جمع المعلومات وتحليلها، اليقظة التنافسية، دعم القرار",
      ],
    },
  },
  {
    slug: 'projets-programmes-evaluation',
    number: '06',
    title: { fr: "Projets, programmes et évaluations", en: "Projects, programmes and evaluation", ar: "المشاريع والبرامج والتقييم" },
    short: { fr: "Projets et évaluation", en: "Projects and evaluation", ar: "المشاريع والتقييم" },
    description: { fr: "Pilotage rigoureux du cycle de vie des projets et des politiques publiques.", en: "Rigorous management of the life cycle of projects and public policies.", ar: "قيادة صارمة لدورة حياة المشاريع والسياسات العمومية." },
    topics: {
      fr: [
        "Gestion du cycle de projet : identification, formulation, planification, exécution et clôture, cadre logique",
        "Suivi-évaluation et indicateurs : systèmes de suivi-évaluation, indicateurs de performance, évaluation d'impact",
        "Gestion des risques projets : identification, analyse et traitement des risques, plans de contingence",
        "Méthodes agiles et gestion collaborative : approches agiles, gestion de portefeuille de projets, outils collaboratifs",
        "Passation de marchés liés aux projets : procédures des bailleurs, gestion administrative et financière des projets",
      ],
      en: [
        "Project cycle management: identification, formulation, planning, execution and closure, logical framework",
        "Monitoring, evaluation and indicators: M&E systems, performance indicators, impact evaluation",
        "Project risk management: risk identification, analysis and treatment, contingency plans",
        "Agile methods and collaborative management: agile approaches, project portfolio management, collaborative tools",
        "Project procurement: donor procedures, administrative and financial management of projects",
      ],
      ar: [
        "تدبير دورة المشروع: التحديد والصياغة والتخطيط والتنفيذ والإقفال، الإطار المنطقي",
        "التتبع والتقييم والمؤشرات: أنظمة التتبع والتقييم، مؤشرات الأداء، تقييم الأثر",
        "تدبير مخاطر المشاريع: تحديد المخاطر وتحليلها ومعالجتها، مخططات الطوارئ",
        "المناهج الرشيقة والتدبير التشاركي: المقاربات الرشيقة، تدبير محفظة المشاريع، الأدوات التشاركية",
        "صفقات المشاريع: مساطر المانحين، التدبير الإداري والمالي للمشاريع",
      ],
    },
  },
  {
    slug: 'economie-politiques-publiques',
    number: '07',
    title: { fr: "Économie, analyse et politiques publiques", en: "Economics, analysis and public policy", ar: "الاقتصاد والتحليل والسياسات العمومية" },
    short: { fr: "Économie et politiques publiques", en: "Economics and public policy", ar: "الاقتصاد والسياسات العمومية" },
    description: { fr: "Compréhension des dynamiques économiques et de leurs implications sur la décision publique.", en: "Understanding economic dynamics and what they imply for public decisions.", ar: "فهم الديناميات الاقتصادية وانعكاساتها على القرار العمومي." },
    topics: {
      fr: [
        "Macroéconomie et conjoncture : croissance, inflation, politiques monétaires et budgétaires, prévision économique",
        "Microéconomie et économie industrielle : comportement des agents, structures de marché, régulation sectorielle",
        "Économétrie et analyse de données économiques : modélisation statistique, séries temporelles, traitement des données",
        "Évaluation des politiques publiques : méthodes ex ante et ex post, analyse coûts-bénéfices, impact socio-économique",
        "Économie internationale et développement : commerce international, intégration régionale, financement du développement",
      ],
      en: [
        "Macroeconomics and business cycles: growth, inflation, monetary and fiscal policy, economic forecasting",
        "Microeconomics and industrial organisation: agent behaviour, market structures, sector regulation",
        "Econometrics and economic data analysis: statistical modelling, time series, data processing",
        "Public policy evaluation: ex ante and ex post methods, cost-benefit analysis, socio-economic impact",
        "International economics and development: international trade, regional integration, development finance",
      ],
      ar: [
        "الاقتصاد الكلي والظرفية: النمو، التضخم، السياسات النقدية والميزانياتية، التوقع الاقتصادي",
        "الاقتصاد الجزئي واقتصاد الصناعة: سلوك الفاعلين، بنيات السوق، التقنين القطاعي",
        "الاقتصاد القياسي وتحليل المعطيات الاقتصادية: النمذجة الإحصائية، السلاسل الزمنية، معالجة المعطيات",
        "تقييم السياسات العمومية: المناهج القبلية والبعدية، تحليل الكلفة والمنفعة، الأثر الاجتماعي والاقتصادي",
        "الاقتصاد الدولي والتنمية: التجارة الدولية، الاندماج الجهوي، تمويل التنمية",
      ],
    },
  },
  {
    slug: 'marketing-communication',
    number: '08',
    title: { fr: "Marketing, communication et relations publiques", en: "Marketing, communication and public relations", ar: "التسويق والتواصل والعلاقات العامة" },
    short: { fr: "Marketing et communication", en: "Marketing and communication", ar: "التسويق والتواصل" },
    description: { fr: "Valorisation de l'image institutionnelle et pilotage de la relation avec les parties prenantes.", en: "Building institutional image and managing relations with stakeholders.", ar: "تثمين صورة المؤسسة وتدبير العلاقة مع الأطراف المعنية." },
    topics: {
      fr: [
        "Marketing stratégique et opérationnel : segmentation, positionnement, plan de marchéage, marketing des services publics",
        "Communication institutionnelle et digitale : stratégie de communication, gestion de la réputation, réseaux sociaux",
        "Relations publiques et diplomatie économique : relations avec les parties prenantes, promotion territoriale, protocole",
        "Gestion de la relation usager et client : expérience client, qualité de service, outils de gestion de la relation",
        "Communication de crise : anticipation, gestion et communication en situation de crise",
      ],
      en: [
        "Strategic and operational marketing: segmentation, positioning, marketing mix, public service marketing",
        "Institutional and digital communication: communication strategy, reputation management, social media",
        "Public relations and economic diplomacy: stakeholder relations, territorial promotion, protocol",
        "Citizen and customer relationship management: customer experience, service quality, CRM tools",
        "Crisis communication: anticipation, management and communication in a crisis",
      ],
      ar: [
        "التسويق الاستراتيجي والعملياتي: التقسيم، التموقع، المزيج التسويقي، تسويق الخدمات العمومية",
        "التواصل المؤسساتي والرقمي: استراتيجية التواصل، تدبير السمعة، الشبكات الاجتماعية",
        "العلاقات العامة والدبلوماسية الاقتصادية: العلاقة مع الأطراف المعنية، الترويج الترابي، البروتوكول",
        "تدبير العلاقة مع المرتفق والزبون: تجربة الزبون، جودة الخدمة، أدوات تدبير العلاقة",
        "التواصل في الأزمات: الاستباق والتدبير والتواصل في وضعية أزمة",
      ],
    },
  },
  {
    slug: 'digital-data-ia',
    number: '09',
    title: { fr: "Digital, data et intelligence artificielle", en: "Digital, data and artificial intelligence", ar: "الرقمنة والمعطيات والذكاء الاصطناعي" },
    short: { fr: "Digital, data et IA", en: "Digital, data and AI", ar: "الرقمنة والمعطيات" },
    description: { fr: "Accélération de la transformation numérique et exploitation stratégique de la donnée.", en: "Accelerating digital transformation and putting data to strategic use.", ar: "تسريع التحول الرقمي والاستثمار الاستراتيجي للمعطيات." },
    topics: {
      fr: [
        "Transformation digitale des organisations : stratégie de digitalisation, dématérialisation des services, conduite du changement numérique",
        "Science des données et analyse : collecte, traitement et visualisation, décision fondée sur la donnée",
        "Intelligence artificielle appliquée : fondamentaux de l'IA et de l'apprentissage automatique, cas d'usage en gestion et politiques publiques",
        "Cybersécurité et protection des données : gestion des risques numériques, conformité à la protection des données personnelles",
        "Systèmes d'information de gestion : urbanisation des systèmes, progiciels de gestion intégrés, interopérabilité des plateformes",
      ],
      en: [
        "Digital transformation: digitalisation strategy, paperless services, digital change management",
        "Data science and analytics: collection, processing and visualisation, data-driven decisions",
        "Applied artificial intelligence: AI and machine learning fundamentals, use cases in management and public policy",
        "Cybersecurity and data protection: digital risk management, personal data compliance",
        "Management information systems: systems architecture, integrated management software, platform interoperability",
      ],
      ar: [
        "التحول الرقمي للمنظمات: استراتيجية الرقمنة، رقمنة الخدمات، تدبير التغيير الرقمي",
        "علم المعطيات والتحليل: الجمع والمعالجة والتصوير البياني، القرار المبني على المعطيات",
        "الذكاء الاصطناعي التطبيقي: أسس الذكاء الاصطناعي والتعلم الآلي، حالات الاستعمال في التدبير والسياسات العمومية",
        "الأمن السيبراني وحماية المعطيات: تدبير المخاطر الرقمية، المطابقة لحماية المعطيات الشخصية",
        "أنظمة معلومات التدبير: هندسة الأنظمة، برمجيات التدبير المندمجة، قابلية التشغيل البيني للمنصات",
      ],
    },
  },
  {
    slug: 'droit-reglementation',
    number: '10',
    title: { fr: "Droit et réglementation", en: "Law and regulation", ar: "القانون والتنظيم" },
    short: { fr: "Droit et réglementation", en: "Law and regulation", ar: "القانون والتنظيم" },
    description: { fr: "Sécurisation juridique des activités économiques et administratives.", en: "Legal security for economic and administrative activity.", ar: "التأمين القانوني للأنشطة الاقتصادية والإدارية." },
    topics: {
      fr: [
        "Droit des affaires : droit des sociétés, droit des contrats, droit de la concurrence",
        "Droit public et administratif : organisation administrative, contentieux administratif, responsabilité de l'administration",
        "Droit international économique : accords commerciaux, arbitrage, droit des investissements",
        "Droit social : réglementation du travail, protection sociale, contentieux social",
        "Veille juridique et réglementaire : suivi des évolutions législatives, mise en conformité des organisations",
      ],
      en: [
        "Business law: company law, contract law, competition law",
        "Public and administrative law: administrative organisation, administrative litigation, state liability",
        "International economic law: trade agreements, arbitration, investment law",
        "Social law: labour regulation, social protection, employment litigation",
        "Legal and regulatory watch: tracking legislative change, bringing organisations into compliance",
      ],
      ar: [
        "قانون الأعمال: قانون الشركات، قانون العقود، قانون المنافسة",
        "القانون العام والإداري: التنظيم الإداري، المنازعات الإدارية، مسؤولية الإدارة",
        "القانون الاقتصادي الدولي: الاتفاقيات التجارية، التحكيم، قانون الاستثمار",
        "القانون الاجتماعي: تنظيم الشغل، الحماية الاجتماعية، المنازعات الاجتماعية",
        "اليقظة القانونية والتنظيمية: تتبع التطورات التشريعية، ملاءمة المنظمات",
      ],
    },
  },
  {
    slug: 'logistique-supply-chain',
    number: '11',
    title: { fr: "Logistique et chaîne d'approvisionnement", en: "Logistics and supply chain", ar: "اللوجستيك وسلسلة التوريد" },
    short: { fr: "Logistique et achats", en: "Logistics and procurement", ar: "اللوجستيك والمشتريات" },
    description: { fr: "Optimisation des flux, des achats et de la chaîne d'approvisionnement.", en: "Optimising flows, purchasing and the supply chain.", ar: "تحسين التدفقات والمشتريات وسلسلة التوريد." },
    topics: {
      fr: [
        "Gestion des achats et approvisionnement : politique d'achat, sélection des fournisseurs, négociation d'achats",
        "Gestion de la chaîne logistique : planification, gestion des stocks, optimisation des flux",
        "Logistique internationale : transport international, douane, incoterms, chaîne logistique globale",
        "Performance logistique : indicateurs, coûts logistiques, amélioration continue",
        "Logistique durable : réduction de l'empreinte carbone de la chaîne d'approvisionnement",
      ],
      en: [
        "Purchasing and supply management: purchasing policy, supplier sourcing, purchase negotiation",
        "Supply chain management: planning, inventory management, flow optimisation",
        "International logistics: international transport, customs, incoterms, global supply chain",
        "Logistics performance: indicators, logistics costs, continuous improvement",
        "Sustainable logistics: reducing the carbon footprint of the supply chain",
      ],
      ar: [
        "تدبير المشتريات والتموين: سياسة الشراء، اختيار الموردين، التفاوض حول المشتريات",
        "تدبير السلسلة اللوجستيكية: التخطيط، تدبير المخزون، تحسين التدفقات",
        "اللوجستيك الدولي: النقل الدولي، الجمارك، قواعد التجارة الدولية، السلسلة اللوجستيكية العالمية",
        "الأداء اللوجستيكي: المؤشرات، التكاليف اللوجستيكية، التحسين المستمر",
        "اللوجستيك المستدام: تقليص البصمة الكربونية لسلسلة التوريد",
      ],
    },
  },
  {
    slug: 'entrepreneuriat-innovation',
    number: '12',
    title: { fr: "Entrepreneuriat et innovation", en: "Entrepreneurship and innovation", ar: "المقاولاتية والابتكار" },
    short: { fr: "Entrepreneuriat et innovation", en: "Entrepreneurship and innovation", ar: "المقاولاتية والابتكار" },
    description: { fr: "Stimulation de l'esprit d'entreprise et accompagnement des projets innovants.", en: "Fostering entrepreneurship and supporting innovative ventures.", ar: "تحفيز روح المقاولة ومواكبة المشاريع المبتكرة." },
    topics: {
      fr: [
        "Création et développement d'entreprise : modèle économique, plan d'affaires, structuration juridique et financière",
        "Management de l'innovation : processus d'innovation, conception centrée usager, gestion de projets innovants",
        "Financement de l'entrepreneuriat : capital-risque, financement participatif, dispositifs d'appui",
        "Incubation et accompagnement : écosystèmes entrepreneuriaux, incubateurs, accélérateurs, mentorat",
        "Entrepreneuriat social : économie sociale et solidaire, modèles hybrides à impact",
      ],
      en: [
        "Business creation and growth: business model, business plan, legal and financial structuring",
        "Innovation management: innovation processes, user-centred design, managing innovative projects",
        "Entrepreneurship finance: venture capital, crowdfunding, support schemes",
        "Incubation and support: entrepreneurial ecosystems, incubators, accelerators, mentoring",
        "Social entrepreneurship: social and solidarity economy, hybrid impact models",
      ],
      ar: [
        "إحداث المقاولة وتطويرها: نموذج الأعمال، مخطط الأعمال، الهيكلة القانونية والمالية",
        "تدبير الابتكار: مسارات الابتكار، التصميم المتمحور حول المستعمل، تدبير المشاريع المبتكرة",
        "تمويل المقاولاتية: رأس المال المخاطر، التمويل التشاركي، آليات الدعم",
        "الاحتضان والمواكبة: المنظومات المقاولاتية، الحاضنات، المسرعات، التوجيه",
        "المقاولاتية الاجتماعية: الاقتصاد الاجتماعي والتضامني، النماذج المختلطة ذات الأثر",
      ],
    },
  },
]

export const getDomain = (slug: DomainSlug) => domains.find((d) => d.slug === slug)!
export const domainCount = domains.length
