//Bu js dosyası uygulama açıldığında dataları çekip benim global state ime dolduracak.

import { getTodosApiAction } from "./todo.action";

export function getTodosApiRequest() {
    return async (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => {
                return dispatch(getTodosApiAction(data))
            });
    };
}