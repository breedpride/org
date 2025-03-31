export const withNoEvents = {
  initBeforeChangeFn: () => null,
  initFn: () => null,
  onChange: () => null,
} as const;

export const withDefaultEditingEvents = withNoEvents;
