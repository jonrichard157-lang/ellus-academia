export interface GymData {
  name: string;
  shortName: string;
  tagline: string;
  phone: string;
  whatsappFormatted: string;
  whatsappRaw: string;
  instagram: string;
  instagramUrl: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    full: string;
  };
  hours: {
    weekdays: string;
    weekdaysNote: string;
    weekendNote: string;
  };
  maps: {
    directionsUrl: string;
    embedUrl: string;
  };
}

export const GYM_DATA: GymData = {
  name: 'Ellus Academia',
  shortName: 'Ellus',
  tagline: 'Saúde & Reabilitação — Treinos personalizados e acompanhamento de perto que respeitam seu ritmo na Vila Granada.',
  phone: '(11) 95185-7532',
  whatsappFormatted: '(11) 95185-7532',
  whatsappRaw: '5511951857532',
  instagram: '@ellus.academia',
  instagramUrl: 'https://www.instagram.com/ellus.academia',
  address: {
    street: 'Rua João Antônio Ramos, 90',
    neighborhood: 'Vila Granada',
    city: 'Mairinque',
    state: 'SP',
    zipCode: '18120-000',
    full: 'Rua João Antônio Ramos, 90 — Vila Granada, Mairinque - SP, CEP 18120-000',
  },
  hours: {
    weekdays: 'Segunda a Sexta: aberta até às 21h30',
    weekdaysNote: 'Aberta até às 21h30',
    weekendNote: 'Consulte horários de sábado e feriados pelo WhatsApp',
  },
  maps: {
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Rua+Jo%C3%A3o+Ant%C3%B4nio+Ramos%2C+90%2C+Vila+Granada%2C+Mairinque+-+SP%2C+18120-000',
    embedUrl: 'https://maps.google.com/maps?q=Rua+Jo%C3%A3o+Ant%C3%B4nio+Ramos,+90,+Vila+Granada,+Mairinque+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
};

export const WA_MESSAGES = {
  'hero-primary': 'Olá! Gostaria de conhecer a Ellus Academia e saber como começar meus treinos na Vila Granada.',
  header: 'Olá! Gostaria de saber mais sobre a Ellus Academia e os horários de treino.',
  'mobile-drawer': 'Olá! Gostaria de falar com a equipe da Ellus Academia sobre treinos.',
  diferenciais: 'Olá! Gostaria de entender melhor como funciona o acompanhamento de treinos na Ellus.',
  visita: 'Olá! Gostaria de agendar uma visita para conhecer o espaço da Ellus Academia na Vila Granada.',
  'contato-link': 'Olá! Gostaria de conversar com a equipe da Ellus Academia.',
  'final-cta': 'Olá! Gostaria de dar o primeiro passo e começar a treinar na Ellus Academia.',
  'floating-btn': 'Olá! Estava navegando no site da Ellus e gostaria de mais informações.',
  default: 'Olá! Gostaria de mais informações sobre a Ellus Academia em Mairinque.',
} as const;

export type WhatsAppIntent = keyof typeof WA_MESSAGES;

export function getWhatsAppLink(intent: WhatsAppIntent = 'default'): string {
  const message = WA_MESSAGES[intent] || WA_MESSAGES.default;
  return `https://wa.me/${GYM_DATA.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'A Academia', href: '#academia' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Objetivos', href: '#objetivos' },
  { label: 'Espaço', href: '#espaco' },
  { label: 'Contato', href: '#contato' },
] as const;

export const HERO_FEATURES = [
  {
    label: 'Acompanhamento de Perto',
    description: 'Instrutores presentes no salão para orientar suas séries',
  },
  {
    label: 'Biomecânica & Postura',
    description: 'Atenção à execução certa para proteger suas articulações',
  },
  {
    label: 'Treino no Seu Ritmo',
    description: 'Adaptação real para quem está começando ou retornando',
  },
  {
    label: 'Estrutura Completa',
    description: 'Pesos livres, máquinas articuladas e espaço focado',
  },
] as const;

export const BIOMECHANICS_CARDS = [
  {
    number: '01',
    title: 'Ajuste Biomecânico Individual',
    description:
      'Cada pessoa tem braços de alavanca, flexibilidade e histórico articular distintos. Ajustamos os bancos, pegadas e amplitude para que o movimento atinja exatamente a musculatura alvo sem sobrecarregar ombros, coluna ou joelhos.',
    tag: 'Exemplo: Análise do Peck Deck / Voador',
  },
  {
    number: '02',
    title: 'Sobrecarga Progressiva com Técnica',
    description:
      'Aumentar o peso só é saudável quando a execução está sob controle total. Orientamos você a evoluir com cadência adequada, tempo sob tensão e consciência motora, gerando estímulos reais para ganho de força e tônus muscular.',
    tag: 'Evolução Segura e Constante',
  },
  {
    number: '03',
    title: 'Rotina que Cabe no Seu Dia a Dia',
    description:
      'O melhor treino do mundo é aquele que você consegue cumprir semana após semana. Criamos divisões de treino realistas para o tempo que você realmente tem disponível, sem planos mirabolantes que levam ao abandono.',
    tag: 'Constância Sustentável',
  },
] as const;

export const DIFFERENTIALS_LIST = [
  {
    number: '01',
    title: 'Instrutores Presentes no Salão',
    description:
      'Aqui você não precisa ficar acenando ou caçando alguém para tirar dúvidas. Nossos professores circulam pelo espaço, observam a postura e orientam suas séries de maneira atenta e natural.',
  },
  {
    number: '02',
    title: 'Treinos Adaptados ao Seu Momento',
    description:
      'Seja para dar os primeiros passos na academia, recuperar condicionamento após um período parado ou atingir metas mais específicas, o treino é planejado para o seu corpo e seu ritmo.',
  },
  {
    number: '03',
    title: 'Ambiente Focado e Acolhedor',
    description:
      'Sem tumulto, sem clima intimidador e sem filas intermináveis para usar um aparelho. Você chega, treina com concentração e aproveita seu tempo ao máximo.',
  },
  {
    number: '04',
    title: 'Fácil Acesso na Vila Granada',
    description:
      'Localização prática em Mairinque, facilitando manter a rotina de treinos antes ou depois do trabalho, sem precisar de grandes deslocamentos.',
  },
] as const;

export const GOALS_LIST = [
  {
    title: 'Hipertrofia & Definição',
    description:
      'Construção de massa magra com exercícios fundamentais, cadência adequada e recrutamento muscular eficiente.',
    tag: 'Ganho Muscular',
  },
  {
    title: 'Emagrecimento & Saúde',
    description:
      'Aceleração metabólica por meio da musculação, auxiliando na redução de gordura e manutenção da musculatura ativa.',
    tag: 'Gasto Calórico',
  },
  {
    title: 'Postura & Alívio de Dores',
    description:
      'Fortalecimento de paravertebrais, dorsais e core para quem passa horas sentado ou lida com desconfortos nas costas.',
    tag: 'Saúde Articular',
  },
  {
    title: 'Condicionamento & Vitalidade',
    description:
      'Mais energia e fôlego para sua rotina, melhorando o sono, a disposição diária e a saúde cardiovascular.',
    tag: 'Qualidade de Vida',
  },
] as const;

export const EQUIPMENT_CHECKLIST = [
  'Pesos livres, barras e anilhas',
  'Bancos reguláveis e articulados',
  'Aparelhos de tração e polias',
  'Piso emborrachado anti-impacto',
  'Halteres em diversas graduações',
  'Ambiente ventilado e iluminado',
] as const;

