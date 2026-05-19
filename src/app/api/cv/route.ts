import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'DavidBalaCV.pdf');
  
  try {
    const fileBuffer = await fs.readFile(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="DavidBalaCV.pdf"',
      },
    });
  } catch (err) {
    return NextResponse.json({ error: 'CV not found' }, { status: 404 });
  }
}
