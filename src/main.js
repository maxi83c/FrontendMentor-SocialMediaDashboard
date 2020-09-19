const styles = document.documentElement.style
const checkBox = document.getElementById('theme-mode')
const totalFollowers = document.getElementById('total-followers')
const facebookCard = document.getElementById('card-facebook')
const twitterCard = document.getElementById('card-twitter')
const instagramCard  = document.getElementById('card-instagram')
const youtubeCard = document.getElementById('card-youtube')
const facebookPages = document.getElementById('facebook-pages')
const facebookLikes = document.getElementById('facebook-likes')
const instagramLikes = document.getElementById('instagram-likes')
const instagramViews = document.getElementById('instagram-views')
const twitterRetweets = document.getElementById('twitter-retweets')
const twitterLikes = document.getElementById('twitter-likes')
const youtubeLikes = document.getElementById('youtube-likes')
const youtubeViews = document.getElementById('youtube-views')

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max + - min)) + min;
}

const formatNumber = (number) => {
  if (number > 1999999)
    return `${Math.floor(number / 1000000)}M`
  if (number > 19999)
    return `${Math.floor(number / 1000)}K` 
  return `${number}`
}

// cuentas disponibles por red social
const accounts = [['@nathanf', '@nathanf', '@realnathanf','Nathan F.'],
['@abcde', '@abcde', '@abcde','The ABC'],
['@jscsshtml', '@jscsshtml', '@jscsshtml','JS CSS HTML']]

//
const cards = [facebookCard, twitterCard, instagramCard, youtubeCard]
const overviews = [facebookPages, facebookLikes, instagramLikes, instagramViews, twitterRetweets, twitterLikes, youtubeLikes, youtubeViews]

//Función para carga de datos del dashboard
const setData = (socialObjet) => {

  let followers = 0;
  
  const selectedAccounts = getRandomInt(0, 3)
  
  cards.forEach((card, index) =>{
    let socialFollowers = getRandomInt(0, 999999)
    followers+= socialFollowers
    card.children[0].textContent = accounts[selectedAccounts][index]
    card.children[1].textContent = formatNumber(socialFollowers)
    card.children[3].textContent = `${formatNumber(getRandomInt(0, 9999))} Today`
  if (getRandomInt(0, 2) === 1)
      card.children[3].classList.add('green')
  else
      card.children[3].classList.add('red')
  })

  totalFollowers.textContent = `Total Followers:  ${followers}`

  overviews.forEach(overview =>{
    overview.children[1].textContent = formatNumber(getRandomInt(0, 999999))
    overview.children[2].textContent = `${formatNumber(getRandomInt(0, 999999))}%`
    if  (getRandomInt(0, 2) === 1)
      overview.children[2].classList.add('green')
    else
      overview.children[2].classList.add('red')
  })
}

setData(cards[Math.floor(Math.random() * 2)])

// cambiar de tema al precionar el boton de power
checkBox.addEventListener('click', () =>{
  if(checkBox.checked)
  {
      styles.setProperty('--bg-body','hsl(0, 0%, 100%)');
      styles.setProperty('--bg-header','hsl(225, 100%, 98%)');
      styles.setProperty('--bg-card','hsl(227, 47%, 96%)');
      styles.setProperty('--bg-card-hover','#e1e3f0');
      styles.setProperty('--title-color','hsl(228, 12%, 44%)');
      styles.setProperty('--text-color','hsl(230, 17%, 14%)');
  } else {
      styles.setProperty('--bg-body','hsl(230, 17%, 14%)');
      styles.setProperty('--bg-header','hsl(232, 19%, 15%)');
      styles.setProperty('--bg-card','hsl(228, 28%, 20%)');
      styles.setProperty('--bg-card-hover',' #333a56');
      styles.setProperty('--title-color','hsl(0, 0%, 100%)');
      styles.setProperty('--text-color','hsl(228, 34%, 66%');
  }
})
