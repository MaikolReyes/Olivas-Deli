type Category = {
    id: number;
    title: string;
    slug: string;
    count: number;
    image: string;
    overlayColor: string;
};

export const categories: Category[] = [
    {
        id: 1,
        title: 'Panificados',
        slug: "panificados",
        count: 8,
        image: '/panificados/pan-cereales.png',
        overlayColor: 'bg-[#e8c6cf]/80',
    },
    {
        id: 2,
        title: 'Postres',
        slug: "postres",
        count: 12,
        image: '/postres/tarta-frutillas.png',
        overlayColor: 'bg-[#d7c07a]/80',
    },
    {
        id: 3,
        title: 'Catering',
        slug: "catering",
        count: 6,
        image: '/catering/figazzas.png',
        overlayColor: 'bg-[#f1b7b7]/80',
    },
    {
        id: 4,
        title: "Box's Especiales",
        slug: "box-especiales",
        count: 4,
        image: '/box/desayuno.png',
        overlayColor: 'bg-[#d59b8c]/80',
    },
];