const form = document.querySelector('form');
form.style.display='none';
const submitting_ele = document.querySelector('.is-loading');
const submit_ele = document.querySelector('.is-primary');
const submission_but = document.querySelector('.is-dark');

submitting_ele.style.display = 'none';
submit_ele.style.display=''; 
const API_URL = "http://localhost:8081/memes"; 

const memes_element = document.querySelector('.meme-display');
listAll();

function showForm() {
  form.style.display = 'block';
  submission_but.style.display='none';
}

function about(){
  window.location.href = "About.html";
}

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const form_data = new FormData(form);
    const name = form_data.get('name');
    const url = form_data.get('url');
    const caption = form_data.get('caption');
    const data= {name,url,caption};

    console.log(data);
    submitting_ele.style.display = '';
    submit_ele.style.display='none'; 

    fetch(API_URL,{
      method:'POST',
      body:JSON.stringify(data),
      headers : {'content-type':'application/json'}
    
    }).then(response => response.json())
      .then(createdMeme => {
        submitting_ele.style.display = 'none';
        submit_ele.style.display=''; 
        form.reset();
        listAll();});      
});


function min(a ,b)
{return (a>b)?b:a;}

function listAll(){
  memes_element.innerHTML="";
  fetch(API_URL)
    .then(response => response.json())
    .then(memes_data =>{
      console.log(memes_data);
      memes_data.reverse();
    var len = memes_data.length;
    for(var i = 0; i < min(100,len); i++)
    {
      if(memes_data[i] != 'undefined')
      { 
       //const text = memes_data[i].caption;
       const div = document.createElement('div');
       const caption = document.createElement('p');
       const name_content = document.createElement('h2');
       const img_url = memes_data[i].url;
       const img = document.createElement('img');
       
       const like = document.createElement('button');
       like.innerHTML = "😂";
       like.className="like";

       //const edit = document.createElement('button');
       //edit.innerHTML = "EDIT";
       //edit.className = "edit";
       
       img.src = img_url;
       name_content.textContent = memes_data[i].name;
       caption.textContent = memes_data[i].caption;
        
       div.appendChild(name_content);
       div.appendChild(caption);
       div.appendChild(img);
       div.appendChild(like);
       //div.append(edit);
       memes_element.appendChild(div);

     }
     else
     {console.log("Item not present");}
    }
  });
}
