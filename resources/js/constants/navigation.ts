import { HOME_ROUTES } from "./routes";

export const HEADER_TOP_LINKS = [
    {
        id: 1,
        name: "Каталог",
        url: HOME_ROUTES.CATALOG,
    },
    {
        id: 2,
        name: "Рассрочка",
        url: HOME_ROUTES.INSTALLMENT_PLAN,
    },
    {
        id: 3,
        name: "Trade-In",
        url: HOME_ROUTES.TRADE_IN,
    },
    {
        id: 4,
        name: "Новости",
        url: HOME_ROUTES.NEWS,
    },
    {
        id: 5,
        name: "Покупателям",
        url: HOME_ROUTES.BUYERS,
    },
] as const;

export const HEADER_NAV_LINKS = [
    {
        id: 1,
        name: "PlayStation",
        url: "",
    },
    {
        id: 2,
        name: "Xbox",
        url: "",
    },
    {
        id: 3,
        name: "Nintendo",
        url: "",
    },
    {
        id: 4,
        name: "Steam",
        url: "",
    },
    {
        id: 5,
        name: "Apple",
        url: "",
    },
    {
        id: 6,
        name: "Samsung",
        url: "",
    },
    {
        id: 7,
        name: "Dyson",
        url: "",
    },
    {
        id: 8,
        name: "Игры",
        url: "",
    },
    {
        id: 9,
        name: "Подписки",
        url: "",
    },
    {
        id: 10,
        name: "Аксессуары",
        url: "",
    },
] as const;
