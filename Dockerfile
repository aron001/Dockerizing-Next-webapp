# Step 1: Use the official Node.js slim image
FROM node:20-slim

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy only package.json and package-lock.json for caching dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install --production --verbose

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Build the Next.js app
RUN npm run build

# Step 7: Expose the port used by Next.js
EXPOSE 3000

# Step 8: Start the Next.js application
CMD ["npm", "start"]
