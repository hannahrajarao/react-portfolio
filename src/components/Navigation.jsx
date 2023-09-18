export default function Nav({ links }) {
    return (
      <nav>
        <ul>
            {links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
        </ul>
      </nav>
    );
  }
  