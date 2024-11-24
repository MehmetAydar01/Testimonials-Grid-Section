import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import secondPersonImg from '@/assets/images/image-jonathan.jpg';

function SecondPersonCard() {
  return (
    <Card className='col-span-1 border-none bg-veryDarkGrayishBlue'>
      <CardHeader className='flex-row gap-x-5 items-center space-y-0 p-8 pb-4'>
        <img
          src={secondPersonImg}
          alt='jonathan img'
          className='w-8 h-8 rounded-full'
        />
        <div>
          <CardTitle className='capitalize font-medium tracking-normal text-sm text-white'>
            Jonathan Walters
          </CardTitle>
          <CardDescription className='text-white opacity-50 text-xs font-medium'>
            Verified Graduate
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className='p-8 pt-0'>
        <h1 className='text-white font-medium text-xl mb-4'>
          The team was very supportive and kept me motivated
        </h1>
        <p className='text-sm text-white opacity-70 tracking-wide'>
          “ I started as a total newbie with virtually no coding skills. I now
          work as a mobile engineer for a big company. This was one of the best
          investments I’ve made in myself. ”
        </p>
      </CardContent>
    </Card>
  );
}

export default SecondPersonCard;
