FROM php:7.1-fpm

# composer create-project laravel/laravel . に必要
RUN apt-get update && apt-get install -y git zip unzip

# MySQLドライバ
RUN docker-php-ext-install pdo_mysql

COPY --from=composer:2.2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

EXPOSE 9000
