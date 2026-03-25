$("#calcular").click(function () {
    var valorX = parseInt($("#txtvalorX").val());
    var valorY = parseInt($("#txtvalorY").val());
    var valorZ = parseInt($("#txtvalorZ").val());

    if (isNaN(valorX) || isNaN(valorY) || isNaN(valorZ)) {
        alert("Por favor, insira números válidos!");
        return;
    }

    if (valorX > valorY && valorY > valorZ) {
        alert("Valor X é maior que Y e Y é maior que Z");
        $("#txtresultado")
        .html("Ordem Final: " + "Z=" + valorZ + " Y=" + valorY + " X=" + valorX)
        .css({
            'font-weight': 'bold',
            'font-size': '20px',
            'color': '#0000ff'
        });
 } else
        
     if (valorX < valorY && valorY < valorZ && valorX > valorZ) {
        alert("Valor X é menor que Y e Y é maior que Z");
        $("#txtresultado")
        .html("Ordem Final: " + "Y=" + valorY + "  Z=" + valorZ + "  X=" + valorX)
        .css({
            'font-weight': 'bold',
            'font-size': '20px',
            'color': '#0000ff'
        });
 } else

    if (valorX < valorY && valorX > valorZ && valorY > valorZ) {
        alert("Valor X é menor que Y e Y é menor que Z");
        $("#txtresultado")
        .html("Ordem Final: " + "Z=" + valorZ + "  X=" + valorX + "  Y=" + valorY)
        .css({
            'font-weight': 'bold',
            'font-size': '20px',
            'color': '#0000ff'
        });
 } else

 if (valorX < valorY && valorY>valorZ && valorX<valorZ) {
        alert("Valor X é maior que Y e Y é menor que Z");
        $("#txtresultado")
        .html("Ordem Final: " + "X=" + valorX + "  Z=" + valorZ + "  Y=" + valorY)
        .css({
            'font-weight': 'bold',
            'font-size': '20px',
            'color': '#0000ff'
        });
 } else


    if (valorX > valorY && valorY < valorZ && valorX < valorZ) {
        alert("Valor X é maior que Y e Y é menor que Z");
        $("#txtresultado")
        .html("Ordem Final: " + "Y=" + valorY + "  X=" + valorX + "  Z=" + valorZ)
        .css({
            'font-weight': 'bold',
            'font-size': '20px',
            'color': '#0000ff'
        });
 } else

     if (valorX < valorY && valorY < valorZ ) {
        alert("Valor X é menor que Y e Y é menor que Z");
         $("#txtresultado")
        .html("Ordem Final: " + "X=" + valorX + "  Y=" + valorY + "  Z=" + valorZ)
        .css({
            'font-weight': 'bold',
            'font-size': '20px',
            'color': '#0000ff'
        });

    } else {
        alert("A ordem:");
    }

    });
