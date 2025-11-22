'use client';

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        background: 'linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)',
        color: 'white',
        padding: '2rem'
      }}
    >
      <div
        style={{
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.25)',
          borderRadius: '16px',
          padding: '2rem 2.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
          maxWidth: 720,
          width: '100%'
        }}
      >
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', margin: 0 }}>????? ?? ??</h1>
        <p style={{ marginTop: '1rem', lineHeight: 1.8, fontSize: '1.125rem' }}>
          ??? ???? ?????? ???? ?? ???? ??? Vercel. ?????? ???????!
        </p>
        <form
          style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}
          onSubmit={(e) => {
            e.preventDefault();
            const input = (e.currentTarget.elements.namedItem('name') as HTMLInputElement);
            const name = input?.value?.trim();
            if (name) alert(`????? ${name}!`);
          }}
        >
          <input
            name="name"
            placeholder="???? ???? ???"
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.35)',
              background: 'rgba(255,255,255,0.15)',
              color: 'white',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.75rem 1rem',
              borderRadius: 12,
              border: 'none',
              background: 'white',
              color: '#0f172a',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            ??????
          </button>
        </form>
      </div>
    </main>
  );
}
