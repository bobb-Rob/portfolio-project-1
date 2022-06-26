// let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!
// #-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

// if(regex.test(email.value)){
//   console.log('email is valid');
// }else {
//   console.log('invalid')
// }

// function createArtistPopUp({name, image, bio}){
//     // Pop-up Overlay
//   const popUp = createElement('div', 'overlay');
//   const content = createElement("div", "artistBioContent");

//   const imageHolder = createElement('div', 'artist-content-image');
//   const contentImg = createElement('img');
//   const [image1, image2 ] = image;
//   contentImg.src = image2;
//   contentImg.alt = name;
//   imageHolder.appendChild(contentImg);

//   const artistBioHolder = createElement('div', 'artist-content-bio');
//   const artistName = createElement('h6');
//   artistName.innerText = name;
//   const artistBio = createElement('p', 'brief-content-bio');
//   artistBio.innerText = bio;
//   artistBioHolder.append(artistName,artistBio)

//   content.append(imageHolder, artistBioHolder);
//   popUp.appendChild(content);
//   return popUp;
// }