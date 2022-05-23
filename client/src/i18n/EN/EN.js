const en = {
  translation: {
    homepage: {
      personelbutton: "Employee",
      adminbutton: "Admin",
    },
    login: {
      adminlogin: {
        title: "Admin Login",
        username: "Username",
        password: "Password",
        login: "Log in",
        wrong: "Username or password is wrong",
        signedin: "Signed in successfully",
      },
      personellogin: {
        title: "Employee Login",
        username: "Username",
        password: "Password",
        login: "Log in",
        wrong: "Username or password is wrong or your account is not active",
        signedin: "Signed in successfully",
      },
    },
    adminpage: {
      title: "Management Panel",
      buttons: {
        allpersonel: "Employees",
        allpersonelsub: "Registered Employees",
        movements: "All Movements",
        movementsub: "Employees Movements",
        addpersonel: "Add Employee",
        addpersonelsub: "Register New Employee",
        mountmovenmentssub:"See movements by month",
        mountmovenments:"Movements by month",
      },
    },
    allpersonelpage: {
      title: "All Employees",
      active: "Active",
      deactive: "Deactive",
      addnewbutton: "Add New Employee",
    },
    movements: {
      title: "Employee Movements",
      table: {
        name: "Name",
        surname: "Surname",
        transactiondate: "Transaction Date",
        day: "Day",
        entrytime: "Entry Time",
        exittime: "Exit Time",
      },
      notyet: "Not yet out",
    },
    addpersonelpage: {
      title: "Add Employee",
      name: "Name*",
      surname: "Surname*",
      username: "Username*",
      password: "Password*",
      usertype: "User Type*",
      submitbutton: "Add",
    },
    personeldetail: {
      title: "Employee Detail",
      informations: {
        id: "ID",
        name: "Name",
        surname: "Surname",
        username: "Username",
        password: "Password",
        phone: "Phone",
        email: "Email",
        tc: "ID Number",
        school: "School",
        adress: "Address",
        city: "City",
        district: "District",
        status: "Status",
      },
      active: "Active",
      deactive: "Deactive",
      viewbutton: "View Employee's Movements Table",
    },
    personelPage: {
      title: "Welcome",
      buttons: {
        movementsTable: "Movements Table",
        update: "Update Informations",
        documents: "Documents",
      },
    },
    personelMovements: {
      title: "Movements Informations",
      table: {
        date: "Transaction Date",
        day: "Day",
        entrytime: "Entry Time",
        exittime: "Exit Time",
      },
      loginlogout: "Log In / Log Out",
      modal: {
        title: "Are You Sure?",
        description1: "You will be log in ",
        description2: "You will be log out ",
        loginbtn: "Log In",
        logoutbtn: "Log Out",
        closebtn: "Close",
      },
      toast:{
        login:'Logged In',
        logout:'Logged Out',
    }
    },
    updateInformations: {
      title: "Update Informations",
      button: "Save",
      label: {
        name: "Name",
        surname: "Surname",
        username: "Username",
        phone: " Phone Number",
        email: "Email",
        password: "Password",
        school: "School",
        address: "Address",
        city: "City",
        district: "District",
        tc: "ID Number",
      },
      success: "Informations Updated",
    },
    uploadDocument: {
      title: "Upload Document",
      button: "Upload",
      label: {
        documentType: "File Type",
        choose: "Choose a file",
      },
    },
    PersonalMovementsByName:{
      title:"'s Movements",
    },
     PersonalMovementsByMonth:{
    title:"Movements by Month",
    label:{
      date:'Date',
      month:'Month',
      name:'Name',
      surname:'Surname',
      day:'Day',
      missingDay:'Missing Day',

    },
      },
      Management:{
        title:'Management Panel',
      },
      Signout:{
        text:'Sign Out'
      },
      welcomepage:{
        title1:'MSC Technology Management Panel',
        title2:'Welcome',
    },
    InfoAlert:{
      text:'On this page, you can see the entrances and exits of all personnel.'
  }
  },
 
};

export default en;
