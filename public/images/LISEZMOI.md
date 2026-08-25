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

## Composition des photos

Les visuels doivent refléter les marchés visés : le Maroc et le Maghreb, l'Afrique
francophone, l'Afrique anglophone. Concrètement, dans chaque image de groupe :

- une **majorité de profils maghrébins**, puisque la prospection porte d'abord sur
  le Maroc et que le visiteur doit se reconnaître ;
- des **profils d'Afrique subsaharienne**, francophones et anglophones, qui
  correspondent à l'autre moitié de la clientèle ;
- des **profils internationaux**, pour les organisations internationales et les
  bailleurs ;
- une **mixité femmes et hommes** réelle, et des âges variés, cadres confirmés
  plutôt que juniors.

Décor : salle de réunion ou de séminaire, tenue professionnelle sobre, éléments
d'architecture marocaine discrets (arcs, zellige, claustras, lumière chaude).
Éviter les mises en scène trop souriantes de banque d'images : le registre du site
est institutionnel.

### Consigne prête à coller dans un générateur d'images

> Photographie professionnelle d'une session de formation pour cadres dirigeants
> dans une salle de séminaire à Casablanca. Autour de la table, huit participants
> en tenue professionnelle sobre : une majorité de cadres maghrébins, femmes et
> hommes, accompagnés de cadres d'Afrique de l'Ouest et de deux profils
> internationaux. Un intervenant debout anime la séance. Décor contemporain avec
> arcs et claustras en bois, lumière naturelle chaude, vue sur la ville en arrière
> plan. Cadrage large, format 2400 x 1200, ambiance sérieuse et haut de gamme,
> pas de sourires forcés.

Adapter le nombre de personnes et le cadrage selon le fichier : `formats.jpg` est
découpé en trois barres verticales, il faut donc une personne bien lisible dans
chaque tiers de l'image.
