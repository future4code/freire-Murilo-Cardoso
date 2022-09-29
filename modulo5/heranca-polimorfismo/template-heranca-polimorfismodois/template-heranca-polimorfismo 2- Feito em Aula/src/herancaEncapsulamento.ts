
class Usuario1{
    private id:string
    private nome:string

    constructor(id:string,nome:string){
        this.id = id
        this.nome = nome
    }

    // somente a mae e a filha podem acessar
    protected cadastrarEndereco(){
        console.log("estou cadastrando endereco")
    }

    protected deletaConta(){
        console.log("deletou conta")
    }
}

//usuario filho, pegando o extends(mae) Usuario1

class UsuarioFisico1 extends Usuario1{
    private cpf:string

    constructor(id:string,nome:string,cpf:string){
        super(id,nome)
        this.cpf = cpf
    }

    //criou um novo método para a classe filha acessar o cadastrarEndereço
    cadastarPessoa(){
        this.cadastrarEndereco()
    }

    deletarConta(){
        this.deletaConta
    }
}


const usuarioFisico =  new UsuarioFisico1("001","fulano", "cpfaqui")
usuarioFisico.cadastarPessoa()

