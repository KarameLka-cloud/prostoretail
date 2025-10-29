import { ROUTES } from "@constants/routes";

export const HEADER_TOP_LINKS = [
    {
        id: 1,
        name: "Гарантия",
        path: ROUTES.GUARANTEE,
    },
    {
        id: 2,
        name: "Кредит",
        path: ROUTES.CREDIT,
    },
    {
        id: 3,
        name: "Контакты",
        path: ROUTES.CONTACTS,
    },
    {
        id: 4,
        name: "О нас",
        path: ROUTES.ABOUT,
    },
] as const;

export const HEADER_MAIN_LINKS = [
    {
        id: 1,
        name: "Apple",
        path: "#",
    },
    {
        id: 2,
        name: "Samsung",
        path: "#",
    },
    {
        id: 3,
        name: "Dyson",
        path: "#",
    },
    {
        id: 4,
        name: "Игровые приставки",
        path: "#",
    },
    {
        id: 5,
        name: "Гаджеты",
        path: "#",
    },
];
