<template>
    <div>
       
<div class="container" id="container">
	
	<!-- sign in -->
	<div class="form-container sign-up-container">
		<form>
			<h1 class="title">Create Account</h1>
			<input v-model="getRegUsername" placeholder="Username"/>
			<input v-model="getFirstname" placeholder="First name"/>
			<input v-model="getLastname" placeholder="Last name"/>
			<input v-model="getPhone" type="phone" placeholder="Phone"/>
			<input v-model="getRegPassword" placeholder="Password"/>
			
			<p class="ifInputEmpty" v-show="isRegEmpty" v-if="this.getRegUsername.length === 0 || this.getRegPassword.length === 0 || this.getFirstname.length === 0 || this.getLastname.length === 0 || this.getPhone.length === 0">You missed something, pls fill out all forms</p>
			<button class="register-btn" type="submit" @click="register">Sign up</button>
		</form>
	</div>

	<!-- log in -->
	<div class="form-container sign-in-container">
		<form>
			<h1 class="title">Sign in</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
    
			<input v-model="getLogUsername" placeholder="Username" />
			<input v-model="getLogPassword" type="password" placeholder="Password" />
			
			<a href="#">Forgot your password?</a>
			<p class="ifInputEmpty" v-show="isLogEmpty" v-if="this.getLogUsername.length === 0 || this.getLogPassword.length === 0" >You missed something, pls fill out all forms</p>
			<button type="submit" class="login-btn" @click="login" >Sign In</button>
		</form>
	</div>

	<!-- overlay -->
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn" @click="changeState(false)">Sign In</button>
			</div>
				<div class="overlay-panel overlay-right">
					<h1>Hello, Friend!</h1>
					<p>Enter your personal details and start journey with us</p>
					<button class="ghost" id="signUp" @click="changeState(true)">Sign Up</button>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import axios from "axios";


export default {
data(){
    return {
		isActive: true,
		isLogEmpty: false,
		isRegEmpty: false
    }
},
computed: {
	getLogUsername: {
		get() {return this.$store.state.logUsername},
		set(value) {this.$store.commit('setLogUsername', value)}
	},
	getRegUsername: {
		get() {return this.$store.state.regUsername},
		set(value) {this.$store.commit('setRegUsername', value)}
	},
	getLogPassword: {
		get() {return this.$store.state.logPassword},
		set(value) {this.$store.commit('setLogPassword', value)}
	},
	getRegPassword: {
		get() {return this.$store.state.regPassword},
		set(value) {this.$store.commit('setRegPassword', value)}
	},
	getFirstname: {
		get() {return this.$store.state.myFirstname},
		set(value) {this.$store.commit('setFirstname', value)}
	},
	getLastname: {
		get() {return this.$store.state.myLastname},
		set(value) {this.$store.commit('setLastname', value)}
	},
	getPhone: {
		get() {return this.$store.state.myPhone},
		set(value) {this.$store.commit('setPhone', value)}
	},
	
},

methods:{
	// when site is reloaded, make all inputs to be empty
	created(){
		this.getLogUsername= ""
		this.getRegUsername= ""
		this.getLogPassword= ""
		this.getRegPassword= ""
		this.getFirstname= ""
		this.getLastname= ""
		this.getPhone= ""
	},
    changeState(event){
        const container = document.getElementById('container');
            if (event === this.isActive) {
                container.classList.add('right-panel-active')
            }else {
                container.classList.remove('right-panel-active')
            }
		},
	async login(event) {

		// If the input is empty stop user from post the data
		if(this.getLogUsername.length === 0 || this.getLogPassword.length === 0){
			console.log('this activates in the background only to not proceed the user trough the axios "post" if the text input is empty which is connected trough an v-if statement in the html markup');
			this.isLogEmpty = true
		}else {
			this.isLogEmpty = false
			try {
		let response = await axios.post(
			"http://localhost:3000/login",
			{
				username: this.getLogUsername,
				password: this.getLogPassword
			},
				{ withCredentials: true }
			);
			console.log(response);
			let user = response.data.user;
			let token = response.data.token;
			await this.$store.dispatch("login", { user, token });
			this.getLogUsername = ""
			this.getLogPassword = ""
			location.reload();
			} catch (err) {
				event.preventDefault()
				console.log(err);
				this.$buefy.notification.open({
				message: err.response.data.msg,
				type: "is-danger",
				hasIcon: true
			});
		}
	}
},
		
    async register(){

		if(this.getRegUsername.length === 0 || this.getRegPassword.length === 0 || this.getFirstname.length === 0 || this.getLastname.length === 0 || this.getPhone.length === 0){
			this.isRegEmpty = true
		}else  {
			this.isRegEmpty = false
		try {
		let response = await axios.post(
			"http://localhost:3000/register",
			{
				username: this.getRegUsername,
				firstname: this.getFirstname,
				lastname: this.getLastname,
				phone: this.getPhone,
				password: this.getRegPassword
			},
				{withCredentials: true}
			);
			if (response.status === 200) {
				this.$buefy.notification.open({
				message: "You have registered successfully and may now login!",
				type: "is-success",
				hasIcon: true
			});          
			}     
			this.getRegUsername = ""
			this.getFirstname = ""
			this.getLastname = ""
			this.getPhone = ""         
			this.getRegPassword = ""
			} catch (err) {
				this.$buefy.notification.open({
				message: "Username already exists!",
				type: "is-danger",
				hasIcon: true
				});
				console.log(err);
				}
			}
		}
	}
}
</script>


