let inventory = document.createElement('div')

function move(image, left, bottom){
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
}

function newImage (asset) {
    let icon = document.createElement('img')
    icon.src = asset
    /*icon.style.position = 'fixed'*/
    /*icon.style.left = dirLeft*/
    /*icon.style.bottom = dirBottom*/
    document.body.append(icon)
    return icon
}

function move(image){
    image.style.position = 'fixed'

    function moveToCoordinates(left, bottom){
        image.style.left = left + 'px'
        image.style.bottom = bottom + 'px'
    }

    return {
        to: moveToCoordinates
    }

    move(greenCharacter, 100, 250)
}

let greenCharacter = newImage('assets/green-character.gif')

/*move(greenCharacter, 100, 250)*/

function newItem (asset, dirLeft, dirBottom){
    let weapon = newImage(asset, dirLeft, dirBottom)  
    document.body.append(weapon)
    weapon.addEventListener('dblclick', function(){
    weapon.remove()
    let inventoryItem = document.createElement('img')
    inventoryItem.src = asset
    inventory.append(inventoryItem)
})
}

/*function createBackground(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    let grassHeight = height*.6;
    let skyHeight = height*.4;
    for(let i=0; i<width; i+=100){
       for(let j=0; j<grassHeight; j+=100){
    newImage('assets/grass.png', i+ 'px', j + 'px');
       }
     }
    for(let i=0; i<width; i+=100){
      for(let j=0; j<skyHeight; j+=100){
        let k = grassHeight + j;
        newImage('assets/sky.png', i + 'px', k + 'px');
      }
     }
    }
    createBackground();
*/

    function newInventory(){

        inventory.style.position = 'fixed'
        inventory.style.bottom = '0px';
        inventory.style.left = '0px'
        inventory.style.width = '100%'
        inventory.style.height = '100px'
        inventory.style.display = 'flex'
        inventory.style.flexDirection = 'row'
        inventory.style.alignItems = 'center'
        inventory.style.justifyContent = 'space-evenly'
        inventory.style.border = '2px solid black'
        inventory.style.backgroundColor = 'brown'
        document.body.append(inventory)
    }

    newInventory()
    /*newImage('assets/green-character.gif', '100px', '100px')*/
    newImage('assets/pillar.png', '350px', '100px')
    newImage('assets/crate.png', '150px', '200px')
    newImage('assets/well.png', '500px', '425px')
    newImage('assets/tree.png', '200px', '300px')
    newImage('assets/pine-tree.png', '450px', '200px')
    
    newItem('assets/sword.png', '500px', '405px')
    newItem('assets/shield.png', '165px', '185px')
    newItem('assets/staff.png', '600px', '100px')



