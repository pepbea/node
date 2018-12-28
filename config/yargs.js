const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('llistar', 'Imprimeix per consola la taula de multiplicar', opts)
    .command('crear', 'Crea en un fitxer una taula de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}