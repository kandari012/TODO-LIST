
let category=$(".category");

for (let i of category) {
   let text=$(i).text();
   if(text=="personal")
   {
       $(i).css("background-color","red");
   }
   if(text=="school")
   {
       $(i).css("background-color","orange");
   }
   if(text=="work")
   {
       $(i).css("background-color","yellow");
   }
   if(text=="cleaning")
   {
       $(i).css("background-color","grey");
   }
   if(text=="other")
   {
       $(i).css("background-color","green");
   }
}

