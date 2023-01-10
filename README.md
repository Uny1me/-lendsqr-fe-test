# LENDSQR-FE-TEST DASHBOARD TEMPLATE

**Lendsqr** is a Lending-as-a-Service solution powers lenders to launch in the shortest possible time, and scale their digital lending business across multiple channels, at the lowest cost.

# Preview

### Screenshot

![Adminator admin dashboard template preview](/public/dashboard-readme-preview.png)

### Demo Site: [Here](https://colorlib.com/polygon/adminator/index.html)

## TOC

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing & Local Development](#installing--local-development)
- [Files/Folder Structure](#filesfolders-structure)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Changelog](#changelog)
- [Authors](#authors)
- [License](#license)

## Getting Started

In order to run **Lendsqr** on your local machine all what you need to do is to have the prerequisites stated below installed on your machine and follow the installation steps down below.

#### Prerequisites

- Node.js
- Yarn or NPM
- Git CLI

#### Installing & Local Development

Start by typing the following commands in your terminal in order to get **Lendsqr** full package on your machine and starting a local development server with live reload feature.

```
> git clone https://github.com/Uny1me/lendsqr-fe-test.git lendsqr
> cd lendsqr
> npm install
> npm run start
```

## Files/Folders Structure

Here is a brief explanation of the template folder structure and some of its main files usage:

```
└── src                         # Contains all template source files.
│   └── assets                  # Contains images and icon fonts.
│       │
│       └── conmponents         # Contains important Re-useable full configured components used in Pages all written in TypeScript
│       │     └── dashboard-c.. # Contains components specific to the dashboard page
│       │
│       └── lib                 # Contains important Re-useable data
│       └── pages               # Files for site pages (.tsx)
│       └── pages               # Basic utils used for proper rendering.
│       └── *.scss              # Styling Files for app
│       └── index.tsx           # Entry point for Application
│       └── App.tsx             # HOF for entire app
│       └── custom.d.ts         # Configuration for importing image/svg image/png files
│
│
└── public                      # Ignored files in Git.
│    │
│    └──fonts                   # All font files used, save for Inter which was gotten leveraging Google Font CDN
│    └──*.png                   # Image File
│    └──*.ico                   # Favicon
│    └──index.html              # Entry point -- html
│    └──*.json                  # Manifest file
└── .gitignore                  # Ignored files in Git.
└── package.json                # Package metadata.
└── README.md                   # Precise and Tailord Documentation of
└── postcss.config.js           # POSTCSS main config file.
└── tailwind.config.js          # Tailwind main config file.
└── package.lock                # npm metadata.
```

## Deployment

In deployment process, you have two commands:

1. Build command
   Used to generate the final result of compiling src files into build folder. This can be achieved by running the following command:

```
> npm run build
```

2. Test command
   Used to create a local dev server in order to preview the final output of build process. This can be achieved by running the following command:

```
> npm run test
```

## Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
## Changelog

#### V 0.1.0

Initial Release

## Authors

[Unyime](https://github.com/Uny1me)

## More info
This was done as a FrontEnd Engineering Test Provided by [Unyime](https://www.lendsqr.com/)
Appreciate the opportunity