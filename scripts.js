Bfiles = [];
globalArr = []

$(function () {
    $(":file").change(function () {
        var noOfFiles = this.files.length;
        console.log(this.files);
        var templist = [];
        for(var i=0; i < noOfFiles; i++){        
            var reader = new FileReader();
            //reader.onload = imageIsLoaded;
            //reader.readAsDataURL(this.files[i]);
            templist.push(URL.createObjectURL(event.target.files[i]));
        }
        Bfiles.push(templist);        
    });
});
counter = 0;
function combineShit(){
    arrayOfArrays = [];
    var noOfSets = Bfiles.length;
    for(var j=0; j < noOfSets; j++){
        var noOfFiles = Bfiles[j].length;
        justArray = [];
        for(var i=0; i < noOfFiles; i++){
            counter++;        
            var img = document.createElement("img");
            img.src = Bfiles[j][i];
            img.id = counter;

            img.alt = "haha no";
            justArray.push(img);
            // This next line will just add it to the <body> tag
            //document.body.appendChild(img);
        }
        arrayOfArrays.push(justArray);
    }
    result = cartesianProduct(arrayOfArrays);
    console.log(result);
    randomizerArr = [];  
    for(var i = 0; i < result.length;i++){
        var div = document.createElement("div");
        for(var j=0; j < result[i].length; j++){
            // Get the element
            var elem = result[i][j];
            // Create a copy of it
            var clone = elem.cloneNode(true);

            div.appendChild(clone);
        }
        randomizerArr.push(div);
    }
    shuffleArray(randomizerArr);
    globalArr = randomizerArr;
    console.log("Number of results:" + randomizerArr.length);
    for(var i =0; i < randomizerArr.length; i++){
        document.body.appendChild(randomizerArr[i]);
    }
    
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function cartesianProduct(arr) {
    return arr.reduce(function(a,b){
        return a.map(function(x){
            return b.map(function(y){
                return x.concat([y]);
            })
        }).reduce(function(a,b){ return a.concat(b) },[])
    }, [[]])
}

function downloadAll(){
    alert("just right click and press print. Save as pdf :)")
}

/**
 * ok for now lol
 */
function resetBttn(){
    location.reload();
}

