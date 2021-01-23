document.body.innerHTML = `<div class="container">
<div class="row title">
    <div class="col-12">
        <h1>THE PERTINENT TIMES</h1>
    </div>
</div>
<div class="row header">
    <div class="col-12">
        <a href="">SPORTS</a>
    </div>
</div>
<div class="row">
  <div class="col-8">
      <p>sdfsdjkfsdfgjdsgfjsdgfjsdgjfgjfagsudfgasdhfbausidygfashdgfasdbfasdfjhadsgfjadgshjfdsfsdfsdfsdfsdfsdfsdfsdfsdfsdsdfsdf</p>
      <a href="">continue reading</a>
  </div>
  <div class="col-4">
      <img src="download.png" alt="">
  </div>
</div>
</div>`

const userAction = async () => {
    const response = await fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=VumZYkUSKexmYro88vpUwmAFkRsOcKOp');
    const myJson = await response.json(); 
    console.log(myJson);
    //extract JSON from the http response
    // do something with myJson
  }
  userAction();

  console.log("ok");
  console.log(userAction);