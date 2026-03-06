# TODO - Domus

## Backend

- [ ] **Participação (Prioridade Alta)**
  - [x] Criar rota `POST /participacao` para vincular pessoa a evento.
  - [x] Criar rota `GET /eventos/:id/participantes` para listar quem foi em um evento.
  - [x] Criar rota `DELETE /participacao` para remover uma presença.

- [x] **Melhoria nas Consultas (Eager Loading)**
  - [x] Atualizar `GET /familias` para incluir dados da `Especificidade`.
  - [x] Atualizar `GET /pessoas` para incluir dados da `Familia`.
  - [x] Atualizar `GET /eventos` para incluir o `TipoEvento`.

- [x] **CRUD Completo**
  - [x] Implementar rotas `GET /:entidade/:id` (Busca por ID) para Família, Pessoa e Evento.
  - [x] Implementar rotas `PUT /:entidade/:id` (Atualização) para todas as entidades.
  - [x] Implementar rotas `DELETE /:entidade/:id` para todas as entidades.

- [x] **Refatoração & Qualidade**
  - [x] Corrigir nome da chave estrangeira `familiumId` para `familiaId` no `POST /pessoa` e no modelo.
  - [ ] Adicionar validações de integridade mais robustas nos controllers.

## Frontend

- [ ] Criar tela de gerenciamento de Participações (Vincular pessoas a eventos).
- [ ] Exibir detalhes das relações (ex: mostrar Família na lista de Pessoas).
- [ ] Implementar botões de Editar e Excluir nas listagens.
