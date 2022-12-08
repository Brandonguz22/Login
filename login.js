let Username = (prompt("Inserte un Usuario"))
let Password = (prompt("Inserte una Contraseña"))


if (Username != "bguz" , Password != "12345") 
{
    do
    {
        alert("El Usuario y/o Contraseña estan incorrectos");
        Username = prompt("Inserte su Usuario")
        Password= prompt("Inserte su Contraseña")
    }
    while (Username !="bguz" , Password !="12345")
}
else (Username == "bguz" && Password == "12345")
{
    alert("El Usuario y la Contraseña estan correctos")
}


