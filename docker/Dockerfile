

FROM node:12.16.2-alpine

WORKDIR /alpine
COPY . .
RUN yarn install --production=true
EXPOSE 3000

CMD ["yarn","start"]