const fs = require('fs');
const colors = require('colors')


let llistarTaula = (base, limit = 10) => {
    for (let i = 1; i <= limit; i++) console.log(`${base} * ${i} = ${i*base}`.green);
}

let crearArxiu = (base, limit = 10) => {


    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject('BASE No es un numero!');
            return;
        }

        for (let i = 1; i <= limit; i++) data += `${base} * ${i} = ${i*base}\n`;

        fs.writeFile(`taula${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`taula${base}.txt`);
        });
    });
};

module.exports = {
    crearArxiu,
    llistarTaula
}