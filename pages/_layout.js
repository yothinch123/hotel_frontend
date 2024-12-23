// pages/_layout.js
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-white p-3" style={{ width: '250px', height: '100vh' }}>
        <h4 className="text-center">Admin Panel</h4>
        <ul className="list-unstyled">
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/users">Users</Link></li>
          <li><Link href="/settings">Settings</Link></li>
        </ul>
      </div>

      {/* Main content area */}
      <div className="content-wrapper flex-grow-1">
        {/* Header */}
        <div className="header bg-primary text-white p-3">
          <h5>Welcome to Admin Dashboard</h5>
        </div>

        {/* Main content */}
        <div className="content p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
