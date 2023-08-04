nombre = prompt('Ingresa tu nombre');
edad = parseInt(prompt('Ingresa tu edad'));
alert(`${nombre}, Has vivido: ${edad * 365} dias`);

GetDaysLived = () =>
{
    nombre = document.getElementById('name').value;
    edad = parseInt(document.getElementById('years-old').value);

    document.getElementById('time-lived').textContent = `${nombre}, Has vivido: ${edad * 365} dias`;
}