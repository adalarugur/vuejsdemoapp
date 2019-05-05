<template>  

 <div style="background-color:#8ddad5; ">      

        <div class="container">
            <div>
                <div class="list-group">
                    <div class="list-group-item ">
                        <button type="button" class="btn btn-primary  float-right">Detay</button>
                        <button type="button" class="btn btn-success float-right" data-toggle="modal" data-target="#exampleModal">Düzenle</button>
                        <button type="button" class="btn btn-danger float-right">Sil</button>
                    </div>                 

                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Güncelle</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <div>
                                <label> Başlık</label>
                            </div>
                            <input type="text">
                        </div>

                        <div>
                            <label for="exampleFormControlTextarea1">Detay</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Güncelle</button>
                    </div>
                </div>
            </div>
        </div>


    </div>

</template>

<script>

export default {
  mounted() {
      console.log("ugur adalar");
      debugger;
      this.getListData();
      
    },
    
methods: {

   getListData(){
   this.$store.dispatch("getServicePostsData")
   }
    
}
}


</script>

<style>
</style>
