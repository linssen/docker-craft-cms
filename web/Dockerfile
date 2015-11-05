FROM php:5.6-apache

RUN apt-get update && apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng12-dev \
    && docker-php-ext-install iconv mcrypt mysql mysqli pdo pdo_mysql \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install gd \
    && docker-php-ext-install mbstring mcrypt

COPY ./php.ini /usr/local/etc/php/

RUN usermod -u 1000 www-data
RUN usermod -G staff www-data
RUN chown -R www-data:www-data /var/www
RUN a2enmod rewrite
