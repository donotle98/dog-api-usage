'use strict';

function getDogImage(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson, num))
  }
function getDogImageBreed(breed, num){
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/${num}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson, num))
}
  function displayResults(responseJson, numberDogs) {
    console.log(responseJson);
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
        let userBreed = $(event.currentTarget).find('input[name="breed-input"]').val().toLowerCase();
        console.log(userBreed);
        if(userNum === '' && userBreed != ''){
            getDogImageBreed(userBreed, 3);
        } else if(userNum != '' && userBreed != ''){
            getDogImageBreed(userBreed, userNum);
        } else if(userNum != '' && userBreed === ''){
            getDogImage(userNum);
        }
        else{
            getDogImage(3);
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