const express = require('express');
const app = express();
const port = 8000;


// Main Page
app.get('/', (req, res) => {

res.send(`

<style>

body{
    font-family:Arial;
    margin:0;
}

/* Navbar Right Side */
.navbar{

    position:absolute;
    top:20px;
    right:20px;

}

/* Button Design */
.nav-btn{

    background-color:#007BFF;
    color:white;
    padding:10px 18px;
    margin-left:10px;
    text-decoration:none;
    border-radius:6px;
    font-weight:bold;
    transition:0.3s;
}

/* Hover Effect */
.nav-btn:hover{

    background-color:#0056b3;
    transform:scale(1.05);

}

.center{

    text-align:center;
    margin-top:120px;

}

</style>


<!-- Right Corner Buttons -->
<div class="navbar">

<a class="nav-btn" href="/home">Home</a>

<a class="nav-btn" href="/work">Work</a>

</div>


<div class="center">

<h1>Welcome to ABES Website</h1>

<p>Select any page from top right.</p>

</div>

`);

});


// Home Page
app.get('/home', (req, res) => {

res.send(`

<style>

body{

    font-family:Arial;
    margin:0;
    padding:20px;
}


/* Back Button Right Corner */
.top-right{

    position:absolute;
    top:20px;
    right:20px;
    background-color:#007BFF;
    color:white;
    padding:10px 18px;
    text-decoration:none;
    border-radius:6px;
    font-weight:bold;

}

.top-right:hover{

    background-color:#0056b3;

}


/* Logo Center */
.logo{

    display:block;
    margin:auto;
}


/* Main Layout */
.container{

    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:40px;
    gap:40px;

}


/* Image Design */
.college-img{

    width:600px;
    border-radius:12px;
}


/* Content Right Side */
.content{

    width:450px;
    text-align:justify;
    font-size:17px;
    line-height:1.6;

}

</style>


<!-- Back Button -->
<a class="top-right" href="/">Back</a>


<!-- Logo -->
<img class="logo"
src="https://www.abes.ac.in/assets/Logo.png"
height="150px" width="400px"/>


<div class="container">


<!-- College Image -->
<img class="college-img"
src="https://www.abes.ac.in/assets/HomePage/2%20About%20ABES.jpg"/>


<!-- About Content -->
<div class="content">

<h2>About ABES Engineering College</h2>

<p>

ABES Engineering College, Ghaziabad is one of the leading technical
institutions in Uttar Pradesh known for academic excellence and innovation.
The college provides modern infrastructure, advanced laboratories,
and experienced faculty members.

ABES focuses on research, entrepreneurship, and industry collaboration
to prepare students for global careers in engineering and technology.
It promotes holistic development through technical events,
cultural activities, and skill-based learning.

</p>

</div>

</div>

`);

});

app.get('/work', (req, res) => {

res.send(`

<style>

body{

    font-family:Arial;
    margin:0;
    padding:20px;
    text-align:center;

}

/* Back Button */
.top-right{

    position:absolute;
    top:20px;
    right:20px;
    background-color:#28a745;
    color:white;
    padding:10px 18px;
    text-decoration:none;
    border-radius:6px;
    font-weight:bold;

}

.top-right:hover{

    background-color:#1e7e34;

}


/* Cards Container */
.container{

    display:flex;
    justify-content:center;
    gap:25px;
    margin-top:40px;

}


/* Card Design */
.card{

    width:280px;
    padding:20px;
    background:#f4f4f4;
    border-radius:10px;
    box-shadow:0px 4px 10px rgba(0,0,0,0.2);

}

.card:hover{

    transform:scale(1.05);
    transition:0.3s;

}

.logo{

    margin:auto;
    display:block;

}

</style>



<!-- Back Button -->
<a class="top-right" href="/">Back</a>



<!-- Logo -->
<img class="logo"
src="https://www.abes.ac.in/assets/Logo.png"
height="140px" width="380px"/>


<h1>ABES Engineering College Activities & Work</h1>


<div class="container">


<div class="card">

<h3>Academic Excellence</h3>

<p>
ABES Engineering College provides quality education through
modern curriculum, research programs, and experienced faculty.
Students achieve excellent university results every year.
</p>

</div>


<div class="card">

<h3>Industry Collaboration</h3>

<p>
The college collaborates with industries for internships,
training programs, and placement opportunities to enhance
practical learning and employability skills.
</p>

</div>


<div class="card">

<h3>Innovation & Research</h3>

<p>
ABES encourages innovation through hackathons,
technical clubs, and research projects supporting
students in developing real-world solutions.
</p>

</div>

</div>

`);

});


app.listen(port,()=>{

console.log(`Server running at http://localhost:${port}`);

});