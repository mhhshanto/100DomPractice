function chng(){
root.style.backgroundColor = rgb()
}

function rgb(){
  const red = Math.floor(Math.random()*255)
  const green = Math.floor(Math.random()*255)
  const blue = Math.floor(Math.random()*255)
  return `RGB(${red},${green},${blue})`
}
console.log(rgb());
// done