







var app = {

    configFormElm: document.querySelector('.configuration'),
    invaderElm: document.querySelector('#invader'),

    init() {
        app.makeConfigForm()

        app.makeGrid()
    },

    handleClickPixel(event) {
        var pixelElm = event.target
        pixelElm.classList.toggle('pixel--fof')
    },

    handleSubmitFormConfig(event) {
        event.preventDefault();
        app.gridSize = Number(app.inputGridSizeElm.value)
        app.makeGrid(app.gridSize)

    },



    makeGrid(gridSize = 8) {

        app.invaderElm.textContent = ''
        for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {

            // console.log(`mes lignes: ${rowIndex}`)

            let rowElm = document.createElement('div')

            rowElm.classList.add('row')

            // je cree 8 colonnes pour chaque ligne

            for (let pixelIndex = 0; pixelIndex < gridSize; pixelIndex++) {
                // console.log(`Row index ${rowIndex} - Pixel index ${pixelIndex}`)
                let pixelElm = document.createElement('div')
                pixelElm.classList.add('pixel')

                // on ecoute un evenemlent sur le pixel
                pixelElm.addEventListener('click', app.handleClickPixel)

                // Ajout du pixel dans la ligne

                rowElm.append(pixelElm)
            }

            app.invaderElm.append(rowElm)

        }

    },
    makeConfigForm() {


        // debugger;

        app.inputGridSizeElm = document.createElement('input');
        app.inputGridSizeElm.classList.add('configuration--input');
        app.inputGridSizeElm.type = 'number';
        app.inputGridSizeElm.min = 2
        app.inputGridSizeElm.max = 20
        app.inputGridSizeElm.step = 2
        app.inputGridSizeElm.placeholder = 'Taille de la grille'


        app.configFormElm.append(app.inputGridSizeElm)

        var buttonConfigFormElm = document.createElement('button')
        buttonConfigFormElm.classList.add('configuration--button')
        app.configFormElm.append(buttonConfigFormElm)
        buttonConfigFormElm.textContent = 'Valider'

        app.configFormElm.addEventListener('submit', app.handleSubmitFormConfig)
    }


}

app.init()