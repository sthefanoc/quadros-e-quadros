<h1 align="center">Quadros & Quadros | Ecommerce</h1>

<p align="center">
  <img width="100%" alt="" src="/static/images/SthefanoC.com- personal website - Header.png">
</p>

# Quadros & Quadros | E-commerce website

An e-commerce using ReactJS as frontend, Stripe for payments, Netlify Serverless Functions for supporting the payment part, and Auth0 for authentication.

<p align="center">
  <img width="100%" alt="" src="/static/images/SthefanoC- PersonalWebsite.gif">
</p>

## Getting Started

To get this running on another machine, just clone the repo and run the command to start the server. It is important to have node installed:

```
npm start
```

#### .env vars

It is also needed to add these API keys on a ".env" file so that the functionality works

- REACT_APP_AUTH_DOMAIN=
- REACT_APP_CLIENT_ID=
- REACT_APP_STRIPE_PUBLIC_KEY=
- REACT_APP_STRIPE_SECRET_KEY=

#### Extra Setup

```
npm install dotenv@8.2.0 stripe@8.130.0 @stripe/react-stripe-js@1.1.2 @stripe/stripe-js@1.11.0 netlify@6.0.12
```

```
npm install netlify-cli -D
```

### Prerequisites

React JS.

### Styles

This project uses CSS mostly through Styled Components.

## Deployment

The app is deployed using [Netlify](https://www.netlify.com/) for the front-end and Serverless functions.
The domain is managed on the [Hostinger](https://www.hostinger.com.br/) platform.

## Built With

- [Visual Studio Code](https://code.visualstudio.com/) - The editor
- [Create React App](https://github.com/facebook/create-react-app) - The helper

## Authors

- **Sthefano Carvalho** - [SthefanoC](https://github.com/sthefanoc)

## Acknowledgments

- Template and functionality based on the course of [John Smilga](https://www.johnsmilga.com/)
- Follow me on twitter and see my other projects: [Sthefano_C](https://twitter.com/Sthefano_C)
