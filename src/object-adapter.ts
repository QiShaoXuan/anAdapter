export type ObjectAdapter<T extends { [key: string | number]: unknown }> = (
  data: T,
  rule: {
    [key in keyof T]: string | number | (string | number)[];
  }
) => T;

export const objectAdapter: ObjectAdapter<{ [key: string]: unknown }> = (
  data,
  rule
) => {
  const result: { [key: string]: unknown } = {};
  const record: (string | number)[] = [];
  Object.entries(rule).forEach(([key, targetKey]) => {
    if (Array.isArray(targetKey)) {
      const correctKey = targetKey.find((k) => {
        if (data[k]) {
          record.push(k);
          return true;
        }
        return false;
      });
      if (correctKey) {
        result[key] = data[correctKey];
      }
    } else {
      result[key] = data[targetKey];
      record.push(targetKey);
    }
  });

  Object.entries(data).forEach(([key, value]) => {
    if (!record.includes(key)) {
      result[key] = value;
    }
  });

  return result;
};
