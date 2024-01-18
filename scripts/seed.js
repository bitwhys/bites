const { db } = require('@vercel/postgres')
const { designs } = require('../data/designs')
const { users } = require('../data/users')

const seedUsers = async (client) => {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    const createTable = client.sql` CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      username VARCHAR(150) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
      bio TEXT,
      createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
      lastLogin TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
      socialMediaLinks JSONB,
      isProUser BOOLEAN DEFAULT false NOT NULL,
      authProvider VARCHAR(100) NOT NULL,
      authProviderId VARCHAR(255)
    );
    `

    console.log(`Created "users" table`)

    const insertedUsers = Promise.all(
      users.map(
        (user) => client.sql`
     INSERT INTO users (username,email,bio,createdAt,lastLogin,socialMediaLinks,isProUser,authProvider,authProviderId),
     VALUES (${user.username},${user.email},${user.bio},${user.createdAt},${user.lastLogin},${user.socialMediaLinks},${user.isProUser},${user.authProvider},${user.authProviderId}),
     ON CONFLICT (id) DO NOTHING;
    `
      )
    )

    console.log(`Seeded ${insertedUsers.length} users`)

    return {
      createTable,
      users: insertedUsers,
    }
  } catch (error) {
    console.error('Error seeding users:', error)
    throw error
  }
}
const seedDesigns = async (client) => {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    const createTable = await client.sql`
     CREATE TABLE IF NOT EXISTS designs (
       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
       userId VARCHAR(255) NOT NULL REFERENCES users (id), -- Reference to the creators user ID
       title VARCHAR(250) NOT NULL,
       description TEXT,
       thumbnailUrl VARCHAR(500) NOT NULL,
       tags TEXT[],
       createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
       updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
       isPro BOOLEAN DEFAULT false NOT NULL,
       version VARCHAR(50),
       privacySetting VARCHAR(50) DEFAULT 'public' NOT NULL,
       colors VARCHAR(7)[],
       software VARCHAR(100), -- The design tool used to create the design source
       sourceUrl VARCHAR(500) NOT NULL,
       previewUrl VARCHAR(500) NOT NULL,
       downloads INT DEFAULT 0 NOT NULL,
       views INT DEFAULT 0 NOT NULL,
       rating DECIMAL(3,2), -- The average rating of the design
       reviewCount INT DEFAULT 0 NOT NULL,
       slug VARCHAR(255) NOT NULL,
       dominantColor VARCHAR(7),
       ipfscid VARCHAR(255)
     );
    `
    console.log(`Created "designs" table`)

    // insert data into the "designs" table

    const insertedDesigns = await Promise.all(
      designs.map(
        (design) => client.sql`
        INSERT INTO designs (tags,colors,title,description,createdAt,software,dominantColor,slug,sourceUrl,previewUrl,thumbnailUrl,version,ipfscid),
        VALUES (${design.tags},${design.colors},${design.title},${design.description},${design.createdAt},${design.software},${design.dominantColor},${design.slug},${design.sourceUrl},${design.previewUrl},${design.thumbnailUrl},${design.version},${design.ipfscid})
        ON CONFLICT (id) DO NOTHING;
        `
      )
    )

    console.log(`Seeded ${insertedDesigns.length} designs`)

    return {
      createTable,
      designs: insertedDesigns,
    }
  } catch (error) {
    console.error('Error seeding designs:', error)
    throw error
  }
}
const main = async () => {
  const client = await db.connect()
  // TODO: await calls to seed functions passing in the client

  await seedUsers(client)
  await seedDesigns(client)

  await client.end()
}

main().catch((err) => {
  console.error('An error occurred while attempting to seed the database:', err)
})
