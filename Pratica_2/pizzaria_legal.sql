create database db_pizzaria_legal;

use db_pizzaria_legal;


create table tb_categoria(
id_categoria bigint (5) auto_increment,
categoria varchar(20) not null,
 primary key(id_categoria)
);

insert into tb_categoria(categoria) values
("vegana"),
("frutos do mar"),
("salgada"),
("Doce"),
("Exotica");


select * from tb_categoria;


create table tb_pizza(
 id_pizza bigint(5) auto_increment primary key,
 sabor  varchar(40)not null,
 tamanho enum('grande','broto') not null,
 preco  double(4,2) not null,
 borda  enum('sim','nao'),
 id_categoria bigint,
 constraint fk_categoria 
 FOREIGN KEY (id_categoria) references tb_categoria (id_categoria));
 
 
 insert into tb_pizza(sabor,tamanho,preco,borda,id_categoria) values
 ("queijos4","grande",45.50,"sim",3),
 ("frango","broto",49.50,"nao",3),
 ("brigadeiro","grande",40.50,"nao",4),
 ("prestigio","grande",39.90,"nao",4),
 ("brocolis","broto",47.50,"sim",1),
 ("rucula","grande",49.50,"sim",1),
 ("camarão","grande",60.50,"sim",2),
 ("atum","broto",48.50,"sim",2);
 
 
SELECT * FROM tb_pizza
 inner JOIN tb_categoria 
 ON tb_categoria.id_categoria = tb_pizza.categoria; 
 
 
select* from  tb_pizza where preco >= 45;

select * from tb_pizza where id_categoria =2;


 
 

