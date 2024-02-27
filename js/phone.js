const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data
    // console.log(phones);
    displayPhones(phones);
}

const displayPhones = (phones) => {
    
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    // console.log(phones);
    phones.forEach(phone => {
        console.log(phone);
        phoneContainer.classList=`card  shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2`;
        const phoneCard = document.createElement('div');
        phoneCard.classList = `bg-white rounded-xl p-4`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body flex flex-col text-center">
            <h2 class=" font-bold text-2xl text-center">${phone.phone_name}</h2>
            <p class="text-[#706F6F] text-lg">There are many variations of passages of available, but the majority have suffered</p>
            <p class="text-2xl font-bold">999$</p>
            <div class="card-actions  justify-center">
                <button  class="btn btn-primary font-semibold text-xl">Show Details</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
}

//search
const handleSearch = (e) => {
    const searchField = document.getElementById('search-field');

    const text = searchField.value;
    console.log(text);
    loadPhone(text);
}



loadPhone();