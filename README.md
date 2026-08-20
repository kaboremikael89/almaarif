# Al Maârif Expertise, site institutionnel

Site vitrine bilingue (français / anglais) d'**AL MAARIF EXPERTISE**, cabinet de conseil de gestion
et de formation professionnelle établi à Casablanca, spécialisé dans l'organisation au Maroc de
formations pour les institutions et entreprises africaines.

**Formation · Conseil · Performance. L'expertise au service des dirigeants et des institutions.**

---

## 1. Stack technique

| Élément | Choix |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Langage | TypeScript, React 19 |
| Styles | Tailwind CSS 4 + design system maison (`src/app/globals.css`) |
| Typographies | Marcellus (titres) + Archivo (textes), auto-hébergées via `next/font` |
| Sortie | **Export statique** (`output: 'export'`) → dossier `out/` |
| Hébergement | **Netlify** (configuration incluse) |

Aucun serveur Node n'est nécessaire en production : le site est entièrement statique
(HTML + CSS + JS), donc rapide, sûr et hébergeable partout.

## 2. Démarrer en local

```bash
npm install
npm run dev          # http://localhost:3000/fr
npm run build        # génère le site statique dans out/
npm start            # sert le dossier out/ en local
npm run typecheck    # vérification TypeScript
```

> En développement, la racine `/` n'est pas servie : ouvrir directement `/fr` ou `/en`.
> En production, la redirection est assurée par Netlify (`netlify.toml`) et par `public/index.html`.

## 3. Déploiement Netlify

1. Connecter le dépôt GitHub à Netlify (**Add new site → Import an existing project**).
2. Netlify lit `netlify.toml` : rien à configurer manuellement.
   - Build : `npm run build`
   - Publish : `out`
   - Node : 22
3. Variables d'environnement à définir dans **Site settings → Environment variables** :

   | Variable | Rôle |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | URL canonique définitive (ex. `https://www.almaarif-expertise.com`), sert aux métadonnées, au sitemap et aux balises `hreflang` |
   | `NEXT_PUBLIC_FORM_ENDPOINT` | URL du service qui reçoit le formulaire de contact (Formspree, Web3Forms, Basin…). **Si la variable est vide, le formulaire bascule automatiquement sur un envoi par e-mail (mailto).** |

4. Brancher le nom de domaine dans **Domain management** ; le certificat HTTPS est automatique.

Le fichier `netlify.toml` gère aussi :
- la redirection de `/` vers `/fr/` ou `/en/` selon la langue du navigateur ;
- les en-têtes de sécurité (CSP, HSTS, anti-clickjacking) ;
- le cache long des ressources statiques.

> Si vous changez de service de formulaire, ajoutez son domaine à la directive `connect-src`
> de la `Content-Security-Policy` dans `netlify.toml`.

## 4. Modifier le contenu

Tout le contenu éditorial est centralisé dans `src/content/`, **aucun code à toucher** :

| Fichier | Contenu |
| --- | --- |
| `site.ts` | Coordonnées, adresse, ICE, gérant, téléphone, e-mails, WhatsApp |
| `domains.ts` | Les 6 domaines d'expertise et leurs thématiques |
| `programs.ts` | Le catalogue des 12 formations (objectifs, modules, public, durée…) |
| `dictionary.fr.ts` | Tous les textes du site en français |
| `dictionary.en.ts` | Leur traduction anglaise (même structure, vérifiée par TypeScript) |

**Ajouter une formation** : dupliquer un bloc dans `programs.ts`, changer `slug`, `reference`,
`domain` et les textes. La page de détail, le catalogue, le sitemap et les données structurées
sont générés automatiquement.

**Publier un calendrier de sessions** : renseigner le champ optionnel `sessions` d'un programme,
par exemple `sessions: ['16 au 20 mars 2027, Casablanca', '8 au 12 juin 2027, Rabat']`.

## 5. Photos

Les images vivent dans `public/images/`. Pour remplacer une photo, écrasez le
fichier en gardant le même nom : aucun code n'est à modifier.

| Fichier | Emplacement | Format conseillé |
| --- | --- | --- |
| `salle-de-formation.jpg` | Bande triptyque de l'accueil | 1800 x 1100 px, JPEG, moins de 300 ko |

Le composant `SplitImage` découpe une seule photo en trois rectangles séparés
par un filet, qui recomposent l'image d'origine. Chaque panneau apparaît avec un
léger décalage au défilement. Sur mobile, la photo reste entière : trois bandes
verticales seraient illisibles.

```tsx
<SplitImage src="/images/salle-de-formation.jpg" alt="Salle de séminaire" />
```

Compressez les photos avant de les committer (objectif : moins de 300 ko par
image, largeur maximale 1920 px). Le fichier livré aujourd'hui est un visuel
d'attente aux dimensions définitives, à remplacer par une photographie réelle.

## 6. Référencement et accessibilité

- Métadonnées et Open Graph par page, image de partage `public/og-image.png`
- Balises `hreflang` fr / en / x-default sur chaque page
- `sitemap.xml` et `robots.txt` générés automatiquement
- Données structurées Schema.org : `Organization` / `EducationalOrganization`, `Course`, `ItemList`
- Navigation clavier, lien d'évitement, contrastes conformes, `prefers-reduced-motion` respecté

## 7. Informations à compléter

Les points suivants proviennent des documents fournis (certificat négatif OMPIC n° 3281360 et
contrat de domiciliation) ; les champs manquants sont signalés par un `TODO` dans `src/content/site.ts` :

- [ ] **Numéro de registre de commerce** (une fois l'immatriculation faite) → `site.legal.rc`
- [ ] **Téléphone et e-mails définitifs** de la société : les valeurs actuelles reprennent la ligne
      du centre de domiciliation et des adresses à créer sur le domaine
- [ ] **Profils LinkedIn / Facebook** → `site.social`
- [ ] **Photo du gérant et visuels de sessions** (la page « À propos » utilise pour l'instant un motif
      graphique à la place du portrait)
- [ ] **Logo officiel** : le site utilise une reconstitution vectorielle de la rosette du logo
      (`src/components/Ornament.tsx`, `public/favicon.svg`). Fournir le fichier source (SVG/AI/EPS)
      pour le remplacer à l'identique.
- [ ] **Calendrier des sessions 2027** et grille tarifaire, si vous souhaitez les afficher

## 8. Structure du projet

```
src/
├── app/
│   ├── [lang]/            # toutes les pages, en /fr et /en
│   │   ├── page.tsx                 # accueil
│   │   ├── expertise/               # domaines d'intervention
│   │   ├── formations/              # catalogue + fiche par formation
│   │   ├── approche/                # pédagogie, ingénierie, logistique
│   │   ├── a-propos/                # mission, valeurs, direction, mentions d'identité
│   │   ├── contact/                 # formulaire + coordonnées + plan
│   │   ├── mentions-legales/
│   │   └── confidentialite/
│   ├── globals.css        # design system (couleurs, typographie, composants)
│   ├── robots.ts
│   └── sitemap.ts
├── components/            # en-tête, pied de page, cartes, formulaire, ornements
├── content/               # ← contenu éditorial (voir §4)
└── lib/i18n.ts            # gestion des langues
```
