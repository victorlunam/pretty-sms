import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className='grow flex flex-col gap-4 p-3'>
        {children}
      </main>
    </>
  )
}

export default Layout