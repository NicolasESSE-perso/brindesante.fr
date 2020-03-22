#NIE Je pars d'une image docker node en version 10
FROM node:current-alpine

#Repertoire de mon application
WORKDIR '/app'

#NIE permet de copier les 2 fichiers package.json  et package-lock.json
COPY package*.json ./

#NIE Installation de toutes les dépendances
RUN npm install

#NIE Copie du code source dans le docker
COPY . .

# start app
CMD ["npm", "start"]