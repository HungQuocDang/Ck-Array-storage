

dummy1=[];
cardSongs=[];
cardSongs.push("song 1");
cardSongs.push("song 2");
console.log("cardSongs",cardSongs);
console.log("dummy1", dummy1);

localStorage.setItem(  `songschrome`, JSON.stringify(cardSongs)   );

var extractChrome=localStorage.getItem(`songschrome`)
console.log("extractChrome", extractChrome)
var y=JASON.parse(extractChrome); 
console.log("JSONParseextractChrome", y )










