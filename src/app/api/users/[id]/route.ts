import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

const prisma = new PrismaClient()

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: { id: params.id },
    select: {
      name: true,
      email: true,
      phone: true,
      address: true,
      city: true,
      state: true,
    },
  })

  return NextResponse.json(user)
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const data = await request.json()
  const user = await prisma.user.update({
    where: { id: params.id },
    data: {
      name: data.name,
      phone: data.phone,
      address: data.address,
      city: data.city,
      state: data.state,
    },
  })

  return NextResponse.json(user)
}