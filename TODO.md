# cherahealth.org rebuild

[toc]

------------

## 1. Requirements

-   needs to accept donations
-   does thing
-   mobile friendly
-   501c info
-   visible info on programs
-   visiable PDF doc yearly reviews
-   other things to keep in mind but don't make them yet
    -   blog/news
    -   social media

------------

## 2. Layout 

### ◊ pages

-   Home page

    -   'about us' type dealio
-   donation page

    -   Paypal in React or
    -   add the existing paypal page in an iframe or
    -   explore other payment / donation options
-   health and education page
    -   description of programs
        -   collapsable?
        -   info graphic?
    -   some health and education copy and icons
    -   links to PDF doc with yearly update

### ◊ navigation

mobile

- logo icon 
- fonts
- hamburger -> Dropdown or Expansion 
- theme implementation

desktop

- fancier button mouseover
- expanded navigation menu

### ◊ footer

- 501c info
- copyright
- contact info/form
- creator credits

------------

## 3. Front end design

### ◊ libraries

- NextJS

  - static preprocessing for React
  - routing
  - 

- Material UI - 

  - https://github.com/mui-org/material-ui/tree/master/examples/nextjs-with-typescript

  -  use Theme class for styling

    

◊ Image optimization -- can nextjs do what gatsbyjs can do

- is AMP a good choice?
- react-progressive-image-loading (requires manual creation of thumbnails)

- nextjs or gatsby

  - compare image loading optimization
  - ease of getting SEO stuff in there
- CMS (for v1.1)

  - ease of blog updating

### styles

- Material UI themes
  - https://material-ui.com/styles/basics/
  - https://material-ui.com/components/css-baseline/
  - https://material-ui.com/api/css-baseline/
  - https://material-ui.com/customization/default-theme/#default-theme

------------

## 4. SSO

- is React Helmet or something like that available in NextJs
  -  the `Head` component atleast contains metadata https://nextjs.org/docs/api-reference/next/head

------------

# v 1.1 - for later:

- blog / news page
- social media page or integration
- contact form
