import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'Olivia_Ezekwe_CV.pdf');
    if (fs.existsSync(filePath)) {
      const fileBuffer = fs.readFileSync(filePath);
      return new Response(new Uint8Array(fileBuffer), {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="Olivia_Ezekwe_CV.pdf"',
        },
      });
    }

    const altPath = path.join(process.cwd(), 'public', 'OLIVIA EZEKWE (CV) (1).pdf');
    if (fs.existsSync(altPath)) {
      const fileBuffer = fs.readFileSync(altPath);
      return new Response(new Uint8Array(fileBuffer), {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="Olivia_Ezekwe_CV.pdf"',
        },
      });
    }

    return new Response('CV file not found', { status: 404 });
  } catch {
    return new Response('Error loading CV file', { status: 500 });
  }
}
