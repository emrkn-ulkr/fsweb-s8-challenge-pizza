describe("Order Form Tests", () => {
    beforeEach(() => {
        // Uygulamayı her testten önce açıyoruz
        cy.visit("http://localhost:5173"); // 🚨 senin local adresine göre değişebilir
    });

    it("Inputa metin girilebilmeli", () => {
        cy.get("input[placeholder='İsminizi Giriniz']")
            .type("Emirkan") // isim yazıyoruz
            .should("have.value", "Emirkan"); // yazılan değer doğru mu kontrol
    });

    it("Birden fazla malzeme seçilebilmeli", () => {
        // mesela domates ve soğan seçenekleri varsa
        cy.contains("Domates").click(); // label tıklayınca checkbox işaretlenmeli
        cy.contains("Soğan").click();

        // Seçim kontrolü
        cy.get("input[type='checkbox']").first().should("be.checked");
        cy.get("input[type='checkbox']").eq(1).should("be.checked");
    });

    it("Form gönderilebilmeli", () => {
        // isim doldur
        cy.get("input[placeholder='İsminizi Giriniz']").type("Test Kullanıcı");

        // pizza sayısı arttır
        cy.contains("+").click().click(); // 2 pizza seçildi diyelim

        // malzeme seç
        cy.contains("Domates").click();

        // buton aktif mi
        cy.get("button[type='submit']").should("not.be.disabled");

        // submit et
        cy.get("button[type='submit']").click();

        // konsola response yazıldığı için sadece başarılı POST bekliyoruz
        // burada network kontrolü yapabiliriz
        cy.intercept("POST", "https://reqres.in/api/users").as("postPizza");

        // formu tekrar submit et
        cy.get("button[type='submit']").click();

        // request yakalandı mı?
        cy.wait("@postPizza").its("response.statusCode").should("eq", 201);
    });
});