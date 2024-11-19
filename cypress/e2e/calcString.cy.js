describe('Calculadora de Cadenas', ()=> {
        it('Devuelve 0 para una cadena vacia', ()=> {
            cy.visit("/");
            cy.get("#string").type(" ");
            cy.get("#calc-form").submit();
            cy.get("#resultado").should("contain","0");
        });

        it('Devuelve el valor ingresado',  ()=>{
            cy.visit("/");
            cy.get('#string').clear().type('/');
            cy.get("#calc-form").submit();
            cy.get("#resultado").should("contain","/");
        });
});