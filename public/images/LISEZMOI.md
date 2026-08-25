# Déposer les visuels ici

Glissez vos fichiers dans ce dossier depuis GitHub, bouton **Add file**, puis
**Upload files**. Netlify reconstruit le site automatiquement après le dépôt.

## Noms de fichiers attendus

Le code va chercher ces noms précis. Respectez-les et aucune modification de
code n'est nécessaire.

| Fichier à déposer | Usage sur le site | Format conseillé |
| --- | --- | --- |
| `logo.png` | Logo complet sur fond clair. **En place**, détouré à partir du JPEG fourni | PNG à fond transparent |
| `logo-clair.png` | Logo complet pour les fonds bleu nuit, bleu remplacé par l'ivoire. **En place** | PNG à fond transparent |
| `logo-embleme.png` | Emblème seul, sans le mot EXPERTISE, pour l'en-tête. **En place** | PNG à fond transparent |
| `logo-embleme-clair.png` | Emblème seul pour fonds sombres, favicon. **En place** | PNG à fond transparent |
| `logo.svg` | Version vectorielle, si le graphiste vous la fournit | SVG, meilleure qualité à toutes les tailles |
| `formats.jpg` | **Une seule photo** pour les trois cartes verticales de la page d'accueil. Elle est découpée en trois tranches qui recomposent la scène. **En place** | Rapport proche du carré. Une photo très large sera recadrée : trois barres hautes ne peuvent pas afficher un panorama entier |
| `source-accueil.jpg` | Photo d'origine non recadrée, conservée pour pouvoir refaire le cadrage sans redemander le fichier | Ne s'affiche pas sur le site |
| `maroc-1.jpg` | Carte horizontale, section sur le Maroc | 1200 x 800 px |
| `maroc-2.jpg` | Carte horizontale, section sur le Maroc | 1200 x 800 px |
| `maroc-3.jpg` | Carte horizontale, section sur le Maroc | 1200 x 800 px |
| `salle-de-formation.jpg` | Bande triptyque de l'accueil. **En place** | 1290 x 896 px |
| `direction.jpg` | Portrait du gérant, page À propos | 900 x 1200 px |

Déposer un fichier portant l'un de ces noms remplace le visuel d'attente
correspondant. Les images actuellement présentes sont des visuels graphiques
provisoires, ce ne sont pas des photographies.

## Recommandations

- Largeur maximale 1920 px, moins de 300 ko par photo.
- Ne recadrez pas vous-même : déposez l'original, le recadrage est fait dans le
  code selon l'emplacement.
- Pour le logo, le PNG à fond transparent est indispensable, un fond blanc
  se verrait sur les sections bleu nuit.
- Si vous ne disposez que d'un logo en JPEG avec fond blanc, déposez-le quand
  même sous le nom `logo-source.jpg` : le détourage sera fait ensuite.
