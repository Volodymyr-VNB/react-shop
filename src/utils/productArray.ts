type Product = {
    id: number
    title: string
    description: string
    capacity: string
    type: string
    price: number
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 1500,
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '256',
        price: 1000,
    },
    {
        id: 3,
        title: 'iPhone XS',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: '512',
        price: 1500,
    },
    {
        id: 4,
        title: 'iPhone XS2',
        description: 'This is iPhone XS2',
        type: 'phone',
        capacity: '512',
        price: 10,
    },
    {
        id: 5,
        title: 'iPhone XS3',
        description: 'This is iPhone XS3',
        type: 'phone',
        capacity: '512',
        price: 500,
    },
    {
        id: 6,
        title: 'iPhone XS4',
        description: 'This is iPhone XS4',
        type: 'phone',
        capacity: '512',
        price: 1500,
    },
]
export default productsArray
