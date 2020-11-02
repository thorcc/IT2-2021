function lagDiv(tekst, bredde, bakgrunnsfarge, tekstfarge){
    document.body.innerHTML = `<div style="width: ${bredde}; background-color: ${bakgrunnsfarge}; color: ${tekstfarge};">${tekst}</div>`
}

lagDiv("Velkommmen","200px","red","blue");

