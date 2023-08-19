import { ChevronDown, X } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../UI/Collapsible';
import { navConfig } from '../../../configs/navConfig';
import React, { Dispatch, SetStateAction } from 'react';

import styles from './MenuDrawer.module.scss';

interface DrawerLinkProps {
  name: string;
  url: string;
}

interface MenuBarDropdownProps {
  name: string;
  url: DrawerLinkProps[];
}

export const DrawerLink: React.FC<DrawerLinkProps> = ({ name, url }) => (
  <a
    href={url}
    className={cn(styles.NavLink, 'block lg:inline-block font-bold hover:bg-secondary-100 rounded mt-1 p-2 w-full')}
  >
    {name}
  </a>
);

export const DrawerDropdown: React.FC<MenuBarDropdownProps> = ({ name, url }) => (
  <Collapsible className="w-full">
    <CollapsibleTrigger
      className={cn(
        styles.NavLinkDropdownTrigger,
        'flex flex-row w-full items-center font-bold hover:bg-secondary-100 rounded p-2 mt-1 transition',
      )}
    >
      {name}
      <ChevronDown className="inline ml-1 h-4 w-4" />
    </CollapsibleTrigger>
    <CollapsibleContent>
      {url.map((link, index) => (
        <div key={`${name} DrawerDropdown ${index}`} className="ml-5 mt-1">
          <a
            href={link.url}
            className="w-full block text-black text-sm font-bold hover:bg-secondary-100 p-2 rounded transition"
          >
            {link.name}
          </a>
        </div>
      ))}
    </CollapsibleContent>
  </Collapsible>
);

export const MenuDrawer: React.FC<{ open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }> = ({
  open,
  setOpen,
}) => (
  <Collapsible open={open}>
    <CollapsibleContent className={cn(styles.CollapsibleContent, 'fixed lg:hidden top-0 left-0 w-screen h-screen')}>
      <div className="w-full max-w-xs h-full bg-neutral-100 relative z-50">
        <div className="mx-5 pt-6 pb-4 mb-2 border-b border-neutral-300 flex justify-between">
          <div className={styles.Logo}>
            <a href="/">
              <h5 className="font-bold text-xl inline">Matthew Alexander</h5>
              <span className="text-primary font-bold text-xl">.</span>
            </a>
          </div>
          <CollapsibleTrigger onClick={() => setOpen(false)}>
            <X />
          </CollapsibleTrigger>
        </div>
        <div className="flex flex-col flex-grow items-start justify-start px-3">
          {navConfig.map((link, index) =>
            Array.isArray(link.url) ? (
              <DrawerDropdown key={`${link.name} NavItemDropdown ${index}`} name={link.name} url={link.url} />
            ) : (
              <DrawerLink key={`${link.name} NavLink ${index}`} name={link.name} url={link.url} />
            ),
          )}
        </div>
        <div className="mt-4 flex mx-5 w-100">
          <button className="flex flex-grow justify-center font-bold text-black hover:text-white outline outline-2 outline-primary hover:bg-primary py-2 px-4 rounded-full whitespace-nowrap transition">
            Contact Me
          </button>
        </div>
      </div>
      <div
        className={cn(
          open ? 'fixed' : 'hidden',
          'top-0 left-0 w-screen h-screen bg-black opacity-80 backdrop-blur-2xl cursor-pointer z-40 lg:hidden',
        )}
        onClick={() => setOpen(false)}
      ></div>
    </CollapsibleContent>
  </Collapsible>
);
