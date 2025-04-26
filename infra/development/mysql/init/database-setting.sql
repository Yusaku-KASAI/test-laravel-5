-- development
CREATE DATABASE laravel DEFAULT CHARACTER SET utf8mb4;
CREATE USER 'php'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'php'@'%';
FLUSH PRIVILEGES;

-- testing
CREATE DATABASE laravel_test DEFAULT CHARACTER SET utf8mb4;
GRANT ALL PRIVILEGES ON *.* TO 'php'@'%';
FLUSH PRIVILEGES;

-- 認証方式で、mysql_native_passwordを指定しているのは、mysql8.0以降のデフォルト認証方式がlaravel5の対応しないcaching_sha2_passwordになってるから。