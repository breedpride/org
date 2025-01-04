import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  computed,
  inject,
  input,
} from '@angular/core';
import { ModelCodeType } from '@bh/consts';
import { BPNavStore } from '@bh/nav-store';
import { WithCreatioId } from '@bh/superfield';
import { CardMode } from '@bh/types';
import { injectSpaceStore } from '@bh/collection-store';
@Component({
  selector: 'bp-scroller-card',
  imports: [CommonModule],
  template: `<p>scroller-card works!</p>`,
  styles: ``,

})
export class BaseScrollerCardComponent {
  spaceStore = injectSpaceStore();
  queryParams = inject(BPNavStore).queryParams;

  component = input<any>();

  @Input({ transform: (m: CardMode) => (m ? m : 'navigate') })
  mode: CardMode = 'navigate';
  @Input({ required: true }) card: ModelCodeType = ModelCodeType.UNKNOWN;
  entity = input.required<any>();

  @Input() i!: number;

  model = this.spaceStore.model();
  routingLink = computed(
    () => this.entity()?.Url || this.entity()?.Id + this.model
  );

  selectEntity(id: string): void {
    this.spaceStore.setSelectedId(id);
  }

  completeSelection(entity: WithCreatioId): void {
    this.spaceStore.setSelectedId(entity.Id);
    this.spaceStore.completeSelect();
  }
  readonly MODEL_CODES = ModelCodeType;

  selected = computed(() => {
    return (
      this.routingLink() === this.spaceStore.SelectedId() ||
      this.entity().Id === this.spaceStore.SelectedId() ||
      this.entity().Url === this.spaceStore.SelectedId()
    );
  });
}
