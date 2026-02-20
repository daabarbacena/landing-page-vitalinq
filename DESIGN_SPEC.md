# DESIGN_SYSTEM.md — VitalinQ (Whenevr-Based)

## 0. Filosofia do Design

Este projeto NÃO é sobre estética chamativa.

É sobre:

- Clareza
- Espaçamento
- Hierarquia
- Confiança

Baseado em padrões de templates Framer minimalistas que priorizam tipografia, layout e whitespace para impacto máximo. :contentReference[oaicite:1]{index=1}  

### Regra principal

Menos elementos = mais qualidade percebida

---

## 1. Princípios Fundamentais

### 1.1 Espaçamento domina tudo

- Sempre priorizar espaço em vez de adicionar elementos
- Evitar layouts densos
- Se algo parecer “ok”, provavelmente precisa de mais espaço

### 1.2 Tipografia carrega o design

- Headline é o principal elemento visual
- Texto curto e escaneável
- Nunca usar blocos grandes de texto

### 1.3 Hierarquia agressiva

- H1 deve dominar a tela
- CTA deve ser óbvio
- Subtexto deve ser secundário

### 1.4 Simplicidade intencional

- Cada elemento precisa justificar sua existência
- Remover tudo que não contribui diretamente

---

## 2. Layout System

### Container

- Max-width: 1120px – 1200px
- Padding lateral: 24px
- Centralizado

### Grid

Desktop:
[ Conteúdo ] [ Destaque visual ]

Mobile:
[ Conteúdo ]
[ Destaque visual ]


### Espaçamento vertical

- Seções: 80px – 120px
- Blocos internos: 24px – 40px
- Elementos: 8px – 16px

---

## 3. Background System

### Nunca usar branco puro

Usar:

```css
background: linear-gradient(
  to bottom,
  #f6f7f9,
  #f1f2f4
);

```
Profundidade
```css
radial-gradient(
  1200px circle at 70% 50%,
  rgba(112,71,235,0.06),
  transparent 60%
);

```

### Objetivo

Integrar elementos

Evitar efeito “PNG colado”

Criar sensação de ambiente

4. Tipografia
Headline

Grande (48px – 64px)

Forte

Curta (máx 2–3 linhas)

Subheadline

16px – 18px

Máx 2 linhas

Linguagem simples e clara

Destaque

Uma palavra pode ter cor (#7047eb)

Nunca exagerar

5. Componentes
Botão primário

Fundo: #7047eb

Texto branco

Radius: full (pill)

Hover: leve elevação

Botão secundário

Outline leve

Fundo branco transparente

Sem competir com o primário

Chips / Pills

Pequenos

Border leve

Background semi-transparente

Máx 3 por seção

Cards

Radius: 16–24px

Border sutil

Shadow leve

Sem excesso de conteúdo

6. Hero System (CRÍTICO)
Estrutura

Esquerda: texto

Direita: comprimido (hero visual)

Regras

O comprimido é o foco visual

Texto não deve competir com ele

Fundo deve integrar com o PNG

Movimento

Micro apenas

Quase imperceptível

Valores:

Y: 0 → -4px

Scale: 1 → 1.015

Duração: 8–10s

Luxo = lento

7. Seções
Quem somos

Texto simples

Sem excesso de storytelling

2–3 blocos no máximo

Assessoria

Explicar processo

Estrutura linear (passos)

Clareza > design

Áreas

Grid simples

Ícones opcionais

Sem poluição visual

FAQ

Direto ao ponto

Sem texto longo

Fácil de escanear

Contato

CTA forte

Informações claras

Sem distrações

8. Motion System
Permitido

Hover leve

Fade-in suave

Micro floating

Proibido

Bounce

Scale exagerado

Parallax pesado

Animação rápida

9. Performance
Regras

Sem libs pesadas

Sem WebGL

Sem animações complexas

Imagens otimizadas

Meta

Lighthouse 90+

10. Erros Críticos (EVITAR)

Fundo branco puro

Layout apertado

Texto longo

Excesso de elementos

Animação chamativa

Cards demais

Falta de hierarquia

11. Checklist Final

 Layout respira

 Headline domina

 CTA claro

 Fundo com profundidade

 Hero integrado

 Sem excesso de elementos

 Responsivo limpo

 Performance alta

12. Regra final

Se estiver em dúvida:

Remova elementos.

Não adicione.

