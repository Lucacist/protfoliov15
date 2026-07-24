import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Luca Fourfooz';
  const subtitle =
    searchParams.get('subtitle') ??
    'Développeur Full-Stack & Designer UI/UX';
  const tags = searchParams.get('tags')?.split(',').filter(Boolean) ?? [];

  // Load Inter font from public directory
  const baseUrl = new URL('/fonts', request.url);
  const interRegular = await fetch(new URL('Inter-Regular.ttf', baseUrl)).then(
    (res) => res.arrayBuffer(),
  );
  const interBold = await fetch(new URL('Inter-Bold.ttf', baseUrl)).then(
    (res) => res.arrayBuffer(),
  );

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          padding: '80px 100px',
          fontFamily: 'Inter',
          position: 'relative',
        }}
      >
        {/* Accent gradient bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #f43f5e, #ec4899, #a855f7)',
          }}
        />

        {/* Logo / domain */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #f43f5e, #ec4899)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '22px',
              fontWeight: 700,
            }}
          >
            L
          </div>
          <span
            style={{
              color: '#a1a1aa',
              fontSize: '20px',
              fontWeight: 400,
            }}
          >
            lucaffz.dev
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 30 ? '48px' : '64px',
            fontWeight: 700,
            color: '#fafafa',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
            maxWidth: '900px',
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        {subtitle && (
          <div
            style={{
              fontSize: '28px',
              fontWeight: 400,
              color: '#a1a1aa',
              lineHeight: 1.4,
              maxWidth: '800px',
              marginBottom: '40px',
            }}
          >
            {subtitle}
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {tags.slice(0, 5).map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '8px 18px',
                  borderRadius: '999px',
                  border: '1px solid #27272a',
                  color: '#d4d4d8',
                  fontSize: '16px',
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: interRegular,
          weight: 400,
        },
        {
          name: 'Inter',
          data: interBold,
          weight: 700,
        },
      ],
    },
  );
}
