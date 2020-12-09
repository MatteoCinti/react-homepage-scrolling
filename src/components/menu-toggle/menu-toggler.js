const menuToggle = e => {
  var navigation = document.querySelector('.site-nav');
  var hamburger = document.querySelector('.hamburger');

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
}

export {menuToggle}