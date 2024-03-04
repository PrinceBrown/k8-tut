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

# Create .env file and insert environment variables
# RUN echo "GATEWAY_URL=http://gatewaygenius-demo-service" >> .env
# RUN echo "COPY_CAT_URL=http://copycat-demo-service" >> .env

# Build the application
RUN npm run build

# ---- Run Stage ----
FROM node:18-alpine

WORKDIR /app

# Copy only the built app and node_modules from the previous stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/.env ./.env

# Expose the listening port
EXPOSE 3010

# Run the application
CMD ["npm", "start"]