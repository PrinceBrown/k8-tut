# ---- Build Stage ----
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the application
RUN npm run build

# ---- Run Stage ----
FROM node:18-alpine

WORKDIR /app

ENV GATEWAY_URL http://34.118.232.251:80
ENV COPY_CAT_URL http://34.118.226.187:80

# Copy only the built app and node_modules from the previous stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the listening port
EXPOSE 3010

# Run the application
CMD ["npm", "start"]