class Employee 
{
  constructor(name,salary)
  {
    
    this.name=name
    this.salary=salary
  }

 //  details ()
 //  {
 // console.log(this.salary,this.name)
  // }
}
Emp1=new Employee ("a",11)
//Emp1.details()
Emp2=new Employee ("b",111)
Emp3=new Employee ("c",1111)
Emp4=new Employee ("d",111111)
Emp5=new Employee ("e",11111)
let arr=[Emp1,Emp2,Emp3,Emp4,Emp5]

console.log (arr)
//let arr1=[Emp1.salary,Emp2.salary,Emp3.salary,Emp4.salary,Emp5.salary]
//console.log(arr1)
for(var i=0;i<arr.length;i++)
{
  for(var j=0;j<arr.length-1-i;j++)
  {
    if(arr[j+1].salary>arr[j].salary)
    {
      var temp= arr[j];
      arr[j]=arr[j+1];
      arr[j+1]=temp;
    }
  }
}

console.log(arr)
