describe("Order Form Tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173");
    });

    it("Inputa metin girilebilmeli", () => {
        cy.get("input[placeholder='İsminizi Giriniz']")
            .type("Emirkan")
            .should("have.value", "Emirkan");
    });

    it("Birden fazla malzeme seçilebilmeli", () => {
        cy.get("[data-cy=food-Domates] input").check();
        cy.get("[data-cy=food-Sosis] input").check();

        cy.get("[data-cy=food-Domates] input").should("be.checked");
        cy.get("[data-cy=food-Sosis] input").should("be.checked");
    });

    it("Form gönderilebilmeli - test1", () => {
        cy.get("input[placeholder='İsminizi Giriniz']").type("Test Kullanıcı");
        cy.get("input[type='radio'][value='orta']").check();
        cy.get("select").select("ince");
        cy.contains("+").click().click(); // pizza sayısı arttır

        // minimum 4 malzeme
        cy.get("[data-cy=food-Domates] input").check();
        cy.get("[data-cy=food-Sosis] input").check();
        cy.get("[data-cy=food-Pepperoni] input").check();
        cy.get("[data-cy=food-Mısır] input").check();

        cy.intercept("POST", "https://reqres.in/api/pizza").as("postPizza");

        cy.wait(50); // React state için kısa bekleme
        cy.get("[data-cy=submit-button]").should("not.be.disabled").click();

        cy.wait("@postPizza").its("response.statusCode").should("eq", 201);
    });

    it("Form gönderilebilmeli - test2", () => {
        cy.get("input[placeholder='İsminizi Giriniz']").type("Test Kullanıcı");
        cy.get("input[type='radio'][value='kucuk']").check();
        cy.get("select").select("orta");
        cy.contains("+").click(); // pizza sayısı arttır

        // minimum 4 malzeme
        cy.get("[data-cy=food-Domates] input").check();
        cy.get("[data-cy=food-Sosis] input").check();
        cy.get("[data-cy=food-Pepperoni] input").check();
        cy.get("[data-cy=food-Ananas] input").check();

        cy.intercept("POST", "https://reqres.in/api/pizza").as("postPizza");

        cy.wait(50);
        cy.get("[data-cy=submit-button]").should("not.be.disabled").click();

        cy.wait("@postPizza").its("response.statusCode").should("eq", 201);
    });
});
