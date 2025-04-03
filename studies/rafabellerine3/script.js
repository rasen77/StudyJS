let tarefas = []
function adicionarTarefa() {
//comando para mudar a cor:style.color

   let inputTarefa =document.getElementById("inputTarefa") 
   let tarefa= inputTarefa.value.trim() // Obtém o valor e remove espaços extras
   let mensagem= document.getElementById("mensagem")
   
   
   

                 if(tarefa == ""){//condição para virificar se o campo não foi preenchido       
                        mensagem.textContent = "Digite algo para adicionar!";
                        mensagem.style.color = "red"; // Define a cor da mensagem para vermelho =//comando para mudar a cor:style.color
                          inputTarefa.value=""
                        return; // Sai da função sem adicionar a tarefa
                        }
         else{
                mensagem.textContent = "Tarefa adicionada com sucesso!";
                mensagem.style.color = "green"; // Define a cor da mensagem para verde
                       
                tarefas.push(tarefa)
               renderizaTarefas()
         } 
         inputTarefa.value=""   
        }
function renderizaTarefas(){
                       
                     const listaTarefas= document.getElementById("listaTarefas");// Obtendo o elemento com ID "listaTarefa" e armazenando na variável listaTarefa
                     listaTarefas.innerHTML= "";
                    
                      for(let i= 0; i < tarefas.length;  i++){

                      let novaTarefa= document.createElement("li");// Criando um novo elemento "li" para adicionar à lista de tarefas
                      novaTarefa.textContent=tarefas[i]// Atribuindo  o valor da variável tarefa ao conteúdo de texto do elemento <li> armazenado em novaTarefa.
                    
                       let botaoRemover = document.createElement("button")//criando um elemento
                      botaoRemover.className="remover"//colocando uma classe no botão pelo java Script
                      botaoRemover.textContent="Remover"
                      botaoRemover.onclick= () => removerTarefa(i)

                      let botaoEditar=document.createElement("button")
                      botaoEditar.className="Editar"//colocando uma classe no botão pelo java Script
                      botaoEditar.textContent="Editar"
                      botaoEditar.onclick= () => editarTarefa(i)
                     
                  
                    let botaoAllremove=document.createElement("button")
                    botaoAllremove.textContent="All remove"
                    botaoAllremove.onclick= () => limparLista(i)
                    botaoEditar.className=""//colocando uma classe no botão pelo java Script
                   
                      novaTarefa.appendChild(botaoRemover)
                      novaTarefa.appendChild(botaoEditar)
                      
                      listaTarefas.appendChild(novaTarefa) 
                      
                        } 
                      
                        //Se tarefas.length > 0 (ou seja, há itens na lista) → Define display = "block" (mostra o botão).
                        document.getElementById("btnLimpar").style.display = tarefas.length > 0 ? "block" : "none";
        }
function removerTarefa(i){
          tarefas.splice(i, 1)
     
     
         renderizaTarefas()
}
function editarTarefa(i){
  let tarefaEditada= prompt("Edite a tarefa:")

  if(tarefaEditada.trim() !== ""){

    tarefas[i]= tarefaEditada
    renderizaTarefas()
  }

}
function limparLista() {
  if (tarefas.length > 0) {
      tarefas = []; // Outra forma de limpar a lista rapidamente
      const mensagem = document.getElementById("mensagem");
      mensagem.textContent = "Lista de tarefas limpa";
      mensagem.style.color = "green";
      renderizaTarefas();
  }
}