function loadData(category_id){
    const url = `https://openapi.programming-hero.com/api/videos/category/${category_id}`
    fetch(url)
    .then(res=>res.json())
    .then(datas=>{
        // console.log(datas)
        const allData = datas.data;
        const dataContainer = document.getElementById('card-container');
        dataContainer.innerHTML = ''

        allData.forEach(item=>{
            console.log(item)
            if (item.category_id === "all" || item.category_id === category_id) {
                const cardElement = document.createElement('div')
                cardElement.classList=`card w-96 bg-base-100 shadow-xl`;
                cardElement.innerHTML = `
        <figure>
            <img class='' src="${item.thumbnail}" alt="Shoes" />
        </figure>
                    <div class="card-body">
                        <div>
                            <div class="avatar">
                                <div 
                                    class="w-10 rounded-full ring ring-primary     ring-offset-base-100 ring-offset-2">
                                        <img src="${item.authors[0].profile_picture}" />
                                    
                                </div>
                            <h2 class="card-title mx-4 font-bold">${item.title}</h2>
                            
                
                            </div>

                        </div>

                        <div>
                            <p>${item.authors[0].profile_name}</p>
                            <p>${item.others.views} views</p>
                        </div>
                    
                    </div>
        `

                dataContainer.appendChild(cardElement);
              }
        })
    })
}
// document.getElementById("all-button").addEventListener("click", () => {
//     loadData("1000");
//   });
  
  document.getElementById("music-button").addEventListener("click", () => {
    console.log('click')
    loadData("1001");
  });
  
  document.getElementById("comedy-button").addEventListener("click", () => {
    loadData("1003");
  });
  
  // Initial render
  