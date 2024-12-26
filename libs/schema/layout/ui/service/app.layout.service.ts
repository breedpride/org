import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface AppConfig {
  colorScheme: string;
  inputStyle: string;
  menuMode: string;
  menuTheme: string;
  ripple: boolean;
  scale: number;
  theme: string;
}

interface LayoutState {
  anchored: boolean;
  configSidebarVisible: boolean;
  menuHoverActive: boolean;
  overlayMenuActive: boolean;
  profileSidebarVisible: boolean;
  revealMenuActive: boolean;
  staticMenuDesktopInactive: boolean;
  staticMenuMobileActive: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private configUpdate = new Subject<AppConfig>();

  private overlayOpen = new Subject<any>();

  config: AppConfig = {
    colorScheme: 'light',
    inputStyle: 'outlined',
    menuMode: 'static',
    menuTheme: 'transparent',
    ripple: false,
    scale: 14,
    theme: 'indigo',
  };

  configUpdate$ = this.configUpdate.asObservable();

  overlayOpen$ = this.overlayOpen.asObservable();

  state: LayoutState = {
    anchored: false,
    configSidebarVisible: false,
    menuHoverActive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    revealMenuActive: false,
    staticMenuDesktopInactive: false,
    staticMenuMobileActive: false,
  };

  isDesktop(): boolean {
    return window.innerWidth > 991;
  }

  isHorizontal(): boolean {
    return this.config.menuMode === 'horizontal';
  }

  isMobile(): boolean {
    return !this.isDesktop();
  }

  isOverlay(): boolean {
    return this.config.menuMode === 'overlay';
  }

  isSlim(): boolean {
    return this.config.menuMode === 'slim';
  }

  onConfigUpdate(): void {
    this.configUpdate.next(this.config);
  }

  onMenuToggle(): void {
    if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;

      if (this.state.overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }

    if (this.isDesktop()) {
      this.state.staticMenuDesktopInactive =
        !this.state.staticMenuDesktopInactive;
    } else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;

      if (this.state.staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }

  onOverlaySubmenuOpen(): void {
    this.overlayOpen.next(null);
  }

  showConfigSidebar(): void {
    this.state.configSidebarVisible = true;
  }

  showProfileSidebar(): void {
    this.state.profileSidebarVisible = true;
  }
}
