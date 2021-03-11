const landingbuttons = [
  {
    title: 'Sign in',
    description:
      "Sign in to view stocks! You can start following and interacting with stocks.",
    imageUrl: process.env.PUBLIC_URL + '/assets/previewstocks.jpeg',
    time: 1500,
    link: '/sign-in'
  },
  {
    title: 'Create account',
    description:
      "Are you new here? Click here to create an account and start viewing stocks.",
    imageUrl: process.env.PUBLIC_URL + '/assets/ipad.jpeg',
    time: 1500,
    link: '/create-account'
  },
];

export default landingbuttons;