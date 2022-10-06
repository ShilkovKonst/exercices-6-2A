document.open();   
for (let i=0; i<10; i++)
{     
    if (i==0)   //header-horizontal
    {
        document.write("<tr>");
        for (let j=0; j<10; j++)
        {
            document.write("<th><p class='header'> " + j + " </p></th>");
        }
        document.write("</tr>");
    }
    else         
    {
        document.write("<tr><th><p class='header'> " + i + " </p></th>");       //header-vertical
        for (let j=1; j<10; j++)                                                //body
        {                                                                       //
            let multi=i*j;                                                      //
            document.write("<td><p class='body'> " + multi + " </p></td>");     //     
        }                                                                       //
        document.write("</tr>");
    }
}
document.close();