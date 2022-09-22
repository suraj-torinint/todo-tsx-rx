export interface actionType {
    type: string;
    payload: any;
}

export interface stateType {
    id?: number;
    title: string;
    body: string;
}

const initialState = [{
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
}];

const todoReducers = (state:stateType[] = initialState, action: actionType) => {
    switch (action.type) {
        case "getTodo":
            return state
        case "addTodo":
            return [state, ...action.payload]
        default:
            return state
    }
};

export default todoReducers;
