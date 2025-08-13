# 🎮 Jogo da Velha - React

Um jogo da velha completo desenvolvido com React puro para teste técnico de Desenvolvedor Web Sênior.

## 📋 Sobre o Projeto

Jogo da velha interativo com temporizador, personalização de cores, sistema de partidas e recursos de acessibilidade. Desenvolvido seguindo as melhores práticas do React.

### Funcionalidades Principais

- ✅ **Jogo completo** - Tabuleiro 3x3 com detecção de vitória/empate
- ✅ **Temporizador** - 5 segundos por jogada com progress bar
- ✅ **Sistema de partidas** - Primeiro a 11 vitórias vence
- ✅ **Personalização** - Cores customizáveis em tempo real
- ✅ **Acessibilidade** - Screen reader, navegação por teclado, alto contraste
- ✅ **Responsivo** - Funciona em desktop, tablet e mobile

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Board.jsx       # Tabuleiro do jogo
│   ├── GameInfo.jsx    # Informações e temporizador
│   ├── Scoreboard.jsx  # Placar
│   ├── Square.jsx      # Quadrado individual
│   ├── ThemeCustomizer.jsx # Personalização
│   └── ...             # Outros componentes
├── hooks/              # Hooks personalizados
│   ├── useGameState.js # Lógica do jogo
│   ├── useGameTimer.js # Temporizador
│   ├── useGameTheme.js # Tema
│   └── ...             # Outros hooks
├── utils/              # Funções utilitárias
│   ├── gameLogic.js    # Lógica pura do jogo
│   └── themePresets.js # Presets de tema
└── styles/             # CSS organizado por componente
```

## 🎯 Decisões Técnicas

### Hooks Personalizados

Criei hooks especializados para separar responsabilidades:

- `useGameState` - Lógica central do jogo
- `useGameTimer` - Temporizador com pausa/retomada
- `useGameTheme` - Gerenciamento de tema
- `useGameAnimations` - Controle de animações
- `useGameAccessibility` - Recursos de acessibilidade

### Componentização

Componentes pequenos e focados:

- `GameTimer` - Temporizador com progress bar
- `AccessibilityControls` - Controles de acessibilidade
- `GameLayout` - Layout responsivo
- Cada componente tem uma responsabilidade específica

### Separação de Responsabilidades

- **Utils** - Lógica pura (gameLogic, themePresets)
- **Hooks** - Estado e efeitos colaterais
- **Componentes** - Renderização e interação

### Acessibilidade

Integrada desde o início, não como add-on:

- Anúncios automáticos para screen reader
- Navegação completa por teclado
- Suporte a alto contraste
- Respeita preferências do usuário

## 🚀 Como Executar

### Pré-requisitos

- Node.js 16+
- npm ou yarn

### Instalação

```bash
git clone git@github.com:lucasf5/tic-tac-toe.git
cd Tic-Tac-Toe
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173`

### Produção

```bash
npm run build
npm run preview
```

## 🎮 Como Jogar

1. **Início** - Jogo começa com X
2. **Temporizador** - 5 segundos por jogada
3. **Vitória** - Alinhe 3 símbolos
4. **Partida** - Primeiro a 11 vitórias
5. **Personalizar** - Clique em "🎨 Personalizar"

## 🎨 Funcionalidades

### Jogo

- Tabuleiro 3x3 interativo
- Temporizador com progress bar
- Detecção automática de vitória/empate
- Jogada automática quando o tempo acaba

### Sistema de Partidas

- Placar acumulado (X, O, Empates)
- Contador de partidas
- Vitória na partida ao atingir 11 vitórias
- Botões para resetar e nova partida

### Personalização

- Menu flutuante de cores
- Cores para X, O, fundo, tabuleiro, texto
- 4 presets de tema
- Aplicação em tempo real

### Acessibilidade

- Navegação por teclado
- Anúncios para screen reader
- Alto contraste automático
- Modo texto grande
- Controles de acessibilidade

### Responsividade

- Desktop, tablet, mobile
- Breakpoints: 1024px, 768px, 480px
- Interface otimizada para touch

## 🛠️ Tecnologias

- **React 19.1.0** - Biblioteca principal
- **Vite 7.0.4** - Build tool
- **CSS3** - Estilização com variáveis
- **JavaScript ES6+** - Lógica e hooks

## 📊 Métricas

- **Hooks personalizados:** 5
- **Componentes:** 12
- **Animações CSS:** 15+
- **Recursos de acessibilidade:** 8+
- **Breakpoints responsivos:** 4
- **Presets de tema:** 4

## 🔧 Scripts

```bash
npm run dev      # Desenvolvimento
npm run build    # Produção
npm run preview  # Visualizar build
npm run lint     # Linter
```

## 🎯 Critérios Atendidos

### ✅ Escalabilidade e Manutenibilidade

- Arquitetura modular com hooks e componentes reutilizáveis
- Separação clara entre lógica, estado e apresentação
- Código limpo com nomes descritivos

### ✅ Composição Estratégica

- Hooks especializados para diferentes responsabilidades
- Componentes pequenos e focados
- Reutilização de código

### ✅ Boas Práticas React

- useCallback, useEffect, useState otimizados
- Cleanup adequado de timers e listeners
- Performance com memoização

### ✅ Clareza Técnica

- README com justificativas das escolhas
- Estrutura documentada
- Código autoexplicativo

### ✅ Capricho Visual

- Interface moderna e profissional
- Animações suaves e contextuais
- Responsividade completa
- Acessibilidade visual

### ✅ Comunicação Escrita

- README completo e bem estruturado
- Instruções claras de uso
- Documentação das decisões técnicas

---

**Desenvolvido com React e boas práticas** 🚀
