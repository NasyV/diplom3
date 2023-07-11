
(async function () {
  async function fetchData () {
    const url = 'https://jscp-diplom.netoserver.ru/';
     const response = await fetch (url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: 'event=update', 
    })
    if(response.ok) {
      return response.json()
    }
    
  }
  const func = fetchData();
  console.log(func);
  
  
  
 
  
  })()


  
  
 
 