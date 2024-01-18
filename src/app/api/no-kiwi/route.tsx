import { NextRequest, NextResponse } from 'next/server';

export function GET(_: NextRequest) {
  return NextResponse.json({
    text: 'Hello, this is a route that is not controlled by Kiwi.',
    time: Date.now(),
  });
}
