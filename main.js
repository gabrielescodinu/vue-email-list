// Genera 10 mail tramite api e stampale in una lista

let app = new Vue ({
  el: "#app",
  data: {
    mailList: [],
  },
  mounted(){
    for (var i = 0; i < 10; i++) {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then(resp => {
        this.mailList.push(resp.data.response)
      })
    }
  }
})
