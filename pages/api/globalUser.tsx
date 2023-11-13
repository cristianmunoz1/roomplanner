interface User {
    nombres: string;
    apellidos: string;
    tipoDocumento: number;
    numeroDocumento: string;
    correo: string;
    telefono: string;
}

let globalVariable: User = {
    nombres: '',
    apellidos: '',
    tipoDocumento: 1,
    numeroDocumento: '',
    correo: '',
    telefono: '',
};

export default globalVariable;