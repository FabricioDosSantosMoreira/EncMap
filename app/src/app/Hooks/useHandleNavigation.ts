'use client'

import { useRouter } from 'next/navigation'; 


export default function useHandleNavigation() {
  const router = useRouter();
  
  // Not the best way, but i wanted to reload the page when clicking a button that pushes to the same page.
  // NOTE: Uses NextJS App Router. Also the router.refresh() doesn't reload the page.
  const handleNavigation = (path: string, forceReload?: boolean) => {
    if (window.location.pathname === path) {
      //router.refresh();
      window.location.reload();
    } else {
      router.push(path); 
    }

    // if (forceReload) {
    //   window.location.reload();
    // }
  };

  return handleNavigation;  
}
