'use strict';

function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
    this.endereco = endereco;

    this.getNome = function() {
        return this.nome;
    }

    this.getTelefoneCelular = function() {
        return this.telefoneCelular;
    }

    this.getEmail = function() {
        return this.email;
    }

    this.getEndereco = function() {
        return this.endereco;
    }
}

function TelefoneCelular(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;

    this.getDdd = function() {
        return this.ddd;
    }

    this.getNumero = function() {
        return this.numero;
    }
}

function Endereco(rua, numero, cidade, estado) {
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;

    this.getRua = function() {
        return this.rua;
    }

    this.getNumero = function() {
        return this.numero;
    }

    this.getCidade = function() {
        return this.cidade;
    }

    this.getEstado = function() {
        return this.estado;
    }
}


let Cliente1 = new Cliente('João da Silva',
    new TelefoneCelular('11', '999999999'),
    'joao.silva@email.com',
    new Endereco('Rua das Flores', '123', 'São Paulo', 'SP')
);
console.log('Nome: ' + Cliente1.getNome());
console.log('Telefone: (' + Cliente1.getTelefoneCelular().getDdd() + ') ' + Cliente1.getTelefoneCelular().getNumero());
console.log('Email: ' + Cliente1.getEmail());
console.log('Endereço: ' + Cliente1.getEndereco().getRua() + ', ' + Cliente1.getEndereco().getNumero() + ', ' + Cliente1.getEndereco().getCidade() + ', ' + Cliente1.getEndereco().getEstado());