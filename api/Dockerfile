FROM node:20

WORKDIR /api

COPY package*.json ./
COPY . .


RUN npm install
# RUN npx prisma migrate dev --name init
RUN npx -y prisma generate



EXPOSE 4000
