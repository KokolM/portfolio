export interface MenuItem {
  title: string
  path: string
  hash: string
  menuRef: HTMLElement | null
  active: boolean
}
