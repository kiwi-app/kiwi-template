export interface FooterProps {
  menus: {
    title: string;
    items: {
      name: string;
      href: string;
    }[];
  }[];
}

export default function Footer(props: FooterProps) {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      {props.menus?.map((menu, index) => (
        <nav key={`menu-${menu}-${index}`}>
          <header className="footer-title">{menu.title}</header>
          {menu.items?.map((item, index) => (
            <a key={`item-${item}-${index}`} href={item.href} className="link link-hover">
              {item.name}
            </a>
          ))}
        </nav>
      ))}
    </footer>
  );
}
