describe('Teste de Navegação e Busca no site da Getnet', () => {
  it('Deve acessar o site da Getnet e buscar pela palavra-chave "Boleto"', () => {
    // 1. Acessar o site
    cy.visit('https://site.getnet.com.br/');

    // 2. No menu "Ajuda", clicar em "Central de Ajuda"
    cy.get('#gnt-navbar').within(() => {
      cy.contains('Ajuda').click();
      cy.contains('Central de ajuda').click();
    });

    // 3. No campo de busca, digitar a palavra-chave “Boleto”
    cy.get('input[placeholder="Pesquise por palavras-chave"]').type('Boleto{enter}');

    // 4. Selecionar a opção “Eu concluí a negociação, de que forma receberei meu boleto?”
    cy.contains('Eu concluí a negociação, de que forma receberei meu boleto?').click();

    // 5. Verificar se a modal foi aberta com a mensagem o texto explicativo a dúvida selecionada
    cy.get('.modal-content').should('be.visible')
      .and('contain.text', 'Eu concluí a negociação, de que forma receberei meu boleto?');
  });
});
