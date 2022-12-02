function AdminPanel() {
  return (
    <>
      <h1>Welcome back, Admin!</h1>
      <ul>
        <li>
          <p className="nav-p">Home</p>
        </li>
        <li>
          <p className="nav-p">Monitoring</p>
        </li>
        <li>
          <p className="nav-p">Incidents</p>
        </li>
        <li>
          <p className="nav-p">Settings</p>
        </li>
        <li>
          <p className="nav-p">Logout</p>
        </li>
      </ul>
      <p>This is a lovely admin panel.</p>
    </>
  )
}

export default AdminPanel
