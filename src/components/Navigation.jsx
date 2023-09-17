export default function Nav({ links }) {
    return (
      <nav>
        <ul>
            {links.map((link) => (
              <li>{link}</li>
            ))}
        </ul>
      </nav>
    );
  }
  