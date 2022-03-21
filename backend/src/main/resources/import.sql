INSERT INTO tb_categoria(tipo) VALUES ('frutas');
INSERT INTO tb_categoria(tipo) VALUES ('lugumes');
INSERT INTO tb_categoria(tipo) VALUES ('verduras');

INSERT INTO tb_contato(nome, email, mensagem) VALUES ('Daiane','daia@gmail.com','Mensagem de teste');

INSERT INTO tb_vendedor(nome, telefone, email, senha, logradouro, numero_logradouro, bairro, cidade, estado, cep) VALUES ('Frederico', '0767899999', 'fred@gmail.com', 'asdsad7', 'rua pitolomeu', '171', 'boteco', 'bh', 'MG','36444444');

INSERT INTO tb_cliente(nome, telefone, email, senha, logradouro, numero_logradouro, bairro, cidade, estado, cep) VALUES ('Maria', '987789887', 'maria@gmail.com', '1234567', 'rua paixao rei', '78', 'veneza', 'mogi', 'SP','36300999');

INSERT INTO tb_produto(nome, preco, quantidade, categoria_id, vendedor_id, foto) VALUES ('laranja', '14', '3', 1, 1, 'https://media.gazetadopovo.com.br/2021/09/22094114/banana-descascada.jpg');

INSERT INTO tb_cesta(quantidade, total, produto_id, cliente_id) VALUES ('3', '88', 1, 1);