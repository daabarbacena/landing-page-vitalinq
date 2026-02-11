/**
 * Modelo de opção para o select de triagem.
 *
 * Futuramente, os dados virão de uma API/Admin em tempo real.
 * Por enquanto, usamos valores hardcoded como placeholder.
 */
export interface TriagemOption {
  /** Texto exibido para o paciente */
  label: string;
  /** Valor interno enviado ao backend */
  value: string;
  /** Se a opção está disponível no momento (controlado pela equipe) */
  active?: boolean;
  /** Ordem de exibição definida pelo admin */
  order?: number;
}

/** Opções padrão — serão substituídas por dados da API */
export const DEFAULT_TRIAGEM_OPTIONS: TriagemOption[] = [
  { label: "Saúde Geral e Bem-Estar", value: "saude-geral", active: true, order: 1 },
  { label: "Acompanhamento Nutricional", value: "acompanhamento-nutricional", active: true, order: 2 },
  { label: "Saúde Mental e Qualidade de Vida", value: "saude-mental", active: true, order: 3 },
  { label: "Condições Crônicas", value: "condicoes-cronicas", active: true, order: 4 },
  { label: "Check-up Preventivo", value: "checkup-preventivo", active: true, order: 5 },
];

/**
 * Opções específicas para o hero — medicamentos.
 * TODO: Substituir por dados da API/Admin em tempo real conforme disponibilidade e regulamentação.
 */
export const MEDICAMENTOS_TRIAGEM_OPTIONS: TriagemOption[] = [
  { label: "Medicamentos de alto custo", value: "alto-custo", active: true, order: 1 },
  { label: "Doenças raras / órfãos", value: "doencas-raras", active: true, order: 2 },
  { label: "Oncologia", value: "oncologia", active: true, order: 3 },
  { label: "Imunobiológicos", value: "imunobiologicos", active: true, order: 4 },
  { label: "Outros / Não sei informar", value: "outros", active: true, order: 5 },
];
