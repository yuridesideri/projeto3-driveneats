const selectionElements = [document.getElementsByClassName("food-items-1"),document.getElementsByClassName("food-items-2"), document.getElementsByClassName("food-items-3")];
const requestButton = document.getElementById("request");
function requestFood()
{
    
    let check = 0;
    for (let i = 0; i < selectionElements[0].length; i++)
    {
        if (selectionElements[0][i].classList.contains("selected"))
        {
            check++;
            break;
            
        }
    }
    for (let i = 0; i < selectionElements[1].length; i++)
    {
        if (selectionElements[1][i].classList.contains("selected"))
        {
            check++;
            break;
        }
    }
    for (let i = 0; i < selectionElements[2].length; i++)
    {
        if (selectionElements[2][i].classList.contains("selected"))
        {
            check++;
            break;
        }
    }
    if (check === 3)
    {
        requestButton.classList.add("button-requester");
        requestButton.innerHTML = "Fechar Pedido";
    }
    else 
    {
        requestButton.classList.remove("button-requester");
        requestButton.innerHTML = "Selecione os 3 itens para fechar o pedido";
    }
}


function resetSelection(p)
{
    for (let i = 0; i < selectionElements[p].length; i++)
    {
        selectionElements[p][i].classList.remove("selected");
        selectionElements[p][i].style.boxShadow = "0px 0px 10px -4px #00000040";
    }
}

function selectElement(element)
{
    let tmp;
    for(let i = 0; i < selectionElements.length; i++)
    {
        for (let j = 0; j < selectionElements[i].length; j++)
        {
            if (element == selectionElements[i][j])
            {
                if (element.classList.contains("selected"))
                {
                    tmp = true;
                }
                resetSelection(i);       
                if (tmp !== true)
                {
                    element.classList.add("selected");
                    selectionElements[i][j].style.boxShadow = "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";    
                    tmp = false;
                }
                requestFood();
                return;
            }
        }
    }
}

function redirectWhatsapp()
{
        let selectionData = document.querySelectorAll(".selected .item-title");
        let dish = selectionData[0].textContent;
        let drink = selectionData[1].textContent;
        let desert = selectionData[2].textContent;
        let price = 0.00;
        let tmpPriceArray;
        for (let i = 0; i < selectionData.length; i++)
        {
            tmpPriceArray = document.querySelectorAll(".selected .item-price")[i].textContent.split(' ');
            price = price + parseFloat(parseFloat(tmpPriceArray[1].replace(",", ".")).toFixed(2));
        }

        console.log(price);
        dish = "- Prato: " + dish;
        drink = "- Bebida: " + drink;
        desert = "- Sobremesa: " + desert;
        price = "Total: R$ " + price.toFixed(2);

        let text = ["Olá, gostaria de fazer o pedido:",dish, drink, desert, price];
        let finalText = "";

        for (let i = 0; i < text.length; i++)
        {
            finalText = finalText + text[i] + '%0A';
        }
        console.log(finalText);
        let url = 'https://wa.me/5564981214035?text=' + finalText;
        location.href= url;
}