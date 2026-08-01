async function fetch_languages_data () {
    const resp = await fetch('./data/languages.json', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })

    return resp.json();
}

export default fetch_languages_data;