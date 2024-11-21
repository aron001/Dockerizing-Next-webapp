# Step 1: Use the official Node.js image as a base
FROM node:20.10.0-slim

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock if using Yarn)
COPY package*.json ./

# Step 4: Install dependencies (npm ci is more reliable for Docker builds)
RUN npm ci

# Step 5: Copy all other files in the repository to the container
COPY . .

# Step 6: Build the Next.js app (TypeScript files will be transpiled automatically)
RUN npm run build

# Step 7: Expose the port that Next.js will use (default is 3000)
EXPOSE 3000

# Step 8: Run the app in production mode
CMD ["npm", "start"]
