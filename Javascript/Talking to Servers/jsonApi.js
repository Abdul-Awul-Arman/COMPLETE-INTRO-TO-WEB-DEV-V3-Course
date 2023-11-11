  const url="https://dog.ceo/api/breeds/image/random";
  

  function addDogPhoto(){
    const promise= fetch(url);

    promise.then(function(response){
        const processingPromise=response.text();
        return processingPromise;
    })
    .then(function(processedPromise){
        const backAPI=JSON.parse(processedPromise);
        const img=document.createElement(".img");
        img.src="backAPI";
        img.alt="dog photo";
        addPhoto.appendChild(img);
    })
  }
  
  document.querySelector(".the-div").addEventListener("click",addDogPhoto);