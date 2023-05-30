CREATE DATABASE marketnow;

CREATE TABLE usuarios(
usuarioid serial primary key,
nombre varchar(30),
email varchar(30),
direccion varchar(50),
password varchar(120)
);

CREATE TABLE compras(
compraid serial primary key,
usuarioid int,
fecha_compra date,
total int,
productos json,
foreign key (usuarioid)
references usuarios(usuarioid)
);


CREATE TABLE productos(
productoid serial primary key,
nombre varchar(30),
descripcion varchar(120),
imagen varchar,
usuarioid int,
precio int,
foreign key (usuarioid)
references usuarios(usuarioid)
);

CREATE TABLE favoritos(
favoritoid serial primary key,
usuarioid int,
productoid int,
foreign key (usuarioid)
references usuarios(usuarioid),
foreign key (productoid)
references productos(productoid)
);

INSERT INTO usuarios(nombre, mail, direccion, password)
VALUES ('Marco Gallardo', 'mgallardo@linkmg.cl', 'Rio Tolten 2487', '$2a$10$5AGI1DNzexxLWMBK1h5IU.arUwetFuTZTibHL/AlUxy8YG1xaXXZe');
INSERT INTO usuarios(nombre, mail, direccion, password)
VALUES ('Sofia Figueroa', 'sofiafigueroageisel@gmail.com', 'Viña del mar', '$2a$10$5AGI1DNzexxLWMBK1h5IU.arUwetFuTZTibHL/AlUxy8YG1xaXXZe');
INSERT INTO usuarios(nombre, mail, direccion, password)
VALUES ('Rodrigo Alarcon', 'rodalarcon@gmail.com', 'Santiago', '$2a$10$5AGI1DNzexxLWMBK1h5IU.arUwetFuTZTibHL/AlUxy8YG1xaXXZe');


INSERT INTO productos(nombre, descripcion, imagen, usuarioid, precio)
VALUES ('Notebook Toshiba 235', 'Notebook Toshiba Dynabook Tecra Celeron 14 4GB/128GB', 'http://localhost:3000/laptoptoshiba1.png', '1', 349900);
INSERT INTO productos(nombre, descripcion, imagen, usuarioid, precio)
VALUES ('Notebook Asus Gaming', 'Notebook TUF Gaming F15 FX506LHB-HN326W Intel Core i5 NVIDIA GeForce GTX 1650 8GB RAM 512GB SSD 15.6', 'http://localhost:3000/LaptopAsus1.png', '2', 729990);
INSERT INTO productos(nombre, descripcion, imagen, usuarioid, precio)
VALUES ('Laptop Dell Vostro', 'Notebook Dell Vostro 3400 Intel Core i5-1135G7 / 8GB RAM / 256GB SSD / 14.0', 'http://localhost:3000/LaptopDell1.png', '3', 399990);
INSERT INTO productos(nombre, descripcion, imagen, usuarioid, precio)
VALUES ('Notebook HP 348', 'Notebook Hp 348 G7 I5-10210U 8GB SSD 256GB W10 Home', 'http://localhost:3000/LaptopHP1.png', '1', 469990);
INSERT INTO productos(nombre, descripcion, imagen, usuarioid, precio)
VALUES ('Notebook HP 348 Rojo', 'Notebook Hp 348 G7 I5-10210U 8GB SSD 256GB W10 Home', 'http://localhost:3000/LaptopHP2.png', '2', 469990);