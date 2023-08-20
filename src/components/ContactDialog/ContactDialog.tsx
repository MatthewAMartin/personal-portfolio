import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../UI/Dialog';
import ContactForm from './ContactForm';

const ContactDialog: React.FC<{ triggerText: string; triggerClassName: string }> = ({
  triggerText,
  triggerClassName,
}) => (
  <Dialog>
    <DialogTrigger className={triggerClassName}>{triggerText}</DialogTrigger>
    <DialogContent className="bg-white rounded">
      <DialogHeader>
        <DialogTitle className="border-b border-neutral-300 pb-4 mb-2">Contact Me</DialogTitle>
        <ContactForm />
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

export default ContactDialog;
