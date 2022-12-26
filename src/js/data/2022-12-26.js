dataSetVersion = "2022-12-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to either series",
    checked: false,
    sub: [
      {
        name: "Breaking Bad",
        tooltip: "brba",
        key: "brba",
      },
      {
        name: "Better Call Saul",
        tooltip: "bcs",
        key: "bcs",
      },
    ],
  },
  {
    name: "Filter by importance",
    key: "imp",
    tooltip:
      "Check this to filter out characters depending on their importance",
    checked: false,
    sub: [
      { name: "Main Characters", key: "main" },
      { name: "Side Characters", key: "side" },
      { name: "Minor Characters", key: "minor" },
    ],
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Walter White",
    img: "ONrRKvE.png",
    opts: {
      series: ["brba"],
      imp: ["main"],
    },
  },
  {
    name: "Jesse Pinkman",
    img: "26GyORg.png",
    opts: {
      series: ["brba"],
      imp: ["main"],
    },
  },
  {
    name: "Skyler White",
    img: "Y4ynolF.png",
    opts: {
      series: ["brba"],
      imp: ["main"],
    },
  },
  {
    name: "Hank Schrader",
    img: "mFgNha0.png",
    opts: {
      series: ["brba"],
      imp: ["main"],
    },
  },
  {
    name: "Gustavo Fring",
    img: "9GVcXoM.png",
    opts: {
      series: ["brba", "bcs"],
      imp: ["main"],
    },
  },
  {
    name: "Jimmy McGill",
    img: "SoWS7fm.png",
    opts: {
      series: ["bcs"],
      imp: ["main"],
    },
  },
  {
    name: "Saul Goodman",
    img: "i5BxK0S.png",
    opts: {
      series: ["brba", "bcs"],
      imp: ["main"],
    },
  },
  {
    name: "Mike Ehrmantraut",
    img: "xocDjEG.png",
    opts: {
      series: ["brba", "bcs"],
      imp: ["main"],
    },
  },
  {
    name: "Lydia Rodarte-Quayle",
    img: "XG17d8G.png",
    opts: {
      series: ["brba"],
      imp: ["main"],
    },
  },
  {
    name: "Todd Alquist",
    img: "JojBcVB.png",
    opts: {
      series: ["brba"],
      imp: ["main"],
    },
  },
  {
    name: "Kim Wexler",
    img: "FjfysKR.png",
    opts: {
      series: ["bcs"],
      imp: ["main"],
    },
  },
  {
    name: "Howard Hamlin",
    img: "iVQLIgD.png",
    opts: {
      series: ["bcs"],
      imp: ["main"],
    },
  },
  {
    name: "Nacho Varga",
    img: "dGDr48V.png",
    opts: {
      series: ["bcs"],
      imp: ["main"],
    },
  },
  {
    name: "Chuck McGill",
    img: "KgCsRWm.png",
    opts: {
      series: ["bcs"],
      imp: ["main"],
    },
  },
  {
    name: "Lalo Salamanca",
    img: "8SMNmIk.png",
    opts: {
      series: ["bcs"],
      imp: ["main"],
    },
  },
  {
    name: "Hector Salamanca",
    img: "z4v3EEk.png",
    opts: {
      series: ["brba", "bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Tuco Salamanca",
    img: "kJZvZ9g.png",
    opts: {
      series: ["brba", "bcs"],
      imp: ["side"],
    },
  },
  {
    name: "The Salamanca Cousins",
    img: "gklHq7t.png",
    opts: {
      series: ["brba", "bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Steven Gomez",
    img: "a9BLQt6.png",
    opts: {
      series: ["brba"],
      imp: ["side"],
    },
  },
  {
    name: "Skinny Pete",
    img: "dSoFS0T.png",
    opts: {
      series: ["brba"],
      imp: ["side"],
    },
  },
  {
    name: "Badger, Brandon Mayhew",
    img: "PMnMDbo.png",
    opts: {
      series: ["brba"],
      imp: ["side"],
    },
  },
  {
    name: "Ted Beneke",
    img: "hUa9NBn.png",
    opts: {
      series: ["brba"],
      imp: ["side"],
    },
  },
  {
    name: "Huell Babineaux",
    img: "KYIWGkt.png",
    opts: {
      series: ["brba", "bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Gale Boetticher",
    img: "PJrKtQL.png",
    opts: {
      series: ["brba"],
      imp: ["side"],
    },
  },
  {
    name: "George Merkert",
    img: "XKsc0KQ.png",
    opts: {
      series: ["brba"],
      imp: ["minor"],
    },
  },
  {
    name: "Tyrus Kitt",
    img: "j7gQQgX.png",
    opts: {
      series: ["brba", "bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Andrea Cantillo",
    img: "mWCAFru.png",
    opts: {
      series: ["brba"],
      imp: ["side"],
    },
  },
  {
    name: "Carmen Molina",
    img: "5s9o9jz.png",
    opts: {
      series: ["brba"],
      imp: ["minor"],
    },
  },
  {
    name: "Jane Margolis",
    img: "HDgjD5D.png",
    opts: {
      series: ["brba"],
      imp: ["side"],
    },
  },
  {
    name: "Jack Welker",
    img: "Lwn97fj.png",
    opts: {
      series: ["brba"],
      imp: ["main"],
    },
  },
  {
    name: "Kenny",
    img: "PFqXowl.png",
    opts: {
      series: ["brba"],
      imp: ["minor"],
    },
  },
  {
    name: "Gretchen Schwartz",
    img: "5eTvVMD.png",
    opts: {
      series: ["brba"],
      imp: ["side"],
    },
  },
  {
    name: "Patrick Kuby",
    img: "WVuR1Mn.png",
    opts: {
      series: ["brba"],
      imp: ["minor"],
    },
  },
  {
    name: "Clovis",
    img: "RlDtda6.png",
    opts: {
      series: ["brba"],
      imp: ["minor"],
    },
  },
  {
    name: "Donald Margolis",
    img: "5Im9rlW.png",
    opts: {
      series: ["brba"],
      imp: ["side"],
    },
  },
  {
    name: "Pinkman's Parents",
    img: "viUGE3W.png",
    opts: {
      series: ["brba"],
      imp: ["side"],
    },
  },
  {
    name: "Combo, Christian Ortega",
    img: "UNnLM67.png",
    opts: {
      series: ["brba"],
      imp: ["minor"],
    },
  },
  {
    name: "Stacey Ehrmantraut",
    img: "xHIbqRk.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Kaylee Ehrmantraut",
    img: "cZcbk0M.png",
    opts: {
      series: ["brba", "bcs"],
      imp: ["minor"],
    },
  },
  {
    name: "Paige Novick",
    img: "N4YZk7H.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Victor",
    img: "ER82yLM.png",
    opts: {
      series: ["brba", "bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Richard Schweikart",
    img: "RGpOgpA.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Joey, Marshall Dixon",
    img: "une3r3j.png",
    opts: {
      series: ["bcs"],
      imp: ["minor"],
    },
  },
  {
    name: "Phil",
    img: "4V12WUm.png",
    opts: {
      series: ["bcs"],
      imp: ["minor"],
    },
  },
  {
    name: "Kevin Wachtell",
    img: "JyQ1Yqv.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Ernesto",
    img: "0tqkLtP.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Arturo Colon",
    img: "xw69QiC.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Bill Oakley",
    img: "VAT138f.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Francesca Liddy",
    img: "3cH9pEL.png",
    opts: {
      series: ["brba", "bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Manuel Varga",
    img: "CMhIvjC.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Mrs. Nguyen",
    img: "ueSXZOK.png",
    opts: {
      series: ["bcs"],
      imp: ["minor"],
    },
  },
  {
    name: "Sherry",
    img: "cbCpMhG.png",
    opts: {
      series: ["bcs"],
      imp: ["minor"],
    },
  },
  {
    name: "Clifford Main",
    img: "ThwaeAz.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Erin Brill",
    img: "jWdDLU1.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Betsy Kettleman",
    img: "yJkDdYx.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Craig Kettleman",
    img: "myiAXMf.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Werner Ziegler",
    img: "EhLsbtZ.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Casper",
    img: "m9dB4b7.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Kai",
    img: "Zpr268M.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Lyle",
    img: "3NH414F.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Krazy-8",
    img: "hknpIr0.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Emilio Koyama",
    img: "sJ6S5ob.png",
    opts: {
      series: ["bcs"],
      imp: ["minor"],
    },
  },
  {
    name: "Everett Acker",
    img: "IRUUd77.png",
    opts: {
      series: ["bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Don Eladio",
    img: "69MA7Fy.png",
    opts: {
      series: ["brba", "bcs"],
      imp: ["side"],
    },
  },
  {
    name: "Juan Bolsa",
    img: "4w59Apu.png",
    opts: {
      series: ["brba", "bcs"],
      imp: ["side"],
    },
  },
];
