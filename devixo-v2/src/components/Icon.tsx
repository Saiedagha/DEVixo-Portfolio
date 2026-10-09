import * as Lu from 'react-icons/lu';
import React from 'react';

// Semantic icon names → Lucide icons. Directional icons get the `flip` class so
// they mirror automatically in RTL.
const map: Record<string, keyof typeof Lu> = {
  store: 'LuStore', globe: 'LuGlobe', code: 'LuCode', layers: 'LuLayers', smartphone: 'LuSmartphone',
  pen: 'LuPenTool', plug: 'LuPlug', wrench: 'LuWrench', building: 'LuBuilding2', id: 'LuIdCard',
  target: 'LuTarget', briefcase: 'LuBriefcase', book: 'LuBookOpen', calendar: 'LuCalendar', users: 'LuUsers',
  list: 'LuList', home: 'LuHouse', graduation: 'LuGraduationCap', heart: 'LuHeart', utensils: 'LuUtensils',
  cursor: 'LuMousePointer', refresh: 'LuRefreshCw', wallet: 'LuWallet', puzzle: 'LuPuzzle', trending: 'LuTrendingUp',
  settings: 'LuSettings', box: 'LuBox', warehouse: 'LuWarehouse', receipt: 'LuReceipt', file: 'LuFileText',
  school: 'LuSchool', check: 'LuCheck', checkSquare: 'LuSquareCheck', network: 'LuNetwork', arrow: 'LuArrowRight',
  arrowBack: 'LuArrowLeft', arrowUpRight: 'LuArrowUpRight', chevronDown: 'LuChevronDown', chevron: 'LuChevronRight',
  menu: 'LuMenu', x: 'LuX', whatsapp: 'LuMessageCircle', phone: 'LuPhone', mail: 'LuMail', external: 'LuExternalLink',
  search: 'LuSearch', facebook: 'LuFacebook', github: 'LuGithub', shield: 'LuShield', sparkles: 'LuSparkles',
  languages: 'LuLanguages', plus: 'LuPlus', pencil: 'LuPencil', trash: 'LuTrash2', eye: 'LuEye',
  dashboard: 'LuLayoutDashboard', folder: 'LuFolder', image: 'LuImage', inbox: 'LuInbox', help: 'LuCircleHelp',
  news: 'LuNewspaper', cpu: 'LuCpu', clock: 'LuClock', quote: 'LuQuote', compass: 'LuCompass',
  clipboard: 'LuClipboardList', rocket: 'LuRocket', penLine: 'LuPenLine', workflow: 'LuWorkflow', filter: 'LuFilter',
  logout: 'LuLogOut', bell: 'LuBell', circleCheck: 'LuCircleCheck', alert: 'LuCircleAlert', loader: 'LuLoader',
  upload: 'LuUpload', grip: 'LuGripVertical', devices: 'LuMonitorSmartphone', database: 'LuDatabase',
  server: 'LuServer', package: 'LuPackageCheck', truck: 'LuTruck', card: 'LuCreditCard', send: 'LuSend',
};
const directional = new Set(['arrow', 'arrowBack', 'arrowUpRight', 'chevron', 'send']);

export function Icon({ name, size = 20, className = '' }: { name: string; size?: number; className?: string }) {
  const C = (Lu as any)[map[name] || 'LuSparkles'];
  const cls = ['icon', directional.has(name) ? 'flip' : '', className].filter(Boolean).join(' ');
  return <C aria-hidden="true" focusable="false" size={size} className={cls} strokeWidth={1.75} />;
}
