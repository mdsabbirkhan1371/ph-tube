// Sample API data
const apiData = [
    { name: "Eggs Benedict", type: "breakfast" },
    { name: "Pancakes", type: "breakfast" },
    { name: "Caesar Salad", type: "lunch" },
    { name: "Sandwich", type: "lunch" },
    { name: "Steak", type: "lunch" }
  ];
  
  // Function to render items based on type
  function renderItems(type) {
    const itemList = document.getElementById("item-list");
    itemList.innerHTML = "";
  
    apiData.forEach(item => {
      console.log(item)
      if (type === "all" || item.type === type) {
        const itemElement = document.createElement("div");
        itemElement.textContent = item.name;
        itemList.appendChild(itemElement);
      }
    });
  }
  
  // Event listeners for filter buttons
  document.getElementById("all-btn").addEventListener("click", () => {
    renderItems("all");
  });
  
  document.getElementById("breakfast-btn").addEventListener("click", () => {
    renderItems("breakfast");
  });
  
  document.getElementById("lunch-btn").addEventListener("click", () => {
    renderItems("lunch");
  });
  
  // Initial render
  renderItems("all");
  