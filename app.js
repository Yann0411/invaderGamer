var configFormElm = document.querySelector('.configuration')


var invaderElm = document.querySelector('#invader')

// debugger;

var inputGridSizeElm =  document.createElement('input');
inputGridSizeElm.classList.add('configuration--input');
inputGridSizeElm.type='number';
inputGridSizeElm.min = 2
inputGridSizeElm.max =20
inputGridSizeElm.step =2
inputGridSizeElm.placeholder = 'Taille de la grille'


configFormElm.append(inputGridSizeElm)

var buttonConfigFormElm = document.createElement('button')
buttonConfigFormElm.classList.add('configuration--button')
configFormElm.append(buttonConfigFormElm)
buttonConfigFormElm.textContent ='Valider'

configFormElm.addEventListener('submit',handleSubmitFormConfig)

/**
 * Fonction qui va gerer la soucmission du formulumaire.
 * Il va reset la grille et la regénérer
 * @param {SubmitEvent} event
 */
function handleSubmitFormConfig(event){

    invaderElm.textContent=''
    event.preventDefault();
    var gridSize = Number(inputGridSizeElm.value)


  
    makeGrid(gridSize)


}

/**
 * Est appelé au clic sur un pixel.
 * Elle va changer la couleur du pixel
 * @param {PointerEvent} event 
 */

function handleClickPixel(event) {



    var pixelElm = event.target
    // pixelElm.classList.add('pixel--fof')

    pixelElm.classList.toggle('pixel--fof')

   

}


function makeGrid(gridSize=8){
    for (var rowIndex = 0; rowIndex < gridSize; rowIndex++) {

        // console.log(`mes lignes: ${rowIndex}`)
    
        var rowElm = document.createElement('div')
    
        rowElm.classList.add('row')
    
        // je cree 8 colonnes pour chaque ligne
    
        for (let pixelIndex = 0; pixelIndex < gridSize; pixelIndex++) {
            // console.log(`Row index ${rowIndex} - Pixel index ${pixelIndex}`)
            var pixelElm = document.createElement('div')
            pixelElm.classList.add('pixel')
    
            // on ecoute un evenemlent sur le pixel
            pixelElm.addEventListener('click', handleClickPixel)
    
            // Ajout du pixel dans la ligne
    
            rowElm.append(pixelElm)
        }
    
        invaderElm.append(rowElm)
    
    }

}




