CREATE DATABASE marketnow;

CREATE TABLE usuarios(
usuarioid int primary key,
nombre varchar(30),
mail varchar(30),
direccion varchar(50),
password varchar(30),
lastloggin date
);

CREATE TABLE compras(
compraid int primary key,
usuarioid int,
fecha_compra date,
total int,
foreign key (usuarioid)
references usuarios(usuarioid)
);

CREATE TABLE detallecompras(
id int primary key,
compraid int,
productoid int,
nombre varchar(30),
descripcion varchar(120),
imagen varchar(100),
usuarioid int,
categoriaid int,
precio int,
foreign key (compraid)
references compras(compraid)
);

CREATE TABLE categorias(
categoriaid int primary key,
nombre varchar(30),
descripcion varchar(120)
);

CREATE TABLE productos(
productoid int primary key,
nombre varchar(30),
descripcion varchar(120),
imagen varchar(100),
usuarioid int,
categoriaid int,
precio int,
fecha_publicacion date,
foreign key (usuarioid)
references usuarios(usuarioid),
foreign key (categoriaid)
references categorias(categoriaid)
);

CREATE TABLE favoritos(
favoritoid int primary key,
usuarioid int,
productoid int,
foreign key (usuarioid)
references usuarios(usuarioid),
foreign key (productoid)
references productos(productoid)
);

INSERT INTO usuarios(usuarioid, nombre, mail, direccion, password, lastloggin)
VALUES (1, 'Marco Gallardo', 'mgallardo@linkmg.cl', 'Rio Tolten 2487', '123456', '23-04-2023');
INSERT INTO usuarios(usuarioid, nombre, mail, direccion, password, lastloggin)
VALUES (2, 'Sofia Figueroa', 'sofiafigueroageisel@gmail.com', 'Viña del mar', '123456', '26-04-2023');
INSERT INTO usuarios(usuarioid, nombre, mail, direccion, password, lastloggin)
VALUES (3, 'Rodrigo Alarcon', 'rodalarcon@gmail.com', 'Santiago', '123456', '24-04-2023');


INSERT INTO categorias(categoriaid, nombre, descripcion)
VALUES (1, 'Tecnologia', 'En esta seccion podras encontrar lo mejor en tecnologia publicado por nuestros usuarios, ve y compruebalo tu mismo');
INSERT INTO categorias(categoriaid, nombre, descripcion)
VALUES (2, 'Instrumentos Musicales', 'En esta seccion podras encontrar lo mejor en instrumentos musicales publicado por nuestros usuarios, se el mejor musico');
INSERT INTO categorias(categoriaid, nombre, descripcion)
VALUES (3, 'Deporte', 'En esta seccion podras encontrar lo mejor en deportes publicado por nuestros usuarios, vive una vida sana');


INSERT INTO productos(productoid, nombre, descripcion, imagen, usuarioid, categoriaid, precio, fecha_publicacion)
VALUES (1, 'Notebook Toshiba 235', 'Notebook Toshiba Dynabook Tecra Celeron 14 4GB/128GB', './img/laptoptoshiba1.png', '1', '1', 349900, '23-04-2023');
INSERT INTO productos(productoid, nombre, descripcion, imagen, usuarioid, categoriaid, precio, fecha_publicacion)
VALUES (2, 'Notebook Asus Gaming', 'Notebook TUF Gaming F15 FX506LHB-HN326W Intel Core i5 NVIDIA GeForce GTX 1650 8GB RAM 512GB SSD 15.6', './img/LaptopAsus1.png', '2', '1', 729990, '04-04-2023');
INSERT INTO productos(productoid, nombre, descripcion, imagen, usuarioid, categoriaid, precio, fecha_publicacion)
VALUES (3, 'Laptop Dell Vostro', 'Notebook Dell Vostro 3400 Intel Core i5-1135G7 / 8GB RAM / 256GB SSD / 14.0', './img/LaptopDell1.png', '3', '1', 399990, '25-03-2023');
INSERT INTO productos(productoid, nombre, descripcion, imagen, usuarioid, categoriaid, precio, fecha_publicacion)
VALUES (4, 'Notebook HP 348', 'Notebook Hp 348 G7 I5-10210U 8GB SSD 256GB W10 Home', './img/LaptopHP1.png', '1', '1', 469990, '26-03-2023');
INSERT INTO productos(productoid, nombre, descripcion, imagen, usuarioid, categoriaid, precio, fecha_publicacion)
VALUES (5, 'Notebook HP 348 Rojo', 'Notebook Hp 348 G7 I5-10210U 8GB SSD 256GB W10 Home', './img/LaptopHP2.png', '2', '1', 469990, '27-03-2023');