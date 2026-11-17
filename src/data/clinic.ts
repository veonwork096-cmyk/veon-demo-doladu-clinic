// Facts only from veon/client.json and design/concept.md. Nothing here is invented.

export const SOON = "Розділ у розробці";
export const SOON_BOOKING = "Онлайн-заявка з'явиться в повній версії сайту";

export const contacts = {
  phoneMain: { display: "+380 77 777 54 23", href: "tel:+380777775423" },
  phoneSecond: { display: "0 800 307 070", href: "tel:+380800307070" },
  email: { display: "doladuclinic@gmail.com", href: "mailto:doladuclinic@gmail.com" },
  street: "вул. Другетів, 103",
  city: "Ужгород",
  postal: "88002",
  hours: "Пн–Нд 9:00–19:00",
  map: "https://www.google.com/maps/search/?api=1&query=%D0%B2%D1%83%D0%BB.%20%D0%94%D1%80%D1%83%D0%B3%D0%B5%D1%82%D1%96%D0%B2%2C%20103%2C%20%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4",
  instagram: "https://www.instagram.com/doladu_clinic/",
  tiktok: "https://www.tiktok.com/@doladu_clinic",
} as const;

export type Group = "surgery" | "kids" | "aesthetic" | "diagnostics";

export const groups: { id: Group | "all"; label: string }[] = [
  { id: "all", label: "Усі" },
  { id: "surgery", label: "Хірургія" },
  { id: "kids", label: "Дітям" },
  { id: "aesthetic", label: "Естетика" },
  { id: "diagnostics", label: "Діагностика й консультації" },
];

// products_services[0]: 14 categories and their service counts (grouping is an assumption, see concept.md).
export const directions: { name: string; count: number; groups: Group[] }[] = [
  { name: "Консультації", count: 29, groups: ["diagnostics"] },
  { name: "Баріатрична хірургія", count: 2, groups: ["surgery"] },
  { name: "Гінекологія", count: 22, groups: ["surgery"] },
  { name: "Дитяча урологія", count: 23, groups: ["surgery", "kids"] },
  { name: "Дитяча хірургія", count: 15, groups: ["surgery", "kids"] },
  { name: "Ендоскопія", count: 25, groups: ["diagnostics"] },
  { name: "Загальна хірургія", count: 20, groups: ["surgery"] },
  { name: "Мамологія", count: 14, groups: ["surgery"] },
  { name: "Отоларингологія", count: 42, groups: ["surgery", "kids"] },
  { name: "Пластична хірургія", count: 19, groups: ["surgery", "aesthetic"] },
  { name: "Подологія", count: 18, groups: ["aesthetic"] },
  { name: "Проктологія", count: 13, groups: ["surgery"] },
  { name: "УЗ-діагностика", count: 15, groups: ["diagnostics"] },
  { name: "Урологія", count: 26, groups: ["surgery"] },
];

// products_services[2], in ascending order.
export const prices: { name: string; price: string; from: boolean; note?: string }[] = [
  { name: "Консультація лікаря", price: "600", from: true, note: "гінеколог — 800 ₴, онлайн — 650 ₴" },
  { name: "Відео­гастро­скопія", price: "1 500", from: false },
  { name: "Відео­колоно­скопія", price: "2 300", from: false },
  { name: "Тонзилектомія", price: "18 000", from: false },
  { name: "Лабіопластика", price: "50 000", from: false },
  { name: "Рукавна резекція шлунка", price: "150 000", from: false },
  { name: "Ринопластика", price: "275 000", from: true },
];

// S-F002, photos and their order checked against audit/screens/uk-desktop-full.png.
export const doctors: { name: string; role: string; photo: string }[] = [
  { name: "Андрій Якобчук", role: "Пластичний хірург", photo: "andriy-yakobchuk" },
  { name: "Дмитро Чеканов", role: "Дитячий хірург, дитячий уролог, загальний хірург", photo: "dmytro-chekanov" },
  { name: "Олександр Гнатюк", role: "Хірург-гінеколог, онкогінеколог", photo: "oleksandr-hnatiuk" },
  { name: "Марина Бучук", role: "Лікар-гінеколог", photo: "maryna-buchuk" },
  { name: "Андрій Аркатов", role: "Уролог, андролог", photo: "andriy-arkatov" },
  { name: "Михайло Гаврилець", role: "Проктолог, загальний хірург", photo: "mykhailo-havrylets" },
  { name: "Альона Куценко", role: "Мамолог-онколог", photo: "alona-kutsenko" },
  { name: "Наталія Попович", role: "Дорослий і дитячий отоларинголог", photo: "nataliya-popovych" },
];
