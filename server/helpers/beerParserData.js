function parser(data){
    let newObj = {};
    // console.log(data)
    newObj.id = data.id
    newObj.name = data.name
    newObj.tagline = data.tagline;
    newObj.first_brewed = data.first_brewed;
    newObj.description = data.description;
    newObj.abv = data.abv;
    newObj.ph = data.ph;
    newObj.brewers_tips = data.brewers_tips;
    newObj.image_url = data.image_url
    return newObj
}

module.exports = parser