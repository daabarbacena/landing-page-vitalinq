# HERO_INSTRUCTIONS.md — VitalinQ Landing Hero

## 0. Objetivo do Hero

Criar uma seção Hero premium, moderna e minimalista inspirada nas referências fornecidas:

- Layout dividido em 2 colunas (texto à esquerda, elemento visual destacado à direita).
- Muito espaço em branco.
- Tipografia forte e limpa.
- Chips/pills sutis.
- CTA primário claro.
- Elemento 3D (comprimido VitalinQ) como destaque visual.

O hero deve transmitir:

- Sofisticação médica
- Tecnologia avançada
- Nanomedicina
- Segurança e confiança

Luxo visual = movimento sutil, iluminação limpa, nada exagerado.

---

## 1. Asset do Hero (Imagem do Comprimido)

### Especificações atuais:

- Formato: PNG
- Peso: 147 KB
- Resolução: 1168 x 784
- DPI: 96
- Profundidade: 24 bits
- Fundo: branco com leve gradiente
- Local atual: `/images`

### Decisão estratégica:

- NÃO remover o fundo.
- NÃO usar branco puro no hero.
- Integrar o fundo do hero ao fundo do render.
- Controlar profundidade via CSS, não via edição destrutiva.

---

## 2. Organização de Pastas (Obrigatório)

Mover o arquivo da pasta `/images` para estrutura profissional:


src/
assets/
images/
hero/
vitalinq-pill.png


Justificativa:
- Centralizar assets.
- Evitar uso direto da pasta root.
- Facilitar otimização futura.
- Escalável para múltiplos heroes.

---


## 3. Background do Hero (Obrigatório)

NÃO usar `#ffffff` puro.

Usar fundo off-white com profundidade:

```css
background: linear-gradient(
  to bottom,
  #f6f7f9,
  #f1f2f4
);


```

Adicionar profundidade controlada:

radial-gradient(
  1200px circle at 70% 50%,
  rgba(112,71,235,0.06),
  transparent 60%
);

Objetivo

Integrar com o render

Evitar efeito de “PNG colado”

Criar sensação de ambiente premium

4. Estrutura Layout Hero
Grid obrigatório
Desktop
[ Texto ] [ Comprimido ]
Mobile
[ Texto ]
[ Comprimido ]
Espaçamento

Max-width: ~1200px

Padding vertical generoso

Gap grande entre colunas (não apertado)

5. Regras Visuais do Elemento

O comprimido é o protagonista.

Não exagerar overlays.

Não adicionar partículas.

Não adicionar animações chamativas.

Movimento deve ser sutil (se houver).

Evitar ruído visual.

Se animar via React

Micro flutuação vertical (2–4px)

Escala breathing máxima 1 → 1.015

Duração longa (6–10s)

Easing suave

Respeitar prefers-reduced-motion

Luxo é quase imóvel.

6. Performance

O asset atual (147 KB) está excelente.

Regras obrigatórias

Não converter para WebP se houver perda perceptível.

Manter resolução original (1168x784 é suficiente).

Não usar filtros pesados (blur gigante).

Não usar canvas/WebGL.

Não usar animação pesada.

Largest Contentful Paint deve permanecer baixo.

7. Tipografia do Hero

Headline forte, moderna.

Subheadline médico-profissional.

1 CTA primário.

1 CTA secundário opcional.

Chips discretos no topo.

Nada excessivo.
Nada chamativo demais.

8. Microinterações
Permitido

Hover leve no botão

Leve elevação (1px)

Sombra sutil

Proibido

Bounce

Scale exagerado

Motion rápida

Efeitos “tech demo”

9. Checklist Final Obrigatório

Antes de considerar o Hero finalizado:

 Fundo não é branco puro.

 O comprimido parece integrado ao layout.

 Não há sensação de PNG colado.

 Movimento é sutil e elegante.

 Sem ruído visual.

 Espaçamento generoso.

 CTA claramente visível.

 Performance mantida.

 Responsivo correto.

 Visual transmite confiança médica premium.

10. Filosofia de Direção Visual
Este hero NÃO deve parecer

Landing genérica de IA.

Demo 3D.

Página tecnológica exagerada.

Startup cyberpunk.

Deve parecer

Marca médica premium

Tecnologia confiável

Sofisticação silenciosa

Minimalismo de alto padrão

Menos é mais.