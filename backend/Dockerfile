FROM node:18.12.0
ENV WORKDIR=/usr/api/prisma
WORKDIR ${WORKDIR}
COPY ./package.json ./
COPY ./package-lock.json ./
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY ./prisma ./prisma
COPY . .
RUN yarn install
RUN yarn build

CMD [ "yarn", "start" ]
