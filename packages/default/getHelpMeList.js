const { redis } = require('nim')

async function  main(){

  let patientsList = await redis().lrangeAsync('help_me_list_patients', 0, -1)

  let studentsList = await redis().lrangeAsync('help_me_list_students',
  0, -1)

  console.log(patientsList, studentsList)

  return {
    patientsList: [...patientsList],
    studentsList: [...studentsList]
  }

    // return {
    //     patients: [
    //         {
    //           name: "Steve Trabajo",
    //           city: "New Delhi",
    //           hospital: "Sir Ganga ram hospital , new rajendra nagar , New Delhi",
    //           needs: "Plasma",
    //           bloodGroup: "AB-",
    //           description:
    //             "nsectetur adipiscing elit. Maecenas a faucibus diam. Praesent consectetur, nisl ut semper imperdiet, tortor metus ultrices lorem, non luctus massa risus at urna.",
    //           phone: "9876543210",
    //           whatsapp: "9876543210",
    //           instagram: "213lkjas",
    //         },
    //         {
    //           name: "Monster King",
    //           city: "Guru Gram",
    //           hospital: "Fortis Hospital, New Delhi",
    //           needs: "Blood",
    //           bloodGroup: "AB-",
    //           description:
    //             "nsectetur adipiscing elit. Maecenas a faucibus diam. Praesent consectetur, nisl ut semper imperdiet, tortor metus ultrices lorem, non luctus massa risus at urna.",
    //           phone: "9876543210",
    //           whatsapp: "9876543210",
    //           instagram: "213lkjas",
    //         },
    //         {
    //           name: "Steve Trabajo",
    //           city: "New Delhi",
    //           hospital: "Sir Ganga ram hospital , new rajendra nagar , New Delhi",
    //           needs: "Plasma",
    //           bloodGroup: "AB-",
    //           description:
    //             "nsectetur adipiscing elit. Maecenas a faucibus diam. Praesent consectetur, nisl ut semper imperdiet, tortor metus ultrices lorem, non luctus massa risus at urna.",
    //           phone: "9876543210",
    //           whatsapp: "9876543210",
    //           instagram: "213lkjas",
    //         },
    //         {
    //           name: "Monster King",
    //           city: "Guru Gram",
    //           hospital: "Fortis Hospital, New Delhi",
    //           needs: "Blood",
    //           bloodGroup: "AB-",
    //           description:
    //             "nsectetur adipiscing elit. Maecenas a faucibus diam. Praesent consectetur, nisl ut semper imperdiet, tortor metus ultrices lorem, non luctus massa risus at urna.",
    //           phone: "9876543210",
    //           whatsapp: "9876543210",
    //           instagram: "213lkjas",
    //         },
    //       ],

    //       students:[
    //           {
    //               name: 'priya',
    //               city: "New Delhi",

    //           },
    //           {
    //               name: 'Kartik bhsdiwale',
    //               city: "New Delhi",
    //           }
    //       ]
    // }
}
exports.main = main;