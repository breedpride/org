// import { inject } from '@angular/core';
// import { Observable } from 'rxjs';
// import { take } from 'rxjs/operators';
// import { BPNavStore } from '@bh/nav-store';
export const editorGuardFn = () => {
  return true;
  // const space = inject(SpaceStoreV2);
  // const exit = inject(BPConfirmationService).spaceEditorExit(space);
  // if (exit instanceof Observable) {
  //   exit.pipe(take(1)).subscribe((res: boolean) => {
  //     if (res) {
  //       inject(TabStore).setFragment('');
  //       inject(TabStore).setTabs([]);
  //       inject(BPNavStore).cleanEditBackHistory();
  //     }
  //   });
  //   return exit;
  // } else {
  //   if (exit) {
  //     inject(BPNavStore).cleanEditBackHistory();
  //   }
  //   return exit;
  // }
};
