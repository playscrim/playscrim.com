import { ImageResponse } from 'next/og';

export async function GET() {
  return new ImageResponse(<div>Sim</div>);
}
