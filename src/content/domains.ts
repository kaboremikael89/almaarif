import type { I18nText, I18nList } from '@/lib/i18n'

export type DomainSlug =
  | 'finances-publiques'
  | 'commande-publique'
  | 'audit-risques'
  | 'gouvernance-leadership'
  | 'projets-evaluation'
  | 'transformation-digitale'

export type Domain = {
  slug: DomainSlug
  number: string
  title: I18nText
  short: I18nText
  description: I18nText
  topics: I18nList
}

export const domains: Domain[] = [
  {
    slug: 'finances-publiques',
    number: '01',
    title: {
      fr: 'Finances publiques & gestion budgétaire',
      en: 'Public finance & budget management',
    },
    short: { fr: 'Finances publiques', en: 'Public finance' },
    description: {
      fr: "Accompagner les ministères, collectivités et établissements publics dans le passage à une gestion budgétaire axée sur les résultats : élaboration du budget-programme, exécution de la dépense, comptabilité publique et reddition des comptes.",
      en: 'Supporting ministries, local authorities and public agencies in the shift to results-based budgeting: programme budgeting, expenditure execution, public accounting and financial reporting.',
    },
    topics: {
      fr: [
        'Budget-programme et cadre de dépenses à moyen terme',
        'Exécution de la dépense et chaîne comptable',
        'Normes comptables publiques (IPSAS, SYSCOHADA)',
        'Fiscalité et mobilisation des recettes',
        'Analyse et soutenabilité de la dette',
      ],
      en: [
        'Programme budgeting and medium-term expenditure frameworks',
        'Expenditure execution and the accounting chain',
        'Public accounting standards (IPSAS, SYSCOHADA)',
        'Taxation and domestic revenue mobilisation',
        'Debt analysis and sustainability',
      ],
    },
  },
  {
    slug: 'commande-publique',
    number: '02',
    title: { fr: 'Commande publique & marchés', en: 'Public procurement & contracting' },
    short: { fr: 'Commande publique', en: 'Public procurement' },
    description: {
      fr: "Sécuriser la commande publique de bout en bout : préparation des dossiers d'appel d'offres, évaluation des offres, exécution et règlement des litiges, y compris pour les projets financés par les partenaires techniques et financiers.",
      en: 'Securing the full procurement cycle: bidding documents, evaluation, contract execution and dispute settlement, including projects financed by technical and financial partners.',
    },
    topics: {
      fr: [
        "Élaboration des dossiers d'appel d'offres",
        'Évaluation des offres et attribution',
        'Exécution, avenants et réception des marchés',
        'Règles des bailleurs (Banque mondiale, BAD, UE)',
        'Contentieux, recours et intégrité',
      ],
      en: [
        'Preparing bidding documents',
        'Bid evaluation and contract award',
        'Contract execution, amendments and acceptance',
        'Donor rules (World Bank, AfDB, EU)',
        'Disputes, appeals and procurement integrity',
      ],
    },
  },
  {
    slug: 'audit-risques',
    number: '03',
    title: { fr: 'Audit, contrôle interne & risques', en: 'Audit, internal control & risk' },
    short: { fr: 'Audit & risques', en: 'Audit & risk' },
    description: {
      fr: "Installer une fonction d'audit crédible et un dispositif de contrôle interne opérationnel : cartographie des risques, plan d'audit fondé sur les risques, missions de terrain, rapports et suivi des recommandations.",
      en: 'Building a credible audit function and a working internal control system: risk mapping, risk-based audit planning, fieldwork, reporting and follow-up of recommendations.',
    },
    topics: {
      fr: [
        'Cartographie et évaluation des risques',
        "Plan d'audit fondé sur les risques",
        'Conduite de mission et techniques de sondage',
        'Dispositif anti-fraude et déontologie',
        'Suivi des recommandations et comité d’audit',
      ],
      en: [
        'Risk mapping and assessment',
        'Risk-based audit planning',
        'Fieldwork and sampling techniques',
        'Anti-fraud frameworks and ethics',
        'Recommendation follow-up and audit committees',
      ],
    },
  },
  {
    slug: 'gouvernance-leadership',
    number: '04',
    title: { fr: 'Gouvernance, leadership & capital humain', en: 'Governance, leadership & people' },
    short: { fr: 'Gouvernance & leadership', en: 'Governance & leadership' },
    description: {
      fr: "Renforcer la capacité des dirigeants à décider, arbitrer et entraîner leurs équipes : gouvernance des organes délibérants, conduite du changement, gestion prévisionnelle des emplois et des compétences, communication institutionnelle.",
      en: 'Strengthening leaders’ ability to decide, arbitrate and carry their teams: board governance, change management, workforce planning and institutional communication.',
    },
    topics: {
      fr: [
        'Gouvernance des entreprises et établissements publics',
        'Leadership exécutif et prise de décision',
        'Conduite du changement et gestion des résistances',
        'GPEC, évaluation et rémunération',
        'Communication institutionnelle et gestion de crise',
      ],
      en: [
        'Governance of state-owned enterprises and agencies',
        'Executive leadership and decision-making',
        'Change management and resistance',
        'Workforce planning, appraisal and pay',
        'Institutional communication and crisis management',
      ],
    },
  },
  {
    slug: 'projets-evaluation',
    number: '05',
    title: { fr: 'Projets, financements & suivi-évaluation', en: 'Projects, funding & M&E' },
    short: { fr: 'Projets & évaluation', en: 'Projects & evaluation' },
    description: {
      fr: "Maîtriser le cycle complet d'un projet de développement, de la note conceptuelle au rapport d'achèvement : gestion axée sur les résultats, montage financier, passation, suivi-évaluation et mesure d'impact.",
      en: 'Mastering the full development project cycle, from concept note to completion report: results-based management, funding structures, procurement, monitoring, evaluation and impact measurement.',
    },
    topics: {
      fr: [
        'Cadre logique et gestion axée sur les résultats',
        'Montage et négociation des financements',
        'Planification, coûts et gestion des délais',
        'Systèmes de suivi-évaluation et tableaux de bord',
        "Évaluation d'impact et redevabilité",
      ],
      en: [
        'Logical frameworks and results-based management',
        'Structuring and negotiating funding',
        'Planning, costing and schedule management',
        'M&E systems and dashboards',
        'Impact evaluation and accountability',
      ],
    },
  },
  {
    slug: 'transformation-digitale',
    number: '06',
    title: { fr: 'Transformation digitale, data & IA', en: 'Digital transformation, data & AI' },
    short: { fr: 'Digital, data & IA', en: 'Digital, data & AI' },
    description: {
      fr: "Traduire l'ambition numérique en résultats : dématérialisation des procédures, gouvernance de la donnée, cybersécurité des organisations et usages responsables de l'intelligence artificielle pour les décideurs.",
      en: 'Turning digital ambition into results: process digitisation, data governance, organisational cybersecurity and responsible use of artificial intelligence for decision-makers.',
    },
    topics: {
      fr: [
        'Stratégie et feuille de route digitale',
        'Dématérialisation des procédures et e-services',
        'Gouvernance, qualité et protection des données',
        'Cybersécurité et continuité d’activité',
        'IA générative appliquée au pilotage',
      ],
      en: [
        'Digital strategy and roadmap',
        'Process digitisation and e-services',
        'Data governance, quality and protection',
        'Cybersecurity and business continuity',
        'Generative AI applied to management',
      ],
    },
  },
]

export const getDomain = (slug: DomainSlug) => domains.find((d) => d.slug === slug)!
