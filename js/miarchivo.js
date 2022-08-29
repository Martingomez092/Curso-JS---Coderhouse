
/* Por consola podrás ver el animal correspondiente para cada año, desde 0 dc hasta 2022 */

for (let i=0; i<=2022; i++) {
  if ( i % 12===0 ) {
    console.log( `${i} = Tu animal en el horóscopo chino es mono`)
  } else if ( i % 12===1 ) {
    console.log( `${i} = Tu animal en el horóscopo chino es gallo`)
  }
  else if ( i % 12===2 ) {
    console.log( `${i} = Tu animal en el horóscopo chino es perro`)
  }
  else if ( i % 12===3 ) {
    console.log( `${i} = Tu animal en el horóscopo chino es cerdo`)
  }
  else if ( i % 12===4 ) {
    console.log( `${i} = Tu animal en el horóscopo chino es rata`)
  }
  else if ( i % 12===5 ) {
    console.log( `${i} = Tu animal en el horóscopo chino es bufalo`)
  }
  else if ( i % 12===6 ) {
    console.log( `${i} = Tu animal en el horóscopo chino es tigre`)
  }
  else if ( i % 12===7 ) {
    console.log( `${i} = Tu animal en el horóscopo chino es conejo`)
  }
  else if ( i % 12===8 ) {
    console.log( `${i} = Tu animal en el horóscopo chino es dragón`)
  }
  else if ( i % 12===9 ) {
    console.log( `${i} = Tu animal en el horóscopo chino es serpiente`)
  }
  else if ( i % 12===10 ) {
    console.log( `${i} = Tu animal en el horóscopo chino es caballo`)
  }
  else {
    console.log( `${i} = Tu animal en el horóscopo chino es cabra`)
  }
} 
