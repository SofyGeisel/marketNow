CREATE DATABASE marketnow;

CREATE TABLE usuarios(
usuarioid serial primary key,
nombre varchar(30),
mail varchar(30),
direccion varchar(50),
password varchar(30)
);

CREATE TABLE compras(
compraid serial primary key,
usuarioid int,
fecha_compra date,
total int,
foreign key (usuarioid)
references usuarios(usuarioid)
);

CREATE TABLE detallecompras(
id serial primary key,
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
categoriaid serial primary key,
nombre varchar(30),
descripcion varchar(120)
);

CREATE TABLE productos(
productoid serial primary key,
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


INSERT INTO categorias(nombre, descripcion)
VALUES ('Tecnologia', 'En esta seccion podras encontrar lo mejor en tecnologia publicado por nuestros usuarios, ve y compruebalo tu mismo');
INSERT INTO categorias(nombre, descripcion)
VALUES ('Instrumentos Musicales', 'En esta seccion podras encontrar lo mejor en instrumentos musicales publicado por nuestros usuarios, se el mejor musico');
INSERT INTO categorias(nombre, descripcion)
VALUES ('Deporte', 'En esta seccion podras encontrar lo mejor en deportes publicado por nuestros usuarios, vive una vida sana');


INSERT INTO productos(nombre, descripcion, imagen, usuarioid, categoriaid, precio, fecha_publicacion)
VALUES ('Notebook Toshiba 235', 'Notebook Toshiba Dynabook Tecra Celeron 14 4GB/128GB', './img/laptoptoshiba1.png', '1', '1', 349900, '23-04-2023');
INSERT INTO productos(nombre, descripcion, imagen, usuarioid, categoriaid, precio, fecha_publicacion)
VALUES ('Notebook Asus Gaming', 'Notebook TUF Gaming F15 FX506LHB-HN326W Intel Core i5 NVIDIA GeForce GTX 1650 8GB RAM 512GB SSD 15.6', './img/LaptopAsus1.png', '2', '1', 729990, '04-04-2023');
INSERT INTO productos(nombre, descripcion, imagen, usuarioid, categoriaid, precio, fecha_publicacion)
VALUES ('Laptop Dell Vostro', 'Notebook Dell Vostro 3400 Intel Core i5-1135G7 / 8GB RAM / 256GB SSD / 14.0', './img/LaptopDell1.png', '3', '1', 399990, '25-03-2023');
INSERT INTO productos(nombre, descripcion, imagen, usuarioid, categoriaid, precio, fecha_publicacion)
VALUES ('Notebook HP 348', 'Notebook Hp 348 G7 I5-10210U 8GB SSD 256GB W10 Home', './img/LaptopHP1.png', '1', '1', 469990, '26-03-2023');
INSERT INTO productos(nombre, descripcion, imagen, usuarioid, categoriaid, precio, fecha_publicacion)
VALUES ('Notebook HP 348 Rojo', 'Notebook Hp 348 G7 I5-10210U 8GB SSD 256GB W10 Home', './img/LaptopHP2.png', '2', '1', 469990, '27-03-2023');