import styled from "styled-components";

export function Contact () {
  return (
    <>
      <ContactLinks>
        {/* <h1>random orbits</h1> */}
        <span>
          For info/bookings contact <a href="#">some@where.com</a>
        </span>

        <a target="_blank" href="//youtube.com/outsidesounds">
          youtube.com/outsidesounds
        </a>

        {/* <a target="_blank" href="//mixcloud.com/kirinmurphy">
          mixcloud.com/kirinmurphy
        </a> */}
      </ContactLinks>

      {/* <ListPane>
        {mixes.map(({ section, list }) => (
          <section key={section}>
            <h2>{section}</h2>
            <ul>
              {list.map(mix => (
                <li key={mix.title}>
                  <a href={mix.link}>{mix.type} - {mix.title}</a></li>
              ))}
            </ul>
          </section>
        ))}
      </ListPane> */}
    </>
  )
}

export const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  gap: 1rem;
`;