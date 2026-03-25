$("#calcular").click(function () {
    //recebendo dados da Interface
    let n1= parseFloat($("#n1").val());
    let n2= parseFloat($("#n2").val());
    let operacao = $("input[name='operacao']:checked").val();
       //chamando a função calcular
    let IMC = calcular(n1, n2, operacao);

    let PMC= "";
        if (IMC < 18.5 ){
            PMC = "MAGREZA";
        }else if (IMC < 24.9){
        PMC = "NORMAL";
          }else if (IMC < 29.9){
        PMC = "SOBREPESO";
          }else if (IMC < 39.9){
        PMC = "OBESIDADE";
        }else{
            PMC = "OBESIDADE GRAVE";
        }


     //Mostrando na interface
    $("#IMC").html("IMC: " + IMC.toFixed(2) + " ," + PMC);
    
});
    //Código para limpar a página
function limpar() {
    $("#n1").val("");
    $("#n2").val("");
    $("#n1").focus();
    $("input[name='operacao']").prop("checked", false);
    $("#IMC").html("IMC: ");
}
//Função das contas básicas (Calcular)
function calcular(n1, n2, operacao){
    let IMC = 0; 

    if(operacao == "IMC"){
        IMC = n1 / (n2 * n2);
    }

    return IMC;
}


