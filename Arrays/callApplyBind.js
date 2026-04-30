// call, apply, bind

const dish = {
    dish: "biryani"
}

function cookBiryani(ing1, ing2) {
    console.log(`Cooking biryani with ${ing1} and ${ing2}`)
}

cookBiryani.call(dish, 'rice', 'chicken')
cookBiryani.apply(dish, ['rice', 'mushroom'])

const cookBiryaniForGuests = cookBiryani.bind(dish, 'rice', 'prawn')
cookBiryaniForGuests()