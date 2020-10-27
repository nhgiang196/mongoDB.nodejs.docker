

FROM node:12.16.2-alpine

WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 3000

CMD ["yarn","dev"]