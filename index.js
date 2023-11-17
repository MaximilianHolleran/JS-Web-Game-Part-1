let inventory = document.createElement('div')

function newImage (asset) {
    let icon = document.createElement('img')
    icon.src = asset
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
}

function newItem (asset){
    let weapon = newImage(asset)  
    weapon.addEventListener('dblclick', function(){
        weapon.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = asset
        inventory.append(inventoryItem)
})
return weapon
}

function backgroundImage(asset, left, bottom){
    let image = document.createElement('img')
    image.src = asset
    image.style.position = 'fixed'
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
}

function createBackground(){
    let grassHeight = window.innerHeight *.69;
    let skyHeight = window.innerHeight *.31;

    for(let i=0; i<window.innerWidth; i+=100){
        for(let j=0; j<grassHeight; j+=100){
            backgroundImage('assets/grass.png', i+ 'px', j + 'px');
        }
    }

      for(let i=0; i<window.innerWidth; i+=100){
        for(let j=0; j < skyHeight; j+=100){
          let k = grassHeight + j;
            backgroundImage('assets/sky.png', i + 'px', k + 'px');
        }
    }
}
    createBackground();


    function newInventory(){
        inventory.style.position = 'fixed'
        inventory.style.bottom = '0px'
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
    move(newImage('assets/green-character.gif')).to(100,250)
    move(newImage('assets/tree.png')).to(200, 450)
    move(newImage('assets/pillar.png')).to(350, 250)
    move(newImage('assets/pine-tree.png')).to(450, 350)
    move(newImage('assets/crate.png')).to(150, 350)
    move(newImage('assets/well.png')).to(500, 575)

    move(newItem('assets/sword.png')).to(500, 555)
    move(newItem('assets/shield.png')).to(165, 335)
    move(newItem('assets/staff.png')).to(600, 250)



