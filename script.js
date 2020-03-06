$("button").click(function(){
    let age=$(".class1").val();
    let wage=$(".class2").val();
    let car=$(".class3").val();
    $("p").text(`You will be ${age (age)+10} at the year of 2030. You will have ${wage (wage)*10} amount of money by 2030. That means you will have a ${car}`);
});

