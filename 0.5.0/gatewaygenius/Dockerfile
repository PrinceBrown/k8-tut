# Use the official Node.js 14 image as a base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port on which your app listens
EXPOSE 5400

# Command to run the application
CMD ["node", "app.js"]