
async function getData(){

    const response = await axios.get("https://dummyjson.com/product");
    const data = response.data;
    const products = data.products;

    const reuslt = products.map(function(pro) {
            return `
    <div class="produ">
        <h2>${pro.title}</h2>
        <img src="${pro.thumbnail}"/>
        <a href="details.html?id=${pro.id}"> Details</a> 
    </div>
    `;
        })
        .join("");

    const swiper_data = products.map(function (e) {
        return `
    <div class="swiper-slide"> 
        <img src="${e.thumbnail}"/>
    </div>
    `;
    }).join("");

    document.querySelector(".data").innerHTML = reuslt;
    document.querySelector(".swiper-wrapper").innerHTML = swiper_data;

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 100,
        slidesPerView: 5,
        autoplay: true,
        clickable: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
   
}

getData();
