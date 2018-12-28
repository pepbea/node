const { argv } = require('./config/yargs')
const colors = require('colors')
const { crearArxiu, llistarTaula } = require('./multiplicar/multiplicar')


let comanda = argv._[0];

switch (comanda) {
    case "llistar":
        llistarTaula(argv.b, argv.l)
        break;
    case "crear":
        crearArxiu(argv.b, argv.l)
            .then(arxiu => console.log('Arxiu creat: ', arxiu.green))
            .catch(err => console.log(err));
        break;

    default:
        console.log("no defined");
        break;
}

//let base = argument[2].split('=')[1];