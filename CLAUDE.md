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
- Les informations légales (ICE, siège, gérant, tribunal) proviennent du
  certificat négatif OMPIC n° 3281360 et du contrat de domiciliation. Ne pas les
  modifier sans document à l'appui.
- Tout texte visible doit exister en français **et** en anglais.
  `src/content/dictionary.en.ts` est typé d'après `dictionary.fr.ts` : un oubli
  de traduction casse le build, c'est voulu.

## Technique

- Site statique : `output: 'export'`, aucune fonction serveur. Toute
  fonctionnalité dynamique doit passer par un service externe appelé côté client.
- Le contenu éditorial vit dans `src/content/`, jamais en dur dans les composants.
- Avant de pousser : `npm run build` doit passer sans erreur TypeScript.
