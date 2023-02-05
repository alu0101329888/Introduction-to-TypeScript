type Rectangle = {
  width: number;
  height: number;
}

function area(r: Rectangle): number {
  return r.width * r.height;
}

let rect: Rectangle = { width: 10, height: 20 };
console.log(area(rect));