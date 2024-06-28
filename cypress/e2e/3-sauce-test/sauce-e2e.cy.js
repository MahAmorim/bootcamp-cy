
/// <reference types="cypress" />
import login from "../../fixtures/login.json";
import usuario from "../../fixtures/usuarios.json";

describe('Teste de ponta a ponta no Saucelab', () => {

    beforeEach(() => { //Faz qualquer coisa antes de cada teste
        cy.login(login.usuario, login.senha)
    });

    it('Deve fazer um pedido de ponta a ponta', () => {

        cy.escolherProduto('Sauce Labs Fleece Jacket')
        cy.escolherProduto('Sauce Labs Onesie')
        cy.escolherProduto('Test.allTheThings() T-Shirt (Red)')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.cadastro(usuario[2].nome, usuario[2].sobrenome, usuario[2].cep)
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
    });

});

/*

Funcionalidade: tela de login
Como usuário do trello
Quero me autenticar
Para criar tarefas


Cenário:
Dado que eu entre no site X (Pré requisito)
Quando eu preencher os campos de autenticação (Ações do usuário)
Então deve me direcionar para a tela de dasboard inicial (Resultado esperado)

*/