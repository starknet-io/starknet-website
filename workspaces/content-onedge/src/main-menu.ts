export interface MainMenu {
  items: MainMenuItem[];
}

export interface MainMenuItem {
  title: string;
  columns?: Column[];
}

export interface Column {
  blocks?: Block[];
}

export interface Block {
  title?: string;
  items?: BlockItem[] | null;
}

export interface BlockItem {
  custom_title?: string;
  custom_icon?: string;
  custom_internal_link?: string;
  custom_external_link?: string;

  page?: string;
  page_data?: any;

  post?: string;
  post_data?: any;
}
