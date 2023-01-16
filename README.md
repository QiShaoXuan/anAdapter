# anAdapter

In some cases, the data returned by the server is different from the data fields required by the front-end component, it is necessary to adapt the data. Here is a simple adapter that converts the data returned by the server into the data required by the front-end component.

## objectAdapter

```js
const data = {
  title: "this is label",
  name: "this is value",
};

const rule = {
  label: "title",
  value: ["name", "age"],
};

objectAdapter(data, rule); //  { label: 'this is label', value: 'this is value' }
```

```js
const data = {
  title: "this is label",
  name: "this is value",
};

const rule = {
  label: "title",
};

objectAdapter(data, rule); //  { label: 'this is label', name: 'this is value' }
```
