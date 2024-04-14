export const apiFact = () => {
    return fetch('https://catfact.ninja/fact?max_length=140')
    .then(response => response.json())
    .then(data => {
        console.log(data.fact);
        return data.fact;
    })
    .catch(error => {
        console.error('Facts was not found, sorry :c', error);
        return 'unknown';
    });
};
  