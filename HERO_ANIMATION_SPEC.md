# HERO_ANIMATION_SPEC.md — Framer Motion (calibrado e leve)

## Objetivo
Dar vida ao Hero com microanimações premium sem custo alto.

Regras:
- Luxo = lento
- Animação deve ser quase imperceptível
- Respeitar `prefers-reduced-motion`
- Sem loops chamativos
- Sem blur animado gigante

---

## A) Valores calibrados (matemáticos)
### 1) Floating do media (sutil)
- Eixo Y: 0 → -4 → 0 (px)
- Duração: 8s
- Easing: `easeInOut`
- Loop: infinito (mirror)

### 2) Breathing (quase imperceptível)
- Scale: 1.000 → 1.015 → 1.000
- Duração: 10s
- Easing: `easeInOut`
- Loop: infinito (mirror)

### 3) Parallax (opcional, barato)
Se implementar, limitar:
- translateX: -6px a +6px
- translateY: -6px a +6px
- somente em desktop
- desliga em reduced motion

### 4) Entrada do Hero (apenas uma vez)
- Opacity: 0 → 1
- Y: 12px → 0
- Duração: 0.6s
- Delay: 0.05–0.15s
- Easing: `easeOut`

---

## B) Implementação padrão sugerida
O Copilot tem autonomia para implementar, mas deve seguir as regras abaixo.

### Hook de reduced motion
Obrigatório usar:
- `useReducedMotion()` do framer-motion OU hook próprio

### Onde aplicar motion
- 1 wrapper no container do Hero (entrada)
- 1 wrapper no media (floating + breathing)
Evitar animar muitos elementos ao mesmo tempo.

---

## C) Snippet (referência para o Copilot)
> O Copilot pode adaptar o design, mas deve manter estes limites.

```tsx
import { motion, useReducedMotion } from "framer-motion";

export function HeroMedia() {
  const reduce = useReducedMotion();

  const floatAnim = reduce
    ? {}
    : {
        y: [0, -4, 0],
        transition: { duration: 8, ease: "easeInOut", repeat: Infinity },
      };

  const breatheAnim = reduce
    ? {}
    : {
        scale: [1, 1.015, 1],
        transition: { duration: 10, ease: "easeInOut", repeat: Infinity },
      };

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative"
    >
      <motion.div style={{ willChange: reduce ? "auto" : "transform" }} animate={reduce ? {} : floatAnim}>
        <motion.div animate={reduce ? {} : breatheAnim}>
          {/* PNG container aqui */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}