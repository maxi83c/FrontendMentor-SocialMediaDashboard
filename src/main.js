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

// Lista de objetos para simular distintos datos
const cards =[
  {
    'total-followers' : '23,004',
    'facebook-account' : '@nathanf',
    'facebook-followers' : '1987',
    'facebook-today' : '+12',
    'facebook-pages' : ['87', '+3%'], 
    'facebook-likes' : ['52', '-2%'], 
    'twitter-account' : '@nathanf',
    'twitter-followers' : '1044',
    'twitter-today' : '+99',
    'twitter-retweets' : ['117', '+303%'],
    'twitter-likes' : ['507', '+553%'],
    'instagram-account' : '@realnathanf',
    'instagram-followers' : '11k',
    'instagram-today' : '+1099',
    'instagram-likes' : ['5462', '+2257%'],
    'instagram-views' : ['52k', '+1375%'],
    'youtube-account' : 'Nathan F.',
    'youtube-suscribers' : '8239',
    'youtube-today' : '-144',
    'youtube-likes' : ['107', '-19%'],
    'youtube-views' : ['1407', '-12%']
  },
  {
    'total-followers' : '22,245,008',
    'facebook-account' : '@yotuel',
    'facebook-followers' : '3k',
    'facebook-today' : '+124',
    'facebook-pages' : ['6', '-7%'], 
    'facebook-likes' : ['68', '+1%'], 
    'twitter-account' : '@yotuel',
    'twitter-followers' : '104K',
    'twitter-today' : '+966',
    'twitter-retweets' : ['1', '-39%'],
    'twitter-likes' : ['68', '+32%'],
    'instagram-account' : '@yotuel',
    'instagram-followers' : '16M',
    'instagram-today' : '+31099',
    'instagram-likes' : ['54M', '+257%'],
    'instagram-views' : ['50k', '+4375%'],
    'youtube-account' : 'Yo Tu El',
    'youtube-suscribers' : '20K',
    'youtube-today' : '447',
    'youtube-likes' : ['10K', '+19%'],
    'youtube-views' : ['140K', '-1%']
  }
]

//Función para carga de datos del dashboard
const setData = (socialObjet) => {

  totalFollowers.textContent = `Total Followers:  ${socialObjet['total-followers']}`

  facebookCard.children[0].textContent = socialObjet['facebook-account']
  facebookCard.children[1].textContent = socialObjet['facebook-followers']
  facebookCard.children[3].textContent = `${socialObjet['facebook-today'].replace('+','')} Today`
  if (socialObjet['facebook-today'].charAt(0) === '+')
      facebookCard.children[3].classList.add('green')
  else
      facebookCard.children[3].classList.add('red')

  twitterCard.children[0].textContent = socialObjet['twitter-account']
  twitterCard.children[1].textContent = socialObjet['twitter-followers']
  twitterCard.children[3].textContent = `${socialObjet['twitter-today'].replace('+','')} Today`
  if (socialObjet['twitter-today'].charAt(0) === '+')
      twitterCard.children[3].classList.add('green')
  else
      twitterCard.children[3].classList.add('red')

  instagramCard.children[0].textContent = socialObjet['instagram-account']
  instagramCard.children[1].textContent = socialObjet['instagram-followers']
  instagramCard.children[3].textContent = `${socialObjet['instagram-today'].replace('+','')} Today`
  if (socialObjet['instagram-today'].charAt(0) === '+')
      instagramCard.children[3].classList.add('green')
  else
      instagramCard.children[3].classList.add('red')

  youtubeCard.children[0].textContent = socialObjet['youtube-account']
  youtubeCard.children[1].textContent = socialObjet['youtube-suscribers']
  youtubeCard.children[3].textContent = `${socialObjet['youtube-today'].replace('+','')} Today`
  if (socialObjet['youtube-today'].charAt(0) === '+')
      youtubeCard.children[3].classList.add('green')
  else
      youtubeCard.children[3].classList.add('red')

  facebookPages.children[1].textContent = socialObjet['facebook-pages'][0]
  facebookPages.children[2].textContent = `${socialObjet['facebook-pages'][1].replace('+','')}`
  if (socialObjet['facebook-pages'][1].charAt(0) === '+')
    facebookPages.children[2].classList.add('green')
  else
    facebookPages.children[2].classList.add('red')

  facebookLikes.children[1].textContent = socialObjet['facebook-likes'][0]
  facebookLikes.children[2].textContent = `${socialObjet['facebook-likes'][1].replace('+','')}`
  if (socialObjet['facebook-likes'][1].charAt(0) === '+')
    facebookLikes.children[2].classList.add('green')
  else
   facebookLikes.children[2].classList.add('red')

  instagramLikes.children[1].textContent = socialObjet['instagram-likes'][0]
  instagramLikes.children[2].textContent = `${socialObjet['instagram-likes'][1].replace('+','')}`
  if (socialObjet['instagram-likes'][1].charAt(0) === '+')
    instagramLikes.children[2].classList.add('green')
  else
    instagramLikes.children[2].classList.add('red')

  instagramViews.children[1].textContent = socialObjet['instagram-views'][0]
  instagramViews.children[2].textContent = `${socialObjet['instagram-views'][1].replace('+','')}`
   if (socialObjet['instagram-views'][1].charAt(0) === '+')
    instagramViews.children[2].classList.add('green')
  else
    instagramViews.children[2].classList.add('red')

  twitterRetweets.children[1].textContent = socialObjet['twitter-retweets'][0]
  twitterRetweets.children[2].textContent = `${socialObjet['twitter-retweets'][1].replace('+','')}`
  if (socialObjet['twitter-retweets'][1].charAt(0) === '+')
    twitterRetweets.children[2].classList.add('green')
  else
    twitterRetweets.children[2].classList.add('red')

  twitterLikes.children[1].textContent = socialObjet['twitter-likes'][0]
  twitterLikes.children[2].textContent = `${socialObjet['twitter-likes'][1].replace('+','')}`
  if (socialObjet['twitter-likes'][1].charAt(0) === '+')
    twitterLikes.children[2].classList.add('green')
  else
    twitterLikes.children[2].classList.add('red')

  youtubeLikes.children[1].textContent = socialObjet['youtube-likes'][0]
  youtubeLikes.children[2].textContent = `${socialObjet['youtube-likes'][1].replace('+','')}`
  if (socialObjet['youtube-likes'][1].charAt(0) === '+')
    youtubeLikes.children[2].classList.add('green')
  else
    youtubeLikes.children[2].classList.add('red')

  youtubeViews.children[1].textContent = socialObjet['youtube-views'][0]
  youtubeViews.children[2].textContent = `${socialObjet['youtube-views'][1].replace('+','')}`
  if (socialObjet['youtube-views'][1].charAt(0) === '+')
    youtubeViews.children[2].classList.add('green')
  else
    youtubeViews.children[2].classList.add('red')
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
