import axios from "axios";
import cheerio from "cheerio";

export default {
  // logs in user
  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  // signs up user, then logs them in
  signup: function(signupInfo) {
    return axios.post("/api/users/signup", signupInfo);
  },

  // checks to see if user is logged in, then returns the user
  isLoggedIn: function() {
    return axios.get("/api/users/profile");
  },

  // checks to see if the user is logged in and and admin, then returns the user
  isAdmin: function() {
    return axios.get("/api/users/logout")
  },

  // logs out the user
  logout: function() {
    return axios.get("/api/users/logout")
  },

  getAuditions: function(){
    return axios.post("/api/cheerios/auditions")
  },

  updateProfile: function (profileInfo){
    return axios.put("/api/users/update", profileInfo)
  },

  getUserData: function(id){
    return axios.get("api/users/userdata", id)
  }
};