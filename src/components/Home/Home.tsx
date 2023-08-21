import Button from '../UI/Button';
import { Play, Linkedin, Download, Github } from 'lucide-react';
import ContactDialog from '../ContactDialog/ContactDialog';
import IconButton from '../UI/IconButton';

const Home: React.FC = () => (
  <div className="h-screen w-screen flex justify-center items-center">
    <div className="h-full w-full container">
      <div className="h-full w-full grid grid-rows-2 grid-cols-5">
        <div className="grid grid-rows-5 row-span-2 col-span-5 lg:col-span-2">
          <div className=""></div>
          <div className="row-span-3 flex items-center">
            <div>
              <h1>
                Hi! I'm
                <br /> Matthew Alexander<span className="text-primary">.</span>
              </h1>
              <h4 className="font-bold text-secondary-600 mb-0">Design Lead | Head of UI/UX at Dealer Studio</h4>
              <p className="mt-6 mb-9 text-xl text-neutral-600">
                Software engineer with over a year of dedicated design excellence and a background in engineering.
                Dedicated to innovating user-centered experiences.
              </p>
              <ContactDialog
                triggerText="Contact Me"
                triggerClassName="font-bold rounded-full bg-primary hover:bg-primary-600 border border-primary hover:border-primary-600 text-white px-8 py-3 block sm:inline mb-4 sm:mb-0 sm:mr-4 transition-all"
              />
              <Button
                className="text-black border border-secondary hover:bg-secondary hover:text-white px-8 py-3 sm:inline"
                href="/projects"
              >
                Projects
                <Play className="ml-1 mb-1 inline" size={16} fill="currentColor" />
              </Button>
            </div>
          </div>
          <div className="flex items-end lg:items-center mb-5 lg:mb-0">
            <IconButton
              Icon={<Github />}
              href="https://github.com/MatthewAMartin"
              className="bg-neutral-200 text-black hover:bg-neutral-400 transition-all mr-4"
            />
            <IconButton
              Icon={<Linkedin />}
              href="https://www.linkedin.com/in/matthew-alexander-martin"
              className="bg-neutral-200 text-black hover:bg-neutral-400 transition-all mr-4"
            />
            <IconButton
              Icon={<Download />}
              href="/files/Resume_Matthew-Martin.pdf"
              download="Resume_Matthew-Martin"
              className="bg-neutral-200 text-black hover:bg-neutral-400 transition-all mr-4"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
