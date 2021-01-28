module.exports = {
  "title": "Brian's Math Blog",
  "description": "Hi! This is my personal blog, which documents my passion and research in mathematics. Feel free to reach out to me via brianli.li@mail.utoronto.ca",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Projects",
        "link": "/views/projects/projects.html",
        "icon": "reco-api"
      },
      {
        "text": "About Me",
        "link": "/views/aboutme/aboutme.html",
        "icon": "reco-eye"
      },
      {
        "text": "Cool Sites",
        "link": "/views/coolestsite/Coolest Website.html",
        "icon": "reco-suggestion"
      },
      {
        "text": "MAT202",
        "icon": "reco-document",
        "items": [
          {
            "text": "TUT 1",
            "link": "/views/MAT202/tut1.md",
          },
          {
            "text": "TUT 2",
            "link": "/views/MAT202/tut2.md",
          },
          {
            "text": "TUT 3",
            "link": "/views/MAT202/tut3.md",
          },
          {
            "text": "TUT 4",
            "link": "/views/MAT202/tut4.md",
          },
          {
            "text": "TUT 5",
            "link": "/views/MAT202/tut5.md",
          },
          {
            "text": "TUT 6",
            "link": "/views/MAT202/tut6.md",
          },
          {
            "text": "TUT 7",
            "link": "/views/MAT202/tut7.md",
          },
          {
            "text": "TUT 8",
            "link": "/views/MAT202/tut8.md",
          },
          {
            "text": "TUT 9",
            "link": "/views/MAT202/tut9.md",
          },
          {
            "text": "TUT 10",
            "link": "/views/MAT202/tut10.md",
          },
          {
            "text": "TUT 11",
            "link": "/views/MAT202/tut11.md",
          },
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/BrianLi009",
            "icon": "reco-github"
          },
          {
            "text": "LinedIn",
            "link": "https://www.linkedin.com/in/zhengyu-brian-li-41840a16a/",
            "icon": "reco-linkedin"
          },
          {
            "text": "Book a Meeting",
            "link": "https://calendly.com/brianli/30min",
            "icon": "reco-tongzhi"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "Brian Li",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-129657379-2' // UA-129657379-2
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["wanko"],
        clean: true,
        modelStyle: {
          position: "fixed",
          left: "0px",
          bottom: "0px",
          opacity: "0.9",
          zIndex: 99999
        }
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'en-US'
    }
  }
}