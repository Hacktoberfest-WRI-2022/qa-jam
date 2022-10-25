describe('user can manipulate data', () => {
  it('user can create data', () => {
    cy.visit("/");
    cy.get('[data-id="input-email"]').type("lilian76@example.net");
    cy.get('[data-id="input-password"]').type("password");
    cy.get('[data-id="btn-login"]').click();

    //masuk ke /price
    cy.visit('/price')
    cy.get("h1").contains("Harga Emas Hari Ini");

    // masuk ke create page
    cy.get('.btn-primary').contains('Create New Price').click()
    cy.get('h4').contains('Create Harga Emas')

    // mengisi data
    cy.get('input[name="buy"]').type(Math.floor(Math.random() * 900000) + 100000)
    cy.get('input[name="sell"]').type(Math.floor(Math.random() * 900000) + 10000)
    cy.get('input[name="date"]').type(`${Math.floor(Math.random() * 12)+1}-${Math.floor(Math.random() * 12)+1}-199${Math.floor(Math.random() * 10)}`)
    cy.get('.btn-primary').contains('Simpan').click()

    // cek apa data berhasil disimpan
    cy.get('.alert-body').contains('Berhasil Simpan Data ')

    cy.get('[data-id="avatar"]').click();
    cy.get('[data-id="btn-logout"]').click();
  })

  it('user can edit data', () => {
    cy.visit("/");
    cy.get('[data-id="input-email"]').type("lilian76@example.net");
    cy.get('[data-id="input-password"]').type("password");
    cy.get('[data-id="btn-login"]').click();

    //masuk ke /price
    cy.visit('/price')
    cy.get("h1").contains("Harga Emas Hari Ini");

    // masuk ke edit page
    cy.get('.btn-success').contains('Edit').click()
    cy.get('h4').contains('Edit Harga Emas')

    // mengganti data
    cy.get('input[name="buy"').clear()
    cy.get('input[name="buy"]').type(Math.floor(Math.random() * 900000) + 100000)
    cy.get('input[name="sell"]').clear()
    cy.get('input[name="sell"]').type(Math.floor(Math.random() * 900000) + 10000)
    cy.get('input[name="date"]').clear()
    cy.get('input[name="date"]').type(`${Math.floor(Math.random() * 30)+1}-${Math.floor(Math.random() * 12)+1}-20${Math.floor(Math.random() * 90)+10}`)
    cy.get('.btn-primary').contains('Simpan').click()

    // cek apa data berhasil diupdate
    cy.get('.alert-body').contains('Berhasil Update Data ')

    cy.get('[data-id="avatar"]').click();
    cy.get('[data-id="btn-logout"]').click();
  })

  it('user can delete data', () =>{
    cy.visit("/");
    cy.get('[data-id="input-email"]').type("lilian76@example.net");
    cy.get('[data-id="input-password"]').type("password");
    cy.get('[data-id="btn-login"]').click();

    //masuk ke /price
    cy.visit('/price')
    cy.get("h1").contains("Harga Emas Hari Ini");

    // menghapus data
    cy.get('.btn-danger').contains('Delete').click()
    cy.on('window:confirm', () => true);

    // cek apa data berhasil dihapus
    cy.get('.alert-body').contains('Berhasil Delete Data ')

    cy.get('[data-id="avatar"]').click();
    cy.get('[data-id="btn-logout"]').click();
  })
})