FROM node:lts-alpine3.10 AS build-backend

WORKDIR /opt/node

# Run npm install separately, so it can be cached.
COPY package*.json ./

RUN npm install

COPY ./ ./

RUN npm run prod

FROM node:lts-alpine3.10

WORKDIR /opt/node

COPY --from=build-backend /opt/node/package.json ./package.json
COPY --from=build-backend /opt/node/package-lock.json ./package-lock.json
COPY --from=build-backend /opt/node/tsconfig.build.json ./tsconfig.build.json

# Run npm install separately, so it can be cached.
RUN npm install

COPY --from=build-backend /opt/node/dist/ ./dist/

CMD ["node", "dist/main.js"]