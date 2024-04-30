const request = fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => {
        const data = resp.json();
        return data
    }).then(d => console.log(d.map(e => e.name)));


const axiosRequest = axios.get('https://jsonplaceholder.typicode.com/users');
axiosRequest.then((resp) => console.log(resp.data.map(e => e.name)))
