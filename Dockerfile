FROM nginx:alpine

# Copy the static files to nginx web root
COPY public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Add labels for better documentation
LABEL maintainer="USIU Student Affairs"
LABEL description="USIU First-Year Companion v1 - Static web application"
LABEL version="1.0"

# No additional configuration needed - nginx will serve static files by default