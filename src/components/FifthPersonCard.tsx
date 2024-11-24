import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import fifthPersonImg from '@/assets/images/image-patrick.jpg';

function FifthPersonCard() {
  return (
    <Card className='col-span-1 lg:col-span-2 border-none bg-veryDarkBlackishBlue text-white'>
      <CardHeader className='flex-row gap-x-5 items-center space-y-0 p-8 pb-4'>
        <img
          src={fifthPersonImg}
          alt='jeanette img'
          className='w-8 h-8 rounded-full border-purple-400 border-2'
        />
        <div>
          <CardTitle className='capitalize font-medium tracking-normal text-sm text-white'>
            Patrick Abrams
          </CardTitle>
          <CardDescription className='text-white opacity-50 text-xs font-medium'>
            Verified Graduate
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className='p-8 pt-0'>
        <h1 className='text-white font-medium text-xl mb-4'>
          Awesome teaching support from TAs who did the bootcamp themselves.
          Getting guidance from them and learning from their experiences was
          easy.
        </h1>
        <p className='text-sm text-white opacity-70 tracking-wide'>
          “ The staff seem genuinely concerned about my progress which I find
          really refreshing. The program gave me the confidence necessary to be
          able to go out in the world and present myself as a capable junior
          developer. The standard is above the rest. You will get the personal
          attention you need from an incredible community of smart and amazing
          people. ”
        </p>
      </CardContent>
    </Card>
  );
}

export default FifthPersonCard;
