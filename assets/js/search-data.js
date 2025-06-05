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
        },{id: "post-habanero-hot-honey",
      
        title: "habanero hot honey",
      
      description: "a fermented hot honey with a spicy habanero kick",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/hot-honey/";
        
      },
    },{id: "post-indian-lemonade-cookie",
      
        title: "indian lemonade cookie",
      
      description: "a savory, spiced Indian-inspired lemon cookie recipe",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Indian-lemonade-cookies/";
        
      },
    },{id: "post-summer-rolls-with-pork",
      
        title: "summer rolls with pork",
      
      description: "a simple rice paper roll served with creamy peanut sauce",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/summer-rolls/";
        
      },
    },{id: "post-do-chua-vietnamese-pickled-carrots-amp-daikon",
      
        title: "do chua (vietnamese pickled carrots &amp; daikon)",
      
      description: "a classic tangy viet pickle",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/do-chua/";
        
      },
    },{id: "post-fermented-habanero-sauce",
      
        title: "fermented habanero sauce",
      
      description: "a spicy, tangy hot sauce",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/fermented-habanero/";
        
      },
    },{id: "post-garlic-confit-sauce-mojo-de-ajo",
      
        title: "garlic confit sauce (mojo de ajo)",
      
      description: "a Brazilian-inspired take on garlic confit",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/garlic-confit/";
        
      },
    },{id: "post-strawberry-cinnamon-coffee-cake",
      
        title: "strawberry cinnamon coffee cake",
      
      description: "a dense, moist cake with cinnamon, fruit and cheese toppings",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/strawberry-coffee-cake/";
        
      },
    },{id: "post-whiskey-brown-butter",
      
        title: "whiskey brown butter",
      
      description: "a butter infusion with a smoky flavor",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/whiskey-brown-butter/";
        
      },
    },{id: "post-brown-butter-whiskey",
      
        title: "brown butter whiskey",
      
      description: "a smooth fat-washed whiskey with nutty notes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/brown-butter-whiskey/";
        
      },
    },{id: "post-fermented-fries",
      
        title: "fermented fries",
      
      description: "a tangy spin on the classic french fries",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/fermented-fries/";
        
      },
    },{id: "post-tofu-in-ginger-syrup",
      
        title: "tofu in ginger syrup",
      
      description: "a simple tofu-based Vietnamese dessert",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/tofu-ginger-syrup/";
        
      },
    },{id: "post-homemade-paneer",
      
        title: "homemade paneer",
      
      description: "a savory Indian cheese made with 3 simple ingredients",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/paneer/";
        
      },
    },{id: "post-yuzu-habanero-pepper-jelly",
      
        title: "yuzu habanero pepper jelly",
      
      description: "a sweet and spicy jelly preserve",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/habanero-jelly/";
        
      },
    },{id: "post-chai-creme-brulee",
      
        title: "chai creme brulee",
      
      description: "a gingery, milky custard dessert with crackly sugar crust",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/chai-creme-brulee/";
        
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
      
      description: "a delicious take on brown butter chocolate chip cookies",
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
