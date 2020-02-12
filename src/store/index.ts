type InitialStoreType = {
    users: string[]
    loading: boolean
    error: null | string
}

const initialStore: InitialStoreType = {
    users: [],
    loading: false,
    error: null
}

export default  initialStore