# Stage 1: Build the Astro project
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy all files and build the static site
COPY . .
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine AS runner

# Copy the built files from the builder stage
# Astro builds into the 'dist' directory by default
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
