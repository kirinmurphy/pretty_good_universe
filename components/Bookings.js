import {
  IntroPane,
  ListPane,
  CenteredLinks
} from './styles/homepageStyles';


export function Bookings ({ mixes }) {

  console.log('mixes', mixes);

  return (
    <div id="page">
      <IntroPane>
        {/* <h1>
          random orbits
        </h1> */}
        <div>
          for bookings contact <a href="#">some@where.com</a>
        </div>
        {/* <div>sounds for any vibe</div  > */}
        <CenteredLinks>
          <a href="/">Background</a>
          <a href="/">Mixcloud</a>
          <a href="/">Youtube</a>
        </CenteredLinks>
      </IntroPane>
      <ListPane>
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
      </ListPane>
    </div>
  )
}
