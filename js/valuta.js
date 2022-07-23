(function(){
  "use strict";

  const inputSom = document.querySelector('#som'),
        inputUsd = document.querySelector('#usd');
    
  inputSom.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    request.open("GET", "current.json");

    request.setRequestHeader("Content-type" , "application/json: charset=UTF-8");
    request.send();

    request.addEventListener('load', () => {

      if ( request.status === 200) {
        // console.log(request.response);
        // console.log(JSON.parse(request.response));

        const currency = JSON.parse(request.response);

        const result = inputSom.value / currency.current.usd;

        inputUsd.value = result.toFixed(2);
      }else {
        inputUsd.value = 'Что-то пошло не так';
      }
    });
  });

  // search lesson 46

  const search = document.querySelector('[name="search"]'),
        btnSearch = document.querySelector('.search button');
    
  btnSearch.addEventListener('click', (e) => {
    e.preventDefault();

    const request_ = new XMLHttpRequest();
    request_.open("GET", "search.php?query="+search.value);

    // request_.setRequestHeader("Content-type" , "application/json: charset=UTF-8");
    request_.send();

    request_.addEventListener('load', () => {

      if ( request_.status === 200) {
        console.log(request_.response);


        // const data = JSON.parse(request_.response);
        // console.log(data);

      } else {
        console.log('error');
      }
    });
  });


}());