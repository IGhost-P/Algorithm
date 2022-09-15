function createReactiveObject(target, callback) {
  const proxy = new Proxy(target, {
    set(obj, prop, value) {
      if (value != obj[prop]) {
        const prev = obj[prop];
        obj[prop] = value;
        callback(`Property ${prop} changed from ${prev} to ${value}`);
      }
      return true;
    },
  });
  return proxy;
}

const a = { name: "John", age: 25 };
const b = createReactiveObject(a, (message) => console.log(message));
b.name = "Jane2";
b.age = 26;
