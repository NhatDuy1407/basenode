# Structure
.
├── config                  # App configuration files
│   ├── sequalize.json        # Sequalize config
│   ├── serviceOne.json       # ServiceOne config
│   └── ...                 # Other configurations
├── routes                  
│   ├── controllers         # Request managers
│   ├── middlewares         # Request middlewares
│   └── routes.ts           # Define routes and middlewares here
├── services                # External services implementation   
│   ├── serviceOne
│   └── serviceTwo
│   └── ...                 # Other services
├── database                      # Data access stuff  (Sequalize mostly)
│   ├── models              # Models
│   ├── migrations          # Migrations
│   ├── repositories        # Repositories
│   └── index.ts            # Sequalize instantiation
├── core                    # Business logic implementation
│   ├── accounts.ts         
│   ├── sales.ts            
│   ├── comments.ts              
│   └── ...                 # Other business logic implementations
├── utils                   # Util libs (formats, validation, etc)
├── tests                   # Testing
├── scripts                 # Standalone scripts for dev uses
├── pm2.ts                  # pm2 init - production process manager for Node.js
├── shipitfile.ts           # deployment automation file
├── package.json           
├── README.md         
└── app.ts                  # App starting point

# Overview
