//C'est mon variant de solution d'exercice 4. Il n'est pas très flexible et assez hardcoded, mais sans consulter avec internet c'est tous que j'ai pu faire.

/* document.open();
for (let i=0; i<10; i++)
{
  let j=0;
  do
  {
    let sum=j+i*10;
    if (sum==0 || sum==1 || sum==2 || sum==3 || sum==5 || sum==7)
      document.write("<p>" + sum + "</p>");
    else 
      if (sum%2!=0 && sum%3!=0 && sum%5!=0 && sum%7!=0)
        document.write("<p>" + sum + "</p>");
    j++;
  } while(j<10);
}
document.close(); */


//C'est un des solutions d'internet qui j'ai compris

document.open();
function isPrime(num) 
{
  if(num < 2) 
    return false;
  for (var j = 2; j < num; j++) 
  {
    if(num%j==0)
      return false;
  }
  return true;
}
let i=0;
do{    
  if(isPrime(i)) 
    document.write("<p>" + i + "</p>");
  i++
} while(i<100);
document.close(); 