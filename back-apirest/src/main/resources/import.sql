 
insert into accounts (bio,foto_bio,followers,following,post,observaciones ,create_at,usuario,password,user_acc) values ('bio','foto',1,1,10,'alguna obs', Now(),'urca','urca','urca');

insert into accounts (bio,foto_bio,followers,following,post,observaciones ,create_at,usuario,password,user_acc) values ('bio2','foto2',2,2,12,'alguna obs', Now(),'juanca','juanca', 'merengue');
 /*
insert into accounts (bio,foto_bio,followers,following,post,observaciones ,create_at,usuario,password,user_acc) values ('bio','foto',1,1,10,'alguna obs', Now(),'urca','urca','urca1');

insert into accounts (bio,foto_bio,followers,following,post,observaciones ,create_at,usuario,password,user_acc) values ('bio2','foto2',2,2,12,'alguna obs', Now(),'juanca','juanca', 'merengue1');
 
insert into accounts (bio,foto_bio,followers,following,post,observaciones ,create_at,usuario,password,user_acc) values ('bio','foto',1,1,10,'alguna obs', Now(),'urca','urca','urca2');

insert into accounts (bio,foto_bio,followers,following,post,observaciones ,create_at,usuario,password,user_acc) values ('bio2','foto2',2,2,12,'alguna obs', Now(),'juanca','juanca', 'merengue2');

*/
/* claves spring security */

/* Creamos algunos usuarios con sus roles */
INSERT INTO `usuarios` (username, password, enabled, nombre, apellido, email) VALUES ('starter','$2a$10$uXwE.EpKcW7g9Bp07tF2XOoi3IuTeAE.61lbSvle8x0mN2vA1NJ1C',1, 'starter', 'starter','starter@gmail.com');
INSERT INTO `usuarios` (username, password, enabled, nombre, apellido, email) VALUES ('admin','$2a$10$ypW834mdRTeNvbymN54/b.D4RytCWK/RgtWFpTpI9CiOcLcZzmjBK',1, 'admin', 'admin','admin@gmail.com');
INSERT INTO `usuarios` (username, password, enabled, nombre, apellido, email) VALUES ('regular','$2a$10$ypW834mdRTeNvbymN54/b.D4RytCWK/RgtWFpTpI9CiOcLcZzmjBK',1, 'regular', 'regular','regular@gmail.com');
INSERT INTO `usuarios` (username, password, enabled, nombre, apellido, email) VALUES ('profesional','$2a$10$ypW834mdRTeNvbymN54/b.D4RytCWK/RgtWFpTpI9CiOcLcZzmjBK',1, 'profesional', 'profesional','profesional@gmail.com');

INSERT INTO `roles` (nombre) VALUES ('ROLE_STARTER');
INSERT INTO `roles` (nombre) VALUES ('ROLE_ADMIN');
INSERT INTO `roles` (nombre) VALUES ('ROLE_REGULAR');
INSERT INTO `roles` (nombre) VALUES ('ROLE_PROFESIONAL');

INSERT INTO `roles` (nombre) VALUES ('ROLE_TRIAL');
INSERT INTO `roles` (nombre) VALUES ('ROLE_SIMPLE');

INSERT INTO `usuarios_roles` (usuario_id, role_id) VALUES (1, 1);
INSERT INTO `usuarios_roles` (usuario_id, role_id) VALUES (2, 2);
INSERT INTO `usuarios_roles` (usuario_id, role_id) VALUES (2, 1);