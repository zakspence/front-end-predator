var Predator = (function(self) {
    self.herbivores = [];
    self.carnivores = [];
    var mainDisplay = document.getElementById('main-display');


    return {

        loadAnimals() {
            request = new XMLHttpRequest();
            console.log(request);
            request.open('GET', 'carnivores.json');
            request.onload = () => {
                let parsedData = JSON.parse(request.responseText);
                console.log(parsedData);
                carnivores = parsedData.carnivores;
                herbivores = parsedData.herbivores;
                Predator.displayHerbivores();
                Predator.displayCarnivores();
            }
            request.send();
        },

        displayHerbivores() {

            for (var i=0; i < herbivores.length; i++){
                mainDisplay.innerHTML += herbivores[i] + ', ';
            }
        },

        displayCarnivores() {

            for (var i=0; i < carnivores.length; i++){
                mainDisplay.innerHTML += carnivores[i] + ', ';
            }
        }
    }
})(Predator || {})