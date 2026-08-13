import c1 from "@/assets/c1.json";
import c2 from "@/assets/c2.json";
import c3 from "@/assets/c3.json";
import c4 from "@/assets/c4.json";
import c5 from "@/assets/c5.json";
import c6 from "@/assets/c6.json";
import c7 from "@/assets/c7.json";
import c8 from "@/assets/c8.json";

export interface PhotoAsset {
  url: string;
}

export const CACAMBA_PHOTOS = [
  {
    url: (c1 as PhotoAsset).url,
    alt: "Caçamba branca da Potigua Caçamba posicionada em frente a uma residência.",
  },
  {
    url: (c2 as PhotoAsset).url,
    alt: "Caçamba da Potigua Caçamba com resíduos de obra e indicação de limite de enchimento.",
  },
  {
    url: (c3 as PhotoAsset).url,
    alt: "Caçamba branca estacionada em via pública durante a noite.",
  },
  {
    url: (c4 as PhotoAsset).url,
    alt: "Vista aproximada de caçamba com entulho de construção civil.",
  },
  {
    url: (c5 as PhotoAsset).url,
    alt: "Caçamba da Potigua Caçamba em local iluminado durante a noite.",
  },
  {
    url: (c6 as PhotoAsset).url,
    alt: "Caçamba branca 01 posicionada para coleta de entulho.",
  },
  {
    url: (c7 as PhotoAsset).url,
    alt: "Caçamba da Potigua Caçamba em frente a estabelecimento comercial.",
  },
  {
    url: (c8 as PhotoAsset).url,
    alt: "Caçamba branca 16 estacionada em área residencial.",
  },
];
