function MOLAR_MASS(name) {
  let mass = 0;
  let ini = 0;
  for (let i = 0; i < name.length; i++) {
    var c = name.charAt(i);
    if (c == "(") {
      var last = name.indexOf(")", i);
      var fnn = firstNonNumeric(name, last + 1);
      var cnt = name.substring(last + 1, fnn);
      mass += MOLAR_MASS(name.substring(i + 1, last)) * (cnt.match(/\d+/) ? parseInt(cnt) : 1);
      i = last;
      ini = fnn;
    }
    if (i > 0 && c.match("[A-Z]")) {
      var part = name.substring(ini, i);
      mass += parseMass(part);
      ini = i;
    }
  }
  var part = name.substring(ini);
  return mass + parseMass(part);
}

function firstNonNumeric(str, start=0) {
  for (let i = start; i < str.length; i++) {
    var c = str.charAt(i);
    if (!c.match(/\d/)) {
      return i;
    }
  }
  return str.length;
}

function parseMass(part) {
  var sym = part.replace(/\d+/, "");
  var c = part.substring(sym.length);
  return elementMolMass(sym) * (c.match(/\d+/) ? parseInt(c) : 1);
}

function elementMolMass(sym) {
  let val = 0;
  switch (sym) {
    case "H": val = 1.0078; break;
    case "P": val = 1.0078; break;
    case "D": val = 2.0141; break;
    case "T": val = 3.016; break;
    case "He": val = 4.0026; break;
    case "Li": val = 6.941; break;
    case "Be": val = 9.0122; break;
    case "B": val = 10.811; break;
    case "C": val = 12.011; break;
    case "N": val = 14.007; break;
    case "O": val = 15.999; break;
    case "F": val = 18.998; break;
    case "Ne": val = 20.18; break;
    case "Na": val = 22.99; break;
    case "Mg": val = 24.305; break;
    case "Al": val = 26.989; break;
    case "Si": val = 28.086; break;
    case "P": val = 30.974; break;
    case "S": val = 32.065; break;
    case "Cl": val = 35.453; break;
    case "Ar": val = 39.948; break;
    case "K": val = 39.098; break;
    case "Ca": val = 40.078; break;
    case "Sc": val = 44.956; break;
    case "Ti": val = 47.867; break;
    case "V": val = 40.942; break;
    case "Cr": val = 51.996; break;
    case "Mn": val = 54.938; break;
    case "Fe": val = 55.845; break;
    case "Co": val = 58.933; break;
    case "Ni": val = 58.693; break;
    case "Cu": val = 63.546; break;
    case "Zn": val = 65.38; break;
    case "Ga": val = 69.723; break;
    case "Ge": val = 72.64; break;
    case "As": val = 74.922; break;
    case "Se": val = 78.96; break;
    case "Br": val = 79.904; break;
    case "Kr": val = 83.798; break;
    case "Rb": val = 85.468; break;
    case "Sr": val = 87.62; break;
    case "Y": val = 88.906; break;
    case "Zr": val = 91.224; break;
    case "Nb": val = 92.906; break;
    case "Mo": val = 95.95; break;
    case "Tc": val = 98; break;
    case "Ru": val = 101.07; break;
    case "Rh": val = 102.91; break;
    case "Pd": val = 106.42; break;
    case "Ag": val = 107.87; break;
    case "Cd": val = 112.41; break;
    case "In": val = 114.82; break;
    case "Sn": val = 118.71; break;
    case "Sb": val = 121.76; break;
    case "Te": val = 127.6; break;
    case "I": val = 126.9; break;
    case "Xe": val = 131.29; break;
    case "Cs": val = 132.91; break;
    case "Ba": val = 137.33; break;
    case "La": val = 138.91; break;
    case "Ce": val = 140.12; break;
    case "Pr": val = 140.91; break;
    case "Nd": val = 144.24; break;
    case "Pm": val = 145; break;
    case "Sm": val = 150.36; break;
    case "Eu": val = 151.96; break;
    case "Gd": val = 157.25; break;
    case "Tb": val = 158.93; break;
    case "Dy": val = 162.5; break;
    case "Ho": val = 164.93; break;
    case "Er": val = 167.26; break;
    case "Tm": val = 168.93; break;
    case "Yb": val = 173.04; break;
    case "Lu": val = 174.97; break;
    case "Hf": val = 178.49; break;
    case "Ta": val = 180.95; break;
    case "W": val = 183.84; break;
    case "Re": val = 186.21; break;
    case "Os": val = 190.23; break;
    case "Ir": val = 192.22; break;
    case "Pt": val = 195.08; break;
    case "Au": val = 196.97; break;
    case "Hg": val = 200.59; break;
    case "Tl": val = 204.38; break;
    case "Pb": val = 207.2; break;
    case "Bi": val = 208.98; break;
    case "Po": val = 209; break;
    case "At": val = 210; break;
    case "Rn": val = 222; break;
    case "Fr": val = 223; break;
    case "Ra": val = 226; break;
    case "Ac": val = 227; break;
    case "Th": val = 232.04; break;
    case "Pa": val = 231.04; break;
    case "U": val = 238.08; break;
    case "Np": val = 237.05; break;
    case "Pu": val = 244; break;
    case "Am": val = 243; break;
    case "Cm": val = 247; break;
    case "Bk": val = 247; break;
    case "Cf": val = 251; break;
    case "Es": val = 252; break;
    case "Fm": val = 257; break;
    case "Md": val = 258; break;
    case "No": val = 259; break;
    case "Lr": val = 262; break;
    case "Rf": val = 267; break;
    case "Db": val = 262; break;
    case "Sg": val = 269; break;
    case "Bh": val = 264; break;
    case "Hs": val = 269; break;
    case "Mt": val = 278; break;
    case "Ds": val = 281; break;
    case "Rg": val = 282; break;
    case "Cn": val = 285; break;
    case "Nh": val = 286; break;
    case "Fl": val = 289; break;
    case "Mc": val = 289; break;
    case "Lv": val = 293; break;
    case "Ts": val = 294; break;
    case "Og": val = 294; break;
  };
  return val;
}
