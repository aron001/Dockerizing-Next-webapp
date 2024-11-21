# Step 1: Use the official Node.js image
FROM node:20-slim

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm ci

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Build the Next.js app
RUN npm run build

# Step 7: Expose the port that Next.js uses
EXPOSE 3000

# Step 8: Command to start the Next.js application
CMD ["npm", "start"]
