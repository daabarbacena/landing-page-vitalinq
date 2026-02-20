# HERO_COMPONENT_SPEC.md — VitalinQ (React)

## Objetivo
Implementar um Hero premium com:
- Texto à esquerda (headline + sub + chips + CTAs)
- Elemento visual à direita (PNG do comprimido, com fundo preservado)
- Background off-white com profundidade
- Performance alto (mínimo JS, sem WebGL)

## Stack e Restrições
- React + TypeScript + TailwindCSS
- Lucide icons permitido
- Framer Motion permitido apenas para microinteração do Hero (1–2 wrappers)
- Proibido: canvas/WebGL/Three, carrossel, animação pesada, blur gigante animado

## Assets
- PNG do comprimido: `src/assets/images/hero/vitalinq-pill.png`
- (Opcional) ruído leve: `src/assets/images/ui/noise.png` (pequeno, repetível)

## Estrutura de pastas (obrigatório)
- `src/sections/Hero/HeroSection.tsx`
- `src/sections/Hero/HeroMedia.tsx`
- `src/sections/Hero/HeroCopy.tsx`
- `src/sections/Hero/index.ts`
- `src/hooks/usePrefersReducedMotion.ts` (se animar)
- `src/styles/hero.css` (opcional para scanlines/noise)

## API dos componentes

### HeroSection.tsx
Responsável por:
- Background
- Grid principal
- Montar `<HeroCopy />` e `<HeroMedia />`

Assinatura:
```ts
export function HeroSection(): JSX.Element

```

HeroCopy.tsx

Responsável por:

Chips/pills

Headline (H1 único)

Parágrafo

CTA primário e secundário

Linha de confiança (3 bullets)

Assinatura:

export function HeroCopy(): JSX.Element
HeroMedia.tsx

Responsável por:

Container do PNG

“Glass plate” opcional atrás

Overlay opcional (scanlines) muito sutil

Card flutuante opcional (desktop only)

Barra inferior com chip + CTA pequeno

Assinatura:

export function HeroMedia(): JSX.Element
Layout obrigatório
Grid

Desktop: 2 colunas (texto | media)

Mobile: empilha (texto em cima, media abaixo)

Gap grande (não apertado)

Dimensões do Media

Wrapper com altura fixa responsiva (evitar CLS):

Mobile: ~420px

Desktop: ~520px

Imagem: object-cover, bordas arredondadas (radius 24–32)

Background obrigatório (não branco puro)

Aplicar no Hero:

Base: linear-gradient(to bottom, #f6f7f9, #f1f2f4)

Glow direito sutil:

radial-gradient(closest-side, rgba(112,71,235,0.12), transparent 70%)

Glow esquerdo sutil (azul):

radial-gradient(closest-side, rgba(60,110,255,0.08), transparent 70%)

Conteúdo mínimo

Chips: 2–3

H1 grande e direto (tom médico-profissional)

Parágrafo curto (2 linhas em desktop)

CTA primário + CTA secundário

Trust row: 3 itens

Autonomia de design (permitido ao Copilot)

O Copilot pode decidir:

Espaçamentos finos (mt/mb/padding)

Tamanhos exatos de fonte por breakpoint

Se mantém ou remove card flutuante

Se usa scanlines/noise (sutil)

Ajustar copy micro (sem mudar significado)

Mas não pode:

Alterar a ordem das seções do site

Adicionar efeitos pesados

Criar animações chamativas

Trocar o fundo por branco puro

Critérios de aceitação (mínimo)

H1 único

Sem CLS perceptível

Visual premium e limpo

Performance: sem travar, sem libs extras