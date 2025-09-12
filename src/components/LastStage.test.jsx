import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import LastStage from "./LastStage";

test("LastStage bileşeni location.state ile gelen verileri doğru gösteriyor", () => {
    // Mock state verisi
    const mockState = {
        pizzaSize: "M",
        hamur: "İnce",
        checkedItems: ["Mantar", "Zeytin", "Biber"],
        ekMalzemeUcretToplamı: 25,
        allTotal: 120,
        not: "Extra acı olsun"
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
    expect(boyutLi.querySelector('strong').textContent).toBe("M");

    const hamurLi = screen.getByText(/Hamur:/i).closest('li');
    // @ts-ignore
    expect(hamurLi.querySelector('strong').textContent).toBe("İnce");

    // Ek malzemeler
    const ekMalzemelerLi = screen.getByText(/Ek Malzemeler:/i).closest('li');
    mockState.checkedItems.forEach(item => {
        // @ts-ignore
        expect(ekMalzemelerLi.textContent).toContain(item);
    });

    // Sipariş notu
    const notLi = screen.getByText(/Sipariş notu:/i).closest('li');
    // @ts-ignore
    expect(notLi.textContent).toContain(mockState.not);

    // Fiyatlar
    const secimlerLi = screen.getByText(/Seçimler:/i).closest('li');
    // @ts-ignore
    expect(secimlerLi.textContent).toContain(mockState.ekMalzemeUcretToplamı.toString());

    const toplamLi = screen.getByText(/Toplam:/i).closest('li');
    // @ts-ignore
    expect(toplamLi.textContent).toContain(mockState.allTotal.toString());
});
