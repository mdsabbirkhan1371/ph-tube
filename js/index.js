const loadData =async()=>{
   const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000')
   const allData = await res.json()
   const datas = allData.data;
//    console.log(datas)
   displayData(datas)
   
}

const displayData =(datas)=>{
    datas.forEach(data=>{
        // console.log(data)
        const dataContainer = document.getElementById('card-container');
        const cardElement = document.createElement('div')
        cardElement.classList=`card w-96 bg-base-100 shadow-xl`;
        cardElement.innerHTML = `
        <figure>
            <img class='' src="${data.thumbnail}" alt="Shoes" />
        </figure>
                    <div class="card-body">
                        <div>
                            <div class="avatar">
                                <div 
                                    class="w-10 rounded-full ring ring-primary     ring-offset-base-100 ring-offset-2">
                                        <img src="${data.authors[0].profile_picture}" />
                                    
                                </div>
                            <h2 class="card-title mx-4 font-bold">${data.title}</h2>
                            
                
                            </div>

                        </div>

                        <div>
                            <p>${data.authors[0].profile_name}</p>
                            <p>${data.others.views} views</p>
                        </div>
                    
                    </div>
        `

        dataContainer.appendChild(cardElement)
    })
}

loadData()






