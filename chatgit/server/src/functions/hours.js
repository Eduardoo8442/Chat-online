const hours = (req, res) => {
    const data = new Date();
   const horas = data.getHours() < 10 ? `0${data.getHours()}` : data.getHours();
   const minutos = data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes();
    return `${horas}:${minutos}`;
}

module.exports = hours;