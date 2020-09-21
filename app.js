'use strict';

function getDogImage(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson, num))
  }

  function displayResults(responseJson, numberDogs) {
    console.log(responseJson);
    //replace the existing image with the new one
    for(let i = 0; i < numberDogs; i++){
        $('main').append(
            `Dog #${i + 1}<img src="${responseJson.message[i]}" class="results-here">`
          )
    }
  }

function handleSubmit(){
    $('body').submit('.submit-form',function(event){
        event.preventDefault();
        console.log('SUBMIT BUTTON PRESSED');
        let userNum = $(event.currentTarget).find('input[name="input"]').val();
        if(userNum === ''){
            getDogImage(3);
        } else{
            getDogImage(userNum);
        }
        
    })
}
function reloadPage(){
    location.reload(true);
}
function main(){
    console.log('APP LOADED');
    handleSubmit();
}

$(main);