FROM node:20-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

ENV DATABASE_URL="postgresql://parva:parva123@localhost:5433/docker_prec"

RUN DATABASE_URL=$DATABASE_URL npx prisma migrate dev
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]