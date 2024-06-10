import { Compass, Home, Mic } from 'lucide-react';

export const THEME_COLOR = '#6e73a6';

export const ROOT_SIDEBAR_LINKS = [
  { route: '/', label: '홈', Icon: () => <Home /> },
  { route: '/discover', label: '찾아보기', Icon: () => <Compass /> },
  { route: '/create-podcast', label: '팟캐스트', Icon: () => <Mic /> },
];
