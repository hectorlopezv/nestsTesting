export const EnumToString = (_enum: Record<string, unknown>) =>
  Object.keys(_enum)
    .map((key) => _enum[key])
    .filter((value) => typeof value === 'string') as string[];