<style scoped>
* {
	box-sizing: border-box;
}

body {
	background: #f6f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: sans-serif;
	height: 100vh;
	margin: -20px 0 50px;
}

.title{
	margin: 0;
}

h1 {
	font-weight: bold;
	margin: 0;
}

h2 {
	text-align: center;
}

.overlay-right, p, h1{
	color: rgb(60, 60, 60);
}
.ghost{
	color: rgb(60, 60, 60);
	border: 1px solid rgb(60, 60, 60);
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

.register-btn{
	background: rgb(102,178,91);
}
.login-btn{
	background: rgb(243,213,91);
}

button {
	border: 1px solid #ffffff;
	border-radius: 20px;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
	margin-top: 14px;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 6px 0;
	width: 100%;
}
.ifInputEmpty{
	padding: 3px 0;
	margin: 0;
	box-sizing: border-box;
	color: red;
	font-size: 13px;
	animation: scale .4s ease-in;
}

@keyframes scale{
	0% {   
		opacity: 0;
        transform: rotate(0deg);
    }
    50% {  
		opacity: 1; 
        transform: rotate(-2deg);
	}
    75% {   
        transform: rotate(2deg);
	}
    100% { 
		transform: rotate(0deg);  
	}
}

.container {
	background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 800px;
	max-width: 100%;
	min-height: 530px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
	background: rgb(114,181,91);
	background: -moz-linear-gradient(90deg, rgba(114,181,91,1) 50%, rgba(243,213,91,1) 50%);
	background: -webkit-linear-gradient(90deg, rgba(114,181,91,1) 50%, rgba(243,213,91,1) 50%);
	background: linear-gradient(90deg, rgba(114,181,91,1) 50%, rgba(243,213,91,1) 50%);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

.social-container {
	margin: 20px 0;
}

.social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}

footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}

footer p {
    margin: 10px 0;
}

footer i {
    color: black;
}

footer a {
    color: #3c97bf;
    text-decoration: none;
}

/* 
    ---------------------------------------------
   Built for screens width max-width of 840px - cover all mobile surfaces
    ---------------------------------------------
*/
@media (max-width: 840px){
	
}

@media only screen and (min-width: 2560px){
    .container{
		transform: scale(1.3);
	}
}

@media only screen and (min-width: 3840px){
    .container{
		transform: scale(1.);
	}
}

</style>