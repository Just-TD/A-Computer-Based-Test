
const observer = new IntersectionObserver((entries) => { 
    entries.forEach((entry) => { 
        console.log(entry);
        if(entry.isIntersecting){ 
            entry.target.classList.add('show');
        }else{ 
            entry.target.classList.remove('show');
        }
    })
})
const hiddenElements = document.querySelectorAll('.containThis');

hiddenElements.forEach((el) => observer.observe(el));


let getValue = () => { 
    let count = 0;
    let checks = document.getElementsByClassName('checks');
    let str = '';
    for(let i = 0; i < 3; i++){ 
        if(checks[i].checked === true){ 
            str += checks[i].value + "";
        }
    }
    if(str == "3"){ 
        count = count + 1;
        console.log(count);
    }

    let question2 = document.getElementsByClassName("Q2");
    let strn = '';
    for( let p = 0; p < 2; p++){ 
        if(question2[p].checked === true){ 
            strn += question2[p].value + "";
        }

        console.log(strn);

        if(strn == "AMSTERDAM"){ 
            count = count + 1;
            console.log(count);
        }
    }

    let question3 = document.getElementsByClassName("Q3");
    let st = '';
    for( let y = 0; y < 2; y++){ 
        if(question3[y].checked === true){ 
            st += question3[y].value + "";
        }

        console.log(st);

        if(st == "ITALY"){ 
            count = count + 1;
            console.log(count);
        }
    }

    let question4 = document.getElementsByClassName("Q4");
    let saint = '';
    for(let a = 0; a < 3; a++){ 
        if(question4[a].checked === true){ 
            saint += question4[a].value + "";
        }
        console.log(saint);
        if(saint == "9"){ 
            count = count + 1;
            console.log(count);
        }
    } 

    let question5 = document.getElementsByClassName("Q5");
    let saint5 = '';
    for(let b = 0; b < 3; b++){ 
        if(question5[b].checked === true){ 
            saint5 += question5[b].value + "";
        }
        console.log(saint5);
        if(saint5 == "1963"){ 
            count = count + 1;
            console.log(count);
        }
    } 
        
    let question6 = document.getElementsByClassName("Q6");
    let saint6 = '';
    for(let c = 0; c < 2; c++){ 
        if(question6[c].checked === true){ 
            saint6 += question6[c].value + "";
        }
        console.log(saint6);
        if(saint6 == "SOUTH AFRICA"){ 
            count = count + 1;
            console.log(count);
        }
    } 

    let question7 = document.getElementsByClassName("Q7");
    let saint7 = '';
    for(let d = 0; d < 2; d++){ 
        if(question7[d].checked === true){ 
            saint7 += question7[d].value + "";
        }
        console.log(saint7);
        if(saint7 == "2017"){ 
            count = count + 1;
            console.log(count);
        }
    } 

    let question8 = document.getElementsByClassName("Q8");
    let saint8 = '';
    for(let e = 0; e < 3; e++){ 
        if(question8[e].checked === true){ 
            saint8 += question8[e].value + "";
        }
        console.log(saint8);
        if(saint8 == "COPY"){ 
            count = count + 1;
            console.log(count);
        }
    } 
        
    let question9 = document.getElementsByClassName("Q9");
    let saint9 = '';
    for(let f = 0; f < 4; f++){ 
        if(question9[f].checked === true){ 
            saint9 += question9[f].value + "";
        }
        console.log(saint9);
        if(saint9 == "TERA"){ 
            count = count + 1;
            console.log(count);
        }
    } 
        




    document.getElementById("final").innerHTML =  `<div class = "final"> Your total Score is: ${count}/9 </div> `;
    


}