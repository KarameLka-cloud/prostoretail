FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma generate
# RUN npx prisma db pull

# COPY . .

EXPOSE 3001

CMD ["npm", "run", "start:dev"]