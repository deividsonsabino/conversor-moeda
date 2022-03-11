function getCurrency() {
    fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
        .then((response) => {
            response.json().then(dt => {
                console.log(dt)
                document.getElementById("date").textContent = new Intl.DateTimeFormat("pt-BR", { dateStyle: 'long' }).format(new Date(dt.BTCBRL.create_date))

                document.getElementById("BTCBRL-code").textContent = dt.BTCBRL.code
                document.getElementById("BTCBRL-name").textContent = dt.BTCBRL.name
                document.getElementById("BTCBRL-value").textContent = `R$ ${dt.BTCBRL.bid}`
                document.getElementById("BTCBRL-value").value = dt.BTCBRL.bid

                document.getElementById("EURBRL-code").textContent = dt.EURBRL.code
                document.getElementById("EURBRL-name").textContent = dt.EURBRL.name
                document.getElementById("EURBRL-value").textContent = `R$ ${dt.EURBRL.bid}`
                document.getElementById("EURBRL-value").value = dt.EURBRL.bid

                document.getElementById("USDBRL-code").textContent = dt.USDBRL.code
                document.getElementById("USDBRL-name").textContent = dt.USDBRL.name
                document.getElementById("USDBRL-value").textContent = `R$ ${dt.USDBRL.bid}`
                document.getElementById("USDBRL-value").value = dt.USDBRL.bid

            })
        }).catch((err) => {
            console.log(err)
        })
}

function convertCurrency() {

    const actualValue = document.getElementById("actualValue").value
    if (actualValue == 0) {
        alert("informe um valor!")
        return
    }
    const currency = document.getElementById("select-currency")
    const currencySelected = currency.options[currency.selectedIndex].value;


    let bitcoin = document.getElementById("BTCBRL-value").value

    let euro = document.getElementById("EURBRL-value").value

    let dolar = document.getElementById("USDBRL-value").value

    console.log(bitcoin)
    console.log(actualValue * bitcoin)

    document.querySelector(".result").classList.add("result-style")

    if (currencySelected === "dolar") {
        document.getElementById("convertValue").textContent = `R$ ${actualValue * dolar}`
    } else if (currencySelected === "euro") {
        document.getElementById("convertValue").textContent = `R$ ${actualValue * euro}`
    } else {
        document.getElementById("convertValue").textContent = `R$ ${actualValue * bitcoin}`
    }
}