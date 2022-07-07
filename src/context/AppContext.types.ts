export type StateType = {
    user: {
        id: number,
        name: string,
        email: string
    },
    cart: [
        {
            title: string,
            id: number,
            image: string,
            value: number,
        }
    ]
}

export type ActionType = {
    payload?: any
}