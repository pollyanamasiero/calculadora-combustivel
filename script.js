function resultado() {
    let km = document.getElementById('km')
    let cons = document.getElementById('consumo')
    let val = document.getElementById('valor')
    let res = document.getElementById('totalGas')
    
    let km1 = Number(km.value)
    let cons1 = Number(cons.value)
    let val1 = Number(val.value)

    let total = (km1/cons1) * val1
    total = total.toFixed(2)
     
    if (km1 == '' || cons1 == '' || val1 == '') {
        window.alert('Por favor, insira todos os dados')
    } else {
        res.innerHTML = `<p>Seu gasto mensal com combustível é de: R$${total}</p>`
    }
    
}