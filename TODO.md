# TODO - Domus

## Backend
- [ ] **Participação (Prioridade Alta)**
    - [ ] Criar rota `POST /participacao` para vincular pessoa a evento.
    - [ ] Criar rota `GET /eventos/:id/participantes` para listar quem foi em um evento.
    - [ ] Criar rota `DELETE /participacao` para remover uma presença.

- [ ] **Melhoria nas Consultas (Eager Loading)**
    - [ ] Atualizar `GET /familias` para incluir dados da `Especificidade`.
    - [ ] Atualizar `GET /pessoas` para incluir dados da `Familia`.
    - [ ] Atualizar `GET /eventos` para incluir o `TipoEvento`.

- [ ] **CRUD Completo**
    - [ ] Implementar rotas `GET /:entidade/:id` (Busca por ID) para Família, Pessoa e Evento.
    - [ ] Implementar rotas `PUT /:entidade/:id` (Atualização) para todas as entidades.
    - [ ] Implementar rotas `DELETE /:entidade/:id` para todas as entidades.

- [ ] **Refatoração & Qualidade**
    - [ ] Corrigir nome da chave estrangeira `familiumId` para `familiaId` no `POST /pessoa` e no modelo.
    - [ ] Adicionar validações de integridade mais robustas nos controllers.

## Frontend
- [ ] Criar tela de gerenciamento de Participações (Vincular pessoas a eventos).
- [ ] Exibir detalhes das relações (ex: mostrar Família na lista de Pessoas).
- [ ] Implementar botões de Editar e Excluir nas listagens.