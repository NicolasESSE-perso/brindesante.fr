#NIE Je pars d'une image docker node en version 10
FROM node:current-alpine as build-app

#Repertoire de mon application
WORKDIR '/app'

#NIE permet de copier les 2 fichiers package.json  et package-lock.json
COPY package*.json ./

#NIE Installation de toutes les dépendances
RUN npm install

#NIE Copie du code source dans le docker
COPY . .

# start app
CMD ["npm", "run","build"]

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-app /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]