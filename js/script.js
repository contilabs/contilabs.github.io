*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Poppins,sans-serif;
}

body{
background:#fafafa;
color:#333;
}

header{
background:#f5f5f5;
padding:30px 8%;
}

.navbar{
display:flex;
justify-content:space-between;
align-items:center;
}

.navbar ul{
display:flex;
gap:40px;
list-style:none;
}

.navbar a{
text-decoration:none;
color:#333;
}

.btn{
background:#4f8f80;
color:white;
padding:14px 28px;
border-radius:8px;
text-decoration:none;
display:inline-block;
margin-top:20px;
transition:.3s;
}

.btn:hover{
background:#36685d;
}

.hero{
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
padding:80px 0;
gap:50px;
}

.hero h1{
font-size:58px;
margin:20px 0;
}

.hero h1 span{
color:#4f8f80;
}

.hero img{
width:100%;
border-radius:20px;
}

section{
padding:90px 8%;
}

section h2{
font-size:38px;
margin-bottom:40px;
text-align:center;
}

.problem{
background:white;
text-align:center;
}

.cards{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:30px;
}

.card{
padding:40px;
background:white;
border-radius:15px;
box-shadow:0 5px 20px rgba(0,0,0,.08);
transition:.3s;
}

.card:hover{
transform:translateY(-10px);
}

.gallery{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:20px;
}

.project{
height:240px;
background:#ddd;
border-radius:15px;
}

.testimonial{
background:#4f8f80;
color:white;
text-align:center;
}

.quote{
max-width:700px;
margin:auto;
font-size:20px;
}

.about{
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
gap:60px;
}

.about img{
width:100%;
border-radius:20px;
}

.video{
background:#f1f1f1;
text-align:center;
}

.video-box{
height:380px;
background:#ddd;
display:flex;
justify-content:center;
align-items:center;
font-size:80px;
border-radius:20px;
cursor:pointer;
}

.accordion button{
width:100%;
padding:20px;
border:none;
background:#4f8f80;
color:white;
font-size:18px;
cursor:pointer;
text-align:left;
}

.content{
max-height:0;
overflow:hidden;
transition:.4s;
background:#eee;
}

.content p{
padding:20px;
}

.cta{
background:#222;
color:white;
text-align:center;
}

footer{
padding:30px;
text-align:center;
background:#111;
color:white;
}

@media(max-width:900px){

.hero,
.about,
.cards,
.gallery{

grid-template-columns:1fr;

}

.hero h1{

font-size:40px;

}

.navbar{

flex-direction:column;
gap:20px;

}

}