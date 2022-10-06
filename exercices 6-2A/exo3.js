//let age_correct=false;
let age=0;
while (age<=18)
{
    age=parseInt(prompt("Enter your age"));
    if (age<=0)
    {
        alert("It is impossible, age cannot be negative. Try again!");
    } else if (age>100)
    {
        alert("Wow! Your age is " + age + ". Congrats!");
        //age_correct=true;
    } else{
        alert("Your age is " + age + ". It's OK, you may proceed.");
        //age_correct=true;
    }
}
