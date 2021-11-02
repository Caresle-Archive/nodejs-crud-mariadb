CREATE DATABASE contacts_app;
USE contacts_app;

CREATE TABLE users (
	id int NOT NULL AUTO_INCREMENT,
	username varchar(30) NOT NULL,
	password varchar(30) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE contacts (
	id int NOT NULL AUTO_INCREMENT,
	contact_name varchar(30) NOT NULL,
	phone_number varchar(10) NOT NULL,
	PRIMARY KEY(id)
);