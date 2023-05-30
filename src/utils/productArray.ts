type Product = {
    title: string
    description: string
    capacity: string
    type: string
    price: number
}

const productsArray: Product[] = [
    {
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 1500,
    },
    {
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '256',
        price: 1000,
    },
    {
        title: 'iPhone XS',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: '512',
        price: 1500,
    },
    {
        title: 'iPhone XS2',
        description: 'This is iPhone XS2',
        type: 'phone',
        capacity: '512',
        price: 10,
    },
    {
        title: 'iPhone XS3',
        description: 'This is iPhone XS3',
        type: 'phone',
        capacity: '512',
        price: 500,
    },
    {
        title: 'iPhone XS4',
        description: 'This is iPhone XS4',
        type: 'phone',
        capacity: '512',
        price: 1500,
    },
]
export default productsArray