'use strict';

function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
    this.endereco = endereco;
    this.getNome = function() { return this.nome; };
    this.getEmail = function() { return this.email; };
    this.getTelefoneCelular = function() { return this.telefoneCelular; };
    this.getEndereco = function() { return this.endereco; };
}

function TelefoneCelular(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;
    this.getDdd = function() { return this.ddd; };
    this.getNumero = function() { return this.numero; };
}

function Endereco(rua, numero, cidade, estado) {
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
    this.getRua = function() { return this.rua; };
    this.getNumero = function() { return this.numero; };
    this.getCidade = function() { return this.cidade; };
    this.getEstado = function() { return this.estado; };
}

let telefone = new TelefoneCelular(12, 66666666);
let endereco = new Endereco("Rua Dino", 666, "São José dos Campos", "SP");
let cliente = new Cliente("Jõao Silva Sauro", telefone, 'joao.silva@sAURO', endereco);


console.log("Nome: " + cliente.getNome());
console.log("Telefone: (" + cliente.getTelefoneCelular().getDdd() + ") " + cliente.getTelefoneCelular().getNumero());
console.log("Email: " + cliente.getEmail());
console.log("Endereço: " + cliente.getEndereco().getRua() + ", " + cliente.getEndereco().getNumero() + ", " + cliente.getEndereco().getCidade() + ", " + cliente.getEndereco().getEstado());
