# Use an official Node runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any dependencies
RUN npm install

# Bundle your app source
COPY . .

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Use the entrypoint script to start the app
ENTRYPOINT ["node", "server.js"]