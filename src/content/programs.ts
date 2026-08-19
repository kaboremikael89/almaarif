import type { I18nText, I18nList } from '@/lib/i18n'
import type { DomainSlug } from './domains'

export type Program = {
  slug: string
  domain: DomainSlug
  reference: string
  title: I18nText
  summary: I18nText
  /** Durée en jours ouvrés */
  durationDays: number
  level: 'fondamental' | 'perfectionnement' | 'expert'
  audience: I18nList
  objectives: I18nList
  modules: I18nList
  featured?: boolean
  /** Sessions programmées — à compléter dès la publication du calendrier. */
  sessions?: string[]
}

export const programs: Program[] = [
  {
    slug: 'budget-programme-performance',
    domain: 'finances-publiques',
    reference: 'FP-101',
    featured: true,
    durationDays: 5,
    level: 'perfectionnement',
    title: {
      fr: 'Budget-programme et pilotage de la performance publique',
      en: 'Programme budgeting and public performance management',
    },
    summary: {
      fr: "Passer d'un budget de moyens à un budget de résultats : construire des programmes, des objectifs et des indicateurs qui tiennent devant le Parlement et devant les bailleurs.",
      en: 'Moving from input-based to results-based budgeting: building programmes, objectives and indicators that hold up before parliament and before donors.',
    },
    audience: {
      fr: [
        'Directeurs des affaires financières et du budget',
        'Responsables de programme et de la planification',
        'Cadres des inspections générales des finances',
        'Contrôleurs financiers et receveurs',
      ],
      en: [
        'Directors of finance and budget',
        'Programme and planning managers',
        'Officers of the general finance inspectorate',
        'Financial controllers and revenue officers',
      ],
    },
    objectives: {
      fr: [
        "Structurer une architecture de programmes cohérente avec les politiques publiques",
        'Formuler des objectifs et des indicateurs mesurables et vérifiables',
        'Articuler budget annuel et cadre de dépenses à moyen terme',
        'Produire un projet et un rapport annuel de performance exploitables',
        "Installer le dialogue de gestion entre responsables de programme et opérateurs",
      ],
      en: [
        'Design a programme architecture aligned with public policy',
        'Define measurable, verifiable objectives and indicators',
        'Connect the annual budget with the medium-term expenditure framework',
        'Produce usable performance plans and annual performance reports',
        'Establish management dialogue between programme owners and operators',
      ],
    },
    modules: {
      fr: [
        'Fondements de la gestion budgétaire axée sur les résultats',
        "Architecture de programmes : missions, programmes, actions",
        'Objectifs, indicateurs et cibles : méthode et pièges',
        'Cadrage macro-budgétaire et CDMT',
        'Projet annuel de performance : atelier de rédaction',
        'Dialogue de gestion, reporting et contrôle de gestion',
      ],
      en: [
        'Foundations of results-based budgeting',
        'Programme architecture: missions, programmes, actions',
        'Objectives, indicators and targets: method and pitfalls',
        'Macro-fiscal framing and MTEF',
        'Annual performance plan: drafting workshop',
        'Management dialogue, reporting and management control',
      ],
    },
  },
  {
    slug: 'comptabilite-publique-ipsas',
    domain: 'finances-publiques',
    reference: 'FP-102',
    durationDays: 5,
    level: 'perfectionnement',
    title: {
      fr: 'Comptabilité publique et normes IPSAS',
      en: 'Public accounting and IPSAS standards',
    },
    summary: {
      fr: "Conduire le passage à la comptabilité d'exercice et produire des états financiers conformes aux normes internationales du secteur public.",
      en: 'Leading the transition to accrual accounting and producing financial statements compliant with international public sector standards.',
    },
    audience: {
      fr: [
        'Comptables publics et agents comptables',
        'Directions financières des établissements publics',
        'Cadres des trésoreries et des directions du budget',
        'Auditeurs et vérificateurs des comptes',
      ],
      en: [
        'Public accountants and accounting officers',
        'Finance departments of public agencies',
        'Treasury and budget directorate staff',
        'Auditors and account verifiers',
      ],
    },
    objectives: {
      fr: [
        "Distinguer comptabilité de caisse, d'engagement et d'exercice",
        'Appliquer les principales normes IPSAS aux opérations courantes',
        'Recenser, évaluer et amortir le patrimoine de l’État',
        'Construire un plan de transition réaliste et séquencé',
        'Préparer les états financiers et leur annexe',
      ],
      en: [
        'Distinguish cash, commitment and accrual accounting',
        'Apply core IPSAS standards to day-to-day transactions',
        'Identify, value and depreciate public assets',
        'Build a realistic, sequenced transition plan',
        'Prepare financial statements and their notes',
      ],
    },
    modules: {
      fr: [
        'Panorama des référentiels : IPSAS, SYSCOHADA, référentiels nationaux',
        'Immobilisations, stocks et dépréciations',
        'Produits, charges et rattachement à l’exercice',
        'Provisions, engagements hors bilan et dette',
        'Consolidation et périmètre de l’entité publique',
        'Atelier : élaboration d’un jeu complet d’états financiers',
      ],
      en: [
        'Overview of frameworks: IPSAS, SYSCOHADA, national standards',
        'Fixed assets, inventories and impairment',
        'Revenue, expenses and accrual cut-off',
        'Provisions, off-balance-sheet commitments and debt',
        'Consolidation and the public entity boundary',
        'Workshop: preparing a full set of financial statements',
      ],
    },
  },
  {
    slug: 'marches-publics-passation-execution',
    domain: 'commande-publique',
    reference: 'CP-201',
    featured: true,
    durationDays: 5,
    level: 'fondamental',
    title: {
      fr: 'Passation et exécution des marchés publics',
      en: 'Public procurement: tendering and contract execution',
    },
    summary: {
      fr: "Maîtriser la chaîne complète de la commande publique, du besoin exprimé à la réception définitive, et sécuriser juridiquement chaque décision.",
      en: 'Mastering the full procurement chain, from needs definition to final acceptance, and legally securing every decision.',
    },
    audience: {
      fr: [
        'Responsables des services achats et marchés',
        'Membres des commissions d’appel d’offres',
        'Maîtres d’ouvrage et chefs de projet',
        'Juristes et contrôleurs de la dépense',
      ],
      en: [
        'Procurement and contract managers',
        'Tender committee members',
        'Contracting authorities and project managers',
        'Legal officers and expenditure controllers',
      ],
    },
    objectives: {
      fr: [
        'Choisir le mode de passation adapté au besoin et au risque',
        "Rédiger un dossier d'appel d'offres clair et non discriminatoire",
        'Évaluer les offres selon une grille défendable',
        'Piloter l’exécution : ordres de service, avenants, pénalités, réception',
        'Prévenir et traiter les recours et les litiges',
      ],
      en: [
        'Select the procurement method matching the need and the risk',
        'Draft clear, non-discriminatory bidding documents',
        'Evaluate bids with a defensible scoring grid',
        'Manage execution: service orders, amendments, penalties, acceptance',
        'Prevent and handle appeals and disputes',
      ],
    },
    modules: {
      fr: [
        'Principes fondamentaux et acteurs de la commande publique',
        'Définition du besoin, allotissement et estimation',
        'Modes de passation et publicité',
        'Ouverture, évaluation et attribution : cas pratiques',
        'Exécution financière et technique du marché',
        'Contentieux, intégrité et prévention de la fraude',
      ],
      en: [
        'Core principles and procurement actors',
        'Needs definition, lotting and cost estimation',
        'Procurement methods and advertising',
        'Bid opening, evaluation and award: case studies',
        'Financial and technical contract execution',
        'Disputes, integrity and fraud prevention',
      ],
    },
  },
  {
    slug: 'passation-marches-bailleurs',
    domain: 'commande-publique',
    reference: 'CP-202',
    durationDays: 5,
    level: 'perfectionnement',
    title: {
      fr: 'Passation des marchés financés par les bailleurs',
      en: 'Procurement under donor-financed projects',
    },
    summary: {
      fr: "Appliquer les règles de la Banque mondiale, de la BAD et de l'Union européenne sans bloquer le décaissement des projets.",
      en: 'Applying World Bank, AfDB and European Union rules without stalling project disbursement.',
    },
    audience: {
      fr: [
        'Coordonnateurs et spécialistes en passation des marchés',
        'Unités de gestion de projets financés',
        'Responsables financiers de projets',
        'Auditeurs de projets sur financement extérieur',
      ],
      en: [
        'Project coordinators and procurement specialists',
        'Project implementation units',
        'Project finance officers',
        'Auditors of externally financed projects',
      ],
    },
    objectives: {
      fr: [
        'Situer les règles des bailleurs par rapport au droit national',
        'Élaborer et actualiser un plan de passation des marchés',
        'Conduire une sélection de consultants (QCBS, QBS, sélection directe)',
        'Gérer la revue préalable et les avis de non-objection',
        'Documenter les dossiers pour l’audit et la revue a posteriori',
      ],
      en: [
        'Position donor rules relative to national law',
        'Prepare and update a procurement plan',
        'Run consultant selections (QCBS, QBS, direct selection)',
        'Manage prior review and no-objection letters',
        'Document files for audit and post-review',
      ],
    },
    modules: {
      fr: [
        'Cadres de passation : Banque mondiale, BAD, UE, systèmes nationaux',
        'Plan de passation et suivi des seuils',
        'Sélection des consultants et des fournisseurs',
        'Avis de non-objection et revues préalables',
        'Décaissement, comptes désignés et justificatifs',
        'Plaintes, sanctions et pratiques prohibées',
      ],
      en: [
        'Procurement frameworks: World Bank, AfDB, EU, national systems',
        'Procurement planning and threshold monitoring',
        'Selecting consultants and suppliers',
        'No-objection letters and prior reviews',
        'Disbursement, designated accounts and supporting documents',
        'Complaints, sanctions and prohibited practices',
      ],
    },
  },
  {
    slug: 'audit-interne-risques',
    domain: 'audit-risques',
    reference: 'AR-301',
    featured: true,
    durationDays: 5,
    level: 'perfectionnement',
    title: {
      fr: 'Audit interne : de la cartographie des risques au rapport',
      en: 'Internal audit: from risk mapping to the audit report',
    },
    summary: {
      fr: "Conduire une mission d'audit interne complète selon les normes internationales, et produire des recommandations que la direction met réellement en œuvre.",
      en: 'Running a full internal audit assignment to international standards, and producing recommendations management actually implements.',
    },
    audience: {
      fr: [
        'Auditeurs internes et chefs de mission',
        'Inspecteurs généraux et contrôleurs',
        'Membres de comités d’audit',
        'Responsables qualité et conformité',
      ],
      en: [
        'Internal auditors and audit team leaders',
        'Inspectors general and controllers',
        'Audit committee members',
        'Quality and compliance officers',
      ],
    },
    objectives: {
      fr: [
        'Appliquer les normes internationales de l’audit interne',
        'Construire une cartographie des risques hiérarchisée',
        'Bâtir un plan d’audit pluriannuel fondé sur les risques',
        'Mener les entretiens, tests et sondages sur le terrain',
        'Rédiger un rapport clair et suivre les recommandations',
      ],
      en: [
        'Apply international internal audit standards',
        'Build a prioritised risk map',
        'Design a multi-year risk-based audit plan',
        'Conduct interviews, tests and sampling in the field',
        'Write a clear report and follow up recommendations',
      ],
    },
    modules: {
      fr: [
        'Positionnement et charte de l’audit interne',
        'Identification, cotation et hiérarchisation des risques',
        'Plan d’audit et allocation des ressources',
        'Conduite de mission : preuves, tests, papiers de travail',
        'Rédaction du rapport et restitution à la direction',
        'Suivi des recommandations et évaluation de la fonction',
      ],
      en: [
        'Positioning and the internal audit charter',
        'Risk identification, scoring and prioritisation',
        'Audit planning and resource allocation',
        'Fieldwork: evidence, testing, working papers',
        'Report writing and management debriefing',
        'Recommendation follow-up and quality assessment',
      ],
    },
  },
  {
    slug: 'controle-interne-anti-fraude',
    domain: 'audit-risques',
    reference: 'AR-302',
    durationDays: 4,
    level: 'fondamental',
    title: {
      fr: 'Contrôle interne et dispositif anti-fraude',
      en: 'Internal control and anti-fraud frameworks',
    },
    summary: {
      fr: "Concevoir un dispositif de contrôle interne proportionné et détecter les schémas de fraude les plus fréquents dans les organisations publiques.",
      en: 'Designing a proportionate internal control system and detecting the fraud schemes most common in public organisations.',
    },
    audience: {
      fr: [
        'Responsables du contrôle interne et de la conformité',
        'Directeurs administratifs et financiers',
        'Chefs de services opérationnels',
        'Auditeurs et inspecteurs',
      ],
      en: [
        'Internal control and compliance officers',
        'Administrative and financial directors',
        'Heads of operational departments',
        'Auditors and inspectors',
      ],
    },
    objectives: {
      fr: [
        'Structurer un dispositif selon le référentiel COSO',
        'Décrire les processus et identifier les points de contrôle clés',
        'Séparer les tâches et sécuriser les délégations',
        'Reconnaître les schémas de fraude et leurs signaux faibles',
        'Mettre en place un canal d’alerte et un plan de réponse',
      ],
      en: [
        'Structure a system based on the COSO framework',
        'Map processes and identify key control points',
        'Segregate duties and secure delegations of authority',
        'Recognise fraud schemes and their red flags',
        'Set up a whistleblowing channel and response plan',
      ],
    },
    modules: {
      fr: [
        'Référentiel COSO et composantes du contrôle interne',
        'Cartographie des processus et matrices de contrôle',
        'Séparation des tâches, habilitations et délégations',
        'Typologie des fraudes : détournements, corruption, états falsifiés',
        'Alerte éthique, enquête interne et sanctions',
      ],
      en: [
        'The COSO framework and control components',
        'Process mapping and control matrices',
        'Segregation of duties, access rights and delegations',
        'Fraud typology: misappropriation, corruption, falsified statements',
        'Whistleblowing, internal investigation and sanctions',
      ],
    },
  },
  {
    slug: 'leadership-conduite-changement',
    domain: 'gouvernance-leadership',
    reference: 'GL-401',
    featured: true,
    durationDays: 4,
    level: 'perfectionnement',
    title: {
      fr: 'Leadership exécutif et conduite du changement',
      en: 'Executive leadership and change management',
    },
    summary: {
      fr: "Un séminaire de haut niveau pour dirigeants : clarifier sa posture, décider sous contrainte et embarquer des équipes dans une réforme.",
      en: 'A senior-level seminar: clarifying your leadership posture, deciding under constraint and carrying teams through reform.',
    },
    audience: {
      fr: [
        'Directeurs généraux et secrétaires généraux',
        'Directeurs centraux et régionaux',
        'Dirigeants d’établissements et d’entreprises publics',
        'Cadres à haut potentiel',
      ],
      en: [
        'Directors general and secretaries general',
        'Central and regional directors',
        'Heads of public agencies and enterprises',
        'High-potential senior managers',
      ],
    },
    objectives: {
      fr: [
        'Identifier son style de leadership et ses angles morts',
        'Décider vite et juste en environnement incertain',
        'Construire une vision et la traduire en feuille de route',
        'Gérer les résistances et les jeux d’acteurs',
        'Installer une culture de la responsabilité et du résultat',
      ],
      en: [
        'Identify your leadership style and blind spots',
        'Decide quickly and soundly under uncertainty',
        'Build a vision and translate it into a roadmap',
        'Manage resistance and stakeholder dynamics',
        'Instil a culture of accountability and results',
      ],
    },
    modules: {
      fr: [
        'Diagnostic de posture managériale',
        'Décision, arbitrage et gestion des priorités',
        'Vision, récit stratégique et alignement',
        'Cartographie des acteurs et négociation interne',
        'Communication du changement et gestion des résistances',
        'Plan d’action personnel à 100 jours',
      ],
      en: [
        'Managerial posture diagnosis',
        'Decision-making, trade-offs and priority management',
        'Vision, strategic narrative and alignment',
        'Stakeholder mapping and internal negotiation',
        'Change communication and managing resistance',
        'Personal 100-day action plan',
      ],
    },
  },
  {
    slug: 'gouvernance-entreprises-publiques',
    domain: 'gouvernance-leadership',
    reference: 'GL-402',
    durationDays: 4,
    level: 'expert',
    title: {
      fr: 'Gouvernance des entreprises et établissements publics',
      en: 'Governance of state-owned enterprises and agencies',
    },
    summary: {
      fr: "Professionnaliser le fonctionnement des conseils d'administration : rôles, comités spécialisés, information du conseil et évaluation de la performance.",
      en: 'Professionalising boards: roles, specialised committees, board information and performance assessment.',
    },
    audience: {
      fr: [
        'Administrateurs et représentants de l’État',
        'Secrétaires de conseils d’administration',
        'Directeurs généraux et leurs équipes rapprochées',
        'Tutelles techniques et financières',
      ],
      en: [
        'Board members and state representatives',
        'Board secretaries',
        'CEOs and their executive teams',
        'Technical and financial supervisory bodies',
      ],
    },
    objectives: {
      fr: [
        'Clarifier la répartition des pouvoirs entre tutelle, conseil et direction',
        'Organiser des conseils efficaces et bien documentés',
        'Animer les comités d’audit, des risques et des rémunérations',
        'Contractualiser les objectifs de performance',
        'Prévenir les conflits d’intérêts',
      ],
      en: [
        'Clarify the split of powers between supervision, board and management',
        'Run effective, well-documented board meetings',
        'Steer audit, risk and remuneration committees',
        'Contract performance objectives',
        'Prevent conflicts of interest',
      ],
    },
    modules: {
      fr: [
        'Principes internationaux de gouvernance publique (OCDE)',
        'Rôle et responsabilité de l’administrateur',
        'Comités spécialisés et information du conseil',
        'Contrats de performance et tableaux de bord',
        'Transparence, éthique et conflits d’intérêts',
      ],
      en: [
        'International public governance principles (OECD)',
        'Board member roles and liabilities',
        'Specialised committees and board information',
        'Performance contracts and dashboards',
        'Transparency, ethics and conflicts of interest',
      ],
    },
  },
  {
    slug: 'gestion-projets-developpement',
    domain: 'projets-evaluation',
    reference: 'PE-501',
    durationDays: 5,
    level: 'fondamental',
    title: {
      fr: 'Gestion des projets de développement : cycle et GAR',
      en: 'Development project management: cycle and RBM',
    },
    summary: {
      fr: "De la note conceptuelle au rapport d'achèvement : structurer, planifier, budgéter et piloter un projet financé, avec les outils attendus par les bailleurs.",
      en: 'From concept note to completion report: structuring, planning, budgeting and steering a financed project with the tools donors expect.',
    },
    audience: {
      fr: [
        'Chefs de projets et coordonnateurs d’unités de gestion',
        'Chargés de programmes des ministères',
        'Responsables d’ONG et d’organisations régionales',
        'Chargés de suivi et de reporting',
      ],
      en: [
        'Project managers and PIU coordinators',
        'Ministry programme officers',
        'NGO and regional organisation managers',
        'Monitoring and reporting officers',
      ],
    },
    objectives: {
      fr: [
        'Construire un cadre logique robuste et une chaîne de résultats',
        'Planifier activités, coûts et ressources de façon réaliste',
        'Anticiper les risques et préparer les mesures d’atténuation',
        'Produire des rapports d’avancement crédibles',
        'Préparer la clôture et la capitalisation du projet',
      ],
      en: [
        'Build a robust logical framework and results chain',
        'Plan activities, costs and resources realistically',
        'Anticipate risks and prepare mitigation measures',
        'Produce credible progress reports',
        'Prepare project closure and lessons learned',
      ],
    },
    modules: {
      fr: [
        'Cycle de projet et analyse des problèmes',
        'Cadre logique, indicateurs et hypothèses',
        'Planification, chemin critique et budgétisation',
        'Gestion des risques et des parties prenantes',
        'Rapportage, revue à mi-parcours et clôture',
        'Atelier : montage d’un projet à partir d’un cas réel',
      ],
      en: [
        'Project cycle and problem analysis',
        'Logical framework, indicators and assumptions',
        'Planning, critical path and budgeting',
        'Risk and stakeholder management',
        'Reporting, mid-term review and closure',
        'Workshop: designing a project from a real case',
      ],
    },
  },
  {
    slug: 'suivi-evaluation-impact',
    domain: 'projets-evaluation',
    reference: 'PE-502',
    durationDays: 5,
    level: 'perfectionnement',
    title: {
      fr: "Suivi-évaluation et mesure d'impact des politiques publiques",
      en: 'Monitoring, evaluation and impact measurement of public policy',
    },
    summary: {
      fr: "Installer un système de suivi-évaluation qui produit des données fiables, et conduire des évaluations dont les conclusions changent réellement les décisions.",
      en: 'Setting up an M&E system that produces reliable data, and running evaluations whose findings actually change decisions.',
    },
    audience: {
      fr: [
        'Responsables suivi-évaluation et statisticiens',
        'Directions de la planification et de la prospective',
        'Chargés d’évaluation des politiques publiques',
        'Partenaires techniques et financiers',
      ],
      en: [
        'M&E officers and statisticians',
        'Planning and foresight departments',
        'Public policy evaluation officers',
        'Technical and financial partners',
      ],
    },
    objectives: {
      fr: [
        'Concevoir un système de suivi-évaluation complet',
        'Définir des indicateurs SMART et leurs sources de vérification',
        'Choisir la méthode d’évaluation adaptée à la question posée',
        'Collecter et contrôler la qualité des données',
        'Restituer les résultats sous forme de tableaux de bord décisionnels',
      ],
      en: [
        'Design a complete M&E system',
        'Define SMART indicators and their means of verification',
        'Choose the evaluation method suited to the question',
        'Collect data and control its quality',
        'Present results as decision-oriented dashboards',
      ],
    },
    modules: {
      fr: [
        'Théorie du changement et chaîne de résultats',
        'Conception du système de suivi et des outils de collecte',
        'Qualité des données et audit des indicateurs',
        'Méthodes d’évaluation : quantitatives, qualitatives, mixtes',
        'Évaluation d’impact et groupes de comparaison',
        'Tableaux de bord, visualisation et communication des résultats',
      ],
      en: [
        'Theory of change and results chain',
        'Designing the monitoring system and collection tools',
        'Data quality and indicator audits',
        'Evaluation methods: quantitative, qualitative, mixed',
        'Impact evaluation and comparison groups',
        'Dashboards, visualisation and communicating findings',
      ],
    },
  },
  {
    slug: 'transformation-digitale-administrations',
    domain: 'transformation-digitale',
    reference: 'TD-601',
    durationDays: 4,
    level: 'fondamental',
    title: {
      fr: 'Transformation digitale des administrations',
      en: 'Digital transformation of public administrations',
    },
    summary: {
      fr: "Construire une feuille de route numérique réaliste : dématérialiser les procédures à fort impact, gouverner la donnée et sécuriser les systèmes.",
      en: 'Building a realistic digital roadmap: digitising high-impact processes, governing data and securing systems.',
    },
    audience: {
      fr: [
        'Directeurs des systèmes d’information',
        'Chefs de projets de modernisation',
        'Responsables de la relation usagers',
        'Secrétaires généraux et directeurs de cabinet',
      ],
      en: [
        'Chief information officers',
        'Modernisation project managers',
        'Citizen service managers',
        'Secretaries general and chiefs of staff',
      ],
    },
    objectives: {
      fr: [
        'Établir un diagnostic de maturité numérique',
        'Prioriser les services à dématérialiser selon la valeur usager',
        'Structurer la gouvernance de la donnée et l’interopérabilité',
        'Intégrer la cybersécurité dès la conception',
        'Piloter le changement et l’adoption par les agents',
      ],
      en: [
        'Assess digital maturity',
        'Prioritise services to digitise based on user value',
        'Structure data governance and interoperability',
        'Embed cybersecurity by design',
        'Drive change and staff adoption',
      ],
    },
    modules: {
      fr: [
        'Diagnostic de maturité et benchmark international',
        'Parcours usager et refonte des procédures',
        'Architecture, interopérabilité et identité numérique',
        'Protection des données personnelles et cybersécurité',
        'Feuille de route, budget et indicateurs de suivi',
      ],
      en: [
        'Maturity assessment and international benchmarking',
        'User journeys and process redesign',
        'Architecture, interoperability and digital identity',
        'Personal data protection and cybersecurity',
        'Roadmap, budget and monitoring indicators',
      ],
    },
  },
  {
    slug: 'data-ia-dirigeants',
    domain: 'transformation-digitale',
    reference: 'TD-602',
    featured: true,
    durationDays: 3,
    level: 'fondamental',
    title: {
      fr: 'Data et intelligence artificielle pour dirigeants',
      en: 'Data and artificial intelligence for executives',
    },
    summary: {
      fr: "Trois jours pour comprendre ce que l'IA change concrètement dans le pilotage d'une organisation — et décider où l'utiliser, où s'en abstenir.",
      en: 'Three days to understand what AI actually changes in running an organisation — and to decide where to use it and where not to.',
    },
    audience: {
      fr: [
        'Dirigeants et membres de comités de direction',
        'Directeurs métiers non techniques',
        'Responsables de la stratégie et de l’innovation',
        'Chargés de la donnée et du pilotage',
      ],
      en: [
        'Executives and management committee members',
        'Non-technical business directors',
        'Strategy and innovation managers',
        'Data and performance officers',
      ],
    },
    objectives: {
      fr: [
        'Comprendre sans jargon ce que l’IA sait et ne sait pas faire',
        'Identifier les cas d’usage à valeur rapide dans son organisation',
        'Évaluer les risques : biais, confidentialité, dépendance, conformité',
        'Cadrer un pilote et mesurer son retour sur investissement',
        'Définir une politique d’usage responsable pour les équipes',
      ],
      en: [
        'Understand, without jargon, what AI can and cannot do',
        'Identify quick-value use cases in your organisation',
        'Assess risks: bias, confidentiality, dependency, compliance',
        'Frame a pilot and measure its return on investment',
        'Set a responsible-use policy for your teams',
      ],
    },
    modules: {
      fr: [
        'Panorama : données, algorithmes, IA générative',
        'Ateliers d’usages : rédaction, analyse, service aux usagers',
        'Risques, éthique et cadre réglementaire',
        'Cadrage d’un projet pilote et indicateurs de valeur',
        'Politique interne d’usage de l’IA',
      ],
      en: [
        'Overview: data, algorithms, generative AI',
        'Hands-on use cases: drafting, analysis, citizen service',
        'Risks, ethics and regulatory frameworks',
        'Framing a pilot project and value indicators',
        'Internal AI usage policy',
      ],
    },
  },
]

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug)
export const programsByDomain = (domain: DomainSlug) => programs.filter((p) => p.domain === domain)
export const featuredPrograms = programs.filter((p) => p.featured)
