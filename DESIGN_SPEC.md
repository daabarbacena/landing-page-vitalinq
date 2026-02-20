# VitalinQ — Landing Page Design Spec (React)

## Objetivo
Criar uma landing page **moderna**, com UX/UI inspirado em:
- Layout clean + tipografia forte + chips/pills + cards suaves (referências enviadas)
- “Elemento hero destacado à direita” (organismo/célula/nanomedicina)
- Foco em **conversão + confiança + performance**

O site é sobre **Assessoria na Importação de Medicamentos**, com estética de **nanomedicina/nanolab** (alto padrão, médico-profissional). :contentReference[oaicite:1]{index=1}


---

## Stack (React-first, performance-first)
- **React + TypeScript**
- Build: **Vite**
- CSS: **TailwindCSS**
- UI primitives (leve): **Radix UI** (somente quando necessário)
- Components: **shadcn/ui** (copiados localmente, sem dependência pesada)
- Animations: **Framer Motion** (apenas para microinterações e entrada suave)
- Icons: **lucide-react** (consistência)
- Charts: NÃO usar (landing)
- 3D: **NÃO usar** por padrão (Three/Spline só se aprovado e com fallback)

Regra: **mínimo JS**, nada de carrossel pesado, nada de libs de animação complexas sem justificativa.


---

## Direção visual (inspirada nas referências)
### Layout geral
- Grid 12 col, max-width ~ 1120–1200px
- Muito espaço em branco (respiração)
- Seções com headers curtos e “subtexto médico”
- Componentes com radius 16–24px
- Shadows suaves (nada “pesado”)
- Chips/pills para navegação e categorias

### Hero obrigatório (assinatura visual)
- À esquerda: headline grande + subtexto + 1 CTA primário + 1 CTA secundário (pílula).
- À direita: **Hero Organism** (célula/nano) grande, destacando a marca.

**Hero Organism (implementação recomendada)**
- Formato: **SVG** (preferível) ou WebP leve
- Camadas:
  1) Blob principal com gradient suave (roxo -> azul -> rosa)
  2) Membrana / outline com opacidade baixa
  3) Micro partículas (dots) e “scan lines” discretas
  4) Glow por trás (div com blur via CSS)
- Animação: apenas `transform` (float lento) + leve parallax no mouse opcional (respeitar `prefers-reduced-motion`)

Proibido: GIF pesado. Se for vídeo, só WebM/MP4 curto com autoplay muted + poster + fallback.


---

## Cores (tokens)
- Primary: **#7047eb** :contentReference[oaicite:2]{index=2}
- Background: **#ffffff**
- Text: **#191919**
- Muted text: rgba(25,25,25,0.65)
- Borders: rgba(25,25,25,0.10)
- Surface: rgba(255,255,255,0.75) (cards com leve transparência opcional)
- Accent gradients (para organism apenas): roxo/azul/rosa em baixa saturação

Regra: gradiente só em pontos estratégicos (organism, pequenos highlights). Nada “neon”.


---

## Tipografia (fora da caixa, sem Inter padrão)
Regras:
- Usar **2 fontes** no máximo.
- Headline: fonte display forte (ex: *Space Grotesk* ou *DM Sans* + variação pesada, ou uma display mais marcante se aprovada)
- Destaque/assinatura (uma palavra no headline pode ser serif/italics como referência Whenerv): ex: *Fraunces* (itálico) ou equivalente.

Implementação:
- Definir scale: 12 / 14 / 16 / 20 / 28 / 40 / 56
- Line-height confortável (não esmagado)
- Tracking leve nos headlines


---

## Componentes e padrões de UI
### Botões
- Primary: preenchido #7047eb, texto branco, radius pill
- Secondary: outline (border suave), fundo branco, hover com leve tint
- Tamanho confortável (min-height 44px)

### Chips/pills
- Navegação e filtros: pill com border suave, hover discreto
- Active state bem claro (bg leve + texto forte)

### Cards
- Card base: surface + shadow suave + border sutil
- Ícone pequeno + título curto + 1–2 linhas de descrição
- Sem “bordas pesadas” e sem excesso de divisórias

### Microinterações
- Transições 150–250ms
- Motion sutil, sempre respeitando `prefers-reduced-motion`


---

## Seções do site (ordem e conteúdo)
### 1) Hero
Título (base):
**Importe seu medicamento de forma segura, simples e rápida** :contentReference[oaicite:3]{index=3}

Subtexto:
Assessoria especializada na importação de medicamentos para Médicos, Pacientes, Clínicas, Farmácias e Hospitais. Cuidamos de todo o processo para você. :contentReference[oaicite:4]{index=4}

CTAs:
- Primário: **Falar com um especialista**
- Secundário: **Ver como funciona** :contentReference[oaicite:5]{index=5}

Elemento extra:
- Select no hero (default), preparado para conectar no futuro a Admin/API (sem lógica complexa agora)

### 2) “Por que escolher a VitalinQ?”
3 colunas: Seguro / Simples / Rápido com bullets :contentReference[oaicite:6]{index=6}

### 3) “5 etapas orientadas”
Timeline premium (chips numerados + card por etapa) :contentReference[oaicite:7]{index=7}

### 4) Confiança (Quem somos + números)
Texto institucional + cards de métricas (6 cards máx) :contentReference[oaicite:8]{index=8}

### 5) Referências globais (logos)
Aviso de não afiliação + grid de logos (SVGs leves) :contentReference[oaicite:9]{index=9}

### 6) Áreas terapêuticas
Grid de categorias (cards) :contentReference[oaicite:10]{index=10}

### 7) Segurança/Compliance (4 cards)
- 📋 Documentação orientada
- ✅ Conformidade regulatória
- 📍 Rastreabilidade e transparência
- 🔒 Privacidade e cuidado com dados :contentReference[oaicite:11]{index=11}

### 8) CTA final + Contato
- WhatsApp / Telefone: +1 (302) 465-7818
- E-mail: contact@thevitalinq.com :contentReference[oaicite:12]{index=12}

Footer minimalista (links essenciais + política/termos se existirem).


---

## Performance e SEO (critério de aceitação)
- Lighthouse alvo: **90+ Performance / 90+ SEO**
- Sem imagens pesadas por padrão
- `prefers-reduced-motion` implementado
- `loading="lazy"` em imagens fora do hero
- Hero organism com fallback estático
- Sem carrossel animado infinito (evitar)
- Sem dependências grandes sem justificativa

SEO:
- 1 H1 único
- Titles/Descriptions por página
- Estrutura semântica correta (section, header, nav)
- Conteúdo legível e escaneável


---

## Página interna: “VitalinQ Canabidiol”
Manter como página separada, estilo consistente (mesmos tokens/components), mas com leitura longa (post).
Evitar blocos gigantes: usar sumário (“Veja nessa postagem”), headings, e espaçamento generoso. :contentReference[oaicite:13]{index=13}


---

## Regras para o agente (VS Code)
Antes de codar qualquer seção:
1) Propor estrutura (wireframe)
2) Propor tokens/classes
3) Implementar componente reutilizável
4) Validar checklist

Checklist obrigatório no final de cada entrega:
- Hierarquia clara + CTA único por seção
- Espaçamento suficiente (nada apertado)
- Estados hover/focus acessíveis
- Responsivo mobile-first
- JS mínimo
- Assets leves (SVG quando possível)