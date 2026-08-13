# Plano: Auditoria e Correção de Ativos (Imagens) para Vercel

O objetivo é garantir que todas as imagens do site (Logo, Hero e Galeria) sejam carregadas corretamente no ambiente de produção da Vercel, eliminando a dependência de caminhos virtuais internos do Lovable que podem falhar em deploy externos.

## Problema Identificado
As imagens estão usando o sistema de `asset.json` com URLs virtuais `/__l5e/assets-v1/...`. Embora funcionem no preview do Lovable, esses caminhos podem não ser resolvidos corretamente pela Vercel se o middleware de assets não estiver presente no build final ou se houver restrições de rede/CORS no R2.

## Solução
Vamos converter o carregamento de ativos para usar URLs públicas absolutas diretamente do CDN (R2) ou, preferencialmente, mover os arquivos críticos para a pasta `public/` para garantir que sejam servidos estaticamente pela Vercel.

## Ações

1. **Auditoria de URLs**:
   - Mapear todos os `r2_key` presentes nos arquivos `.json` em `src/assets/`.
   - Gerar as URLs públicas equivalentes: `https://lovable-uploads.s3.us-west-2.amazonaws.com/{r2_key}`.

2. **Centralização em `src/lib/assets.ts`**:
   - Criar um arquivo central para gerenciar as URLs das imagens, permitindo troca rápida caso o domínio do CDN mude.
   - Definir constantes para `LOGO_URL`, `HERO_URL` e `GALLERY_PHOTOS`.

3. **Atualização dos Componentes**:
   - `SiteHeader.tsx`: Substituir `logoAsset.url` pela nova URL estática/pública.
   - `SiteFooter.tsx`: Substituir `logoAsset.url`.
   - `index.tsx` (Hero): Substituir `heroOfficial.url`.
   - `PhotoGallery.tsx`: Garantir que as URLs passadas via `photos` sejam as públicas.

4. **Verificação Técnica**:
   - Validar se os arquivos `.json` são necessários no build final (normalmente são importados e incluídos no bundle JS pelo Vite, mas seu conteúdo aponta para caminhos relativos ao domínio de execução).
   - Substituir os imports de JSON por strings de URL direta para reduzir a complexidade.

## Detalhes Técnicos
- As imagens oficiais já estão no R2.
- A URL base pública do Lovable Assets será usada para garantir persistência.
- Nenhuma alteração visual será feita, apenas estrutural nos caminhos das imagens.
