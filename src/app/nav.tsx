const Nav: React.FC = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">SCEC Finance</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-sm">
            <li><a href="/NewOffering">New Offering</a></li>
            <li><a href="/NewExpense">New Expense</a></li>
            <li>
              <details>
                <summary>Report</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>All</a></li>
                  <li><a>Offering</a></li>
                  <li><a>Expense</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider m-0 h-0"/>
    </div>
  );
};

export default Nav;