const menuToggle = e => {
  var navigation = document.querySelector('.site-nav');
  var hamburger = document.querySelector('.hamburger');
  var links = document.querySelectorAll('.dropdown-links a')

  console.log(links);

  const addClass = () => {
    navigation.classList.remove('closed');  
    navigation.classList.add('open');  
    hamburger.classList.add('o');
  }

  const removeClass = () => {
    navigation.classList.remove('open'); 
    hamburger.classList.remove('o');
    navigation.classList.add('closed'); 
  }

  navigation.classList.contains('open') ? removeClass() : addClass();
  links.forEach(link => { 
    link.addEventListener('click', e => {
      removeClass();
    })
  })
}

export {menuToggle}