import viewport from '../fixtures/viewport.json'

describe('Validar estructura del Home del Grupo Mutual', () => {  

    viewport.sizes.forEach((size) => {
        
        it(`Validar header, footer y botón flotante, en resolusión (${size[0]} x ${size[1]})px` , () => {
            cy.visit('/').viewport(size[0], size[1])
            cy.HeadFooterFlyBottom(size[0])
        });
    });
    
});