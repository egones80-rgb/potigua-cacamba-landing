import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Truck,
  HardHat,
  Hammer,
  Trash2,
  PhoneCall,
  CalendarCheck,
  PackageCheck,
  Recycle,
  MapPin,
  ArrowRight,
} from "lucide-react";
import truckImg from "@/assets/caminhao-cacamba.jpg";
import c1 from "@/assets/c1.json";
import heroOfficial from "@/assets/hero-official.png.asset.json";
import { Reveal } from "@/components/Reveal";

import { WhatsAppLink } from "@/components/WhatsAppButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SmokeText } from "@/components/SmokeText";
import { SITE } from "@/lib/site";
import { PhotoGallery } from "@/components/PhotoGallery";
import { CACAMBA_PHOTOS } from "@/lib/photos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Potigua Caçamba | Locação de Caçamba na Grande São Paulo" },
      {
        name: "description",
        content:
          "Locação de caçamba para obras, reformas e retirada de entulho na Grande São Paulo. Solicite pelo WhatsApp: (11) 93309-5481.",
      },
      { property: "og:title", content: "Potigua Caçamba | Locação de Caçamba" },
      {
        property: "og:description",
        content:
          "Caçambas para obras, reformas e retirada de entulho na Grande São Paulo. Atendimento rápido pelo WhatsApp.",
      },
    ],
  }),
  component: Index,
});

const SERVICES = [
  {
    icon: Truck,
    title: "Locação de Caçamba",
    text: "Caçambas para descarte de resíduos de construção e demolição.",
    to: "/locacao-de-cacamba" as const,
  },
  {
    icon: HardHat,
    title: "Caçamba para Obra",
    text: "Apoio para canteiros de obra com retirada de entulho recorrente.",
  },
  {
    icon: Hammer,
    title: "Caçamba para Reforma",
    text: "Solução prática para reformas residenciais e comerciais.",
  },
  {
    icon: Trash2,
    title: "Retirada de Entulho",
    text: "Coleta e destinação do entulho gerado no seu imóvel.",
    to: "/retirada-de-entulho" as const,
  },
];

const STEPS = [
  { icon: PhoneCall, title: "1. Solicite", text: "Fale com a gente pelo WhatsApp e informe sua necessidade." },
  { icon: CalendarCheck, title: "2. Agende", text: "Combinamos data e local de entrega da caçamba." },
  { icon: PackageCheck, title: "3. Utilize", text: "A caçamba é entregue no endereço para o descarte." },
  { icon: Recycle, title: "4. Retiramos", text: "Fazemos a retirada e a destinação do material." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="stripes absolute inset-x-0 top-0 h-2 opacity-80" aria-hidden />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              {SITE.region}
            </p>
            <SmokeText 
              text="POTIGUA CAÇAMBA" 
              className="mt-4 text-4xl sm:text-5xl lg:text-7xl" 
            />
            <h2 className="mt-2 text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
              Locação para <span className="text-primary">obra, reforma e entulho</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Caçambas para descarte de entulho com atendimento direto pelo WhatsApp. Simples,
              rápido e sem burocracia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppLink message="Olá! Quero solicitar uma caçamba agora.">
                Solicitar caçamba agora
              </WhatsAppLink>
              <Link
                to="/locacao-de-cacamba"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary px-6 py-3 font-display text-sm uppercase tracking-wide text-primary transition-transform duration-200 hover:scale-[1.03] hover:bg-primary hover:text-primary-foreground"
              >
                Ver serviços <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-md border border-border shadow-2xl bg-black">
              <img
                src={heroOfficial.url}
                alt="Logo oficial Potigua Caçamba com caminhão e caçamba"
                width={1024}
                height={1024}
                className="relative z-0 w-full object-contain aspect-square"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOBRE CURTO */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">O que fazemos</h2>
            <p className="mt-4 text-muted-foreground">
              A Potigua Caçamba trabalha com locação de caçambas para obras, reformas e retirada de
              entulho na {SITE.region}. Você solicita, entregamos a caçamba no endereço combinado e
              fazemos a retirada do material.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Nossos serviços</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="group h-full border-l-4 border-primary bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <s.icon className="h-9 w-9 text-primary" />
                  <h3 className="mt-4 text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                  {s.to && (
                    <Link
                      to={s.to}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold uppercase text-primary"
                    >
                      Saiba mais <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA DE FOTOS */}
      <PhotoGallery photos={CACAMBA_PHOTOS} />

      {/* PROCESSO */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Como funciona</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="h-full border border-border bg-card p-6 transition-colors duration-300 hover:border-primary">
                  <s.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-base">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section className="bg-ink py-16 text-ink-foreground lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Áreas atendidas</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Atendemos a {SITE.region}. Cidades e bairros atendidos: [CIDADES E BAIRROS A CONFIRMAR]
            </p>
            <Link
              to="/areas-atendidas"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase text-primary"
            >
              <MapPin className="h-4 w-4" /> Ver áreas atendidas
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Perguntas frequentes</h2>
            <div className="mt-8">
              <FaqAccordion />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-y-4 border-primary bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Precisa de uma caçamba?</h2>
            <p className="mt-3 text-muted-foreground">
              Fale agora com a Potigua Caçamba pelo WhatsApp {SITE.phoneDisplay}.
            </p>
            <WhatsAppLink className="mt-6">Solicitar caçamba agora</WhatsAppLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
