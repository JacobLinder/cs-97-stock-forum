const landingbuttons = [
  {
    title: 'Sign in',
    description:
      "Sign in to view stocks! You can start following and interacting with stocks.",
    imageUrl: process.env.PUBLIC_URL + '/assets/ipad.jpeg',
    time: 1500,
    link: '/sign-in'
  },
  {
    title: 'Preview stocks',
    description:
      "Don't want to sign in? Click here to view some featured stocks.",
    imageUrl: process.env.PUBLIC_URL + '/assets/previewstocks.jpeg',
    time: 1500,
    link: '/homepage'
  },
];

export default landingbuttons;