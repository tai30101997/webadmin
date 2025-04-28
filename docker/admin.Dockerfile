
# Step 1: Use a Node.js base image for building the application
FROM node:18-alpine AS builder

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Install dependencies
# Copy the package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Step 4: Copy the entire Nx monorepo to the container
COPY . .

# Step 5: Build the Next.js app using Nx
RUN npx nx build admin 

# Step 6: Prepare for the production image (runner)
FROM node:18-alpine AS runner

# Step 7: Set the working directory inside the runtime container
WORKDIR /usr/src/app

# Step 8: Copy the necessary files from the build stage (dist folder and node_modules)
COPY --from=builder /usr/src/app/apps/admin/.next /usr/src/app/.next  
COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=builder /usr/src/app/package.json /usr/src/app/package.json

# Step 9: Set the environment to production
ENV NODE_ENV=production

# Step 10: Expose the port for the Next.js app
EXPOSE 3000

# Step 11: Run the app in production mode using Next.js `start` command
CMD ["npm", "run","start",]
