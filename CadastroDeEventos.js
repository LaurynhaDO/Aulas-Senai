let data = new Date();
let dia = data.getDate();
let mes = data.getMonth() +1;
let ano = data.getFullYear();

let lista = ["Pedro ","Lucas ","João ","Marcos ","Luan "," "];

lista = lista+prompt("digite o nome do participante");


	idade = prompt("digite a idade do participante");
	
	if(idade < 18)
{
	alert("cadastro não permitido pra menores de 18 anos");
	
}

else
{
	let anoevento = prompt("digite o ano do evento");
if(anoevento < ano)
{
	alert("Data invalida");
}

else 
{
	let mesevento = prompt("digite o mes do evento");

if(anoevento == ano && mesevento < mes)
{
 	alert("data invalida");	
}
else
{
	let diaevento = prompt("digite o dia do evento");

if(anoevento == ano && mesevento == mes && diaevento < dia)
{
	alert("data invalida")
}
else
{
	alert("cadastro realizado com sucesso");
	alert(lista);
}
}
}
}