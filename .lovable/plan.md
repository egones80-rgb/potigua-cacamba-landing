# Plano de Preenchimento de Conteúdo - Potigua Caçamba

Este plano detalha o preenchimento dos conteúdos institucionais confirmados e a preparação para a inclusão do logo.

## Alterações nos Conteúdos

### 1. Página Inicial (`src/routes/index.tsx`)
- Atualizar a seção "Áreas atendidas" para refletir "Grande São Paulo" e marcar cidades/bairros como "[CIDADES E BAIRROS A CONFIRMAR]".
- Refinar textos para alinhar com o tom profissional e direto solicitado.

### 2. Página Sobre (`src/routes/sobre.tsx`)
- Preencher "Nossa história" com foco na especialização (locação de caçambas para obras, reformas e entulho).
- Preencher "Diferenciais" e "Licenças" com "[PREENCHER]" onde não houver confirmação, mas mantendo a estrutura profissional.
- Adicionar a seção "Para quem é?" (Pessoas em reforma, profissionais da construção, empresas).

### 3. Página de Serviços (`src/routes/locacao-de-cacamba.tsx` e `src/routes/retirada-de-entulho.tsx`)
- Explicar o fluxo de locação: Solicitação -> definição da caçamba -> orçamento/confirmação -> entrega -> utilização -> retirada.
- Manter dados técnicos (tamanhos, prazos, preços) como "[PREENCHER]".

### 4. Página de Áreas Atendidas (`src/routes/areas-atendidas.tsx`)
- Confirmar atuação na Grande São Paulo.
- Substituir listas genéricas por "[CIDADES E BAIRROS A CONFIRMAR]".

### 5. Página de Contato (`src/routes/contato.tsx`)
- Manter o foco no WhatsApp oficial (11) 93309-5481.
- Manter endereço e horários como "[PREENCHER]".

## Implementação do Logo

### Footer (`src/components/SiteFooter.tsx`)
- Adicionar espaço para o logo oficial (com `alt="Potigua Caçamba"`).
- Garantir responsividade e preservação das proporções.
- O logo será inserido assim que o arquivo for enviado (usarei um placeholder ou aguardarei o envio se for imediato, mas prepararei o componente).

## Detalhes Técnicos
- Utilizar os componentes `Reveal` para animações fade-in.
- Manter a paleta de cores: Laranja `#F7941D`, Preto, Branco.
- Tom de voz: Comercial, objetivo e confiável.
- Validação de TypeScript e build antes da entrega.
