CREATE TABLE especificidades_tipo(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo_especificade VARCHAR(100)
);

CREATE TABLE tipo_eventos(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(100)
);

CREATE TABLE eventos(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(100),
    data_evento DATETIME,
    endereco VARCHAR(100),
    tipo_evento INTEGER NOT NULL,
    FOREIGN KEY (tipo_evento) REFERENCES tipo_eventos(id)

);


CREATE TABLE familias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(100),
    endereco varchar(100),
    especificidade INTEGER NULL,
    FOREIGN KEY (especificidade) REFERENCES especificidades_tipo(id)
);

CREATE TABLE pessoas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(100),
    data_nascimento DATE,
    contato VARCHAR(11),
    familia INTEGER NOT NULL,
    FOREIGN KEY (familia) REFERENCES familias(id),
    eh_responsavel BOOLEAN NOT NULL
);



CREATE TABLE participacoes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    evento INTEGER NOT NULL,
    pessoa INTEGER NOT NULL,
    FOREIGN KEY (evento) REFERENCES eventos(id),
    FOREIGN KEY (pessoa) REFERENCES pessoas(id)
);






-- INSERT into especificidades_tipo (tipo_especificade) VALUES ('Recém-Casados'),
-- ('Filhos Especiais'), ('Casos Especiais'), ('Viuvos'), ('Idosos'), ('Sozinhos'), ('Distanciados'), ('Drogas');

-- INSERT into pessoas (nome, data_nascimento, contato)
-- VALUES
-- ('Victor Emanuel Silva Viana', 03/03/1988, '88997141533'),
-- ('Bruna Correia da Silva', 15/11/1988, '88997218758');

-- INSERT into familias (nome, endereco, especificidade, responsavel)
-- VALUES
-- ('Viana', 'Rua Prof. Jose Viana Filho, 70', 01)


-- SELECT id, nome FROM familias WHERE especificidade = 1;

-- SELECT * FROM familias WHERE nome = 'Viana';