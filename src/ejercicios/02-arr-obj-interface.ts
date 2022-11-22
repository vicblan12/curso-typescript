

/*
    ===== Código de TypeScript =====
*/

let habilidades = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?:    string; // Le colocamos el ? para indicar que es variable (es opcional ese campo)
}

const personaje: Personaje = {
    nombre: 'Victorinox',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);