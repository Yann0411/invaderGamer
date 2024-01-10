var app = {
    configFormElm: document.querySelector('.configuration'),
    invaderElm: document.querySelector('#invader'),

    init() {
        app.makeConfigForm();
        app.makeGrid();
    },

    handleClickPixel(event) {
        var pixelElm = event.target;
        pixelElm.classList.toggle('pixel--off'); // Modifié 'pixel--fof' en 'pixel--off'
    },

    handleSubmitFormConfig(event) {
        event.preventDefault();
        app.gridSize = Number(app.inputGridSizeElm.value); // Ajouté 'app.'
        app.makeGrid(app.gridSize); // Ajouté 'app.'
    },

    makeGrid(gridSize = 8) {
        app.invaderElm.textContent = '';

        for (var rowIndex = 0; rowIndex < gridSize; rowIndex++) {
            let rowElm = document.createElement('div'); // Utilisé 'let'
            rowElm.classList.add('row');

            for (let pixelIndex = 0; pixelIndex < gridSize; pixelIndex++) {
                let pixelElm = document.createElement('div'); // Utilisé 'let'
                pixelElm.classList.add('pixel');
                pixelElm.addEventListener('click', app.handleClickPixel); // Ajouté 'app.'

                rowElm.append(pixelElm);
            }

            app.invaderElm.append(rowElm);
        }
    },

    makeConfigForm() {
        app.inputGridSizeElm = document.createElement('input');
        app.inputGridSizeElm.classList.add('configuration--input');
        app.inputGridSizeElm.type = 'number';
        app.inputGridSizeElm.min = 2;
        app.inputGridSizeElm.max = 20;
        app.inputGridSizeElm.step = 2;
        app.inputGridSizeElm.placeholder = 'Taille de la grille';

        app.configFormElm.append(app.inputGridSizeElm); // Ajouté 'app.'

        var buttonConfigFormElm = document.createElement('button');
        buttonConfigFormElm.classList.add('configuration--button');
        app.configFormElm.append(buttonConfigFormElm); // Ajouté 'app.'
        buttonConfigFormElm.textContent = 'Valider';

        app.configFormElm.addEventListener('submit', app.handleSubmitFormConfig); // Ajouté 'app.'
    }
}

app.init();
