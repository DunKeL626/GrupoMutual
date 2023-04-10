import viewport from '../fixtures/viewport.json'
import pathURL from '../fixtures/path-URL.json';

describe('Validar estructura del Home del Grupo Mutual', () => {

    for (const size in viewport) {

        it(`Validar header, footer y botón flotante, en resolusión ${size}`, () => {
            cy.visit(pathURL.Home).viewport(viewport[size][0], viewport[size][1]);
            cy.HeadFooterFlyBottom(size)
        });

        it(`Validar sección redes sociales, en resolusión ${size}`, () => {
            cy.visit(pathURL.Home).viewport(viewport[size][0], viewport[size][1]);
            cy.RedesSociales(size)
        });
    }
});