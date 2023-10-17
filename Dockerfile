# infra/Dockerfile

FROM node:18-alpine AS base

FROM base AS deps

# https://github.com/nodejs/docker-node/tree/main#nodealpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Package install
COPY package.json ./
RUN npm install

FROM base AS builder
WORKDIR /app
COPY . .

# deps Package Copy
COPY --from=deps /app/node_modules ./node_modules

RUN npm run build

FROM base AS runner
WORKDIR /app

# root X
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# standalone and static file copy
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
