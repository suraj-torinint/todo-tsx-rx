import axios, { AxiosResponse } from "axios";

export interface todoDatatype {
    id?: number;
    title: string;
    body: string;
}

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 5000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
    // put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
    delete: (url: string) => instance.delete(url).then(responseBody),
};

const TodoData = {
    getTodos: (): Promise<todoDatatype[]> => requests.get("todos"),
    getATodo: (id: number): Promise<todoDatatype> => requests.get(`todos/${id}`),
    createTodo: (post: todoDatatype): Promise<todoDatatype> => requests.post("todos", post),
    // updatePost: (post: todoDatatype, id: number): Promise<todoDatatype> => requests.put(`product/${id}`, post),
    // deletePost: (id: number): Promise<void> => requests.delete(`product/${id}`),
};

export default TodoData;
