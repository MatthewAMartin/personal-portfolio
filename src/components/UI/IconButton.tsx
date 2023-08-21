import { cn } from '../../lib/utils';

const IconButton: React.FC<{ Icon: any; href: string; className?: string; download?: string }> = ({
  Icon,
  href,
  className,
  download,
}) => (
  <a
    href={href}
    download={download && download}
    target="_blank"
    className={cn('w-12 h-12 flex items-center justify-center rounded-full', className)}
  >
    {Icon}
  </a>
);

export default IconButton;
