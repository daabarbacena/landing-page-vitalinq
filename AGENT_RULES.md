# AGENT_RULES.md — VitalinQ Landing (React)

## 0) Fonte de verdade
- Você DEVE seguir estritamente o `DESIGN_SPEC.md`.
- Se houver conflito entre sua sugestão e `DESIGN_SPEC.md`, vença o `DESIGN_SPEC.md`.
- Não invente seções, não mude ordem de seções, não mude tom de copy.

## 1) Objetivos inegociáveis
1) Aparência: moderna/premium, inspirada nas referências (hero limpo + tipografia forte + chips/pills + cards suaves).
2) Conversão: sempre 1 CTA primário por seção, com copy direta.
3) Performance: mínimo JS. Nada pesado (carrosséis, libs grandes, WebGL/Three por padrão).
4) Acessibilidade: foco visível, contraste AA, navegação por teclado.
5) Responsivo: mobile-first real.

## 2) Processo obrigatório (duas passadas)
Para qualquer entrega (seção/componente):
- Passada A (Wireframe): estrutura + grid + hierarquia + componentes envolvidos.
- Passada B (Polish): spacing/tipografia/estados/anim/microinterações e ajustes responsivos.
- Sempre finalizar com um checklist (ver seção 8).

## 3) Restrições técnicas
- Stack: React + TypeScript + Vite + Tailwind.
- Componentes: preferir HTML semântico + Tailwind.
- Se precisar de primitives: Radix/shadcn SOMENTE quando necessário.
- Animações: apenas microinterações; respeitar `prefers-reduced-motion`.
- Proibido: Three.js / react-three-fiber / Spline / Lottie pesado / carrossel infinito.
- Imagens: preferir SVG; se raster, usar WebP/AVIF. Sempre com width/height.
- Nunca adicionar dependências sem justificar o impacto no bundle e no Lighthouse.

## 4) Padrões de UI que você deve aplicar
- Espaçamento generoso; evitar “apertado”.
- Cards: shadow suave + border sutil + radius 16–24.
- Chips/pills: border leve + hover discreto + estado ativo claro.
- Botões: primário em #7047eb; secundário outline.
- Tipografia: headlines grandes; subtexto médico-profissional, legível e escaneável.
- Ícones: lucide-react, tamanho consistente.

## 5) SEO e semântica
- Um H1 único.
- Uso correto de header/nav/main/section/footer.
- Titles/descriptions adequados.
- Evitar divitis; usar headings (h2/h3) por seção.

## 6) Hero Organism (obrigatório)
- O hero DEVE ter um elemento visual destacado à direita chamado “Hero Organism”.
- Implementação padrão: **WebM loop** (3D look premium) + fallback (SVG/PNG/WebP).
- Deve respeitar `prefers-reduced-motion`:
  - Se reduce: mostrar fallback estático (sem vídeo).
- Deve ter layout estável (nada de layout shift).
- O hero não pode travar: nada de runtime 3D no browser.

## 7) Entregáveis e organização
- Componentizar por seção: `src/sections/*`.
- Componentes básicos em `src/components/*`.
- Assets em `src/assets/*` (ou `public/*` quando fizer sentido).
- Cada seção deve ser “plugável” e não depender de estado global.

## 8) Checklist obrigatório (sempre no final da resposta do agente)
O agente deve validar e declarar:
- [ ] Hierarquia visual clara (H1, H2, CTAs).
- [ ] 1 CTA primário por seção.
- [ ] Espaçamento confortável; nada apertado.
- [ ] Estados hover/focus OK; teclado OK.
- [ ] Mobile-first OK; sem quebras.
- [ ] JS mínimo; sem libs extras sem justificativa.
- [ ] Imagens/vídeo com dimensões definidas; sem CLS.
- [ ] `prefers-reduced-motion` respeitado.
- [ ] Hero Organism presente à direita com fallback.
- [ ] Performance: sem animações pesadas; sem loops agressivos.

## 9) Se faltar informação
- Se você não tiver dados, NÃO invente fatos.
- Faça suposições mínimas e declare o que assumiu.
- Priorize uma implementação segura/performance-first.