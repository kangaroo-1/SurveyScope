import React from 'react';
import {
  HomeIcon,
  MapPinIcon,
  BuildingStorefrontIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  return (
    <aside className="
    flex flex-col items-center md:items-start
    bg-gray-200 h-screen
    w-12 md:w-48  /* narrower widths for small and medium+ screens */
    py-2         /* less vertical padding */
  ">
    {/* Top Profile Section */}
    <div className="
      flex flex-col items-center
      md:flex-row md:items-center
      md:px-2     /* reduce horizontal padding on medium+ */
      mb-4
    ">
    </div>

    {/* Main Nav Icons */}
    <nav className="flex-1 flex flex-col items-center md:items-start space-y-2 w-full">
      <NavItem icon={<HomeIcon className="w-5 h-5" />} label="Home" />
      <NavItem icon={<MapPinIcon className="w-5 h-5" />} label="Explorer" />
      <NavItem icon={<BuildingStorefrontIcon className="w-5 h-5" />} label="Properties" />
      <NavItem icon={<DocumentTextIcon className="w-5 h-5" />} label="Reports" />
      
      {/* Divider */}
      <div className="border-b border-gray-400 w-6 md:w-full mx-auto md:mx-0 my-2" />

      <NavItem icon={<MagnifyingGlassIcon className="w-5 h-5" />} label="Search" />
      <NavItem icon={<Cog6ToothIcon className="w-5 h-5" />} label="Settings" />
    </nav>
  </aside>
  );
}

/**
 * A small helper component to handle the "icon + label" pattern
 * - On small screens, we only show the icon
 * - On md and above, we also show the label
 */
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
}

function NavItem({ icon, label }: NavItemProps) {
  return (
    <a
      href="/explorer"
      className="
        flex flex-col items-center justify-center
        text-gray-700 hover:text-gray-900
        w-full
        p-2
      "
    >
      {/* Icon in the center */}
      {icon}

      {/* Label below icon, smaller text */}
      <span className="text-xs mt-1">
        {label}
      </span>
    </a>
  );
}
