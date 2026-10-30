function teste() {
    const precoNotebook2Em1 = 3000;
    const precoNotebookPositivo = 2500;
    const precoNotebookLenovo = 4000;

    let qtdNotebook2Em1 = null;
    while( (qtdNotebook2Em1 == null || isNaN(qtdNotebook2Em1)) || qtdNotebook2Em1 < 0) {
        qtdNotebook2Em1 = Number(prompt("Quantos notebooks 2 em 1 você deseja comprar?"));
        if(isNaN(qtdNotebook2Em1) || qtdNotebook2Em1 < 0) {
            alert("Quantidade inválida. Por favor, digite um número maior ou igual a 0.");
        }
    }
  
    let qtdNotebookPositivo = null;
    while(qtdNotebookPositivo == null || isNaN(qtdNotebookPositivo) || qtdNotebookPositivo < 0) {
        qtdNotebookPositivo = Number(prompt("Quantos notebooks positivos você deseja comprar?"));
        if(isNaN(qtdNotebookPositivo) || qtdNotebookPositivo < 0) {
            alert("Quantidade inválida. Por favor, digite um número maior ou igual a 0.");
        }
    }

    let qtdNotebookLenovo = null;
    while(qtdNotebookLenovo == null || isNaN(qtdNotebookLenovo) || qtdNotebookLenovo < 0) {
        qtdNotebookLenovo = Number(prompt("Quantos notebooks Lenovo você deseja comprar?"));
        if(isNaN(qtdNotebookLenovo) || qtdNotebookLenovo < 0) {
            alert("Quantidade inválida. Por favor, digite um número maior ou igual a 0.");
        }
    }

    if(qtdNotebook2Em1 > 0 || qtdNotebookPositivo > 0 || qtdNotebookLenovo > 0) {
        const totalNotebook2Em1 = qtdNotebook2Em1 * precoNotebook2Em1;
        const totalNotebookPositivo = qtdNotebookPositivo * precoNotebookPositivo;
        const totalNotebookLenovo = qtdNotebookLenovo * precoNotebookLenovo;

        const totalCompra = totalNotebook2Em1 + totalNotebookPositivo + totalNotebookLenovo;

        alert(`
            Quantidade de notebooks 2 em 1: ${qtdNotebook2Em1} - Total: R$ ${totalNotebook2Em1}\n
            Quantidade de notebooks positivos: ${qtdNotebookPositivo} - Total: R$ ${totalNotebookPositivo}\n
            Quantidade de notebooks Lenovo: ${qtdNotebookLenovo} - Total: R$ ${totalNotebookLenovo}\n
            O total da compra é: R$ ${totalCompra}\n
            `);
    }

    if(qtdNotebook2Em1 === 0 && qtdNotebookPositivo === 0 && qtdNotebookLenovo === 0) {
        alert("Nenhum notebook foi comprado. O total da compra é: R$ 0");
    }

    if(qtdNotebook2Em1 < 0 || qtdNotebookPositivo < 0 || qtdNotebookLenovo < 0) {
        alert("Quantidade inválida. Por favor, na próxima vez digite apenas numeros maiores ou iguais a 0.");
    }
}