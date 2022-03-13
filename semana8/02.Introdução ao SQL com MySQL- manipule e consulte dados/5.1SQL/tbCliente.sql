create table tbCliente(
CPF varchar(11),
NOME varchar(100),
ENDERECO1 varchar(150),
ENDERECO2 varchar(150),
BAIRRO varchar(50),
CIDADE varchar(50),
ESTADO varchar(50),
CEP varchar(80),
IDADE smallint,
SEXO varchar(1),
LIMITE_CREDITO float,
VOLUME_COMPRA float,
PRIMEIRA_COMPRA bit(1));

USE sucos;
/*ADICIONANDO CHAVE PRIMÁRIA*/
ALTER TABLE tbcliente ADD PRIMARY KEY (CPF);

/*INSERIR DADOS NA TABELA*/
INSERT INTO tbcliente (
CPF, NOME, ENDERECO1, ENDERECO2, BAIRRO, CIDADE, ESTADO, CEP, IDADE, SEXO, 
LIMITE_CREDITO, VOLUME_COMPRA, PRIMEIRA_COMPRA, DATA_NASCIMENTO)
VALUES ('00388934505','João da Silva','Rua projetada A número 10','',
'VILA ROMAN', 'CARATINGA', 'AMAZONAS','2222222',30,'M', 10000.00, 2000,
0, '1989-10-05');
select * from tbcliente;

select * from tbcliente;
select nome, cpf from tbcliente;

/*limitando a consulta para 5*/
select nome, cpf from tbcliente limit 5;

/*dando nomes aos campos*/
select nome as nome_cliente, cpf as cpf_cliente from tbcliente;


