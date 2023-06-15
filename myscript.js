var imageList = [
    "a.png",
    "b.png",
    "c.png",
    "d.png",
    "e.png",
    "f.png",
    "g.png",
    "h.png",
    "i.png",
    "j.png",
    "k.png",
    "l.png",
    "m.png",
    "n.png",
    "o.png",
    "p.png",
    "q.png",
    "r.png",
    "s.png",
    "t.png",
    "u.png",
    "v.png",
    "w.png",
    "x.png",
    "y.png",
    "z.png",
    "aa.png",
    "ab.png",
    "ac.png",
    "ad.png",
    "ae.png",
    "af.png",
    "ag.png",
    "ah.png",
    "ai.png",
    "aj.png",
    "ak.png",
    "al.png",
    "am.png",
    "an.png",
    "ao.png"
];
var students =
[
    {

        "path": "10010000",
        "lastName": "Kussay",
        "firstName": "Teacher"

    },
    {
      "path": "100671335",
      "lastName": "Raymond",
      "firstName": "Lam"
    },
    {
      "path": "10030000",
      "lastName": "FName",
      "firstName": "LName"
    },
    {
      "path": "10040000",
      "lastName": "FName",
      "firstName": "LName"
    },
    {
      "path": "10050000",
      "lastName": "FName",
      "firstName": "LName"
    },
    {
      "path": "10060000",
      "lastName": "FName",
      "firstName": "LName"
    },
    {
      "path": "100666174",
      "lastName": "Bryonia",
      "firstName": "Cuthbertson"
    },
    {
      "path": "100670425",
      "lastName": "Bradley",
      "firstName": "Marshall"
    },

    {
      "path": "100665577",
      "lastName": "Skinner",
      "firstName": "Zachary"
    },


    {
      "path": "100666192",
      "lastName": "Lam",
      "firstName": "Pamela"
    },


    {
      "path": "100671334",
      "lastName": "Stokes-Beeston",
      "firstName": "Nicholas"
    },


    {
      "path": "100667282",
      "lastName": "Kai",
      "firstName": "Hanson"
    },



    {


      "path": "100667729",
      "lastName": "Brandon",
      "firstName": "Viglione"
    },

      "path": "100670093",
      "lastName": "Hastings",
      "firstName": "Andrew"
    },

    {
      "path": "10000000",
      "lastName": "Kussay ",
      "firstName": "Again"
    },

{
      "path": "100665554",
      "lastName": "Jingxi",
      "firstName": "Fan"
    },

    {
          "path": "100659802",
          "lastName": "KABIR",
          "firstName": "MOHD IBRAHIM"
        }
    
   ];

const maxColor = 15;
const maxClip = 10;
const maxImage = imageList.length + 1;
students.forEach((student, index) => {
    student.fullName = `${student.firstName} ${student.lastName}`;
    student.initial = student.fullName.split(' ').reduce((acc, subname) => acc + subname[0], '');
    student.color = `color-${(index % maxColor + 1).toString()}`;
    student.clip = `clip-${(index % maxClip + 1).toString()}`;
    student.image = `${imageList[index % maxImage]}`;
});
var studentList = new StudentList("all-students", students);
