import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Главная" },
    { href: "#about-us", label: "О Нас" },
    { href: "#products", label: "Товары" },
    { href: "#contact-us", label: "Связь" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1000+', label: 'Брендов' },
    { value: '500+', label: 'Магазинов' },
    { value: '25000+', label: 'Клиентов' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Spike Force",
        price: "₽20.020",
    },
    {
        imgURL: shoe5,
        name: "Waffle Racer",
        price: "₽21.020",
    },
    {
        imgURL: shoe6,
        name: "Spike Max",
        price: "₽22.020",
    },
    {
        imgURL: shoe7,
        name: "Cortez",
        price: "₽23.020",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Бесплатная доставка>",
        subtext: "Наслаждайтесь шоппингом благодаря нашей бесплатной доставке."
    },
    {
        imgURL: shieldTick,
        label: "Безопасные Платежи",
        subtext: "Безопасные транзакции с различными методами оплаты."
    },
    {
        imgURL: support,
        label: "Готовы помочь с выбором",
        subtext: "Наша команда готова проконсультировать вас перед покупкой."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Сергей В.',
        rating: 5.0,
        feedback: "Внимание к деталям и качество исходного продукта превысило все ожидания. Рекомендую!"
    },
    {
        imgURL: customer2,
        customerName: 'Елена М.',
        rating: 5.0,
        feedback: "Продукт не только оправдал, но и превзошел мои ожидания. Я непременно буду тут покупать ещё!"
    }
];


export const footerLinks = [
    {
        title: "Товары",
        links: [
            { name: "Spike Force 1", link: "/" },
            { name: "Spike Max 1", link: "/" },
            { name: "Gordan 1", link: "/" },
            { name: "Spike Force 2", link: "/" },
            { name: "Waffle Racer", link: "/" },
            { name: "Cortez", link: "/" },
        ],
    },
    {
        title: "Помощь",
        links: [
            { name: "О нас", link: "/" },
            { name: "ЧАВО", link: "/" },
            { name: "Как это работает", link: "/" },
            { name: "Политика конфиденциальности", link: "/" },
            { name: "Политика платежей", link: "/" },
        ],
    },
    {
        title: "Связь",
        links: [
            { name: "customer@spike.com", link: "mailto:customer@spike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
