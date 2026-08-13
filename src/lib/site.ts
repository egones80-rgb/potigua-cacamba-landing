export const SITE = {
  name: "Potigua Caçamba",
  phoneDisplay: "(11) 93309-5481",
  phoneRaw: "5511933095481",
  region: "Grande São Paulo",
} as const;

export const whatsappUrl = (
  message = "Olá! Gostaria de solicitar uma caçamba.",
) => `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { to: "/", label: "Início" },
  { to: "/locacao-de-cacamba", label: "Locação de Caçamba" },
  { to: "/retirada-de-entulho", label: "Retirada de Entulho" },
  { to: "/areas-atendidas", label: "Áreas Atendidas" },
  { to: "/sobre", label: "Sobre" },
  { to: "/perguntas-frequentes", label: "Dúvidas" },
  { to: "/contato", label: "Contato" },
] as const;

export const FAQ = [
  {
    q: "Quais tamanhos de caçamba estão disponíveis?",
    a: "[PREENCHER]",
  },
  { q: "Qual o prazo de entrega da caçamba?", a: "[PREENCHER]" },
  { q: "Por quanto tempo posso ficar com a caçamba?", a: "[PREENCHER]" },
  { q: "Quais são as formas de pagamento?", a: "[PREENCHER]" },
  { q: "Quais materiais podem ser descartados na caçamba?", a: "[PREENCHER]" },
  { q: "Vocês emitem nota fiscal?", a: "[PREENCHER]" },
] as const;
