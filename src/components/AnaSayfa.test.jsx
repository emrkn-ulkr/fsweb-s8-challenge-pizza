import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AnaSayfa from "./AnaSayfa";
import OrderForm from "./OrderForm"; // Yönlendirmeyi kontrol etmek için

test("ACIKTIM butonuna tıklayınca orderForm sayfasına gidiyor mu", () => {
    render(
        <MemoryRouter initialEntries={["/"]}> {/* Başlangıç yolu / */}
            <Routes>
                <Route path="/" element={<AnaSayfa />} />
                <Route path="/orderForm" element={<OrderForm />} />
            </Routes>
        </MemoryRouter>
    );

    const aciktimButton = screen.getByRole("button", { name: /aciktim/i }); // Metni "ACI KTIM" olan butonu bul
    fireEvent.click(aciktimButton); // Butona tıklama simülasyonu

    // orderForm bileşeninde geçen bir yazıyı kontrol ederek yönlendirmeyi test et
    const elements = screen.getAllByText(/Teknolojik Yemekler/i);
    expect(elements[0]).toBeInTheDocument();

});
