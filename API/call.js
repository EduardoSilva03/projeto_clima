/*
www.weatherapi.com
API key = 95134c8ca7c342ab9bb00912252904
Base url: http://api.weatherapi.com/v1
*/

function buscar() {
    const cidade = document.getElementById("cidade").value;

    axios.get(`http://api.weatherapi.com/v1/current.json?key=95134c8ca7c342ab9bb00912252904&q=${cidade}`)
        .then(response => {
            console.log(response.data);
            const nomeCidade = response.data.location.name;
            const estadoCidade = response.data.location.region;
            const paisCidade = response.data.location.country;
            const localtimeCidade = response.data.location.localtime;
            const tbody = document.querySelector("tbody");
            tbody.innerHTML = `<tr><td>${nomeCidade}</td><td>${estadoCidade}</td><td>${paisCidade}</td><td>${localtimeCidade}</td></tr>`;
        })
        .catch(error => {
            console.error(error);
        });
}