export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const incrementFive = number => {
    return {
        type: 'INCREMENTFIVE',
        payload: number
    }
}

export const login = () => {
    return {
        type: 'SIGN_IN'
    }
}