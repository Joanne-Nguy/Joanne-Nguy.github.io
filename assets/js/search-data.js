// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "A collection of Joanne&#39;s professional achievements.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-lavender-lemon-posset-brulee",
      
        title: "lavender lemon posset brulee",
      
      description: "a floral lemon dessert perfect for spring",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/lavender-lemon-posset/";
        
      },
    },{id: "post-sweet-rice-wine",
      
        title: "sweet rice wine",
      
      description: "a sweet glutinous rice dessert with low alcohol content",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/sweet-rice-wine/";
        
      },
    },{id: "post-brown-butter-chocolate-chip-cookies",
      
        title: "brown butter chocolate chip cookies",
      
      description: "my popular brown butter chocolate chip cookies",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/bb-choco-chips/";
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6F%61%6E%6E%65-%6E%65%77%79%65%6E@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/-joanne-n/", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Joanne-Nguyen-2267615484/", "_blank");
        },
      },{
        id: 'social-resume_request',
        title: 'Resume_request',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
