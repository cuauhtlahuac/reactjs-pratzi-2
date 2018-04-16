var a = [2,4,6,7,9];
//forEach usa dos datos (v,i);
a.forEach((v)=>{console.log(v)});
//for ECah no retorna datos.
a.forEach((v)=>{console.log(v);return v});
//forEach no te cambia el valor original en un array
a.forEach((v)=>{console.log(v); v = 1 ; return v})
//map() si te permite retornar un resultado
a.map((v)=>{console.log(v);return v});
//si te permite cambiar el valor pero si es array no lo guarda en la memoria
a.map((v)=>{console.log(v); v = 1 ; return v})
//si son objetos si cambia el valor en la memoria
let b= [{a:1},{e:2}]
b.map(v=>v.a)
b.map(v=>{v.a =1 ; return v} )