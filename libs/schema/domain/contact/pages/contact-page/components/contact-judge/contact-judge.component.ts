import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  input,
} from '@angular/core';
import { injectContactPage } from '@bh/page-store';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { TreeNode } from 'primeng/api';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import type { JCompetition } from '@bh/types';

export const jCompetitionToTreeNode = (j: JCompetition, parent?: TreeNode) => {
  const node = {
    data: {
      competitionName: j.Name,
      internationalJudgment: j.InternationalJudgment,
    },
  } as any;
  const children = j.SubCompetitions?.map((value) =>
    jCompetitionToTreeNode(value, node)
  );
  if (children) node.children = children;
  if (parent) node.parent = parent;

  return node;
};
@Component({
  imports: [CommonModule, TreeModule, TreeTableModule],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-contact-judge',
  styles: [
    `
      :host ::ng-deep {
        .p-treetable-scrollable-header-box {
          padding-right: 0 !important;
        }
      }
      :host {
        display: block;
        margin-top: 0.75rem;
        border-radius: 0.75rem;
        padding: 1rem;
      }
    `,
  ],
  template: `
    <!-- <div class="mt-3 rounded-xl border p-4 "> -->
    <p-treeTable [value]="files()" [scrollable]="true">
      <ng-template #header>
        <tr>
          <th class=" "></th>
          <th class="w-full  ">Competition</th>

          <th class="w-26 ">Inter. judgment</th>
          <!-- <th>Type</th> -->
        </tr>
      </ng-template>
      <ng-template #body let-rowNode let-rowData="rowData">
        <tr [ttRow]="rowNode">
          <td class="w-20 ">
            <p-treeTableToggler [rowNode]="rowNode"></p-treeTableToggler>
          </td>
          <td class=" w-full">
            {{ rowData.competitionName }}
          </td>

          <td class="w-26 text-center">
            @if (!!rowData.internationalJudgment) {
            <i class="pi pi-check text-accent-400 font-bold"></i>
            } @if (!rowData.internationalJudgment) {
            <i class="pi pi-minus text-secondary-400 font-bold"></i>
            }
          </td>
        </tr>
      </ng-template>
    </p-treeTable>
    <!-- </div> -->
  `,
})
export class ContactJudgeComponent {
  defaultOptions = {
    entityPage: injectContactPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
  fullscreen = injectFullscreen();
  files = computed((): TreeNode[] => {
    const tree = this.entityPage()?.Career?.Judge[0]?.Competitions;
    return tree ? tree.map(jCompetitionToTreeNode) : [];
  });
}
