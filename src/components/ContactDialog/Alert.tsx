import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../UI/AlertDialog';
import { Dispatch, SetStateAction } from 'react';

interface AlertProps {
  isAlertOpen: boolean;
  setIsAlertOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  description: string;
}

const Alert: React.FC<AlertProps> = ({ isAlertOpen, setIsAlertOpen, title = 'test', description }) => (
  <AlertDialog open={isAlertOpen}>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle className="border-b border-neutral-300 pb-4 mb-2">{title}</AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction
          className="flex items-center px-3 py-2 rounded text-white bg-secondary-500 hover:bg-secondary-600 transition"
          onClick={() => setIsAlertOpen(false)}
        >
          OK
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Alert;
