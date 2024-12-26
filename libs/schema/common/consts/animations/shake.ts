import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

// -----------------------------------------------------------------------------------------------------
// @ Shake
// -----------------------------------------------------------------------------------------------------
const shake = trigger('shake', [
  // Prevent the transition if the state is false
  transition('void => false', []),

  // Transition
  transition(
    'void => *, * => true',
    [
      animate(
        '{{timings}}',
        keyframes([
          style({
            offset: 0,
            transform: 'translate3d(0, 0, 0)',
          }),
          style({
            offset: 0.1,
            transform: 'translate3d(-10px, 0, 0)',
          }),
          style({
            offset: 0.2,
            transform: 'translate3d(10px, 0, 0)',
          }),
          style({
            offset: 0.3,
            transform: 'translate3d(-10px, 0, 0)',
          }),
          style({
            offset: 0.4,
            transform: 'translate3d(10px, 0, 0)',
          }),
          style({
            offset: 0.5,
            transform: 'translate3d(-10px, 0, 0)',
          }),
          style({
            offset: 0.6,
            transform: 'translate3d(10px, 0, 0)',
          }),
          style({
            offset: 0.7,
            transform: 'translate3d(-10px, 0, 0)',
          }),
          style({
            offset: 0.8,
            transform: 'translate3d(10px, 0, 0)',
          }),
          style({
            offset: 0.9,
            transform: 'translate3d(-10px, 0, 0)',
          }),
          style({
            offset: 1,
            transform: 'translate3d(0, 0, 0)',
          }),
        ])
      ),
    ],
    {
      params: {
        timings: '0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      },
    }
  ),
]);

export { shake };
