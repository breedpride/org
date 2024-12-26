import { PageSummary } from '../creatio.response.type';
import { PublicProject } from './extended/Project';

export interface ProjectPage extends PublicProject {
  summaryData?: PageSummary;
}
