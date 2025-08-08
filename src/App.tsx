import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useAppStore } from '@/stores/useAppStore'
import { Layout } from '@/components/layout/Layout'

function App() {
  const { theme } = useAppStore()
  const location = useLocation()

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  const authPages = ['/login', '/signup']
  const isAuthPage = authPages.includes(location.pathname)

  return (
    <div className="min-h-screen">
      {isAuthPage ? (
        <div className="bg-background text-foreground min-h-screen">
          <Outlet />
        </div>
      ) : (
        <Layout>
          <Outlet />
        </Layout>
      )}
    </div>
  )
}

export default App
