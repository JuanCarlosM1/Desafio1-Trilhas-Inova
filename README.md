# ByteForge Informática - Simulador de Compras

> Projeto desenvolvido para o **Desafio 1: Minha Loja - Simulador de Compras**  
> Trilha: **Desenvolvimento Mobile / Programa Trilhas 2026**

---

## 👨‍💻 Identificação
- **Aluno:** Juan Carlos Melo do Nascimento
- **Projeto:** ByteForge Informática
- **Trilha:** Desenvolvimento Mobile

---

## 🛒 Apresentação da Loja
A **ByteForge Informática** é uma vitrine virtual focada em hardware e equipamentos de informática de alta performance.

### Catálogo de Produtos:
| Produto | Descrição | Preço Unitário |
| :--- | :--- | :--- |
| **Notebook 2 em 1** | Portabilidade e versatilidade para trabalho diário | R$ 3.000,00 |
| **Notebook Positivo** | Custo-benefício para estudos e tarefas essenciais | R$ 2.500,00 |
| **Notebook Lenovo** | Alta performance e durabilidade para produtividade | R$ 4.000,00 |

*(Nota: certifique-se de manter os preços do HTML alinhados aos valores calculados no script JS).*

---

## 🚀 Tecnologias Utilizadas
- **HTML5:** Estruturação semântica da página, tabela/cards de produtos e rodapé com identificação.
- **CSS3:** Estilização responsiva (Flexbox, Media Queries para desktop e mobile) e botão flutuante.
- **JavaScript (ES6):** Lógica interativa de captação de dados (`prompt`), validações de entrada, cálculos matemáticos e exibição do resumo de compra (`alert`).

---

## 💻 Instruções de Execução

1. Clone o repositório ou faça o download dos arquivos:
   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   ```
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` diretamente em qualquer navegador de sua preferência (dê dois cliques no arquivo ou utilize a extensão **Live Server** no VS Code).
4. Clique no botão **"Simular Compra"** no canto inferior direito para iniciar a simulação.

---

## 📸 Demonstração da Página
<!-- Salve um print da tela na pasta imagens (ex: imagens/preview.png) e descomente a linha abaixo -->
![Preview da ByteForge Informática](./imagens/preview.png)

---

## 🧪 Testes Realizados e Cenários de Validação

| Cenário de Teste | Entrada do Usuário | Comportamento Esperado / Obtido |
| :--- | :--- | :--- |
| **Entrada com texto/letras** | `"abc"` ou vazio | Exibe alerta de quantidade inválida e repete o prompt até entrada numérica válida. |
| **Entrada com número negativo** | `-2` | Bloqueado pela validação em loop, requisitando número maior ou igual a 0. |
| **Compra zerada** | `0`, `0`, `0` | Exibe mensagem indicando que nenhum produto foi comprado com total R$ 0. |
| **Fluxo normal de compra** | `1`, `2`, `1` | Calcula subtotais por item e exibe a soma total correta no alerta. |

---

## 🧠 Dificuldades Encontradas e Aprendizados
- **Validação de entradas:** Garantir que o usuário não insira letras ou números negativos usando loops `while` e tratamento com `isNaN()`.
- **Organização de arquivos:** Manter a separação limpa entre estrutura (`HTML`), estilo (`CSS`) e comportamento (`JS`).
- **Responsividade:** Adequar a disposição dos produtos em telas menores através de media queries para garantir boa experiência em dispositivos móveis.

---

## 🤖 Uso de Inteligência Artificial
- **Onde foi utilizada:** Auxílio na estruturação inicial da documentação (`README.md`) e (``)