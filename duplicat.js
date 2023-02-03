const names = ['abul' , 'babul ', 'gabul' , 'dabul', 
'ebul ', 'babul', 'abul ' ,'babul' ,'kabul ' ,'dabul', 'cabul' ]


function removeDublicte(names){
        const uniqname =[];
        for(let i = 0; i < names.length; i++){ 
            const name= names[i]
            // console.log(names)
            if (uniqname.includes(name) === false)
            uniqname.push(name)
        }
        return uniqname;
};

const uniqname = removeDublicte(names)

console.log(uniqname)