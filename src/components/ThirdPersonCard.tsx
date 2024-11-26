import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import thirdPersonImg from '@/assets/images/image-kira.jpg';

function ThirdPersonCard() {
  return (
    <Card className='col-span-1 row-start-5 row-end-6 lg:row-span-2 border-none bg-white'>
      <CardHeader className='flex-row gap-x-5 items-center space-y-0 p-8 pb-4'>
        <img
          src={thirdPersonImg}
          alt='kira img'
          className='w-8 h-8 rounded-full'
        />
        <div>
          <CardTitle className='capitalize font-medium tracking-normal text-sm text-veryDarkGrayishBlue'>
            Kira Whittle
          </CardTitle>
          <CardDescription className='text-veryDarkGrayishBlue opacity-50 text-xs font-medium'>
            Verified Graduate
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className='p-8 pt-0'>
        <h1 className='text-veryDarkGrayishBlue font-semibold text-xl mb-4'>
          Such a life-changing experience. Highly recommended!
        </h1>
        <p className='text-sm text-veryDarkGrayishBlue opacity-70 tracking-wide'>
          “ Before joining the bootcamp, I’ve never written a line of code. I
          needed some structure from professionals who can help me learn
          programming step by step. I was encouraged to enroll by a former
          student of theirs who can only say wonderful things about the program.
          The entire curriculum and staff did not disappoint. They were very
          hands-on and I never had to wait long for assistance. The agile team
          project, in particular, was outstanding. It took my learning to the
          next level in a way that no tutorial could ever have. In fact, I’ve
          often referred to it during interviews as an example of my developent
          experience. It certainly helped me land a job as a full-stack
          developer after receiving multiple offers. 100% recommend! ”
        </p>
      </CardContent>
    </Card>
  );
}

export default ThirdPersonCard;
