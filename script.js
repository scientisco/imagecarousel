
var image = document.getElementsByClassName("img");
var n = image.length
var i = 0;
a=0
function next() {
    if (i<(n-1)){
        image[i+1].scrollIntoView({behavior: 'smooth'});
        i++
        
    }else{
        image[0].scrollIntoView({behavior: 'smooth'});
        i = 0
    }
    
}
function prev() {
    if (0>i<(n-1)){
        if (i>0){
            image[i-1].scrollIntoView({behavior: 'smooth'});
            i--      
        }else if (i==0){
            i = n-1
            image[i].scrollIntoView({behavior: 'smooth'});
        }
    }else{
        image[5].scrollIntoView({behavior: 'smooth'});
        i = 5
    }
    
}

