FROM node:18.15.0
WORKDIR /app
EXPOSE 80
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
CMD ["node", "index.js"]