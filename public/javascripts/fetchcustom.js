const fetchSaveSchedule=(url,params)=>{
    let response=fetch(url,{
        method:'POST',
        headers:{
          'Content-Type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(params)
      });
      
}


const fecthFindSchedule=(url,element)=>{

  let st=fetch(url,{
    method:'GET',
    headers:{
      "Content-Type":"text/plain;charset=UTF-8"
    },
   
  }).then(response=>{
      //console.log(data.json());
      return response.json();

  }).then(dash=>{

    if(dash !== undefined){
   dash.map(f=>{
     console.log(f.title)
 
    const el=document.getElementById(element)
   // if(f.active===true){
    let li=document.createElement('li');
    //console.log(li);
    let myD=new Date();
    let dateE=`${myD.getDate(f.dateend)}/${myD.getMonth(f.dateend)}/${myD.getFullYear(f.dateend)}`;
    let dateA=`${myD.getDate(f.dateactual)}/${myD.getMonth(f.dateactual)}/${myD.getFullYear(f.dateactual)}`;
    
    console.log(dateE)
  

     li.innerHTML=collapsibleHB(f._id,f.title,dateA,dateE,f.description);

     el.appendChild(li);
     
     
  //  }

  }).join('')
}
    //return data;
  })
}


const fecthSearchSchedule=(url,params,element)=>{

  let response=fetch(url,{
    method:'POST',
    headers:{
      'Content-Type':'application/json;charset=utf-8'
    },
    body:JSON.stringify(params)
  }).then(response=>{
      //console.log(data.json());
      return response.json();

  }).then(dash=>{ 

    if(dash !== undefined){
   dash.map(f=>{
     console.log(f.title)
 
    const el=document.getElementById(element)
   // if(f.active===true){
    let li=document.createElement('li');
    //console.log(li);
    let myD=new Date();
    let dateE=`${myD.getDate(f.dateend)}/${myD.getMonth(f.dateend)}/${myD.getFullYear(f.dateend)}`;
    let dateA=`${myD.getDate(f.dateactual)}/${myD.getMonth(f.dateactual)}/${myD.getFullYear(f.dateactual)}`;
    
    console.log(dateE)
  

     li.innerHTML=collapsibleHB(f._id,f.title,dateA,dateE,f.description);

     el.appendChild(li);
     
     
  //  }

  }).join('')
}
    //return data;
  })
}

const fetchItens=(url,params,element)=>{
  let response=fetch(url,{
    method:'POST',
    headers:{
      'Content-Type':'application/json;charset=utf-8'
    },
    body:JSON.stringify(params)
  });
  //let search= response.json();

   // console.log(response);

    let st=fetch(url,{
      method:'GET',
      headers:{
        "Content-Type":"text/plain;charset=UTF-8"
      },

    }).then(response=>{
        //console.log(data.json());
        return response.json();

    }).then(data=>{
      
      const tBodyd=document.getElementById(element);
      const tr=document.createElement('tr');
     
        tr.innerHTML=`<td >${data.product}</td><td>${data.price}</td>`;
        tBodyd.appendChild(tr);

       
       
      //return data;
    })
}

const collapsibleDIV=(id,title,text)=>{

  let conca=` 
  <div class="col s12">
  <div class="card">
      <div class="card-content">
         <span class="card-title float-text" contenteditable="true" data-text="" id="note-title" data-id=${id}>${title}</span>
         
      </div>
      <div class="card-panel float-text" contenteditable="true"  data-text="Digite o Texto" id="note-text" >${text} </div>              
     
      
  </div>
</div>`;

  return conca;

}
const collapsibleHB=(id,title,text)=>{

  let conca=` 
   
  <div class="col s12">
  <div class="card">
      <div class="card-content">
         <span class="card-title float-text" contenteditable="true" data-text="Digite um Título" id="note-title" data-id="${id}">${title}</span>
         
      </div>
      <div class="card-panel float-text" contenteditable="true"  data-text="Digite o Texto" id="note-text" >${text}</div>              
     
      
  </div>
</div>`;

  return conca;

}





