const users = [
  {
    username: 'AlexDesignPro',
    email: 'alexdesign@example.com',
    bio: 'Experienced UI/UX designer with a passion for creating intuitive user interfaces.',
    createdAt: new Date('2022-08-01T09:00:00Z'),
    lastLogin: new Date('2024-01-15T12:00:00Z'),
    socialMediaLinks: JSON.stringify({
      twitter: 'https://twitter.com/AlexDesign',
      linkedin: 'https://linkedin.com/in/alexdesign',
    }),
    SubscriptionID: null,
    isProUser: false,
    authProvider: 'Google',
    authProviderId: 'google-alex123',
  },
  {
    username: 'CreativeSam',
    email: 'samcreative@example.com',
    bio: 'Freelance graphic designer specializing in branding and digital illustrations.',
    createdAt: new Date('2022-09-15T11:30:00Z'),
    lastLogin: new Date('2024-01-10T08:20:00Z'),
    socialMediaLinks: JSON.stringify({
      instagram: 'https://instagram.com/CreativeSam',
    }),
    SubscriptionID: 'sub02',
    isProUser: true,
    authProvider: 'GitHub',
    authProviderId: 'github-samc',
  },
  {
    username: 'DesignGuruRachel',
    email: 'rachelguru@example.com',
    bio: 'Award-winning designer focused on web and mobile app design.',
    createdAt: new Date('2022-07-03T10:00:00Z'),
    lastLogin: new Date('2024-01-12T15:40:00Z'),
    socialMediaLinks: JSON.stringify({
      dribbble: 'https://dribbble.com/DesignGuruRachel',
    }),
    SubscriptionID: 'sub03',
    isProUser: true,
    authProvider: 'Dribbble',
    authProviderId: 'dribbble-rachel01',
  },
  {
    username: 'PixelPete',
    email: 'petepixel@example.com',
    bio: 'Pixel art enthusiast and game designer.',
    createdAt: new Date('2022-10-21T13:50:00Z'),
    lastLogin: new Date('2024-01-08T09:30:00Z'),
    socialMediaLinks: JSON.stringify({
      twitter: 'https://twitter.com/PixelPete',
    }),
    SubscriptionID: null,
    isProUser: false,
    authProvider: 'Google',
    authProviderId: 'google-pixelPete321',
  },
  {
    username: 'TypographyTina',
    email: 'tinatype@example.com',
    bio: 'Specialist in typography and print design with a love for minimalism.',
    createdAt: new Date('2022-11-05T14:20:00Z'),
    lastLogin: new Date('2024-01-11T11:00:00Z'),
    socialMediaLinks: JSON.stringify({
      linkedin: 'https://linkedin.com/in/typographytina',
    }),
    SubscriptionID: 'sub05',
    isProUser: true,
    authProvider: 'MagicLink',
    authProviderId: null,
  },
]

module.exports = {
  users,
}
