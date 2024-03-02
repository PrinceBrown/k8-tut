FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# Bundle app source
COPY . .

# Copy entrypoint script and make it executable
COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

# Expose the application's port
EXPOSE 8080

# Set the entry point script
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# Define the default command to run the application
CMD [ "npm", "start" ]
