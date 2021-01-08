// Genera 10 mail tramite api e stampale in una lista

let app = new Vue ({
  el: "#app",
  data: {
    newMail: "",
    mailList: [],
  },
  mounted(){
    for (var i = 0; i < 10; i++) {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then(resp => {
        //console.log(resp.data.response);
        let mail = resp.data.response;
        this.mailList = mail;
      })
    }
    console.log(mailList);
  }
})
