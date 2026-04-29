# Documentation des boutons de projets

## Nouveaux champs disponibles

Vous pouvez maintenant ajouter plusieurs types de boutons à vos projets dans les fichiers de traduction (`lib/i18n/fr.json` et `lib/i18n/en.json`).

### Champs disponibles

Pour chaque projet dans `projects.items`, vous pouvez ajouter les champs suivants :

- **`repoUrl`** (optionnel) : URL du dépôt GitHub/GitLab
  - Affiche le bouton "Voir le dépôt" / "View Repository"
  
- **`projectUrl`** (optionnel) : URL du projet déployé ou d'une démo
  - Affiche le bouton "Voir le projet" / "View Project"
  
- **`siteUrl`** (optionnel) : URL du site web associé au projet
  - Affiche le bouton "Visiter le site" / "Visit Site"
  
- **`downloadUrl`** (optionnel) : URL du fichier à télécharger (PDF, ZIP, etc.)
  - Affiche un bouton de téléchargement
  
- **`downloadLabel`** (optionnel) : Texte personnalisé pour le bouton de téléchargement
  - Si non spécifié, utilise "Télécharger" / "Download" par défaut

## Exemples d'utilisation

### Exemple 1 : Projet avec dépôt et site web

```json
{
  "id": "mon-projet",
  "title": "Mon Projet",
  "category": "web",
  "shortDescription": "Description du projet",
  "technologies": ["React", "Node.js"],
  "repoUrl": "https://github.com/username/mon-projet",
  "siteUrl": "https://mon-projet.com"
}
```

### Exemple 2 : Projet avec téléchargement de PDF

```json
{
  "id": "rapport-stage",
  "title": "Rapport de Stage",
  "category": "software",
  "shortDescription": "Rapport de stage détaillé",
  "technologies": ["LaTeX", "Research"],
  "downloadUrl": "/files/rapport-stage.pdf",
  "downloadLabel": "Télécharger le rapport (PDF)"
}
```

### Exemple 3 : Projet complet avec tous les boutons

```json
{
  "id": "projet-complet",
  "title": "Projet Complet",
  "category": "web",
  "shortDescription": "Un projet avec toutes les options",
  "technologies": ["TypeScript", "Next.js"],
  "repoUrl": "https://github.com/username/projet",
  "projectUrl": "https://demo.projet.com",
  "siteUrl": "https://projet.com",
  "downloadUrl": "/files/documentation.pdf",
  "downloadLabel": "Documentation PDF"
}
```

### Exemple 4 : Téléchargement de fichier ZIP

```json
{
  "id": "logiciel",
  "title": "Mon Logiciel",
  "category": "software",
  "shortDescription": "Logiciel téléchargeable",
  "technologies": ["C#", ".NET"],
  "repoUrl": "https://github.com/username/logiciel",
  "downloadUrl": "/downloads/logiciel-v1.0.zip",
  "downloadLabel": "Télécharger v1.0 (ZIP)"
}
```

## Traductions disponibles

Les clés de traduction suivantes sont disponibles dans `lib/i18n/` :

### Français (`fr.json`)
- `projects.ui.btnViewRepo` : "Voir le dépôt"
- `projects.ui.btnViewProject` : "Voir le projet"
- `projects.ui.btnVisitSite` : "Visiter le site"
- `projects.ui.btnDownloadFile` : "Télécharger"

### Anglais (`en.json`)
- `projects.ui.btnViewRepo` : "View Repository"
- `projects.ui.btnViewProject` : "View Project"
- `projects.ui.btnVisitSite` : "Visit Site"
- `projects.ui.btnDownloadFile` : "Download"

## Notes importantes

1. **Tous les champs sont optionnels** : vous n'êtes pas obligé d'ajouter tous les boutons à chaque projet
2. **Les fichiers doivent être accessibles** : assurez-vous que les fichiers référencés dans `downloadUrl` sont bien présents dans le dossier `public/`
3. **Chemins relatifs** : pour les fichiers locaux, utilisez des chemins relatifs commençant par `/` (ex: `/files/document.pdf`)
4. **Chemins absolus** : pour les fichiers externes, utilisez l'URL complète (ex: `https://example.com/file.pdf`)
