function col_1()
{
  document.getElementById("view").style.gridTemplateColumns=('1fr');
  document.getElementById("btn_1").classList.add('active');
  document.getElementById("btn_2").classList.remove("active");
  document.getElementById("btn_3").classList.remove("active");
  
};

function col_2()
{
  document.getElementById("view").style.gridTemplateColumns=('repeat(2,1fr)');
  document.getElementById("btn_2").classList.add("active");
  document.getElementById("btn_1").classList.remove("active");
  document.getElementById("btn_3").classList.remove("active");
};

function col_3()
{
  document.getElementById("view").style.gridTemplateColumns=('repeat(3,1fr)');
  document.getElementById("btn_3").classList.add("active");
  document.getElementById("btn_1").classList.remove("active");
  document.getElementById("btn_2").classList.remove("active");
};

window.addEventListener("scroll",() =>{
if(window.pageYOffset>100){
  document.getElementById("scroll").style.opacity=("1");
}else{
  document.getElementById("scroll").style.opacity=("0");
}
}

)
