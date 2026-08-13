const ASSET_BASE_URL = "https://lovable-uploads.s3.us-west-2.amazonaws.com";

// Helper para converter caminhos R2 em URLs públicas
const getPublicUrl = (r2Key: string) => `${ASSET_BASE_URL}/${r2Key}`;

export const ASSETS = {
  LOGO: getPublicUrl("a/v1/5b8c4dca-746c-4b63-9650-4920ceff529e/ca61ef93-d0ff-4119-9fc6-fab6017fdfcc/logo-potigua.png"),
  HERO: getPublicUrl("a/v1/5b8c4dca-746c-4b63-9650-4920ceff529e/49a2bc71-208e-4248-972c-14ddd37e2060/hero-official.png"),
  GALLERY: [
    { url: getPublicUrl("a/v1/5b8c4dca-746c-4b63-9650-4920ceff529e/e3ad0469-b39a-490f-a68f-49c3858ee6bb/c1.jpg"), alt: "Caçamba branca da Potigua Caçamba posicionada em frente a uma residência." },
    { url: getPublicUrl("a/v1/5b8c4dca-746c-4b63-9650-4920ceff529e/f792c09e-d227-4c4c-8044-ce144a578966/c2.jpg"), alt: "Caçamba da Potigua Caçamba com resíduos de obra e indicação de limite de enchimento." },
    { url: getPublicUrl("a/v1/5b8c4dca-746c-4b63-9650-4920ceff529e/99dd8320-2cf9-4dc6-9c5d-20a05e530d1b/c3.jpg"), alt: "Caçamba branca estacionada em via pública durante a noite." },
    { url: getPublicUrl("a/v1/5b8c4dca-746c-4b63-9650-4920ceff529e/4a95a709-e3aa-4129-821d-b84c24879d5f/c4.jpg"), alt: "Vista aproximada de caçamba com entulho de construção civil." },
    { url: getPublicUrl("a/v1/5b8c4dca-746c-4b63-9650-4920ceff529e/112817f2-1410-4d95-9cf0-8340fddca705/c5.jpg"), alt: "Caçamba da Potigua Caçamba em local iluminado durante a noite." },
    { url: getPublicUrl("a/v1/5b8c4dca-746c-4b63-9650-4920ceff529e/06a6a906-e5c1-4b56-8142-fd05d2f7758c/c6.jpg"), alt: "Caçamba branca 01 posicionada para coleta de entulho." },
    { url: getPublicUrl("a/v1/5b8c4dca-746c-4b63-9650-4920ceff529e/745b0337-eb44-4a16-ba7d-f2b5c73fe05a/c7.jpg"), alt: "Caçamba da Potigua Caçamba em frente a estabelecimento comercial." },
    { url: getPublicUrl("a/v1/5b8c4dca-746c-4b63-9650-4920ceff529e/47d06a90-db18-4cd6-a16f-d4d326590d7f/c8.jpg"), alt: "Caçamba branca 16 estacionada em área residencial." },
  ]
};
