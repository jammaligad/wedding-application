var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.project.wedding',
    // Enable swipe panel
    
    // Add default routes
    routes: [
      {
        path: '/',
        url: './index.html',
        tabs: [
          {
            path: '/',
            id: 'home',
            url: './home.html',
          },
          {
            path: '/people/',
            id: 'people',
            url: './people.html',
          },
          {
            path: '/program/',
            id: 'program',
            url: './program.html',
          },
          {
            path: '/attire/',
            id: 'attire',
            url: './attire.html',
          },
          {
            path: '/location/',
            id: 'location',
            url: './location.html',
          },
          {
            path: '/food/',
            id: 'food',
            url: './food.html',
          },
        ],
      },
    ]
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');