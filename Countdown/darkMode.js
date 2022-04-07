



const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  };


  let Newtheme = getStorageTheme();

    


  const toggleTheme = () => {
      if (Newtheme === 'light-theme') {
        Newtheme = 'dark-theme';
      } else {
        Newtheme ='light-theme';
      }
    };


  const changeTheme = () => {
    document.documentElement.className = Newtheme;
    localStorage.setItem('theme', Newtheme);
    toggleTheme();
  }



