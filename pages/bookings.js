import { Bookings } from '../components/Bookings';
import { mixes } from '../data/mixes';

export default function BookingsPage({ mixes }) {  
  return <Bookings mixes={mixes} />;
};

export async function getStaticProps () {
  
  return { props: { mixes } };
}
