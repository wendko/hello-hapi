# not working at the moment
FROM node:12.13-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run start
EXPOSE 3030
CMD ["npm", "start"]