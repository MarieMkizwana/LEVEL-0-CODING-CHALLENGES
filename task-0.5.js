function area(num1, num2, num3)
{
    var par = (num1 + num2 + num3) / 2;
    var area = Math.sqrt(par *((par - num1) * (par - num2)* (par - num3)));
    return area

}
console.log(area(10, 10, 10));