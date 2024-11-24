import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import fourthPersonImg from '@/assets/images/image-jeanette.jpg';

function FourthPersonCard() {
  return (
    <Card className='col-span-1 border-none bg-white'>
      <CardHeader className='flex-row gap-x-5 items-center space-y-0 p-8 pb-4'>
        <img
          src={fourthPersonImg}
          alt='jeanette img'
          className='w-8 h-8 rounded-full'
        />
        <div>
          <CardTitle className='capitalize font-medium tracking-normal text-sm text-veryDarkGrayishBlue'>
            Jeanette Harmon
          </CardTitle>
          <CardDescription className='text-veryDarkGrayishBlue opacity-50 text-xs font-medium'>
            Verified Graduate
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className='p-8 pt-0'>
        <h1 className='text-veryDarkGrayishBlue font-semibold text-xl mb-4'>
          An overall wonderful and rewarding experience
        </h1>
        <p className='text-sm text-veryDarkGrayishBlue opacity-70 tracking-wide'>
          “ Thank you for the wonderful experience! I now have a job I really
          enjoy, and make a good living while doing something I love. ”
        </p>
      </CardContent>
    </Card>
  );
}

export default FourthPersonCard;
