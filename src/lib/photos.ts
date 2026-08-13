import cacamba1 from "@/assets/cacamba-1.jpg.asset.json";
import cacamba2 from "@/assets/cacamba-2.jpg.asset.json";
import cacamba3 from "@/assets/cacamba-3.jpg.asset.json";
import cacamba4 from "@/assets/cacamba-4.jpg.asset.json";
import cacamba5 from "@/assets/cacamba-5.jpg.asset.json";
import cacamba6 from "@/assets/cacamba-6.jpg.asset.json";
import cacamba7 from "@/assets/cacamba-7.jpg.asset.json";
import cacamba8 from "@/assets/cacamba-8.jpg.asset.json";

export interface PhotoAsset {
  url: string;
}

export const CACAMBA_PHOTOS = [
  {
    url: (cacamba1 as PhotoAsset).url,
    alt: "Caçamba branca da Potigua Caçamba posicionada em frente a uma residência.",
  },
  {
    url: (cacamba2 as PhotoAsset).url,
    alt: "Caçamba da Potigua Caçamba com resíduos de obra e indicação de limite de enchimento.",
  },
  {
    url: (cacamba3 as PhotoAsset).url,
    alt: "Caçamba branca estacionada em via pública durante a noite.",
  },
  {
    url: (cacamba4 as PhotoAsset).url,
    alt: "Vista aproximada de caçamba com entulho de construção civil.",
  },
  {
    url: (cacamba5 as PhotoAsset).url,
    alt: "Caçamba da Potigua Caçamba em local iluminado durante a noite.",
  },
  {
    url: (cacamba6 as PhotoAsset).url,
    alt: "Caçamba branca 01 posicionada para coleta de entulho.",
  },
  {
    url: (cacamba7 as PhotoAsset).url,
    alt: "Caçamba da Potigua Caçamba em frente a estabelecimento comercial.",
  },
  {
    url: (cacamba8 as PhotoAsset).url,
    alt: "Caçamba branca 16 estacionada em área residencial.",
  },
];
