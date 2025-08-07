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

  // Pages that should not show header/footer (like login, signup)
  const authPages = ['/login', '/signup']
  const isAuthPage = authPages.includes(location.pathname)

  return (
    <div className="min-h-screen">
      {isAuthPage ? (
        // Auth pages without layout
        <div className="bg-background text-foreground min-h-screen">
          <Outlet />
        </div>
      ) : (
        // Regular pages with layout
        <Layout>
          <Outlet />
        </Layout>
      )}
    </div>
  )
}

export default App
