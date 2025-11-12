# ---- Étape 1 : Build Angular ----
FROM node:22-alpine AS build

# Dossier de travail dans le container
WORKDIR /MediCare_front

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances Angular
RUN npm install

# Copie du code source
COPY . .

# Build du projet Angular
RUN npm run build

# ---- Étape 2 : Serveur Nginx ----
FROM nginx:latest

# Copie du build Angular vers Nginx
COPY --from=build /MediCare_front/dist/MediCare_front/browser /usr/share/nginx/html


# Exposition du port HTTP standard
EXPOSE 80

# Commande de démarrage
CMD ["nginx", "-g", "daemon off;"]