FROM node:alpine

WORKDIR /usr/src/app

RUN npm install -g pnpm


COPY package*.json ./
COPY pnpm*.yaml ./
COPY tsconfig.json ./
COPY prisma /usr/src/app/prisma

RUN pnpm install

RUN echo "y" | npx prisma generate

CMD ["pnpm", "run", "dev"]