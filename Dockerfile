# Dockerfile for Bun.js application
FROM oven/bun:1.2.13-alpine

WORKDIR /app

# Install root dependencies (Express etc.)
COPY . .
RUN bun install --production

# Install for alpine
RUN apk update --no-cache && \
    apk add --no-cache tzdata

# Set timezone data
ENV TZ=Asia/Kuala_Lumpur

# Expose your server port
EXPOSE 5000

# Start your app
CMD ["bun", "start"]