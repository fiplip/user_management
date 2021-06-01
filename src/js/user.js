const Users = {
    get() {
        let users = fetch('https://reqres.in/api/users')
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data.data
        })
        return users

        //Gör samma som ovanför? trasig ?
        // const response = await fetch('https://reqres.in/api/users')
        // const data = await response.json()
        // return data.data

        //Gör samma sak? trasig
        // const data = await (await fetch('https://reqres.in/api/users')).json()
        // return data.data

    }
}