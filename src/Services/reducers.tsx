export interface actionType {
    type: string;
    payload?: any;
}

export interface stateType {
    id?: number;
    title: string;
    body: string;
}

const initialState: stateType[] = [];

const todoReducers = (state: stateType[] = initialState, action: actionType) => {
    switch (action.type) {
        case "setTodo":
            return [...action.payload];
        case "getATodo":
            return [...action.payload];
        case "addTodo":
            return [...state, ...action.payload];
        default:
            return state;
    }
};

export default todoReducers;
