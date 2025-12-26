type Category = {
    id: number;
    title: string;
    count: number;
    image: string;
    overlayColor: string;
};

export const categories: Category[] = [
    {
        id: 1,
        title: 'Panificados',
        count: 8,
        image: '/pan.png',
        overlayColor: 'bg-[#e8c6cf]/80',
    },
    {
        id: 2,
        title: 'Postres',
        count: 12,
        image: '/lemon-pie.png',
        overlayColor: 'bg-[#d7c07a]/80',
    },
    {
        id: 3,
        title: 'Catering',
        count: 6,
        image: '/catering.jpg',
        overlayColor: 'bg-[#f1b7b7]/80',
    },
    {
        id: 4,
        title: 'Box Especiales',
        count: 4,
        image: '/box.jpg',
        overlayColor: 'bg-[#d59b8c]/80',
    },
];