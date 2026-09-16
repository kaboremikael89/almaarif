# Conventions du projet

## Typographie et rédaction (règle prioritaire)

**Ne jamais utiliser de tiret cadratin (—) ni de demi-cadratin (–)**, nulle part :
textes du site, dictionnaires FR/EN, commentaires de code, README, messages de
commit, titres, métadonnées.

Ces caractères sont une signature de texte généré par IA. Utiliser à la place la
ponctuation classique :

| Au lieu de | Écrire |
| --- | --- |
| `Casablanca — Maroc` | `Casablanca, Maroc` |
| `Un réseau d'experts — praticiens, auditeurs — mobilisés au cas par cas` | `Un réseau d'experts (praticiens, auditeurs), mobilisés au cas par cas` |
| `Conseil de gestion — formation continue` | `Conseil de gestion et formation continue` |
| `3–10 jours` | `3 à 10 jours` |
| `9h – 18h` | `de 9h à 18h` |
| `Le site — aucun code à toucher` | `Le site : aucun code à toucher` |

Le trait d'union ordinaire (`-`) reste normal dans les mots composés
(`budget-programme`, `suivi-évaluation`) et les références (`FP-101`).
Le point médian `·` du logo (`Formation · Conseil · Performance`) est conservé.

Vérification avant chaque commit :

```bash
grep -rn "—\|–" src public README.md netlify.toml   # doit ne rien renvoyer
```

## Contenu

- Ne jamais inventer de chiffres de notoriété : années d'expérience, nombre de
  cadres formés, témoignages clients, logos de références. La société a été
  créée en 2026, ce type de mention se retourne contre elle auprès
  d'institutions publiques.
- Les informations légales (registre de commerce 746831, identifiant fiscal
  73367480, taxe professionnelle 34773778, forme SARL à associé unique, capital
  100 000 MAD, siège, tribunal) proviennent de l'extrait du registre analytique
  du tribunal de commerce de Casablanca et du bulletin de notification de
  l'identifiant fiscal. Ne pas les modifier sans document à l'appui.
- **Le nom de l'associé unique et gérant ne doit apparaître nulle part** sur le
  site, y compris dans les mentions légales et les données structurées. La
  direction de la publication est attribuée à « la gérance de la société ».
- Tout texte visible doit exister dans les trois langues : français, anglais,
  arabe. `dictionary.en.ts` et `dictionary.ar.ts` sont typés d'après
  `dictionary.fr.ts`, et les champs multilingues de `domains.ts`, `programs.ts`
  et `site.ts` sont des `Record<Locale, string>` : un oubli de traduction casse
  le build, c'est voulu.
- La version arabe s'affiche de droite à gauche. Utiliser les classes logiques
  de Tailwind (`ps-`, `pe-`, `ms-`, `me-`, `start-`, `end-`, `border-s`) et
  jamais les classes physiques (`pl-`, `pr-`, `left-`, `right-`, `border-l`).
- L'arabe ne supporte ni les capitales ni l'interlettrage large : les règles
  correspondantes sont neutralisées sous `[dir='rtl']` dans `globals.css`.

## Images

- Les photos vivent dans `public/images/`, jamais en base64 dans le code.
- Remplacer une photo se fait en écrasant le fichier, sans toucher au code.
- Compresser avant commit : largeur maximale 1920 px, moins de 300 ko par image.
- Ne jamais présenter un visuel d'attente comme une photographie réelle du
  cabinet dans une légende ou un texte alternatif.

## Technique

- Site statique : `output: 'export'`, aucune fonction serveur. Toute
  fonctionnalité dynamique doit passer par un service externe appelé côté client.
- Le contenu éditorial vit dans `src/content/`, jamais en dur dans les composants.
- Avant de pousser : `npm run build` doit passer sans erreur TypeScript.
