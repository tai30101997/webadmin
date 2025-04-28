'use client'
import { ApolloProvider } from '@apollo/client';
import './global.css';
import { useApollo } from '@webadmin/react_apollo';
import { CookiesProvider } from 'next-client-cookies/server';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = useApollo();
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>
          <CookiesProvider>{children}</CookiesProvider>
        </ApolloProvider></body>
    </html>
  );
}
