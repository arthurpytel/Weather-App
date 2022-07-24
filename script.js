let clima = {
    apikey:"73c391592b8a074e83e729b418700cb1",
    fetchClima:function(cidade){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + cidade 
            + "&units=metric&appid=" 
            + this.apikey)
            .then(response => response.json())
            .then(data => this.displayClima(data));
    },
    displayClima:function(data){
        const {name}=data;
        const {icon,description}=data.weather[0];
        const {temp,humidity}=data.main;
        const {speed}=data.wind;
        document.querySelector(".texto_cidade").innerText="Weather in " + name;
        document.querySelector(".icone_descricao").src=
        "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".texto_descricao").innerText=description;
        document.querySelector(".texto_temperatura").innerText=temp+" °C";
        document.querySelector(".texto_humidade").innerText="Humidity: "+humidity+" %";
        document.querySelector(".texto_velocidade").innerText="Wind Speed: "+speed+" Km/h";
        document.querySelector(".dados_texto").classList.remove("carregar");
        document.body.style.backgroundImage="url('https://source.unsplash.com/random/?" + name + ")"
    },

    pesquisar:function(){
        this.fetchClima(document.querySelector(".barra_pesquisa").value);
    },

};

document.querySelector(".pesquisa button").addEventListener("click",function(){
    clima.pesquisar();
});

document.querySelector(".barra_pesquisa").addEventListener("keyup",function(evento){
    if (evento.key=="Enter"){
        clima.pesquisar();
    }
})

