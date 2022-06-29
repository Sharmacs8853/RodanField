var data=[

    { img_url:"https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-01.jpg?context=bWFzdGVyfHJvb3R8MTAzOTV8aW1hZ2UvanBlZ3xoZWEvaGU1LzExMDA0MzY2NzE2OTU4LmpwZ3xkOTYyNTBmYjVmNDkwYzNhNDJiMDljMTU2OTFkZWZiZTkwNTMwOWUyMDZhZjE1YjU2MGJmYjVkYzZmYzkwMWFk",
      discount:"10% OFF",
      offer:"Get 10% off every order, starting with your first",
    },
   
   {  img_url: "https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-02.jpg?context=bWFzdGVyfHJvb3R8OTMwOHxpbWFnZS9qcGVnfGhmZC9oMGMvMTEwMDQzNjY3ODI0OTQuanBnfDdmMzUyNGIxZDAwMjkxNmNiNjJmYWUwYzA2NjllNDFlNTNhYTMyYzBiYjA3ZjFlNWIwNGYwY2Q3NDFiMjBkOGM",
      discount:"FREE SHIPPING",
      offer:"Get free shipping on orders $80+",
    },
   
    { img_url:"https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-03.jpg?context=bWFzdGVyfHJvb3R8MTIyMDF8aW1hZ2UvanBlZ3xoZTIvaDViLzExMDA0MzY2ODQ4MDMwLmpwZ3w5ZDA3ZWMzY2I4YWFlZGRhNDM1YWRjNzlmODQ4OGFhNmJkMTA3NWMzMTI5OWMwNjQ5MGE3MjZhNGM1MDY5ZTli",
    discount:"FREE PERKS PRESENT" ,
    offer:"Get a free gift ($50+ retail price) with your 2nd order placed 30-90 days after enrollment",
   },
   
   { img_url:"https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-04.jpg?context=bWFzdGVyfHJvb3R8MTI1MDl8aW1hZ2UvanBlZ3xoZjMvaGQ3LzExMDA0MzY2OTEzNTY2LmpwZ3xkMWRmNjQ0MDhmMTg3ZThlZmE3OWNjMmQ3YjQ3ODY3NWIzYmJiNmI1ZGQ5ZGQxODFkYWU3ZmYwZjkyMmQ0ZjA0",
   discount:"OFFERS + REWARDS",
   offer:"Get exclusive access to personalized offers + rewards",
   },
   { img_url:"https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-05.jpg?context=bWFzdGVyfHJvb3R8MTAwNzl8aW1hZ2UvanBlZ3xoOWEvaGVkLzExMDA0MzY2OTc5MTAyLmpwZ3xiNDQ3NjE1NWIwMDY1MTI1N2RjMjk0Y2FhNTYxMDk1N2M4YjA2MjA1OTgwZTcyMTg3Y2E0ODM5Y2NlN2M0MjE4",
   discount:"FLEX SUBSCRIPTION",
   offer:"Get convenient delivery of your subscription cart every 60 days. Adjust or cancel any time.",
   },
   
   { img_url:"https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-06.jpg?context=bWFzdGVyfHJvb3R8MTIwNzh8aW1hZ2UvanBlZ3xoNDcvaDgyLzExMDA0MzY3MDQ0NjM4LmpwZ3wxZDZlYzA0MTc3M2I4OWY2NDU5NTZkMTA5ZGNkYTFkODRhOWZlM2FmOTQ3YTEyNzgyNjhkYzI5YWJjODE1M2Zj",
   discount:"CONSULTANT",
   offer:"Get personalized recommendations, advice, help & more",
   }
   ];
   
   
   data.map(function(elem){
   
       var div =document.createElement("div");
       
       var img = document.createElement("img");
       img.src = elem.img_url;
       img.style.width = '350px';
       img.style.height = '350px';
       var name = document.createElement("h3");
       name.textContent = elem.discount;
       name.style.fontFamily="HCoGothamSSmRegular,Arial, Sans-Serif";
       name.style.fontWeight="lighter";
       var d= document.createElement("p");
       d.innerText = elem.offer;
       // d.font-family: HCoGothamSSmSemiBold,Arial,Sans-Serif;
       // font-family:,Arial,Sans-Serif;
       // font-size: 1.4rem;
       // font-weight: 300;
       d.style.color="#222222";
       d.style.lineheight="24px";
      
       d.style.fontFamily = " HCoGothamSSmRegular,Arial, Sans-Serif";
       
       div.append(img, name, d);
   
       document.querySelector("#box").append(div);
   
   });
   
   
   
   
   