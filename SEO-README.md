# Guide SEO - Portfolio Luca Fourfooz

Ce document explique tous les fichiers et configurations SEO mis en place pour optimiser le référencement du portfolio.

## 📁 Fichiers créés

### 1. `/public/robots.txt`
Fichier qui indique aux moteurs de recherche quelles pages indexer.

```txt
User-agent: *
Allow: /
Sitemap: https://lucafourfooz.com/sitemap.xml
```

**Action requise :** Remplace `https://lucafourfooz.com` par ton URL de production réelle.

### 2. `/app/sitemap.ts`
Génère automatiquement le sitemap XML pour Google et autres moteurs de recherche.

**Action requise :** Mets à jour `baseUrl` avec ton domaine réel avant le déploiement.

### 3. `/app/manifest.ts`
Configuration PWA (Progressive Web App) pour permettre l'installation du site comme application.

**Actions requises :**
- Créer les icônes `/public/icon-192.png` (192x192px)
- Créer les icônes `/public/icon-512.png` (512x512px)
- Ajuster `theme_color` et `background_color` selon ta charte graphique

### 4. Métadonnées dans `/app/layout.tsx`
Métadonnées globales avec Open Graph et Twitter Cards.

**Actions requises :**
1. Créer une image Open Graph : `/public/og-image.png` (1200x630px)
2. Remplacer `your-google-verification-code` par ton code de vérification Google Search Console
3. Mettre à jour `@lucaffz` avec ton vrai handle Twitter si tu en as un
4. Vérifier que toutes les URLs pointent vers ton domaine de production

## 🎯 Optimisations SEO par page

### Page d'accueil (`/`)
- Titre : "Luca Fourfooz - Développeur Full-Stack & Designer UI/UX"
- Description optimisée avec mots-clés
- Open Graph configuré

### Page Projets (`/projects`)
- Métadonnées spécifiques aux projets
- Mots-clés techniques (Next.js, React, TypeScript, etc.)

### Page Contact (`/contact`)
- Métadonnées orientées recrutement
- Mots-clés : stage, alternance, freelance

### Pages projets dynamiques (`/projects/[id]`)
- Métadonnées générées dynamiquement par projet
- Titre et description personnalisés

## ✅ Checklist avant déploiement

### Images à créer
- [ ] `/public/og-image.png` (1200x630px) - Image de partage social
- [ ] `/public/icon-192.png` (192x192px) - Icône PWA
- [ ] `/public/icon-512.png` (512x512px) - Icône PWA
- [ ] `/public/favicon.ico` - Favicon du site

### Configurations à mettre à jour
- [ ] Remplacer `https://lucafourfooz.com` par ton URL réelle dans :
  - `app/layout.tsx` (metadataBase)
  - `app/sitemap.ts` (baseUrl)
  - `public/robots.txt` (Sitemap URL)
- [ ] Ajouter ton code Google Search Console dans `app/layout.tsx`
- [ ] Vérifier/mettre à jour ton handle Twitter dans les métadonnées
- [ ] Ajuster les couleurs du manifest selon ta charte graphique

### Après déploiement
- [ ] Soumettre le sitemap à Google Search Console
- [ ] Soumettre le sitemap à Bing Webmaster Tools
- [ ] Vérifier les métadonnées avec [Open Graph Debugger](https://www.opengraph.xyz/)
- [ ] Tester les Twitter Cards avec [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Tester le score SEO avec [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## 🔍 Outils de vérification SEO

### Google Search Console
1. Aller sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajouter ta propriété (ton domaine)
3. Vérifier la propriété avec le code fourni (à ajouter dans `layout.tsx`)
4. Soumettre le sitemap : `https://tondomaine.com/sitemap.xml`

### Bing Webmaster Tools
1. Aller sur [www.bing.com/webmasters](https://www.bing.com/webmasters)
2. Ajouter ton site
3. Soumettre le sitemap

### Tests de performance
- **PageSpeed Insights** : [pagespeed.web.dev](https://pagespeed.web.dev/)
- **Lighthouse** : Intégré dans Chrome DevTools (F12 > Lighthouse)

## 📊 Mots-clés optimisés

Le site est optimisé pour les mots-clés suivants :
- Luca Fourfooz
- Développeur full-stack
- Développeur web
- UI/UX designer
- Next.js, React, TypeScript, Node.js
- Portfolio développeur
- CESI, Assystem
- Stage développeur, alternance développeur

## 🚀 Améliorations futures possibles

1. **Schema.org markup** : Ajouter des données structurées JSON-LD pour améliorer l'affichage dans les résultats de recherche
2. **Blog** : Créer une section blog pour du contenu régulier (excellent pour le SEO)
3. **Multilingue** : Implémenter hreflang pour les versions FR/EN/ES
4. **Analytics** : Ajouter Google Analytics ou Plausible pour suivre le trafic
5. **Canonical URLs** : Ajouter des balises canonical pour éviter le contenu dupliqué

## 📝 Notes importantes

- Le sitemap est généré automatiquement à chaque build
- Les métadonnées sont optimisées pour les réseaux sociaux (Open Graph, Twitter Cards)
- Le site est configuré pour être indexé par tous les moteurs de recherche
- Le manifest permet l'installation comme PWA sur mobile

---

**Dernière mise à jour :** Avril 2026
