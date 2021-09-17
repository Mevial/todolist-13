import axios from 'axios'

type CommonResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
}

type TodoType = {
    id: string
    title: string
    addedDate: string
    order: number

}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '49ab6c75-ab9e-4861-b120-5af838a1df3c'
    }
})

export const todolistAPI = {
    getTodos() {
        return instance.get<Array<TodoType>>('todo-lists')
    },
    createTodo() {
        return instance.post<Array<CommonResponseType<{ item: TodoType }>>>('todo-lists', {title: "dasdaffaas"})
    },
    deleteTodo() {
        return instance.delete<Array<CommonResponseType>>(`todo-lists/${"82c83e7e-e338-4026-961b-1229e7101234"}`)
    },
    updateTodoTitle(todolistId: string, title: string) {
        return instance.put<Array<CommonResponseType>>(`todo-lists/${todolistId}`, {title})
    }
}


