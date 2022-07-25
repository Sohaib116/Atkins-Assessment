<template>
  <div class="navbarImage" style="width: 1140px;">
    <Navbar/>
    <div class="container mt-3">
      <div class="mt-4 p-5 text-white rounded font-sans">
        <h1>We’re <span class="text-cyan-500">transforming</span> <br> the way you work.</h1> 
        <p class="mt-4">Manage your schedule with our cloud based software.</p> 
        <button class="btn btn-md btn-light mr-5">Sign Up</button>
        <button class="btn btn-md btn-outline-light">Learn More</button>
      </div>
    </div>
  </div>
  <div class="logos bg-white mt-5" style="width: 1140px;">
    <div class="row">
      <div class="col-4">
      </div>
      <div class="col-8">
          <img class="float-left" src="../assets/atkins-1.png" alt="">
          <img class="float-left ml-12" src="../assets/Network_Rail_logo-3.png" alt="">
          <img class="float-left ml-12" src="../assets/crossrail.png" alt="">
          <img class="float-left ml-12" src="../assets/unipart.png" alt="">
          <img class="float-left ml-12" src="../assets/Alstom.png" alt="">
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-4">
      </div>
      <div class="col-8">
          <img class="float-left" src="../assets/Tfl-1.png" alt="">
          <img class="float-left ml-14" src="../assets/wir.png" alt="">
          <img class="float-left ml-14" src="../assets/Siemens-1.png" alt="">
          <img class="float-left ml-14" src="../assets/UKTrade.png" alt="">
          <img class="float-left ml-14" src="../assets/railalliance.png" alt="">
      </div>
    </div>
  </div>
   <div class="todoImage" style="width: 1140px;">
      <div class="row mt-5">
        <div class="col-md-5 m-5">
          <div class="col-md-12 justify-content-end">
            <img src="../assets/unsplash.png" alt="">
          </div>
        </div>
        <div class="col-md-4 mt-5 mr-n5 text-white">
          <hr class="border border-info border-3" style="width: 50px;">
          <h3><span class="text-cyan-500">Introducing</span><br>ClickBait Industries</h3>
          <p class="mt-4"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leo nunc, enim, mi sit adipiscing augue risus eu. Pellentesque varius pellentesque lobortis et.</small></p>
          <p class="mt-4 text-cyan-500"><small>VIEW MORE INFO</small> &gt;</p> 
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-5 m-5 text-white">
          <hr class="border border-info border-3" style="width: 50px;">
          <h3><span class="text-cyan-500">Test</span> out our tool for yourself <br> and see how it can help you</h3>
          <p class="mt-4"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leo nunc, enim, mi sit.</small></p>
          <p class="mt-4 text-cyan-500"><small>VIEW MORE INFO</small> &gt;</p> 
          <img class="my-5" src="../assets/Vector.png" alt="" width="60%">
        </div>
        <div class="col-md-5 m-5">
          <div class="col-md-9 bg-white rounded w-100">
            <div class="p-2 m-3 mb-3">
              <label for="AddTask" class="form-label fw-bold">Add a task</label>
              <textarea class="form-control" v-model="newTask.task" id="addtask" rows="2" placeholder="Enter your task"></textarea>
              <div class="row mt-2 justify-content-end">
                <div class="col-5">
                  <button class="btn btn-primary btn-sm fw-bold w-100" v-on:click="onSubmit()"> + Add Task</button>
                </div>
              </div>
              <div class="row mt-3">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-todolist-tab" data-bs-toggle="tab" data-bs-target="#nav-todolist" type="button" role="tab" aria-controls="nav-todolist" aria-selected="true">To do list</button>
                    <button class="nav-link" id="nav-recent-tab" data-bs-toggle="tab" data-bs-target="#nav-recent" type="button" role="tab" aria-controls="nav-recent" aria-selected="false">Recent</button>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="nav-todolist" role="tabpanel" aria-labelledby="nav-todolist-tab">
                    <div v-for="tasks in this.todolist.filter(item => item.active == true )" class="row m-2 bg-light rounded">
                      <div class="col-2 p-3">
                          <input type="checkbox" aria-label="Checkbox for completing the task" class="w-100 h-100" v-on:click="updateTask(tasks._id,tasks)">
                      </div>
                      <div class="col-10 p-2 mt-2">
                          <p><span class="fw-bold fs-6">{{tasks.task}}</span><br><small class="fw-light text-secondary">{{formatDate(tasks.createdAt)}}</small></p>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="nav-recent" role="tabpanel" aria-labelledby="nav-recent-tab">
                    <div class="row m-2 bg-light rounded" v-for="tasks in this.todolist.filter(item => item.active == false)">
                      <div class="col-2 p-3">
                          <input type="checkbox" aria-label="Checkbox for following text input" class="w-100 h-100" checked v-on:click="updateTask(tasks._id,tasks)">
                      </div>
                      <div class="col-10 p-2 mt-2">
                          <p><span class="fw-bold fs-6">{{tasks.task}}</span><br><small class="fw-light text-secondary">{{formatDate(tasks.createdAt)}}</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>

   <div class="latestnews" style="width: 1140px;">
      <section class="news pt-0">
          <div class="container mt-md-5">
            <ul class="row d-lg-flex list-unstyled image-block justify-content-center px-lg-0 mx-lg-0">
              <li class="col-lg-4 col-md-5 image-block full-width p-3">
                <div class="image-block-inner">
                  <a class="mh-100" href="#">
                    <img src="../assets/latestnews-1.png" alt="Insights" class="img-responsive w-100" style="height:230px"></a>
                  <span class="hp-posts-cat">22/04/2021</span>
                  <h5 class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit id in a urna ornare felis risus id augue.</h5>
                  <!--  <p></p> -->
                  <a href="#" class="read-more text-decoration-none fw-bold mt-2">READ MORE ></a>
                </div><!-- .image-block-inner -->
              </li>
              <li class="col-lg-4 col-md-5 image-block full-width p-3">
                <div class="image-block-inner">
                  <a class="mh-100" href="#">
                    <img src="../assets/latestnews-2.png" alt="Hires" class="img-responsive w-100"></a>
                  <span class="hp-posts-cat">18/03/2021</span>
                  <h5 class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit consequat ultricies sit pellentesque.</h5>
                  <!--  <p></p> -->
                  <a href="#" class="read-more text-decoration-none fw-bold mt-2">READ MORE ></a>
                </div><!-- .image-block-inner -->
              </li>
              <li class="col-lg-4 col-md-5 image-block full-width p-3">
                <div class="image-block-inner">
                  <a class="mh-100" href="#">
                    <img src="../assets/latestnews-3.png" alt="LunarXP Sets Target for First Mars Landing in 2030" class="img-responsive w-100"></a>
                  <span class="hp-posts-cat">01/03/2021</span>
                  <h5 class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus.</h5>
                  <!--  <p></p> -->
                  <a href="#" class="read-more text-decoration-none fw-bold mt-4">READ MORE ></a>
                </div><!-- .image-block-inner -->
              </li>
            </ul>
          </div>
        </section>
   </div>

   <div class="footer" style="width: 1140px;">
      <div class="container">
        <footer class="row row-cols-9 py-5 my-5 border-top">
          <div class="row">
            <div class="col-5 mx-5">
              <h4 class="text-white font-sans">ClickBait<br>Industries</h4>
              <p class="text-white fs-6 fw-light"><small>&copy; ClickBait Industries. All Rights Reserved.</small></p>
            </div>

            <div class="col-3">
              <ul class="nav flex-column text-white">
                <li class="nav-item mb-2">Get in touch!</li>
                <li class="nav-item mb-2"></li>
                <li class="nav-item mb-2">examplemail@atkinsglobal.com</li>
                <li class="nav-item mb-2">(+44) 1234 5678</li>
              </ul>
            </div>

            <div class="col-2">
              <ul class="nav flex-column text-white">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Sitemap</a></li>
                <li class="nav-item mb-2"></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Home</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0">About us</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Workstreams</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0">News</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0">WPVC</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Videos</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-5 mx-5">
              <div class="row">
                <div class="col mx-3">
                  <a href="#" class="nav-link p-0">Privacy Policy</a>
                </div>
                <div class="col mx-3">
                  <a href="#" class="nav-link p-0">Cookies</a>
                </div>
                <div class="col mx-3">
                  <a href="#" class="nav-link p-0">Legal Notice</a>
                </div>
              </div>
            </div>
            <div class="col float-left">
              <span class="text-white">Social Media</span><br>
              <div class="d-flex justify-content-between col-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16" style="font-size: 4rem; color: white;margin-top:5px;">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" style="font-size: 4rem; color: white;margin-top:5px;">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16" style="font-size: 4rem; color: white;margin-top:5px;">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>  
              </div>
            </div>
            <div class="col">
            </div>
          </div>
        </footer>
      </div>
   </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import todolistService from '../services/todolistService'
import moment from 'moment'

export default {
  name: 'HomeView',
  components: {
    Navbar
  },
  data(){
    return{
      todolist : [],
      newTask : {
        task : null
      }
    };
  },
  async mounted () {
    this.todolist = (await todolistService.getAllTask()).data.data
    console.log('todolist', this.todolist)
  },
  methods: {
    async onSubmit(){
      console.log(this.newTask)
      await todolistService.addTask(this.newTask)
      this.todolist = (await todolistService.getAllTask()).data.data
    },
    async updateTask(taskId,tasks){
        tasks.active = !tasks.active
        console.log(tasks)
        await todolistService.updateTask(taskId,tasks)
        this.todolist = (await todolistService.getAllTask()).data.data
    },
    formatDate(val) {
      return moment(val).fromNow()
    }
  }
}
</script>

<style>
 .navbarImage{
    background-image: url('../assets/hero-edit-1.png');
  }
  .todoImage,.footer{
    background: #0D0C38;
  }

  .footer a {
    color: white;
  }
  </style>
