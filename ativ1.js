function getAdmis(map){
  let admins = []
  for([key, value] of map){
    if(value === 'Admin'){
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Igor', 'User');
usuarios.set('Naiade', 'User');
usuarios.set('Johnson', 'Admin');

console.log(getAdmis(usuarios))