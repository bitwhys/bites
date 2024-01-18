const { db } = require('@vercel/postgres')

const seedDesigns = async (client) => {}
const main = async () => {
  const client = await db.connect()
  // TODO: await calls to seed functions passing in the client

  await seedDesigns(client)

  await client.end()
}

main().catch((err) => {
  console.error('An error occurred while attempting to seed the database:', err)
})
