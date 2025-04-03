function inverterPalavra(){

        let input=document.getElementById("inputPalavra")
        let palavra=input.value
        let mensagem=document.getElementById("mensagem")

    
    result =palavra.split('').reverse().join('');//slit divide a string em array // .reverse inverte a ordem em  um array // .join junta o  array novamente
    mensagem.textContent=result

    console.log(inverterString("javascript"));
}