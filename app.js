const menu = [
  {
    id: 1,
    title: "Pad Thai Prawn",
    category: "Thailand",
    price: 10.99,
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AUNW_tmRvmKLo_agG2AtAQHaI3%26pid%3DApi&f=1",
    desc: `Stir fried with rice noodles, bean sprouts, tofu, green onions, egg and tamarind seasoning sauce, served with ground peanuts on the side. 
    <br>
    <strong>Options:</strong> Chicken, beef, pork or veggies.`,
  },
  {
    id: 2,
    title: "Soto Ayam",
    category: "Indonesia",
    price: 7.99,
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DYtFvvJV5tq01kDq8b3yCwHaHa%26pid%3DApi&f=1",
    desc: `Yellow turmeric chicken soup with shredded chicken, rice vermicelli and cabbage. `,
  },
  {
    id: 3,
    title: "Pa-nang Curry",
    category: "Thailand",
    price: 8.99,
    img:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fglebekitchen.com%2Fwp-content%2Fuploads%2F2018%2F10%2Fpanangcurrybowltop-1.jpg&f=1&nofb=1",
    desc: `Curry paste with creamy coconut milk, bell peppers, sprinkled with kaffir lime leaves.
    <br>
    <strong>Options:</strong> Chicken, beef, tofu or pork.`,
  },
  {
    id: 4,
    title: "Rojak",
    category: "Malaysia",
    price: 5.99,
    img:
      "http://masses.com.my/wp-content/uploads/2020/02/rojak-buah.jpg",
    desc: `Mix of fresh seasonal fruits, vegetables & tofu with sundried shrimp sauce; topped with ground nuts.`,
  },
  {
    id: 5,
    title: "Sambal Chicken",
    category: "Malaysia",
    price: 12.99,
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rl2wCVcOqdgD5dEKcFqE_QHaIw%26pid%3DApi&f=1",
    desc: `Wok tossed with bell peppers, onions & tomatoes; coconut rice. `,
  },
  {
    id: 6,
    title: "Lapis Surabaya",
    category: "Indonesia",
    price: 9.99,
    img:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-JRJAl57xpyg%2FUkxlc_-AurI%2FAAAAAAAAAkc%2FTeB6tyMRPvY%2Fs1600%2FTDC%2Bmaxi.jpg&f=1&nofb=1",
    desc: `Firm-textured cake is an Indo version of the European multi-layered spit cake.`,
  },
  {
    id: 7,
    title: "Tapioca Pudding",
    category: "Thailand",
    price: 15.99,
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oqMihpQE4KOnPU_q_SY2iAHaGP%26pid%3DApi&f=1",
    desc: `Sweet pudding made with tapioca and either milk or cream served with fresh strawberries.`,
  },
  {
    id: 8,
    title: "Kuih Dadar ",
    category: "Malaysia",
    price: 12.99,
    img:
      "https://i.pinimg.com/originals/f2/3b/47/f23b47db9819c619c23696fb79e1b300.jpg",
    desc: `Pandan crepes rolled with shredded coconut & palm sugar (3 rolls)`,
  },
  {
    id: 9,
    title: "Batagor Bandung",
    category: "Indonesia",
    price: 3.99,
    img:
      "https://www.sajianlezat.com/media/image/bubur-sepinggan/resep-batagor.jpg",
    desc: `Original West Java dish consist of fried chicken and tofu dumpling served with special peanut sauce and sriracha <u>spicy</u> sauce.`,
  },
];

// reach buttons div and add kitchen buttons
let btnDivDOM = document.getElementById("btnDiv");
btnDivDOM.innerHTML = `
<button type="button" onclick="allMenu()" class="btn btn-outline-dark col-sm-1 btn-item btn-lg">All</button>
<button type="button" onclick="thaiMenu()" class="btn btn-outline-dark col-sm-1 btn-item btn-thai btn-lg">Thailand</button>
<button type="button" onclick="indoMenu()" class="btn btn-outline-dark col-sm-1 btn-item btn-indo btn-lg">Indonesia</button>
<button type="button" onclick="malayMenu()" class="btn btn-outline-dark col-sm-1 btn-item btn-malay btn-lg">Malaysia</button>
`;

console.log(menu);

// all button's onclick function, shows all items on menu with map method
function allMenu() {  
document.getElementById("menuDiv").innerHTML = menu.map(food=>
  `
  <div class="menu-items col-md-6 d-block">
  <img src="${food.img}" class="photo"  alt="food" >
  <h4 class="menu-title">${food.title}</h4>
  <h4 class="price-tag">${food.price}£</h4>
  <p></p>
  <p class="menu-info menu-text">${food.desc}</p>
</div>
`
).join("")
};



  //thai food onclick function, first filter for Korea category , then map all Korea foods and change html
  function thaiMenu() {  
  document.getElementById("menuDiv").innerHTML = menu.filter(food=>food.category === "Thailand").map(food=> 
    
    `
      <div class="menu-items col-md-6 menu-text">
      <img src="${food.img}" class="photo"  alt="food" >
      <h4 class="menu-title">${food.title}</h4>
      <p class="price-tag">${food.price}£</p>
      <p class="menu-info">${food.desc}</p>
      </div>
    `
    ).join("")
    
  };


  //indo food onclick function, first filter for Korea category , then map all Korea foods and change html

  function indoMenu() {  
    document.getElementById("menuDiv").innerHTML = menu.filter(food=>food.category === "Indonesia").map(food=> 
      
      `
      <div class="menu-items col-md-6 menu-text">
      <img src="${food.img}" class="photo"  alt="food" >
      <h4 class="menu-title">${food.title}</h4>
      <p class="price-tag">${food.price}£</p>
      <p class="menu-info">${food.desc}</p>
    </div>
    `
  ).join("")
      
    };



  //malay food onclick function, first filter for Korea category , then map all Korea foods and change html

  function malayMenu() {  
    document.getElementById("menuDiv").innerHTML = menu.filter(food=>food.category === "Malaysia").map(food=> 
      
      `
      <div class="menu-items col-md-6 menu-text">
      <img src="${food.img}" class="photo"  alt="food" >
      <h4 class="menu-title">${food.title} </h4>
      <p class="price-tag">${food.price}£</p>
      <p class="menu-info">${food.desc}</p>
    </div>
    `
  ).join("")
      
    };


