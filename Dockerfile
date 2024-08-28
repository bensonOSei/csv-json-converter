FROM node:22-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the project
RUN npm run build

# Expose the port on which the app runs
EXPOSE 3000 

# Command to run the application
CMD ["node", "dist/index.js"]
