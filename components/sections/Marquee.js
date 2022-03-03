import { EventsPreview } from "./events/EventsPreview";
import { MarqueeWrapper } from "../styles/MarqueeWrapper";
import { News } from './News';

const MARQUEE_EVENT_PREVIEW_MAX_COUNT = 3;

export function Marquee (props) {
  const { 
    news,
    upcomingEvents, 
  } = props;

  return (
    <MarqueeWrapper>
      <div className="img-container">
        <img src="/images/main-bg4.jpg" />
      </div>
  
      <div className="news">
        <div className="news-inner">
  
          <h1>Greg Murphy Music</h1>
    
          <News news={news} />
          
          <div className="news-item upcoming-events">
            <header>
              <h3>Upcoming Events</h3>
              <a className="jumplink" href="#upcoming-dates" target="_self">All Events</a>
            </header>

            <EventsPreview 
              upcomingEvents={upcomingEvents} 
              limit={MARQUEE_EVENT_PREVIEW_MAX_COUNT} 
            />
          </div>
        </div>
      </div>
    </MarqueeWrapper>
  )
}
