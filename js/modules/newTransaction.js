export default function addNewTransaction() {
  const transactions = [
    {
      id: 1,
      description: 'Luz',
      amount: -50000,
      date: '23/01/2021',
    },

    {
      id: 2,
      description: 'Website',
      amount: 500000,
      date: '23/01/2021',
    },
    {
      id: 3,
      description: 'Internet',
      amount: -20000,
      date: '23/01/2021',
    },
  ];

  const transactionsTotal = {
    income() {},
    // somar as entradas
    
    expenses() {},
    // somar as saidas
    
    total() {},
    // entradas - saidas
  };
  
  
  // substituir/inserir dados em HTML com JS
  const DOM = {
    
    // cria o <tr> </tr> e insere dentro o html da function innerHTMLTransaction()
    addTransaction(transaction, index) {
      console.log(transaction);
      const tr = document.createElement('tr'); // cria o <tr>
      tr.innerHTML = DOM.innerHTMLTransaction(); // o <tr> recebe o html da function abaixo
    },

    innerHTMLTransaction() {
      const html = `
        
          <td class="description">Luz</td>
          <td class="expense">-£100.00</td>
          <td class="date">23/01/2021</td>
          <td>Bill</td>
          <td>
            <img src="assets/minus.svg" alt="remove transaction" />
          </td>
        
      `;

      return html;
    },
  };

  DOM.addTransaction(transactions[1]);
}
