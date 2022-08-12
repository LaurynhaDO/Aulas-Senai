let listadepecas = ["pneu" , " porta" , " janela" , " "];
peca = prompt("digite o nome da peça nova");
nometamanho = peca.length;

if(nometamanho < 3)
{
	alert("o nome possui " + nometamanho + " caracteres, são permitidos 3 caracteres mínimos. Nome incorreto");
}

else
{	
 peso = prompt("digite o peso da peça em gramas");

if(peso > 100)
{
	alert("peso não permitido");
}
else
{
	alert("peca cadastrada com sucesso");
	listadepecas = listadepecas + peca;
	alert(listadepecas);
}
}