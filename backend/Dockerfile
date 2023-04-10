FROM node:18.12.0
ENV WORKDIR=/usr/api/prisma
WORKDIR ${WORKDIR}
COPY ./package.json ./
COPY ./package-lock.json ./
COPY . .
RUN npm ci
RUN npm run build



CMD [ "npm", "start" ]
