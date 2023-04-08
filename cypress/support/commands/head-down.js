import headDown from '../../fixtures/head-down.json'

export function HeadDown(zise){
    if(zise >= 1100){

        cy.get(headDown.TipoDeCambio.Desktop.BotonAbrir.selector).scrollIntoView().should('exist').contains(headDown.TipoDeCambio.Desktop.BotonAbrir.texto).click();
        
        for(const component in headDown.TipoDeCambio.Desktop.TipoDeCambio){
            cy.log(`Se valida el componente tipo de cambio ${component}`);
            cy.get(headDown.TipoDeCambio.Desktop.TipoDeCambio[component].selector).scrollIntoView().should('exist').contains(headDown.TipoDeCambio.Desktop.TipoDeCambio[component].texto);
        } 
        
        cy.get(headDown.TipoDeCambio.Desktop.BotonCerrar.selector).scrollIntoView().should('exist').click();
        
        for(const component in headDown.Desktop){
            cy.log(`Se valida el componente ${component}`);
            cy.get(headDown.Desktop[component].selector).scrollIntoView().should('exist').and('have.attr', headDown.Desktop[component].elemento, headDown.Desktop[component].URL).contains(headDown.Desktop[component].texto);
        }  

    }else{
        cy.get(headDown.TipoDeCambio.Responsive.BotonAbrirCerrar.selector).scrollIntoView().should('exist').click();
        
        for(const component in headDown.TipoDeCambio.Desktop.TipoDeCambio){
            cy.log(`Se valida el componente tipo de cambio ${component}`);
            cy.get(headDown.TipoDeCambio.Desktop.TipoDeCambio[component].selector).scrollIntoView().should('exist').contains(headDown.TipoDeCambio.Desktop.TipoDeCambio[component].texto);
        } 
        
        cy.get(headDown.TipoDeCambio.Responsive.BotonAbrirCerrar.selector).scrollIntoView().should('exist').click();
        

        cy.get(headDown.BotonDespliegueMenu.selector).scrollIntoView().should('exist').click();
        
        for(const component in headDown.Desktop){
            cy.log(`Se valida el componente ${component}`);
            cy.get(headDown.Responsive[component].selector).scrollIntoView().should('exist').and('have.attr', headDown.Responsive[component].elemento, headDown.Responsive[component].URL).contains(headDown.Responsive[component].texto);
        }
    }  
}