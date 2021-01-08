// Genera 10 mail tramite api e stampale in una lista

let app = new Vue ({
  el: "#app",
  data: {
    newMail: "",
  },
  methods:{
    mailList: function(){
      for (var i = 0; i < array.length; i++) {
        array[i]
      }
    }
  },
  mounted(){
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(resp => {
      console.log(resp.data.response);
      let mail = resp.data.response;
      this.newMail = mail;
    })
  }
})
