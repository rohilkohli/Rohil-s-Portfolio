# Use Node.js for building the application
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Use Nginx to serve the static files
FROM nginx:stable-alpine
# Copy the custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy the build output from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
