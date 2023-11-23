CREATE DATABASE produtos;

\c produtos

CREATE TABLE produto (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    quantidade INTEGER NOT NULL
);

INSERT INTO produto (nome, preco, quantidade)
VALUES ('Arroz', 3.00, 100),
       ('Chocolate', 2.45, 200),
       ('Pepsi', 5.50, 300);
