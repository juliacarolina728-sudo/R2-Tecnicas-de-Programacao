function Cliente(nome, telefoneCelular, email, endereco) {
    let _nome = nome;
    let _telefoneCelular = telefoneCelular;
    let _email = email;
    let _endereco = endereco;

    this.getNome = function() { return _nome; };
    this.setNome = function(novoNome) { _nome = novoNome; };

    this.getEmail = function() { return _email; };
    this.setEmail = function(novoEmail) { _email = novoEmail; };
    this.getEmailMinusculo = function() { return String(_email).toLowerCase(); };
    this.getEmailMaiusculo = function() { return String(_email).toUpperCase(); };

    this.getTelefoneCelular = function() { return _telefoneCelular; };
    this.setTelefoneCelular = function(novoTelefoneCelular) { _telefoneCelular = novoTelefoneCelular; };
    this.getEndereco = function() { return _endereco; };
    this.setEndereco = function(novoEndereco) { _endereco = novoEndereco; };

}

function TelefoneCelular(ddd, numero) {
    let _ddd = ddd;
    let _numero = numero;

    this.getDdd = function() { return _ddd; };
    this.setDdd = function(novoDdd) {return _ddd = novoDdd; };
    this.getNumero = function() { return _numero; };
    this.setNumero = function(novoNumero) { _numero = novoNumero; };
}

function Endereco(rua, numero, cidade, estado) {
    let _rua = rua;
    let _numero = numero;
    let _cidade = cidade;
    let _estado = estado;

    this.getRua = function() { return _rua; };
    this.setRua = function(novaRua) { _rua = novaRua; };

    this.getNumero = function() { return _numero; };
    this.setNumero = function(novoNumero) { _numero = novoNumero; };

    this.getCidade = function() { return _cidade; };
    this.setCidade = function(novaCidade) { _cidade = novaCidade; };

    this.getEstado = function() { return _estado; };
    this.setEstado = function(novoEstado) { _estado = novoEstado; };

    this.getEstadoMinusculo = function() { return String(_estado).toLowerCase(); };
    this.getEstadoMaiusculo = function() { return String(_estado).toUpperCase(); };
}

function OrdenaAlfabeticamente(array) {
    return array.sort(function(a, b) {
        let nomeA = a.getNome().toUpperCase();
        let nomeB = b.getNome().toUpperCase();
        if (nomeA < nomeB) {
            return -1;
        }
        if (nomeA > nomeB) {
            return 1;
        }
        return 0;
    });
}   

let telefone = new TelefoneCelular(11, 999999999);
let endereco = new Endereco("Rua das Flores", 123, "São Paulo", "SP");
let cliente = new Cliente("João Silva Sauro", telefone, "joao.silva@silva", endereco);
 // segunda pessoa 
let telefone2 = new TelefoneCelular(21, 888888888);
let endereco2 = new Endereco("Rua Palmeiras", 456, "São Paulo", "SP");
let cliente2 = new Cliente("Maria Oliveira", telefone2, "maria.oliveira@oliveira", endereco2    );
// terceira pessoa
let telefone3 = new TelefoneCelular(31, 777777777);
let endereco3 = new Endereco("Rua das Acácias", 789, "São Paulo", "SP");
let cliente3 = new Cliente("Carlos Souza", telefone3, "carlos.souza@souza", endereco3);

let clientes = [cliente, cliente2, cliente3];
let ordenar = OrdenaAlfabeticamente(clientes);

console.log("--- Clientes ordenados alfabeticamente ---");
ordenar.forEach(function(c) { 
    console.log("Nome: " + c.getNome());
});
    
console.log("Nome do cliente: " + cliente.getNome());
console.log("Telefone do cliente: (" + cliente.getTelefoneCelular().getDdd() + ") " + cliente.getTelefoneCelular().getNumero());
console.log("Email do cliente: " + cliente.getEmail()); 
console.log("Email do cliente (minúsculo): " + cliente.getEmailMinusculo());
console.log("Email do cliente (maiúsculo): " + cliente.getEmailMaiusculo());
console.log("Endereço do cliente: " + cliente.getEndereco().getRua() + ", " + cliente.getEndereco().getNumero() + ", " + cliente.getEndereco().getCidade() + ", " + cliente.getEndereco().getEstado());

