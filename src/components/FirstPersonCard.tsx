import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import firstPersonImg from '@/assets/images/image-daniel.jpg';
import bgPatternQuot from '@/assets/images/bg-pattern-quotation.svg';

function FirstPersonCard() {
  return (
    <Card className='col-span-1 lg:col-span-2 border-none bg-moderateVioler text-white relative z-50'>
      <CardHeader className='flex-row gap-x-5 items-center space-y-0 p-8 pb-4'>
        <img
          src={firstPersonImg}
          alt='daniel img'
          className='w-8 h-8 rounded-full border-purple-400 border-2'
        />
        <div>
          <CardTitle className='capitalize font-medium tracking-normal text-sm text-white'>
            Daniel Clifford
          </CardTitle>
          <CardDescription className='text-white opacity-50 text-xs font-medium'>
            Verified Graduate
          </CardDescription>
        </div>
      </CardHeader>

      {/* Quot */}
      <div className='absolute top-0 right-14 sm:right-28 -z-50'>
        <img
          src={bgPatternQuot}
          alt='bg pattern quot'
          className='h-[7.5rem] w-[7.5rem]'
        />
      </div>

      <CardContent className='p-8 pt-0'>
        <h1 className='text-white font-medium text-xl mb-4'>
          I received a job offer mid-course, and the subjects I learned were
          current, if not more so, in the company I joined. I honestly feel I
          got every penny’s worth.
        </h1>
        <p className='opacity-70 text-sm font-medium text-lightGray tracking-wide'>
          “ I was an EMT for many years before I joined the bootcamp. I’ve been
          looking to make a transition and have heard some people who had an
          amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best - and most grueling - time of my life. Since
          completing the course, I’ve successfully switched careers, working as
          a Software Engineer at a VR startup. ”
        </p>
      </CardContent>
    </Card>
  );
}

export default FirstPersonCard;
