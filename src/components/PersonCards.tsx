import {
  FirstPersonCard,
  SecondPersonCard,
  ThirdPersonCard,
  FourthPersonCard,
  FifthPersonCard,
} from '@/components';

function PersonCards() {
  return (
    <div className='grid my-20 lg:my-0 lg:grid-cols-4 gap-7 max-w-7xl w-[90vw] font-barlowSemiCondensed'>
      <FirstPersonCard />
      <SecondPersonCard />
      <ThirdPersonCard />
      <FourthPersonCard />
      <FifthPersonCard />
    </div>
  );
}

export default PersonCards;
