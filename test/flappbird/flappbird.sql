SET NAMES UTF8;
 DROP DATABASE IF EXISTS flappbird;
 CREATE DATABASE flappbird CHARSET=UTF8;
 USE flappbird;
 CREATE TABLE user_info (
     cid INT PRIMARY KEY AUTO_INCREMENT,
     uname VARCHAR(128),
     score INT
 );
INSERT INTO user_info VALUES(null,'唐博','2');