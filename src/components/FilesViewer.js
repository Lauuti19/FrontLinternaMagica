import React, { useState, useEffect } from "react";
import p1img1 from '../assets/Archivo/pecera1/p1img1.jpg';
import p1img2 from '../assets/Archivo/pecera1/p1img2.jpg';
import p1img3 from '../assets/Archivo/pecera1/p1img3.jpg';
import p1img4 from '../assets/Archivo/pecera1/p1img4.jpg';
import p1img5 from '../assets/Archivo/pecera1/p1img5.jpg';
import p2img1 from '../assets/Archivo/pecera2/p2img1.jpg';
import p2img2 from '../assets/Archivo/pecera2/p2img2.jpg';
import p2img3 from '../assets/Archivo/pecera2/p2img3.jpg';
import p2img4 from '../assets/Archivo/pecera2/p2img4.jpg';
import p2img5 from '../assets/Archivo/pecera2/p2img5.jpg';
import p2img6 from '../assets/Archivo/pecera2/p2img6.jpg';
import p3thumb1 from '../assets/Archivo/pecera3/thumbs/p3 (1).jpg';
import p3thumb2 from '../assets/Archivo/pecera3/thumbs/p3 (2).jpg';
import p3thumb3 from '../assets/Archivo/pecera3/thumbs/p3 (3).jpg';
import p3thumb4 from '../assets/Archivo/pecera3/thumbs/p3 (4).jpg';
import p3thumb5 from '../assets/Archivo/pecera3/thumbs/p3 (5).jpg';
import p3thumb6 from '../assets/Archivo/pecera3/thumbs/p3 (6).jpg';
import p3thumb7 from '../assets/Archivo/pecera3/thumbs/p3 (7).jpg';
import p3thumb8 from '../assets/Archivo/pecera3/thumbs/p3 (8).jpg';
import p3thumb9 from '../assets/Archivo/pecera3/thumbs/p3 (9).jpg';
import p3thumb10 from '../assets/Archivo/pecera3/thumbs/p3 (10).jpg';
import p3thumb11 from '../assets/Archivo/pecera3/thumbs/p3 (11).jpg';
import p3thumb12 from '../assets/Archivo/pecera3/thumbs/p3 (12).jpg';
import p3thumb13 from '../assets/Archivo/pecera3/thumbs/p3 (13).jpg';
import p3thumb14 from '../assets/Archivo/pecera3/thumbs/p3 (14).jpg';
import p3thumb15 from '../assets/Archivo/pecera3/thumbs/p3 (15).jpg';
import p3thumb16 from '../assets/Archivo/pecera3/thumbs/p3 (16).jpg';
import p3thumb17 from '../assets/Archivo/pecera3/thumbs/p3 (17).jpg';
import p3thumb18 from '../assets/Archivo/pecera3/thumbs/p3 (18).jpg';
import p3thumb19 from '../assets/Archivo/pecera3/thumbs/p3 (19).jpg';
import p3thumb20 from '../assets/Archivo/pecera3/thumbs/p3 (20).jpg';
import p3thumb21 from '../assets/Archivo/pecera3/thumbs/p3 (21).jpg';
import p3thumb22 from '../assets/Archivo/pecera3/thumbs/p3 (22).jpg';
import p3thumb23 from '../assets/Archivo/pecera3/thumbs/p3 (23).jpg';
import p3thumb24 from '../assets/Archivo/pecera3/thumbs/p3 (24).jpg';
import p3thumb25 from '../assets/Archivo/pecera3/thumbs/p3 (25).jpg';
import p3thumb26 from '../assets/Archivo/pecera3/thumbs/p3 (26).jpg';
import p3thumb27 from '../assets/Archivo/pecera3/thumbs/p3 (27).jpg';
import p3thumb28 from '../assets/Archivo/pecera3/thumbs/p3 (28).jpg';
import p3thumb29 from '../assets/Archivo/pecera3/thumbs/p3 (29).jpg';
import p3thumb30 from '../assets/Archivo/pecera3/thumbs/p3 (30).jpg';
import p3thumb31 from '../assets/Archivo/pecera3/thumbs/p3 (31).jpg';
import p3thumb32 from '../assets/Archivo/pecera3/thumbs/p3 (32).jpg';
import p3thumb33 from '../assets/Archivo/pecera3/thumbs/p3 (33).jpg';
import p3thumb34 from '../assets/Archivo/pecera3/thumbs/p3 (34).jpg';
import p3thumb35 from '../assets/Archivo/pecera3/thumbs/p3 (35).jpg';
import p3thumb36 from '../assets/Archivo/pecera3/thumbs/p3 (36).jpg';
import p3thumb37 from '../assets/Archivo/pecera3/thumbs/p3 (37).jpg';
import p3thumb38 from '../assets/Archivo/pecera3/thumbs/p3 (38).jpg';
import p3thumb39 from '../assets/Archivo/pecera3/thumbs/p3 (39).jpg';
import p3thumb40 from '../assets/Archivo/pecera3/thumbs/p3 (40).jpg';
import p3thumb41 from '../assets/Archivo/pecera3/thumbs/p3 (41).jpg';
import p3img1 from '../assets/Archivo/pecera3/p3 (1).jpg';
import p3img2 from '../assets/Archivo/pecera3/p3 (2).jpg';
import p3img3 from '../assets/Archivo/pecera3/p3 (3).jpg';
import p3img4 from '../assets/Archivo/pecera3/p3 (4).jpg';
import p3img5 from '../assets/Archivo/pecera3/p3 (5).jpg';
import p3img6 from '../assets/Archivo/pecera3/p3 (6).jpg';
import p3img7 from '../assets/Archivo/pecera3/p3 (7).jpg';
import p3img8 from '../assets/Archivo/pecera3/p3 (8).jpg';
import p3img9 from '../assets/Archivo/pecera3/p3 (9).jpg';
import p3img10 from '../assets/Archivo/pecera3/p3 (10).jpg';
import p3img11 from '../assets/Archivo/pecera3/p3 (11).jpg';
import p3img12 from '../assets/Archivo/pecera3/p3 (12).jpg';
import p3img13 from '../assets/Archivo/pecera3/p3 (13).jpg';
import p3img14 from '../assets/Archivo/pecera3/p3 (14).jpg';
import p3img15 from '../assets/Archivo/pecera3/p3 (15).jpg';
import p3img16 from '../assets/Archivo/pecera3/p3 (16).jpg';
import p3img17 from '../assets/Archivo/pecera3/p3 (17).jpg';
import p3img18 from '../assets/Archivo/pecera3/p3 (18).jpg';
import p3img19 from '../assets/Archivo/pecera3/p3 (19).jpg';
import p3img20 from '../assets/Archivo/pecera3/p3 (20).jpg';
import p3img21 from '../assets/Archivo/pecera3/p3 (21).jpg';
import p3img22 from '../assets/Archivo/pecera3/p3 (22).jpg';
import p3img23 from '../assets/Archivo/pecera3/p3 (23).jpg';
import p3img24 from '../assets/Archivo/pecera3/p3 (24).jpg';
import p3img25 from '../assets/Archivo/pecera3/p3 (25).jpg';
import p3img26 from '../assets/Archivo/pecera3/p3 (26).jpg';
import p3img27 from '../assets/Archivo/pecera3/p3 (27).jpg';
import p3img28 from '../assets/Archivo/pecera3/p3 (28).jpg';
import p3img29 from '../assets/Archivo/pecera3/p3 (29).jpg';
import p3img30 from '../assets/Archivo/pecera3/p3 (30).jpg';
import p3img31 from '../assets/Archivo/pecera3/p3 (31).jpg';
import p3img32 from '../assets/Archivo/pecera3/p3 (32).jpg';
import p3img33 from '../assets/Archivo/pecera3/p3 (33).jpg';
import p3img34 from '../assets/Archivo/pecera3/p3 (34).jpg';
import p3img35 from '../assets/Archivo/pecera3/p3 (35).jpg';
import p3img36 from '../assets/Archivo/pecera3/p3 (36).jpg';
import p3img37 from '../assets/Archivo/pecera3/p3 (37).jpg';
import p3img38 from '../assets/Archivo/pecera3/p3 (38).jpg';
import p3img39 from '../assets/Archivo/pecera3/p3 (39).jpg';
import p3img40 from '../assets/Archivo/pecera3/p3 (40).jpg';
import p3img41 from '../assets/Archivo/pecera3/p3 (41).jpg';
import p4img1 from '../assets/Archivo/pecera4/pecera4 (1).jpg';
import p4img2 from '../assets/Archivo/pecera4/pecera4 (2).jpg';
import p4img3 from '../assets/Archivo/pecera4/pecera4 (3).jpg';
import p4img4 from '../assets/Archivo/pecera4/pecera4 (4).jpg';
import p4img5 from '../assets/Archivo/pecera4/pecera4 (5).jpg';
import p4img6 from '../assets/Archivo/pecera4/pecera4 (6).jpg';
import p4img7 from '../assets/Archivo/pecera4/pecera4 (7).jpg';
import p4img8 from '../assets/Archivo/pecera4/pecera4 (8).jpg';
import p4img9 from '../assets/Archivo/pecera4/pecera4 (9).jpg';
import p4img10 from '../assets/Archivo/pecera4/pecera4 (10).jpg';
import p4img11 from '../assets/Archivo/pecera4/pecera4 (11).jpg';
import p4img12 from '../assets/Archivo/pecera4/pecera4 (12).jpg';
import p4img13 from '../assets/Archivo/pecera4/pecera4 (13).jpg';
import p4img14 from '../assets/Archivo/pecera4/pecera4 (14).jpg';
import p4img15 from '../assets/Archivo/pecera4/pecera4 (15).jpg';
import p4img16 from '../assets/Archivo/pecera4/pecera4 (16).jpg';
import p4img17 from '../assets/Archivo/pecera4/pecera4 (17).jpg';
import p4img18 from '../assets/Archivo/pecera4/pecera4 (18).jpg';
import p4img19 from '../assets/Archivo/pecera4/pecera4 (19).jpg';
import p4img20 from '../assets/Archivo/pecera4/pecera4 (20).jpg';
import p4img21 from '../assets/Archivo/pecera4/pecera4 (21).jpg';
import p4img22 from '../assets/Archivo/pecera4/pecera4 (22).jpg';
import p4img23 from '../assets/Archivo/pecera4/pecera4 (23).jpg';
import p4img24 from '../assets/Archivo/pecera4/filmoteca.jpg';
import p4img25 from '../assets/Archivo/pecera4/pecera4 (25).jpg';
import p4img26 from '../assets/Archivo/pecera4/pecera4 (26).jpg';
import p4img27 from '../assets/Archivo/pecera4/pecera4 (27).jpg';
import p4img28 from '../assets/Archivo/pecera4/pecera4 (28).jpg';
import p4img29 from '../assets/Archivo/pecera4/pecera4 (29).jpg';
import p4img30 from '../assets/Archivo/pecera4/pecera4 (30).jpg';
import p4img31 from '../assets/Archivo/pecera4/pecera4 (31).jpg';
import p4img32 from '../assets/Archivo/pecera4/pecera4 (32).jpg';
import p4img33 from '../assets/Archivo/pecera4/pecera4 (33).jpg';
import p4img34 from '../assets/Archivo/pecera4/pecera4 (34).jpg';
import p4img35 from '../assets/Archivo/pecera4/pecera4 (35).jpg';
import p4img36 from '../assets/Archivo/pecera4/pecera4 (36).jpg';
import p4img37 from '../assets/Archivo/pecera4/pecera4 (37).jpg';
import p4img38 from '../assets/Archivo/pecera4/pecera4 (38).jpg';
import p4img39 from '../assets/Archivo/pecera4/pecera4 (39).jpg';
import p4img40 from '../assets/Archivo/pecera4/pecera4 (40).jpg';
import p4img41 from '../assets/Archivo/pecera4/pecera4 (41).jpg';
import p4img42 from '../assets/Archivo/pecera4/pecera4 (42).jpg';
import p4img43 from '../assets/Archivo/pecera4/pecera4 (43).jpg';
import p4img44 from '../assets/Archivo/pecera4/pecera4 (44).jpg';
import p4img45 from '../assets/Archivo/pecera4/pecera4 (45).jpg';
import p4img46 from '../assets/Archivo/pecera4/pecera4 (46).jpg';
import p4img47 from '../assets/Archivo/pecera4/pecera4 (47).jpg';
import p4img48 from '../assets/Archivo/pecera4/pecera4 (48).jpg';
import p4img49 from '../assets/Archivo/pecera4/pecera4 (49).jpg';
import p4img50 from '../assets/Archivo/pecera4/pecera4 (50).jpg';
import p4img51 from '../assets/Archivo/pecera4/pecera4 (51).jpg';
import p4img52 from '../assets/Archivo/pecera4/pecera4 (52).jpg';
import p4img53 from '../assets/Archivo/pecera4/pecera4 (53).jpg';
import p4img54 from '../assets/Archivo/pecera4/pecera4 (54).jpg';
import p4img55 from '../assets/Archivo/pecera4/pecera4 (55).jpg';
import p4img56 from '../assets/Archivo/pecera4/pecera4 (56).jpg';
import p4img57 from '../assets/Archivo/pecera4/pecera4 (57).jpg';
import p4img58 from '../assets/Archivo/pecera4/pecera4 (58).jpg';
import p4img59 from '../assets/Archivo/pecera4/pecera4 (59).jpg';
import p4img60 from '../assets/Archivo/pecera4/pecera4 (60).jpg';
import p4img61 from '../assets/Archivo/pecera4/pecera4 (61).jpg';
import p4img62 from '../assets/Archivo/pecera4/pecera4 (62).jpg';
import p4img63 from '../assets/Archivo/pecera4/pecera4 (63).jpg';
import p4img64 from '../assets/Archivo/pecera4/pecera4 (64).jpg';
import p4img65 from '../assets/Archivo/pecera4/pecera4 (65).jpg';
import p4img66 from '../assets/Archivo/pecera4/pecera4 (66).jpg';
import p4img67 from '../assets/Archivo/pecera4/pecera4 (67).jpg';
import p4img68 from '../assets/Archivo/pecera4/pecera4 (68).jpg';
import p4img69 from '../assets/Archivo/pecera4/pecera4 (69).jpg';
import p4img70 from '../assets/Archivo/pecera4/pecera4 (70).jpg';
import p4img71 from '../assets/Archivo/pecera4/pecera4 (71).jpg';
import p4img72 from '../assets/Archivo/pecera4/pecera4 (72).jpg';
import p4img73 from '../assets/Archivo/pecera4/pecera4 (73).jpg';
import p4img74 from '../assets/Archivo/pecera4/pecera4 (74).jpg';
import p4img75 from '../assets/Archivo/pecera4/pecera4 (75).jpg';
import p4img76 from '../assets/Archivo/pecera4/pecera4 (76).jpg';
import p4img77 from '../assets/Archivo/pecera4/pecera4 (77).jpg';
import p4img78 from '../assets/Archivo/pecera4/pecera4 (78).jpg';
import p4img79 from '../assets/Archivo/pecera4/pecera4 (79).jpg';
import p4img80 from '../assets/Archivo/pecera4/primera.jpeg';
import p4thumb1 from '../assets/Archivo/pecera4/thumbs/pecera4 (1).jpg';
import p4thumb2 from '../assets/Archivo/pecera4/thumbs/pecera4 (2).jpg';
import p4thumb3 from '../assets/Archivo/pecera4/thumbs/pecera4 (3).jpg';
import p4thumb4 from '../assets/Archivo/pecera4/thumbs/pecera4 (4).jpg';
import p4thumb5 from '../assets/Archivo/pecera4/thumbs/pecera4 (5).jpg';
import p4thumb6 from '../assets/Archivo/pecera4/thumbs/pecera4 (6).jpg';
import p4thumb7 from '../assets/Archivo/pecera4/thumbs/pecera4 (7).jpg';
import p4thumb8 from '../assets/Archivo/pecera4/thumbs/pecera4 (8).jpg';
import p4thumb9 from '../assets/Archivo/pecera4/thumbs/pecera4 (9).jpg';
import p4thumb10 from '../assets/Archivo/pecera4/thumbs/pecera4 (10).jpg';
import p4thumb11 from '../assets/Archivo/pecera4/thumbs/pecera4 (11).jpg';
import p4thumb12 from '../assets/Archivo/pecera4/thumbs/pecera4 (12).jpg';
import p4thumb13 from '../assets/Archivo/pecera4/thumbs/pecera4 (13).jpg';
import p4thumb14 from '../assets/Archivo/pecera4/thumbs/pecera4 (14).jpg';
import p4thumb15 from '../assets/Archivo/pecera4/thumbs/pecera4 (15).jpg';
import p4thumb16 from '../assets/Archivo/pecera4/thumbs/pecera4 (16).jpg';
import p4thumb17 from '../assets/Archivo/pecera4/thumbs/pecera4 (17).jpg';
import p4thumb18 from '../assets/Archivo/pecera4/thumbs/pecera4 (18).jpg';
import p4thumb19 from '../assets/Archivo/pecera4/thumbs/pecera4 (19).jpg';
import p4thumb20 from '../assets/Archivo/pecera4/thumbs/pecera4 (20).jpg';
import p4thumb21 from '../assets/Archivo/pecera4/thumbs/pecera4 (21).jpg';
import p4thumb22 from '../assets/Archivo/pecera4/thumbs/pecera4 (22).jpg';
import p4thumb23 from '../assets/Archivo/pecera4/thumbs/pecera4 (23).jpg';
import p4thumb25 from '../assets/Archivo/pecera4/thumbs/pecera4 (25).jpg';
import p4thumb26 from '../assets/Archivo/pecera4/thumbs/pecera4 (26).jpg';
import p4thumb27 from '../assets/Archivo/pecera4/thumbs/pecera4 (27).jpg';
import p4thumb28 from '../assets/Archivo/pecera4/thumbs/pecera4 (28).jpg';
import p4thumb29 from '../assets/Archivo/pecera4/thumbs/pecera4 (29).jpg';
import p4thumb30 from '../assets/Archivo/pecera4/thumbs/pecera4 (30).jpg';
import p4thumb31 from '../assets/Archivo/pecera4/thumbs/pecera4 (31).jpg';
import p4thumb32 from '../assets/Archivo/pecera4/thumbs/pecera4 (32).jpg';
import p4thumb33 from '../assets/Archivo/pecera4/thumbs/pecera4 (33).jpg';
import p4thumb34 from '../assets/Archivo/pecera4/thumbs/pecera4 (34).jpg';
import p4thumb35 from '../assets/Archivo/pecera4/thumbs/pecera4 (35).jpg';
import p4thumb36 from '../assets/Archivo/pecera4/thumbs/pecera4 (36).jpg';
import p4thumb37 from '../assets/Archivo/pecera4/thumbs/pecera4 (37).jpg';
import p4thumb38 from '../assets/Archivo/pecera4/thumbs/pecera4 (38).jpg';
import p4thumb39 from '../assets/Archivo/pecera4/thumbs/pecera4 (39).jpg';
import p4thumb40 from '../assets/Archivo/pecera4/thumbs/pecera4 (40).jpg';
import p4thumb41 from '../assets/Archivo/pecera4/thumbs/pecera4 (41).jpg';
import p4thumb42 from '../assets/Archivo/pecera4/thumbs/pecera4 (42).jpg';
import p4thumb43 from '../assets/Archivo/pecera4/thumbs/pecera4 (43).jpg';
import p4thumb44 from '../assets/Archivo/pecera4/thumbs/pecera4 (44).jpg';
import p4thumb45 from '../assets/Archivo/pecera4/thumbs/pecera4 (45).jpg';
import p4thumb46 from '../assets/Archivo/pecera4/thumbs/pecera4 (46).jpg';
import p4thumb47 from '../assets/Archivo/pecera4/thumbs/pecera4 (47).jpg';
import p4thumb48 from '../assets/Archivo/pecera4/thumbs/pecera4 (48).jpg';
import p4thumb49 from '../assets/Archivo/pecera4/thumbs/pecera4 (49).jpg';
import p4thumb50 from '../assets/Archivo/pecera4/thumbs/pecera4 (50).jpg';
import p4thumb51 from '../assets/Archivo/pecera4/thumbs/pecera4 (51).jpg';
import p4thumb52 from '../assets/Archivo/pecera4/thumbs/pecera4 (52).jpg';
import p4thumb53 from '../assets/Archivo/pecera4/thumbs/pecera4 (53).jpg';
import p4thumb54 from '../assets/Archivo/pecera4/thumbs/pecera4 (54).jpg';
import p4thumb55 from '../assets/Archivo/pecera4/thumbs/pecera4 (55).jpg';
import p4thumb56 from '../assets/Archivo/pecera4/thumbs/pecera4 (56).jpg';
import p4thumb57 from '../assets/Archivo/pecera4/thumbs/pecera4 (57).jpg';
import p4thumb58 from '../assets/Archivo/pecera4/thumbs/pecera4 (58).jpg';
import p4thumb59 from '../assets/Archivo/pecera4/thumbs/pecera4 (59).jpg';
import p4thumb60 from '../assets/Archivo/pecera4/thumbs/pecera4 (60).jpg';
import p4thumb61 from '../assets/Archivo/pecera4/thumbs/pecera4 (61).jpg';
import p4thumb62 from '../assets/Archivo/pecera4/thumbs/pecera4 (62).jpg';
import p4thumb63 from '../assets/Archivo/pecera4/thumbs/pecera4 (63).jpg';
import p4thumb64 from '../assets/Archivo/pecera4/thumbs/pecera4 (64).jpg';
import p4thumb65 from '../assets/Archivo/pecera4/thumbs/pecera4 (65).jpg';
import p4thumb66 from '../assets/Archivo/pecera4/thumbs/pecera4 (66).jpg';
import p4thumb67 from '../assets/Archivo/pecera4/thumbs/pecera4 (67).jpg';
import p4thumb68 from '../assets/Archivo/pecera4/thumbs/pecera4 (68).jpg';
import p4thumb69 from '../assets/Archivo/pecera4/thumbs/pecera4 (69).jpg';
import p4thumb70 from '../assets/Archivo/pecera4/thumbs/pecera4 (70).jpg';
import p4thumb71 from '../assets/Archivo/pecera4/thumbs/pecera4 (71).jpg';
import p4thumb72 from '../assets/Archivo/pecera4/thumbs/pecera4 (72).jpg';
import p4thumb73 from '../assets/Archivo/pecera4/thumbs/pecera4 (73).jpg';
import p4thumb74 from '../assets/Archivo/pecera4/thumbs/pecera4 (74).jpg';
import p4thumb75 from '../assets/Archivo/pecera4/thumbs/pecera4 (75).jpg';
import p4thumb76 from '../assets/Archivo/pecera4/thumbs/pecera4 (76).jpg';
import p4thumb77 from '../assets/Archivo/pecera4/thumbs/pecera4 (77).jpg';
import p4thumb78 from '../assets/Archivo/pecera4/thumbs/pecera4 (78).jpg';
import p4thumb79 from '../assets/Archivo/pecera4/thumbs/pecera4 (79).jpg';
import aaaa from '../assets/Archivo/pecera4/aaa.jpg';
import aaab from '../assets/Archivo/pecera4/aaab.jpeg';
import aaac from '../assets/Archivo/pecera4/aaac.jpeg';




