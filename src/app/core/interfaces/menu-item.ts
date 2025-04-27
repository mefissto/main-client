export interface MenuItem {
  label?: string;
  icon?: string;
  url?: string;
  items?: MenuItem[];
  expanded?: boolean;
  visible?: boolean;
  routerLinkActiveOptions?: any;
  badge?: string;
  styleClass?: string;
  badgeStyleClass?: string;
  routerLink?: string | any[];
  route?: string;
  queryParams?: any;
  params?: any;
}
