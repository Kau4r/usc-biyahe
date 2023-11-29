import './globals.css'

import Providers from './components/providers'

export const metadata = {
  title: 'biyahe',
  description: 'biyahe ta bai!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>{children}</Providers>
    </html>
  )
}