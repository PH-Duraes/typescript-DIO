 let funcionario1 = {
    codigo: 10,
    nome: 'John',
}
 
let funcionario2:(codigo:'number', nome:'string') => {
    codigo: 10,
    nome: 'John',
}

interface IFuncionario{
    codigo: number,
    nome: string,
}

let funcionario: IFuncionario = {
    codigo: 200,
    nome: 'Anderson',
}


const funcionarioObjct = {} as IFuncionario;
funcionarioObjct.codigo = 10;
funcionarioObjct.nome = 'João';

const funcionarioObj2: IFuncionario = {
    codigo: 10,
    nome: 'Anderson'
}