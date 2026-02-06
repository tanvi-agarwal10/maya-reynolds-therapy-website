export const metadata = {
  title: 'Maya Reynolds - Therapist in Santa Monica',
  description: 'Compassionate anxiety and trauma therapy in Santa Monica. Evidence-based treatment for anxiety, PTSD, and burnout.',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = 'width=device-width, initial-scale=1';

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  );
}
