---
name: ui-ux-pro-max
description: Advanced design system, WCAG 2.2 accessibility, deep dark industrial fitness art direction, high-contrast typography, and premium user experience standards.
---

# UI/UX Pro Max — Dark Industrial & Fitness Art Direction

Diretrizes para produtos e interfaces digitais de alta performance com design escuro, imersivo e comercialmente eficiente.

## 1. Sistema Cromático para Fitness Premium

- **Base de Fundo**:
  - Deep Canvas: `#0A0A0A` (elimina o cinza desbotado de telas OLED).
  - Superfície Elevada: `#121212` e `#171717`.
  - Bordas de Contraste Fino: `#262626` e `#404040` (1px).
- **Cor de Destaque e Ação (CTA)**:
  - Vermelho Oficial: `#E50914` e `#DC2626`.
  - Sombras com tom de cor (*colored glows* sutis): `rgba(229, 9, 20, 0.25)`.
- **Sinalização em Tempo Real**:
  - Verde Esmeralda (*Live Status*): `#10B981` com pulso de radar para "Academia Aberta".

## 2. Acessibilidade WCAG 2.2 AA / AAA

- **Contraste de Texto**: Mínimo de 4.5:1 para corpo de texto e 3:1 para títulos grandes.
- **Foco por Teclado**: Todo elemento interativo deve possuir `:focus-visible` com anel visível e offset.
- **Leitores de Tela (A11y)**:
  - Imagens com `alt` descritivo e contextual.
  - Vídeos com legendas ou rótulos ARIA adequados.
  - Botões de alternância com `aria-pressed` e `aria-expanded`.
- **Sensibilidade a Movimento**:
  - Respeitar obrigatoriamente `@media (prefers-reduced-motion: reduce)`.
  - Substituir animações de deslocamento por transições de opacidade instantâneas ou nulas.

## 3. Direção Tipográfica

- **Títulos (Display)**: `Plus Jakarta Sans` ou `Syne` com pesos 700 a 900, `leading-[0.95]` a `leading-[1.1]`.
- **Leitura Contínua**: `Inter` nos pesos 400 a 600, `line-height: 1.6`.

