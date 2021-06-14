FROM node:lts-alpine3.10 AS build-frontend

WORKDIR /opt/node

# Run npm install separately, so it can be cached.
COPY package*.json ./

RUN npm install

COPY ./ ./

RUN npm run build:ssr

FROM node:lts-alpine3.10

WORKDIR /opt/node

COPY --from=build-frontend /opt/node/package.json ./package.json
COPY --from=build-frontend /opt/node/package-lock.json ./package-lock.json

# Run npm install separately, so it can be cached.
RUN npm install

COPY --from=build-frontend /opt/node/dist/ ./dist/

CMD ["node", "dist/challenge-frontend/server/main.js"]
