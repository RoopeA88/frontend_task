# frontend_task
react task for the frontend class

asenna riippuvuudet kirjoittamalla "npm install"
aja projekti kirjoittamalla "npm run dev" ilman lainausmerkkejä.
projektissa on käytetty zustand-tilankäsittelykirjastoa, jonka pitäisi asentua "npm install" mukana.
jos install ei kuitenkaan toimi odotetusti, kirjoita "npm install zustand".

ohjelma on yritetty rakentaa ohjeiden mukaisesti. siinä on kuitenkin ainakin yksi bugi,
jota en onnistunut toistamaan ja sen takia paikantamaan. Tämä liittyy jotenkin addNote,
saveNote ja listNotes väliseen toimintaan ja näkyy virheellisenä listausnäkymänä.

kurssin lukitus on ratkaistu niin, että valitse kurssi -näkymä poistetaan
näkyvistä, kun ensimmäinen muistiinpano "alustetaan" tallennettavaksi addNote-napilla.
Alustaminen toimii jo tosiasiassa tallentamisena, ja saveNote-nappia käytetään vain
kyseisen session muistiinpanojen listaamiseen ja session lopettamiseen.

kurssin voi lisätä, poistaa ja listata ilman session aloittamista.

kurssin poisto poistaa kurssit courses- ja addedCourses listasta, mutta ei poista kurssien tietoja notes- ja addedNotes listasta.
Kurssit näkyvät poiston jälkeen myös listNotes tiputusvalikossa, koska kurssit ollaan kopioitu
toiseen listaan. kurssin poiston tosiasiallinen funktio on se, että kurssin lisäämisnäkymään
ei pääse ohjeiden mukaisesti, jos kursseja ei ole.

TEKOÄLYN KÄYTTÖ:

Käytin copilottia (siis koodin ennustamista) ison osan ajasta syntaksin vaikeuden ja aikarajan takia. Esimerkiksi mappaukset ovat hankalia syntaksiltaan.
Sokeasti en tabia rämpyttänyt, koska copilot ei seurannut minun logiikkaa ja ehdotti esimerkiksi vääriä muuttujia usein. Jos copilot olisi tehnyt jonkun ratkaisun,
joka menisi minun pään yli, en sitä implementoinut.

Tein tilanhallintaa ensiksi puhtaasti propseilla ja myöhemmin vaihdoin zustandiin. Zustandin logiikan opettelin tekoälyn avulla sen sijaan, että olisin
käynyt läpi kurssimateriaalia.

addNotes funkkarissa käytin tekoälyä apuna addNoten find-funktiion, jonka avulla määritellään, että muistiinpano menee juuri siihen kurssiin, mikä dropdownissa on valittu.

kovakoodattujen tietojen fetchauksessa oli ongelma ilmeisesti fetchauksen nopeuden kanssa ja tarvitsin tekoälyä siihen, ettei kurssilistaani tullut kurssit tuplana. siinä käytettiin
isFetching tarkitusta

setListNotesFunction ei toiminut jostain syystä, vaikka oli logiikaltaan ihan oikein ja tekoäly kertoi siinä olevan joku mahdollinen renderöintiongelma ja siitä piti tehdä tuollainen set-funktio.

