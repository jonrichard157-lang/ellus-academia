---
name: frontend-design
description: Guidelines and patterns for crafting production-grade frontend interfaces with authentic art direction, avoiding generic AI templates, stock aesthetic cliches, and inconsistent layouts.
---

# Frontend Design — Anti-AI & Production Standard

Skill especializada em arquitetura de interfaces, estética autêntica e engenharia visual de ponta.

## 1. Eliminação Deliberada de Padrões "Vibecoding" e IA Genérica

- **Proibido**: Hero sections com fórmula "texto à esquerda + card flutuante à direita".
- **Proibido**: Gradientes lineares roxo/azul padrão de IA sem alinhamento com a identidade de marca.
- **Proibido**: Cantos arredondados excessivos (estilo "bubble" ou pílulas universais).
- **Proibido**: Sombras gigantescas e borradas (`shadow-2xl`) como substituto de bom contraste estrutural.
- **Proibido**: Textos genéricos inflados como *"Eleve sua melhor versão"*, *"Transforme seu potencial"*.
- **Substituir por**:
  - Bordas arquiteturais de 1px (`border-neutral-800`), contraste cirúrgico e divisões geométricas.
  - Tipografia de impacto com display fonts autoritárias e tracking deliberado.
  - Composição assimétrica em Bento Grid com hierarquia clara entre card principal e métricas secundárias.

## 2. Princípios de Espaçamento e Ritmo

- Utilize escalas de espaçamento consistentes baseadas em múltiplos de 4/8 (`p-4`, `p-6`, `p-8`, `p-12`).
- Respeite o respiro visual (*whitespace*) em telas desktop (seções com `py-24` a `py-32`).
- Alvos de toque estritamente maiores ou iguais a 44x44px em dispositivos móveis.

## 3. Microinterações e Estados Interativos

- Toda ação do usuário deve ter feedback visual imediato.
- Efeitos de brilho tátil suave (*sheen hover*) sobre botões com corte angular ou chanfrado.
- Redução de escala proporcional no clique (`active:scale-[0.98]`).
- Ícones vetoriais com traço fino (`strokeWidth={1.5}`) para conferir elegância editorial.

