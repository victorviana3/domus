# TODO - Domus

## Backend
- [ ] Implementar validações de integridade (ex: não permitir excluir família com pessoas vinculadas).
- [ ] Criar filtros de busca por nome/data nas rotas de GET.

## Frontend

### Fase 1: Fluxo Principal de Dados (Core CRUD)
*O sistema precisa permitir a entrada e visualização básica de dados para existir.*
- [ ] **Finalizar Fluxo de Famílias:** Criar tela de adição e integrar os botões de Editar/Excluir (estilizados dentro do `.box-familia`).
- [ ] **Listagem de Pessoas:** Implementar a tela básica para visualizar as pessoas cadastradas.
- [ ] **Cadastro de Pessoas:** Criar tela de adição de pessoas, garantindo o vínculo correto com as Famílias existentes.

### Fase 2: Usabilidade e Relacionamentos
*Melhorando a experiência e a conexão entre os dados.*
- [ ] **Busca:** Implementar a Search Bar na tela de Famílias para facilitar a localização de registros.
- [ ] **Contexto Visual:** Exibir o nome da Família na listagem de Pessoas (detalhes da relação).
- [ ] **Feedback do Usuário:** Adicionar estados de carregamento e mensagens de confirmação após salvar/deletar.

### Fase 3: Funcionalidades de Pastoral (MVP)
*Onde o sistema entrega seu valor social real.*
- [ ] **Gerenciamento de Participações:** Criar interface para vincular pessoas a eventos específicos.

### Fase 4: Refinamentos e Pós-MVP
- [ ] Estilização avançada e responsividade fina.
- [ ] Relatórios simples de participações por evento.
