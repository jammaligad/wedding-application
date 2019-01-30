var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.project.wedding',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      /*
      {
        path: '/path/',
        url: '.html',
      },
      */
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');