export type ProductType = {
    id: number,
    title: string,
    image: string | null,
    description: string,
    value: number,
    weight: string,
    dimensions: string,
    category_id: number,
    created_at: Date | null,
    updated_at: Date | null,
    category: {
        id: number,
        title: string,
        description: string,
        image: string | null,
        created_at: Date | null,
        updated_at: Date | null
    }
}