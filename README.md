# 💰 Sistema de Reembolso

Um sistema web moderno e intuitivo para solicitação e gerenciamento de reembolsos de despesas, desenvolvido com HTML, CSS e JavaScript vanilla.

## ✨ Funcionalidades

- 📝 **Cadastro de Despesas**: Adicione facilmente novas despesas com nome, categoria e valor
- 🏷️ **Categorização Inteligente**: 5 categorias com ícones visuais (Alimentação, Hospedagem, Serviços, Transporte, Outros)
- 💵 **Formatação Automática**: Valores formatados automaticamente em reais brasileiros
- 📊 **Totalizador em Tempo Real**: Acompanhe o total de despesas e quantidade instantaneamente
- 🗑️ **Remoção Simples**: Remova despesas com um clique
- 📱 **Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- ⚡ **Performance Otimizada**: Código JavaScript eficiente sem dependências externas


## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design moderno com Flexbox e responsividade
- **JavaScript ES6+**: Funcionalidades interativas e manipulação do DOM
- **Google Fonts**: Tipografia Open Sans para melhor legibilidade

## 📋 Categorias Disponíveis

| Categoria | Uso |
|-----------|-----|
| 🍽️ **Alimentação** | Refeições, lanches, bebidas |
| 🏨 **Hospedagem** | Hotéis, pousadas, acomodações |
| 🛠️ **Serviços** | Consultorias, manutenções, reparos |
| 🚗 **Transporte** | Combustível, passagens, estacionamento |
| 📋 **Outros** | Demais despesas não categorizadas |

## 🚀 Como Usar

### 1. Clonar o Repositório
```bash
git clone https://github.com/seuusuario/sistema-reembolso.git
cd sistema-reembolso
```

### 2. Abrir o Projeto
- Abra o arquivo `index.html` em qualquer navegador moderno
- Ou use um servidor local como Live Server (VS Code)

### 3. Adicionar Despesas
1. Preencha o nome da despesa
2. Selecione a categoria apropriada
3. Digite o valor (formatação automática)
4. Clique em "Adicionar despesa"

### 4. Gerenciar Despesas
- Visualize todas as despesas na lateral direita
- Acompanhe o total em tempo real
- Remova despesas clicando no ícone de lixeira

## 📂 Estrutura do Projeto

```
sistema-reembolso/
├── index.html              # Página principal
├── styles.css              # Estilos CSS
├── script.js               # Lógica JavaScript
├── img/                    # Ícones e imagens
│   ├── logo.svg
│   ├── food.svg
│   ├── accommodation.svg
│   ├── services.svg
│   ├── transport.svg
│   ├── others.svg
│   ├── chevron-down.svg
│   └── remove.svg
└── README.md               # Este arquivo
```

## 💡 Recursos Técnicos

### Formatação de Moeda
```javascript
function formatCurrencyBRL(value) {
  if (isNaN(value)) return '';
  return value.toLocaleString('pt-BR', { 
    style: 'currency', 
    currency: 'BRL' 
  });
}
```

### Validação de Entrada
- Apenas números no campo valor
- Campos obrigatórios validados
- Tratamento de erros com try/catch

### Performance
- Event delegation para otimizar eventos
- Manipulação eficiente do DOM
- Sem dependências externas

## 📱 Responsividade

- **Desktop**: Layout em duas colunas (formulário + lista)
- **Tablet**: Adaptação de tamanhos e espaçamentos
- **Mobile**: Layout empilhado com campos otimizados

### Breakpoints
- `1100px`: Transição desktop-tablet
- `620px`: Layout mobile completo

## 🎨 Design System

### Cores
- **Primária**: `#1F8459` (Verde)
- **Secundária**: `#2CB178` (Verde claro)
- **Background**: `#E4ECE9` (Verde acinzentado)
- **Cards**: `#F9FBFA` (Branco esverdeado)
