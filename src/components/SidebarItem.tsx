import Link from 'next/link';
import React from 'react';
import type { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';
import Icon from './Icon';

interface SidebarItemProps {
  label: string;
  active: boolean;
  href: string;
  icon: typeof Icon;
  className?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  active,
  href,
  icon,
  className,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        'flex h-auto w-full cursor-pointer flex-row items-center gap-x-4 py-1 font-medium text-neutral-400 transition hover:text-white ',
        active && 'text-white',
        className
      )}
    >
      <Icon />
      <p className="truncate">{label}</p>
    </Link>
  );
};

export default SidebarItem;
