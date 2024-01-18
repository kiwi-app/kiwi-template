interface NavbarItem {
  name: string;
  href: string;
  subItems?: {
    name: string;
    href: string;
  }[];
}

export interface NavbarProps {
  items: NavbarItem[];
}

export default function Navbar(props: NavbarProps) {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {props.items?.map((item, i) => (
              <li key={`item-${item.name}-${i}`}>
                <a href={item.href}>{item.name}</a>
                {item.subItems && (
                  <ul className="p-2">
                    {item.subItems?.map((subItem, j) => (
                      <li key={`subitem-${subItem.name}-${j}`}>
                        <a href={subItem.href}>{subItem.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">kiwi</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {props.items?.map((item, i) => (
            <li key={`item-mobile-${item.name}-${i}`}>
              {item.subItems ? (
                <details>
                  <summary>{item.name}</summary>
                  <ul className="p-2 z-[1]">
                    {item.subItems?.map((subItem, j) => (
                      <li key={`subitem-details-${subItem.name}-${j}`}>
                        <a href={subItem.href}>{subItem.name}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a href={item.href}>{item.name}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Hello</a>
      </div>
    </div>
  );
}