import "../styles/FilesViewer.css";

const coleccion1 = [
  { src: p1img1, name: "Proyector 35 mm victoria IV - Milán, Italia" },
  { src: p1img2, name: "Torre de carga con carretes" },
  { src: p1img3, name: "Rectificador XeTRON - U.S.A, Nueva Jersey" },
  { src: p1img4, name: "Dos rollos de celuloide 35 mm trailers" },
  { src: p1img5, name: "Banqueta de cabina de proyección desde 2007 a 2015" }
];
const coleccion2 = [
  { src: p2img1, name: "Proyector de cine 35 mm Kalee - Origen ingles Linterna Philips" },
  { src: p2img2, name: "Proyector 16 mm Enorkin Origen Español" },
  { src: p2img3, name: "Camara filmadora 16 mm Bolex Origen Suiza" },
  { src: p2img4, name: "Dos latas material 16 mm" },
  { src: p2img5, name: "Una lata metraje inflamable" },
  { src: p2img6, name: "Lote compuesto x 5 latas de trailer y noticieros" }
];
const coleccion3 = [
  {src: p4img24, name: "Filmoteca colección Roberto Nicholson"},
  { thumb: p4thumb21, src: p4img21, name: "Juguete Proyector Keystone" },
  { src: aaaa, name: "Proyector súper 8 duo - BOLEX" , nuevo:true},
  { src: aaab, name: "Camara filmadora super 8 - ELMO 1/2" , nuevo:true},
  { src: aaac, name: "Camara filmadora super 8 - ELMO 2/2" , nuevo:true},
  { src: p3img2, name: "Ruberg. Proyector de 16 mm. No sonoro ( mudo )" },
  { thumb: p4thumb34, src: p4img34, name: "Proyector super 8, IMAC - Milan, Italia" },
  { thumb: p4thumb48, src: p4img48, name: "Camara filmadora súper 8, PICTURE AMERICAN in color XL 503" },
  { thumb: p4thumb22, src: p4img22, name: "Estuche lente de camara" },
  { thumb: p4thumb23, src: p4img23, name: "Lente de camara anamorfico" },
  { thumb: p4thumb25, src: p4img25, name: "Lente de camara ISCO-GOTTINGEN - Origen Alemania"},
  { thumb: p4thumb26, src: p4img26, name: "Lente de camara ISCO-OPTIC - Origen Alemania"},
  { thumb: p4thumb28, src: p4img28, name: "Lente de camara - Passed" },
  { thumb: p4thumb27, src: p4img27, name: "Empalmadora de celuloide 35mm." },
  { thumb: p4thumb29, src: p4img29, name: "Rodillos de pared 35mm." },
  { thumb: p4thumb30, src: p4img30, name: `Figura "Joker" Funko Pop, donado por Luz Catania` },
  { thumb: p4thumb31, src: p4img31, name: "Caja de revelado fotográfico - Max Fiedler 1/3" },
  { thumb: p4thumb32, src: p4img32, name: "Caja de revelado fotográfico - Max Fiedler 2/3" },
  { thumb: p4thumb33, src: p4img33, name: "Caja de revelado fotográfico - Max Fiedler 3/3" },
  { thumb: p4thumb40, src: p4img40, name: "Grabadora de audio mini cassette - Sanyo" },
  { thumb: p4thumb41, src: p4img41, name: "Grabadora reporter - Panasonic" },
  { thumb: p4thumb42, src: p4img42, name: "Grabadora mini cassette - Aiwa" },
  { thumb: p4thumb43, src: p4img43, name: "Funda de grabadora Sanyo" },
  { thumb: p4thumb44, src: p4img44, name: "Credenciales BAFICI ( Buenos Aires Festival Internacional de Cine Independiente )" },
  { thumb: p4thumb45, src: p4img45, name: "Credenciales BAFICI ( Buenos Aires Festival Internacional de Cine Independiente )" },
  { thumb: p4thumb46, src: p4img46, name: "Credenciales BAFICI ( Buenos Aires Festival Internacional de Cine Independiente )" },
  { thumb: p4thumb62, src: p4img62, name: "Camara fotográfica pocket" },
  { thumb: p4thumb47, src: p4img47, name: "Noticiero 35mm. el mundo al instante" },
  { thumb: p4thumb49, src: p4img49, name: "Lata Tiempo Limite 35mm.." },
  { thumb: p4thumb50, src: p4img50, name: "Lata serie Querido Maestro" },
  { thumb: p4thumb51, src: p4img51, name: "Reel Acto 1 pelicula Jumanji" },
  { thumb: p4thumb79, src: p4img79, name: "Trailer de pelicula" },
  { thumb: p4thumb68, src: p4img68, name: "Reel 35mm. Película tarzan" },
  { thumb: p4thumb78, src: p4img78, name: "Cinta celuloide" },
  { thumb: p4thumb71, src: p4img71, name: "Taco de cinta" },
  { thumb: p4thumb53, src: p4img53, name: "Procesador de audio digital, SMART CINEMA." },
  { thumb: p4thumb52, src: p4img52, name: "Fuente y cable sonido digital" },
  { thumb: p4thumb1, src: p4img1, name: "El ferrocidio - Juan Carlos Cena" },
  { thumb: p4thumb2, src: p4img2, name: "El nombre de la rosa - Umberto Eco" },
  { thumb: p4thumb3, src: p4img3, name: "El cine quema - Raymundo Gleyzer" },
  { thumb: p4thumb4, src: p4img4, name: "Libro del 9° festival internacional de cine independiente de Buenos Aires (BAFICI)" },
  { thumb: p4thumb5, src: p4img5, name: "Videoperfiles, apuntes sobre 4 videastas argentinos" },
  { thumb: p4thumb6, src: p4img6, name: "200 consejos practicos, cine" },
  { thumb: p4thumb7, src: p4img7, name: "Videoperfiles, apuntes sobre PUNA, de Hernan Khourian + SWEETHEART, de Gustavo Galuppo" },
  { thumb: p4thumb8, src: p4img8, name: "Catalogo BAFICI año 2008" },
  { thumb: p4thumb9, src: p4img9, name: "La naranja mecanica - Anthony Burgess" },
  { thumb: p4thumb10, src: p4img10, name: "La aventura de Miguel Littín clandestino en Chile - Gabriel García Márquez" },
  { thumb: p4thumb11, src: p4img11, name: "Los Móviles, modus operandi de acciones drámaticas en cárceles - María José Trucco, Claudio Pansera" },
  { thumb: p4thumb12, src: p4img12, name: "El gran Babsy - Leopoldo Torre Nilsson" },
  { thumb: p4thumb13, src: p4img13, name: "Conquista de lo inútil, Werner Herzog (Diario de filmación de Fitzcarraldo)" },
  { thumb: p4thumb14, src: p4img14, name: "Catalogo BAFICI año 2015" },
  { thumb: p4thumb15, src: p4img15, name: "Cine, antropología y colonialismo - Adolfo Colombres" },
  { thumb: p4thumb16, src: p4img16, name: "Los vengadores de la Patagonia tragica - Osvaldo Bayer" },
  { thumb: p4thumb17, src: p4img17, name: "Cine argentino contemporaneo - Cesar Magrini" },
  { thumb: p4thumb18, src: p4img18, name: "Martin Fierro Visualizado (Pelicula) 1/2" },
  { thumb: p4thumb19, src: p4img19, name: "Martin Fierro Visualizado (Pelicula) 2/2" },
  { thumb: p4thumb20, src: p4img20, name: "Pionero y peregrino - Fernando Birra" },
  { thumb: p4thumb35, src: p4img35, name: "100 años de cine" },
  { thumb: p4thumb36, src: p4img36, name: "Estampilla El trovador siempre vuelve" },
  { thumb: p4thumb37, src: p4img37, name: "Estampilla Museo Caraffa" },
  { thumb: p4thumb38, src: p4img38, name: "Folleto El sueño de los héroes, 2016" },
  { thumb: p4thumb39, src: p4img39, name: "Folleto festival Cannes cinéphiles, 2019" },
  { thumb: p4thumb54, src: p4img54, name: "Reconocimiento Museo Linterna Mágica como patrimonio cultural por el Honorable Concejo Deliberante del partido de General Viamonte" },
  { thumb: p4thumb55, src: p4img55, name: "Estampa Pelicula Samurai 1/2" },
  { thumb: p4thumb57, src: p4img57, name: "Estampa Pelicula Samurai 2/2" },
  { thumb: p4thumb56, src: p4img56, name: "Mini folleto Fort Lauderdale, International Film Festival, 2019" },
  { thumb: p4thumb58, src: p4img58, name: "Libro 9° festival internacional de cine en Pehuajo" },
  { thumb: p4thumb59, src: p4img59, name: "Programación BAFICI, 2008" },
  { thumb: p4thumb60, src: p4img60, name: "Portada BAFICI, 2015" },
  { thumb: p4thumb61, src: p4img61, name: "Muestra fotografía DF largometraje Desierto Negro" },
  { thumb: p4thumb63, src: p4img63, name: "Guión original Samurai" },
  { thumb: p4thumb64, src: p4img64, name: "Guión original El Desierto Negro" },
  { thumb: p4thumb65, src: p4img65, name: "Guión original El Desierto Negro" },
  { thumb: p4thumb66, src: p4img66, name: "Folleto Fort Lauderdale" },
  { thumb: p4thumb67, src: p4img67, name: "Folleto BAFICI 2015" },
  { thumb: p4thumb69, src: p4img69, name: "Guia de cine video y artes audio visuales, 2007" },
  { thumb: p4thumb70, src: p4img70, name: "Folleto Festival transterritorial de cine Underground" },
  { thumb: p4thumb72, src: p4img72, name: "Postal Patricio Rey y sus Redonditos de Ricota" },
  { thumb: p4thumb73, src: p4img73, name: "Postal Federico Fellini" },
  { thumb: p4thumb74, src: p4img74, name: "Postal Fellini Museum" },
  { thumb: p4thumb75, src: p4img75, name: "Foto postal Pelicula Delfín" },
  { thumb: p4thumb76, src: p4img76, name: "Postal" },
  { thumb: p4thumb77, src: p4img77, name: "Catálogo festival cine de Mar del Plata" }
  
];
const coleccion4 = [
  { thumb: p3thumb1, src: p3img1, name: "Butacas originales sala de cine" },
  { thumb: p3thumb2, src: p3img2, name: "Tablero Electrico de cabina de proyección" },
  { thumb: p3thumb4, src: p3img4, name: "Catalogo San Pablo Film 1972" },
  { thumb: p3thumb6, src: p3img6, name: "Consola potenciada digital año 1997 origen Inglés, donada por Lito Cruz ( presidente en ese entonces del instituto nacional del teatro )" },
  { thumb: p3thumb7, src: p3img7, name: "Carbón de cobre" },
  { thumb: p3thumb8, src: p3img8, name: "Acta asociación italiana desde 1907 al 1916" },
  { thumb: p3thumb9, src: p3img9, name: "Libro diario empresa cinematrográfica Aldabe e hijos Donado por: Aldo Aldabe y Flia." },
  { thumb: p3thumb10, src: p3img10, name: "Caja ticketera, familia aldabe" },
  { thumb: p3thumb11, src: p3img11, name: "Lote de trailers y fotogramas colección Roque Catania" },
  { thumb: p3thumb12, src: p3img12, name: "Tacos para celuloide 35mm." },
  { thumb: p3thumb13, src: p3img13, name: "Lata 35mm.." },
  { thumb: p3thumb14, src: p3img14, name: "Cinta empalmadora" },
  { thumb: p3thumb15, src: p3img15, name: "Lámparas de imagen y proyector(16mm.)" },
  { thumb: p3thumb16, src: p3img16, name: "Rectificador, proyectores gemelos Philips 35mm." },
  { thumb: p3thumb17, src: p3img17, name: "Pedalera proyector Philips 35mm." },
  { thumb: p3thumb18, src: p3img18, name: "Piano electrico Casio, modelo celviano. Colección Asoc Italiana" },
  { thumb: p3thumb21, src: p3img21, name: "Carrete Proyector" },
  { thumb: p3thumb22, src: p3img22, name: "Proyectores gemelos Philips con linterna cine mecanica colección Mario espejo 1/2" },
  { thumb: p3thumb23, src: p3img23, name: "Proyectores gemelos Philips con linterna cine mecanica colección Mario espejo 2/2" },
  { thumb: p3thumb24, src: p3img24, name: "Afiches históricos de películas proyectadas en el cine italiano 1/2" },
  { thumb: p3thumb25, src: p3img25, name: "Afiches históricos de películas proyectadas en el cine italiano 2/2" },
  { thumb: p3thumb26, src: p3img26, name: "Enrolladora" },
  { thumb: p3thumb27, src: p3img27, name: "Lentes: Panorámico, scope y anamorfico" },
  { thumb: p3thumb30, src: p3img30, name: "Proyector (16mm.) MICRON 25 (súper) MICROTECNICA - Torino, Italia." },
  { thumb: p3thumb32, src: p3img32, name: "Carrete proyector de 16mm." },
  { thumb: p3thumb33, src: p3img33, name: "Jaxlight(lector de sonido digital)" },
  { thumb: p3thumb36, src: p3img36, name: "Rollo dibujo animado( 16mm.)" },
  { thumb: p3thumb37, src: p3img37, name: "Rollo (8mm.)" },
  { thumb: p3thumb38, src: p3img38, name: "Proyector Golstar donado por: Ruben Petrucci" },
  { thumb: p3thumb39, src: p3img39, name: "Cine Graf donado por: Susana Larrinaga y Flia." },
  { thumb: p3thumb40, src: p3img40, name: "Lata 16mm." },
  { thumb: p3thumb41, src: p3img41, name: "Lámparas de imagen y proyector(16mm.)" }
];


