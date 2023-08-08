import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    items: [
      { id: 1, title: 'hello one' },
      { id: 2, title: 'hello two' },
      { id: 3, title: 'hello three' },
      { id: 4, title: 'hello four' },
      { id: 5, title: 'hello five' },
    ],
  })
}

// export async function POST() {
//   return NextResponse.json({ hello: 'POST' })
// }
