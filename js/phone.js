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


    const showAll = document.getElementById('show-all');
    if (phones.length > 12 ) {
        showAll.classList.remove('hidden');
    }
    else{
        showAll.classList.add('hidden', true);
    }

    phones = phones.slice(0, 12);


    // const phoneLength = phones.length;
    // console.log(phoneLength);
    // if (phoneLength > 12) {
    //    return phoneLength.slice(0, 12);
    // }
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
    toggleLoadingSpinner(false);
}

//search
const handleSearch = (e) => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');

    const text = searchField.value;
    console.log(text);
    loadPhone(text);
}



const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
        
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}


loadPhone();