create database burgers_db;
use burgers_db;
create table burgers(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(40),
devoured BOOLEAN,
PRIMARY KEY (id)
);