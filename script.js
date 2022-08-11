const selectionElements = [document.getElementsByClassName("food-items-1"),document.getElementsByClassName("food-items-2"), document.getElementsByClassName("food-items-3")];

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
                    requestFood();
                }
            }
        }
    }
}

function requestFood()
{
    
}