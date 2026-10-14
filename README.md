# Ellus Academia — React + Vite + Tailwind CSS v4

Projeto moderno, escalável e de nível profissional da **Ellus Academia** (Vila Granada, Mairinque - SP), migrado para **React + TypeScript + Vite + Tailwind CSS v4**.

---

## 🏗️ Estrutura de Pastas de Produção

```text
ellus-academia/
├── public/                     # Mídia estática e manifestos públicos
│   └── assets/
│       ├── img/academia.jpg
│       └── video/treino-peck-deck.mp4
├── src/
│   ├── assets/                 # Mídia importada nos componentes
│   │   ├── img/academia.jpg
│   │   └── video/treino-peck-deck.mp4
│   ├── components/
│   │   ├── ui/                 # Componentes atômicos e reutilizáveis
│   │   │   ├── Button.tsx      # Botão tátil com variantes (primary red, secondary metallic)
│   │   │   ├── Badge.tsx       # Badges com indicador de pulso
│   │   │   ├── Card.tsx        # Card escuro com elevação e hover
│   │   │   └── InstagramIcon.tsx
│   │   └── sections/           # Seções completas da Landing Page
│   │       ├── Navbar.tsx      # Header fixo com drawer mobile acessível
│   │       ├── Hero.tsx        # Hero cinematográfico com vídeo em loop e controle Play/Pause
│   │       ├── About.tsx       # A Academia (Posicionamento humano vs. redes impessoais)
│   │       ├── Metodologia.tsx # Biomecânica, técnica e constância
│   │       ├── Diferenciais.tsx# Lista assimétrica numerada 01 a 04
│   │       ├── Objetivos.tsx   # Grid de objetivos atléticos
│   │       ├── Espaco.tsx      # Estrutura real com checklist de equipamentos
│   │       ├── Contato.tsx     # Endereço, cópia em 1 clique e Google Maps
│   │       ├── FinalCTA.tsx    # Seção de conversão com glow e WhatsApp
│   │       ├── Footer.tsx      # Rodapé institucional semântico
│   │       └── FloatingWhatsApp.tsx # Botão flutuante de alta conversão
│   ├── constants/              # Textos, links e dados oficiais imutáveis
│   │   └── index.ts
│   ├── App.tsx                 # Composição principal
│   ├── index.css               # Configuração do Tailwind CSS v4 (@theme)
│   └── main.tsx                # Ponto de entrada React
├── index.html                  # HTML com metadados, Schema.org e fontes
├── vite.config.ts              # Configuração do Vite com @tailwindcss/vite
├── tsconfig.json               # Configuração TypeScript
└── package.json
```

---

## 🎨 Sistema de Cores e Tipografia (Tailwind CSS v4)

Configurado via diretiva `@theme` em `src/index.css`:
- **Dark Theme Profundo**: `#0A0A0A` (base) e `#121212` (superfícies)
- **Cinzas Metálicos**: `#1A1A1A`, `#262626`, `#404040`
- **Vermelho Ellus**: `#E50914` e `#DC2626` (CTAs, destaques e foco)
- **Tipografia**:
  - Títulos: `Plus Jakarta Sans` / `Syne`
  - Leitura: `Inter`

---

## ⚡ Scripts Disponíveis

```bash
# Executar em modo de desenvolvimento (HMR ultra rápido):
npm run dev

# Compilar para produção (TypeScript check + Vite bundle):
npm run build

# Pré-visualizar a build de produção:
npm run preview
```

---

## 📍 Dados Comerciais Oficiais Preservados

- **Estabelecimento**: Ellus Academia
- **Endereço**: Rua João Antônio Ramos, 90 — Vila Granada, Mairinque - SP, CEP 18120-000
- **WhatsApp**: (11) 95185-7532 (`https://wa.me/5511951857532`)
- **Instagram**: @ellus.academia
- **Horário**: Segunda a Sexta até às 21h30 (sábados e feriados sob consulta)
