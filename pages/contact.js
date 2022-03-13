import { Contact } from '../components/Contact';
import { mixes } from '../data/mixes';

export default function ContactPage({ mixes }) {  
  return <Contact mixes={mixes} />;
};

export async function getStaticProps () {
  
  return { props: { mixes } };
}
