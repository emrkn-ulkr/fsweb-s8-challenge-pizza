import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import OrderForm from "./OrderForm";
import { vi } from "vitest";

// navigate fonksiyonunu mocklamak
const mockedNavigate = vi.fn();

// useNavigate'i override et
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useNavigate: () => mockedNavigate,
    };
});

describe("OrderForm bileşeni", () => {
    beforeEach(() => {
        mockedNavigate.mockClear(); // Her test öncesi temizle
    });

    it("Tüm alanlar doldurulduğunda /lastStage sayfasına yönlendiriyor", () => {
        render(
            <MemoryRouter>
                <OrderForm />
            </MemoryRouter>
        );

        // Boyut seçimi
        fireEvent.click(screen.getByText("M"));

        // Hamur seçimi
        fireEvent.mouseDown(screen.getByLabelText("Hamur Seçiniz")); // Select aç
        fireEvent.click(screen.getByText("İnce Hamur")); // Seç

        // Ek malzeme seçimi
        fireEvent.click(screen.getByLabelText("Sosis"));

        // Sipariş notu
        fireEvent.change(screen.getByPlaceholderText("Siparişine eklemek istediğin bir not var mı ?"), {
            target: { value: "Extra acı olsun" },
        });

        // Sipariş ver butonuna tıkla
        fireEvent.click(screen.getByText("Sipariş Ver"));

        // navigate çağrıldığını kontrol et
        expect(mockedNavigate).toHaveBeenCalledWith("/lastStage", {
            state: {
                pizzaSize: "M",
                pizzaDough: "İp ince hamur",
                checkPizzaToppings: ["Sosis"],
                totalToppingPrice: 5,
                allTotalPrice: 115.5,
                note: "Extra acı olsun",
            },
        });
    });

    it("Alanlar eksikse alert gösteriyor", () => {
        window.alert = vi.fn();

        render(
            <MemoryRouter>
                <OrderForm />
            </MemoryRouter>
        );

        // Hiçbir alan seçmeden tıkla
        fireEvent.click(screen.getByText("Sipariş Ver"));
        expect(window.alert).toHaveBeenCalledWith("Lütfen Hamur türünü seçin!");
    });
});
