import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../UI/DropdownMenu';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { navConfig } from '../../../configs/navConfig';
import React from 'react';
import ContactDialog from '../../ContactDialog/ContactDialog';

import styles from './MenuBar.module.scss';

interface MenuLinkProps {
  name: string;
  url: string;
}

interface MenuBarDropdownProps {
  name: string;
  url: MenuLinkProps[];
}

export const MenuLink: React.FC<MenuLinkProps> = ({ name, url }) => (
  <a href={url} className="block lg:inline-block font-bold mx-3 hover:bg-secondary-100 rounded p-2">
    {name}
  </a>
);

export const MenuBarDropdown: React.FC<MenuBarDropdownProps> = ({ name, url }) => (
  <DropdownMenu modal={false}>
    <DropdownMenuTrigger
      className={cn(
        styles.MenuBarDropdownTrigger,
        'block flex-row lg:inline font-bold mx-3 hover:bg-secondary-100 rounded p-2 transition',
      )}
    >
      {name}
      <ChevronDown className="inline ml-1 h-4 w-4" />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="bg-neutral-100 shadow-none border-none">
      {url.map((link, index) => (
        <DropdownMenuItem key={`${name} DropdownItem ${index}`} className="p-0">
          <a
            href={link.url}
            className="w-full block text-black font-bold hover:bg-secondary-100 p-2 rounded transition"
          >
            {link.name}
          </a>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export const MenuBar: React.FC = () => (
  <>
    <div className="hidden lg:flex flex-grow items-center justify-center">
      {navConfig.map((link, index) =>
        Array.isArray(link.url) ? (
          <MenuBarDropdown key={`${link.name} NavItemDropdown ${index}`} name={link.name} url={link.url} />
        ) : (
          <MenuLink key={`${link.name} NavLink ${index}`} name={link.name} url={link.url} />
        ),
      )}
    </div>

    <div className="hidden lg:flex w-52 justify-end">
      <ContactDialog
        triggerText="Contact Me"
        triggerClassName="text-xs font-bold text-black hover:text-white outline outline-2 outline-primary hover:bg-primary flex justify-center items-center py-2 px-4 rounded-full whitespace-nowrap transition"
      />
    </div>
  </>
);
