const result = {
    succes: ["max-length", "no-amd", "pefer-arrow-funstions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makelist(arr) {
   const failureItems = [];
   arr.forEach(element => {
    failureItems.push(`<li class="text-warning">${element}</li>`);
   });

   return failureItems;
}

const failureList = makelist(result.failure);

console.log(failureList.join("\n"));


