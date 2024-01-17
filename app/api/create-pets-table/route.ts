import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export const GET = async (request: Request) => {
  try {
    const result =
      await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`
    return NextResponse.json({ result }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
