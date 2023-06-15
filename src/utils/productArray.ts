export type Product = {
    id: number
    title: string
    description: string
    capacity: string
    type: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 1500,
        image: '/images/img1.webp',
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '256',
        price: 1000,
        image: '/images/img2.webp',
    },
    {
        id: 30,
        title: 'iPhone XS',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: '512',
        price: 1500,
        image: '/images/img3.webp',
    },
    {
        id: 4,
        title: 'iPhone XS2',
        description: 'This is iPhone XS2',
        type: 'phone',
        capacity: '512',
        price: 10,
        image: '/images/img4.webp',
    },
    {
        id: 50,
        title: 'iPhone XS3',
        description: 'This is iPhone XS3',
        type: 'phone',
        capacity: '512',
        price: 500,
        image: '/images/img5.webp',
    },
    {
        id: 60,
        title: 'iPhone XS4',
        description: 'This is iPhone XS4',
        type: 'phone',
        capacity: '512',
        price: 1500,
        image: '/images/img6.webp',
    },
]



    export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default productsArray
