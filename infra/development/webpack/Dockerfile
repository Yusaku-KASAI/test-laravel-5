FROM node:14

# ビルドツールをインストール
# RUN apt-get update && apt-get install -y python3 make g++

COPY ./laravel /var/www/html

WORKDIR /var/www/html

RUN if [ -f package.json ]; then \
    npm install; \
    fi

EXPOSE 8080
# exposeでは実際のポートに影響しない

ENTRYPOINT [ "bash", "-c", "if [ -f package.json ]; then npm run hot; else echo 'No package.json found. Keeping Container alive.' && tail -f /dev/null; fi" ]