const collections = [
  { key: "pecera1", label: "Coleccion Asoc. Italiana", data: coleccion1 },
  { key: "pecera2", label: "Coleccion Roberto Nicholson", data: coleccion2 },
  { key: "pecera3", label: "Coleccion Roque Catania", data: coleccion3 },
  { key: "sala", label: "Sala de Muestras", data: coleccion4 }
];

const FilesViewer = () => {
  const [selected, setSelected] = useState("pecera1");
  const [loading, setLoading] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 600);
    setModalImg(null); // Cierra modal al cambiar colección
    return () => clearTimeout(timeout);
  }, [selected]);

  const currentCollection = collections.find(c => c.key === selected);

  return (
    <div className="files-viewer">
      <div className="files-tabs">
        {collections.map(tab => (
          <button
            key={tab.key}
            className={`files-tab${selected === tab.key ? " active" : ""}`}
            onClick={() => setSelected(tab.key)}
            disabled={selected === tab.key}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="files-collection">
        <h2 className="files-collection-title">{currentCollection.label}</h2>
        {loading ? (
          <div className="files-loader">
            <div className="loader-spinner"></div>
            <span>Cargando imágenes...</span>
          </div>
        ) : currentCollection.data.length === 0 ? (
          <div className="files-coming-soon">Próximamente</div>
        ) : (
          <div className="files-grid">
            {currentCollection.data.map((img, i) => (
              <div
                className="file-item"
                key={i}
                onClick={() => setModalImg(img)}
                tabIndex={0}
                role="button"
                aria-label={img.name}
                onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setModalImg(img); }}
              >
                <img
                  src={img.thumb || img.src}
                  alt={img.name}
                  className="file-img"
                  loading="lazy"
                />
                {img.nuevo && <div className="file-badge">¡Nuevo!</div>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal para imagen ampliada */}
      {modalImg && (
        <div className="files-modal-overlay" onClick={e => {
          if (e.target.className === "files-modal-overlay") setModalImg(null);
        }}>
          <div className="files-modal-content">
            <img src={modalImg.src} alt={modalImg.name} className="files-modal-img" />
            <div className="files-modal-title">{modalImg.name}</div>
            <button className="files-modal-close" onClick={() => setModalImg(null)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilesViewer;