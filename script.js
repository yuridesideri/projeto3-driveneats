const selectionElements = [document.getElementsByClassName("food-items-1"),document.getElementsByClassName("food-items-2"), document.getElementsByClassName("food-items-3")];
function requestFood()
{
    let requestButton = document.getElementsById("request");
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
        if (selectionElements[0][i].classList.contains("selected"))
        {
            check++;
            break;
        }
    }
    for (let i = 0; i < selectionElements[2].length; i++)
    {
        if (selectionElements[0][i].classList.contains("selected"))
        {
            check++;
            break;
        }
    }
    if (check === 3)
    {

        requestButton.innerHTML = "Fechar pedido";
        requestButton.getElementById("request").style.backgroundColor =  "#32B72F;";
        requestButton.getElementById("request").style.border = "solid #000000 1px;";
    }
    else 
    {
        requestButton.innerHTML = "Selecione os 3 itens para fechar o pedido";
        requestButton.getElementById("request").style.backgroundColor =  "#CBCBCB;";
        requestButton.getElementById("request").style.border = "none;";	
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
                console.log("alguma coisa");
                requestFood();
                return;
            }
        }
    }
}
