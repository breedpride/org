
export const CardMode = {
    editOnly: 'editOnly',
    navigate: 'navigate',
    select: 'select',
    skeleton: 'skeleton',
  };

  export type CardMode = (typeof CardMode)[keyof typeof CardMode];
export const EditorComponentName = {
  HealthExam: 'HealthExam',
  NONE: 'NONE',
  NOTE: 'NOTE',
};

export type EditorComponentName = (typeof EditorComponentName)[keyof typeof EditorComponentName];

