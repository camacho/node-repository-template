# FROM alpine AS authenticator
# WORKDIR /app
# ARG npm_token
# RUN echo "//registry.npmjs.org/:_authToken=$npm_token" > /app/.npmrc

FROM node:10.16-alpine AS builder
WORKDIR /app
# COPY --from=authenticator /app ./
COPY . .
RUN yarn install
ENV NODE_ENV=production
RUN yarn dist
# prune development dependencies
RUN yarn install --production

FROM node:10.16-alpine as application
WORKDIR /app
# Directories have to be copied individually
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
# Bring over the minimal number of files
COPY --from=builder /app/README.md /app/CHANGELOG.md /app/LICENSE  \
  /app/package.json /app/yarn.lock ./ 
CMD ["node", "./dist/index.js"]
