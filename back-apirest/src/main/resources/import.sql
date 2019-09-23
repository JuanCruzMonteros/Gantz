 
insert into accounts (bio,foto_bio,followers,following,post,observaciones ,create_at,usuario,password,user_acc) values ('bio12','https://instagram.faep4-1.fna.fbcdn.net/vp/8eb405b448ac904ac96f2289e01013c8/5E3C975A/t51.2885-15/e35/p1080x1080/61402386_150647056062714_5533398976598187924_n.jpg?_nc_ht=instagram.faep4-1.fna.fbcdn.net&_nc_cat=106',1,1,10,'alguna obs', Now(),'urca','urca','urca');

insert into accounts (bio,foto_bio,followers,following,post,observaciones ,create_at,usuario,password,user_acc) values ('bio22','https://instagram.faep4-1.fna.fbcdn.net/vp/cfd32754dcf7ff1c5f74fe47d45f7be6/5E1AFF71/t51.2885-15/e35/s1080x1080/65582917_143877516684862_6175931112012616169_n.jpg?_nc_ht=instagram.faep4-1.fna.fbcdn.net&_nc_cat=110',2,2,12,'alguna obs', Now(),'juanca','juanca', 'merengue');


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