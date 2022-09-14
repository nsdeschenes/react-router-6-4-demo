import { Outlet } from "react-router-dom"

export const Layout: React.FC = () => {
  return (
    <div className="md:container md:mx-auto">
      <Outlet />
    </div>
  )
}