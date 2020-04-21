let message = prompt('Please tpye out a message');

const uniqueChara = (msg) => {

   let sep = [];

   msg.split("").forEach(x => {
       if (!sep[x]) {
           sep[x] = 1; 
       } else {
           sep[x]++;
       } 
   });

   for (let i = 0; i < msg.length - 1; i++) {
       let x = msg[i];
       if (sep[x] == 1)
       return x;
   }
}

console.log(uniqueChara(message));