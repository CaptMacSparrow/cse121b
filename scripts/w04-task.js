/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jake Kiehl",
    photo: "images/FullSizeRender.jpg",
    favoriteFoods: [
        'Pizza',
        'Pizza Rolls',
        'Pizza Bagels'
    ],
    hobbies: [
        'Gym',
        'Music',
        'Video Games'
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Columbus, OH',
        length: '11 years'
});
myProfile.placesLived.push(
    {
        place: 'Bedminster, NJ',
        length: '1 year'
});
myProfile.placesLived.push(    
    {
        place: 'Maple Grove, MN',
        length: '3 years'
    });
myProfile.placesLived.push(
    {
        place: 'Bountiful, UT',
        length: '3 years'
});
myProfile.placesLived.push(
    {
        place: 'New York, NY',
        length: '6 years'
});
myProfile.placesLived.push(
    {
        place: 'Orem, UT',
        length: '3 years'
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });

