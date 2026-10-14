---
name: react-best-practices
description: Production-ready React guidelines, clean component architecture, optimal bundle size, hooks best practices, and zero unnecessary dependencies.
---

# React Best Practices — Production Standards

Diretrizes para arquitetura modular, escalável e performática em React 19 + TypeScript + Vite.

## 1. Estrutura e Separação de Responsabilidades

- **UI Components (`src/components/ui/`)**:
  - Componentes agnósticos de domínio de negócio (Botões, Badges, Cards, Modais).
  - Comportamento parametrizável via props tipadas com TypeScript.
- **Section Components (`src/components/sections/`)**:
  - Composição de blocos semânticos da landing page.
  - Consumo de dados centralizados vindos de `src/constants/`.
- **Constants (`src/constants/`)**:
  - Única fonte da verdade para links externos, números de telefone, horários e textos institucionais.
  - Nenhuma string mágica solta espalhada pelo JSX.

## 2. Otimização de Performance e Renderização

- **Scroll Suave**: Integração do Lenis com `requestAnimationFrame` gerenciado em hook React (`useEffect` com cleanup).
- **Animações Fluidas**: Uso de `framer-motion` com `useReducedMotion` para respeitar as preferências do usuário.
- **Carrosséis Performáticos**: Uso de `embla-carousel-react` sem dependências desnecessárias ou inchaço no DOM.
- **Lazy Loading**: Imagens e iframes com `loading="lazy"` e decoding assíncrono.
- **Tree-shaking**: Importações seletivas para evitar bundle bloating.

