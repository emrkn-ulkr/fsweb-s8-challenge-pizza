import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import LastStage from "./LastStage";

test("LastStage bileşeni location.state ile gelen verileri doğru gösteriyor", () => {
    // Bileşenin beklediği mock state
    const mockState = {
        pizzaSize: "M",
        pizzaDough: "İp ince hamur",
        checkPizzaToppings: ["Mantar", "Zeytin", "Biber"],
        totalToppingPrice: 25,
        allTotalPrice: 120,
        note: "Extra acı olsun"
    };

    render(
        <MemoryRouter initialEntries={[{ pathname: "/lastStage", state: mockState }]}>
            <Routes>
                <Route path="/lastStage" element={<LastStage />} />
            </Routes>
        </MemoryRouter>
    );

    // Başlıkları kontrol et
    expect(screen.getByText(/SİPARİŞ ALINDI/i)).toBeInTheDocument();
    expect(screen.getByText(/Teknolojik Yemekler/i)).toBeInTheDocument();
    expect(screen.getByText(/lezzetin yolda/i)).toBeInTheDocument();

    // Pizza boyutu ve hamur
    const boyutLi = screen.getByText(/Boyut:/i).closest('li');
    // @ts-ignore
    expect(boyutLi.querySelector('strong').textContent).toBe(mockState.pizzaSize);

    const hamurLi = screen.getByText(/Hamur:/i).closest('li');
    // @ts-ignore
    expect(hamurLi.querySelector('strong').textContent).toBe(mockState.pizzaDough);

    // Ek malzemeler
    const ekMalzemelerLi = screen.getByText(/Ek Malzemeler:/i).closest('li');
    mockState.checkPizzaToppings.forEach(item => {
        // @ts-ignore
        expect(ekMalzemelerLi.textContent).toContain(item);
    });

    // Sipariş notu
    const notLi = screen.getByText(/Sipariş notu:/i).closest('li');
    // @ts-ignore
    expect(notLi.textContent).toContain(mockState.note);

    // Fiyatlar
    const secimlerLi = screen.getByText(/Seçimler:/i).closest('li');
    // @ts-ignore
    expect(secimlerLi.textContent).toContain(mockState.totalToppingPrice.toString());

    const toplamLi = screen.getByText(/Toplam:/i).closest('li');
    // @ts-ignore
    expect(toplamLi.textContent).toContain(mockState.allTotalPrice.toString());
});
