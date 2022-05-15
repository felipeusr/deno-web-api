class Http {
    _url = "http://localhost:3001";

    post(route, body={}) {
        // body opcional
        // pode-se apenas usar parâmetros
        // promessa que retorna resposta do POST
        // retorna ERRO pelo catch da promessa
        return new Promise((resolve, reject) => {
            (async ()=>{
                await fetch(this._url+route, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
                .then(response => response.json())
                .then(items => resolve(items))
                .catch(err => reject(err));
            })();
        });
    }

    get(route) {
        // promessa que retorna resposta do GET
        // retorna ERRO pelo catch da promessa
        return new Promise((resolve, reject) => {
            fetch(this._url+route)
            .then(response => response.json())
            .then(items => resolve(items))
            .catch(err => reject(err));
        });
    }

    delete(route, body={}) {
        // body opcional
        // pode-se apenas usar parâmetros
        // promessa que retorna resposta do DELETE
        // retorna ERRO pelo catch da promessa
        return new Promise((resolve, reject) => {
            fetch(this._url+route, {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            .then(response => response.json())
            .then(items => resolve(items))
            .catch(err => reject(err));
        });
    }

    put(route, body={}) {
        // body opcional
        // pode-se apenas usar parâmetros
        // promessa que retorna resposta do PUT
        // retorna ERRO pelo catch da promessa
        return new Promise((resolve, reject) => {
            (async () => {
                await fetch(this._url+route, {
                    method: "PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
                .then(response => response.json())
                .then(items => resolve(items))
                .catch(err => reject(err));
            })();
        });
    }
}

const http = new Http();