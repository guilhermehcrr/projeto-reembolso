//Seleciona elementos do formulário
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const expense = document.getElementById('expense');
const category = document.getElementById('category');

//Seleciona o elemento de lista onde as despesas serão adicionadas
const expenseList = document.querySelector('ul');
const expensesQuantity = document.querySelector("aside header p span");

//Captura o evento de input para formatar o valor

amount.oninput = () => {
  //Remove caracteres não numéricos e atualiza o campo de entrada
  let value = amount.value.replace(/\D/g, '');
  //Transforma o valor para centavos
  value = parseFloat(value) / 100;
  //Formata o valor como moeda brasileira
  amount.value = formatCurrencyBRL(value)
  console.log(amount.value);
  
}

function formatCurrencyBRL(value) {
 
  // Verifica se o valor é um número válido
  if (isNaN(value)) {
    return '';
  }
  
  // Formata o valor como moeda brasileira
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

}

// Captura o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault(); // Evita o envio do formulário

  // Cria um objeto com os dados do novo gasto
  const newExpense = {
    // Gera um ID único baseado no timestamp
    id: Date.now(), 
    // Captura os valores dos campos do formulário
    amount: amount.value,
    expense: expense.value,
    category_id: category.value,
    // Captura o nome da categoria selecionada
    category_name: category.options[category.selectedIndex].text,
    // Data de criação
    creat_at: new Date().toISOString()  
  };
  expenseAdd(newExpense); // Chama a função para adicionar o novo gasto
}

// Função para adicionar uma nova despesa à lista
function expenseAdd(newExpense) {
  try {

    // Cria um novo elemento de lista

    const expenseItem = document.createElement('li');
    expenseItem.classList.add('expense');

    //Cria o icone da categoria
    const expenseIcon = document.createElement('img');
    expenseIcon.setAttribute('src', `./img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute('alt', newExpense.category_name);

    // Cria a info da despesa
    const expenseInfo = document.createElement('div');
    expenseInfo.classList.add('expense-info');

    //Cria o nome da despesa
    const expenseName = document.createElement('strong');
    expenseName.textContent = newExpense.expense; 

    //Cria a categoria da despesa
    const expenseCategory = document.createElement('span');
    expenseCategory.textContent = newExpense.category_name;

    //Adicionar nome e categoria na div das informações da despesa
    expenseInfo.append(expenseName, expenseCategory); 

    //Cria o valor da despesa
    const expenseAmount = document.createElement('span');
    expenseAmount.classList.add('expense-value');
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace("R$","")}`; // Formata o valor como moeda brasileira
    
    //Cria o ícone de remover
    const removeIcon = document.createElement('img');
    removeIcon.setAttribute('src', './img/remove.svg');
    removeIcon.setAttribute('alt', 'remover');
    removeIcon.classList.add('remove-icon');
    // Adiciona o evento de clique para remover o item
    removeIcon.onclick = () => {
      // Remove o item da lista de despesas
      expenseItem.remove();
      // Exibe uma mensagem de confirmação
      alert('Despesa removida com sucesso!');
    };
    
    

    //Adiciona as informações no item de lista
    expenseItem.append(expenseIcon); // Adiciona o ícone da categoria
    
    expenseList.append(expenseItem); // Adiciona o item de lista à lista de 
    // despesas 
    expenseItem.append(expenseInfo); // Adiciona as informações da despesa
    expenseItem.append(expenseAmount); // Adiciona o valor da despesa
    // Adiciona o ícone de remover ao item de lista
    expenseItem.append(removeIcon);
// Atualiza os totais após adicionar a nova despesa
    updateTotals();
  

}catch (error) {
  alert('Erro ao adicionar gasto. Verifique os dados e tente novamente.');  
  // Exibe o erro no console para depuração
    console.error('Erro ao adicionar gasto:', error);
  }
}

// Atualiza os totais
function updateTotals() {
  try{
  // Recupera todos os itens de lista de despesas
  const items = expenseList.children
  expensesQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`; // Atualiza a quantidade de despesas

  // Variável para incrementar o total
  let total = 0;
  // Percorre cada item (li) da lista (ul)
for(let item = 0; item < items.length; item++){
    const itemAmount = items[item].querySelector(".expense-amount")   
    console.log(itemAmount)
}
}
catch (error) {
  console.error('Erro ao atualizar totais:', error);
  alert('Erro ao calcular o total. Verifique os dados e tente novamente.');
  }
}