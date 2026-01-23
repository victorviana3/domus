# Planejamento do Projeto Domus

## 1. Modelagem & Associações (Sequelize)
### Passo Imediato: Famílias e Especificidades
- [ ] **Ajustar Modelos Atuais**:
  - Remover campo `especificidade` (int) direto da tabela `Familia`.
  - Criar tabela de junção (ex: `FamiliaEspecificidade`) para relacionamento N:N (Muitos-para-Muitos).
  - Definir associações no Sequelize (`belongsToMany`).

### Tabelas de Apoio (Support Tables)
- [ ] **Criar `TipoEvento`**: Portar tabela `tipo_eventos` do SQL para model Sequelize.
- [ ] **Outros Domínios**: Analisar necessidade de tabelas para Status ou Categorias adicionais.

### Tabelas Principais (Main Tables)
- [ ] **Criar `Pessoa`**:
  - Campos: nome, data_nascimento, contato, eh_responsavel.
  - Associação: `belongsTo(Familia)`.
- [ ] **Criar `Evento`**:
  - Campos: nome, data_evento, endereco.
  - Associação: `belongsTo(TipoEvento)`.
- [ ] **Criar `Participacao`**:
  - Relacionamento N:N entre `Evento` e `Pessoa`.

## 2. Backend (API)
- [ ] Criar script de inicialização (`sync`) para gerar o banco `domus.db`.
- [ ] Criar rotas CRUD básicas.
