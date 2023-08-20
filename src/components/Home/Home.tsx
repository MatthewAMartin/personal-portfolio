import Button from '../UI/Button';
import { MoveUpRight, Play } from 'lucide-react';

const Home: React.FC = () => (
  <div className="h-screen w-screen flex justify-center items-center">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="col-span-2">
          <h1>
            Hi! I am
            <br /> Matthew Martin<span className="text-primary">.</span>
          </h1>
          <h4 className="font-bold text-secondary-600 mb-0">Design Lead | Head of UI/UX at Dealer Studio</h4>
          <p className="mt-6 mb-9 text-xl text-neutral-600">
            Test text 123 Test text 123 Test text 123 Test text 123 Test text 123 Test text 123 Test text 123 Test text
            123 Test text 123 Test text 123
          </p>
          <Button className="bg-primary hover:bg-primary-600 outline outline-2 outline-primary hover:outline-primary-600 text-white px-8 py-3 block sm:inline mb-2 sm:mb-0 sm:mr-2 transition-all">
            Contact Me
          </Button>
          <Button className="text-black outline outline-2 outline-secondary hover:bg-secondary hover:text-white px-8 py-3 block sm:inline">
            About Me
            <Play className="ml-1 mb-1 inline" size={16} />
          </Button>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  </div>
);

export default Home;
