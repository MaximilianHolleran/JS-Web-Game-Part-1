function newImage (asset, dirLeft, dirBottom) {
    let icon = document.createElement('img')
    icon.src = asset
    icon.style.position = 'fixed'
    icon.style.left = dirLeft
    icon.style.bottom = dirBottom
    document.body.append(icon)
}

newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pine-tree.png', '450px', '200px')


function newItem (asset, dirLeft, dirBottom){
    let weapon = document.createElement('img')
    weapon.src = asset
    weapon.style.position = 'fixed'
    weapon.style.left = dirLeft
    weapon.style.bottom = dirBottom
    document.body.append(weapon)
    weapon.addEventListener('dblclick', function(){
        weapon.remove()})
}

newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')

